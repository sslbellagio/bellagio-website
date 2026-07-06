'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import EnquiryForm from './EnquiryForm'

interface Props { isOpen: boolean; onClose: () => void }

export default function EnquiryPopup({ isOpen, onClose }: Props) {
  const [autoShown, setAutoShown] = useState(false)
  const [internalOpen, setInternalOpen] = useState(false)

  useEffect(() => {
    if (autoShown) return
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('popup_shown')) {
        setInternalOpen(true)
        setAutoShown(true)
        sessionStorage.setItem('popup_shown', '1')
      }
    }, 10000)
    return () => clearTimeout(timer)
  }, [autoShown])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { onClose(); setInternalOpen(false) } }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const visible = isOpen || internalOpen
  const handleClose = () => { onClose(); setInternalOpen(false) }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
          }}
          onClick={handleClose}>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--bg-hero)', border: '1px solid rgba(150,114,62,0.3)',
              maxWidth: '480px', width: '100%', padding: '2.5rem', position: 'relative'
            }}>

            <button onClick={handleClose} aria-label="Close popup"
              style={{
                position: 'absolute', top: '1rem', right: '1rem', background: 'none',
                border: 'none', color: 'var(--color-brand-light)', cursor: 'pointer'
              }}>
              <X size={20} />
            </button>

            <div style={{ marginBottom: '0.5rem' }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--color-brand)', marginBottom: '0.5rem'
              }}>

              </p>
              <h2 style={{
                fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 300,
                color: 'var(--color-text-light)', lineHeight: 1.2, textAlign: "center"
              }}>
                Book Your Dream Home at SSL Bellagio
              </h2>
              <div className="gold-rule" style={{ marginTop: '1rem', margin: "auto" }} />
            </div>

            {/* <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.85rem',
              color: 'rgba(245,237,216,0.65)', marginBottom: '1.5rem', lineHeight: 1.7
            }}>
              1 & 2 BHK smart residences from 429 sq.ft. · Dombivli East
            </p> */}

            <EnquiryForm variant="dark" source="popup" onSuccess={handleClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
