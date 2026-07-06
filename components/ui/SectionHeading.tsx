'use client'
import { motion } from 'framer-motion'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }: Props) {
  const textColor   = light ? 'var(--color-text-light)'  : 'var(--color-text-primary)'
  const mutedColor  = light ? 'rgba(245,237,216,0.6)'    : 'var(--color-text-muted)'
  const alignStyle  = align === 'center' ? 'center' : 'left'
  const ruleClass   = align === 'center' ? 'gold-rule-center' : 'gold-rule'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ textAlign: alignStyle, marginBottom: '3rem' }}>

      {eyebrow && (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500,
          letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand)',
          marginBottom: '0.75rem' }}>
          {eyebrow}
        </p>
      )}

      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)',
        fontWeight: 300, color: textColor, lineHeight: 1.15 }}>
        {title}
      </h2>

      <div className={ruleClass} style={{ marginTop: '1rem', marginBottom: subtitle ? '1rem' : 0 }} />

      {subtitle && (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.8,
          color: mutedColor, maxWidth: '600px',
          margin: align === 'center' ? '0 auto' : 0 }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
