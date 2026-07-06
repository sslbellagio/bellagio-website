'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitToGoogleSheet } from '@/lib/submitToGoogleSheet'
import { useState, useEffect } from 'react'

const schema = z.object({
  name:  z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
})

type FormData = z.infer<typeof schema>

interface EnquiryFormProps {
  variant?: 'dark' | 'light'
  source?: string
  onSuccess?: () => void
  onSuccessImmediate?: () => void
}

export default function EnquiryForm({ variant = 'light', source = 'website', onSuccess, onSuccessImmediate }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')

  const inputClass = variant === 'dark' ? 'form-input form-input-dark' : 'form-input'
  const textColor  = variant === 'dark'  ? 'var(--color-text-light)' : 'var(--color-text-primary)'
  const btnClass   = variant === 'dark'  ? 'btn-outline-light' : 'btn-brand'

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError('')
    try {
      const now = new Date()
      const timestamp = `${now.getDate().toString().padStart(2,'0')}/${(now.getMonth()+1).toString().padStart(2,'0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`
      await submitToGoogleSheet({ ...data, source, timestamp })
      setSubmitted(true)
      onSuccessImmediate?.()
    } catch (err) {
      setError('Something went wrong. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  // Auto-close popup 5 seconds after thank you message appears
  useEffect(() => {
    if (!submitted) return
    const timer = setTimeout(() => { onSuccess?.() }, 5000)
    return () => clearTimeout(timer)
  }, [submitted, onSuccess])

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem', color: textColor }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 300, marginBottom: '1rem', color: 'var(--color-brand-light)' }}>
          Thank You!
        </div>
        <div className="gold-rule-center" style={{ marginBottom: '1.25rem' }} />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
          Your enquiry has been received.<br />Our team will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      aria-label="Property enquiry form">

      <div>
        <input {...register('name')} className={inputClass} placeholder="Your Full Name *"
          style={{ color: textColor }} aria-label="Full name" />
        {errors.name && <p style={{ color: '#e88', fontSize: '0.75rem', marginTop: '4px' }}>{errors.name.message}</p>}
      </div>

      <div>
        <input {...register('phone')} className={inputClass} placeholder="Mobile Number *"
          type="tel" style={{ color: textColor }} aria-label="Mobile number" />
        {errors.phone && <p style={{ color: '#e88', fontSize: '0.75rem', marginTop: '4px' }}>{errors.phone.message}</p>}
      </div>

      <div>
        <input {...register('email')} className={inputClass} placeholder="Email Address (optional)"
          type="email" style={{ color: textColor }} aria-label="Email address" />
        {errors.email && <p style={{ color: '#e88', fontSize: '0.75rem', marginTop: '4px' }}>{errors.email.message}</p>}
      </div>

      {error && <p style={{ color: '#e88', fontSize: '0.8rem' }}>{error}</p>}

      <button type="submit" className={btnClass} disabled={loading}
        style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
        {loading ? 'Submitting…' : 'Request a Callback'}
      </button>

      <p style={{ fontSize: '0.7rem', opacity: 0.5, textAlign: 'center', color: textColor, fontFamily: 'var(--font-body)' }}>
        MahaRERA No: PM1330002600001 · By submitting you agree to be contacted.
      </p>
    </form>
  )
}
