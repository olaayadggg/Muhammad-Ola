import { useState } from 'react'
import type { Lang } from '../pages/index'
import Animate from './Animate'

interface Props { lang: Lang }

export default function GuestMessage({ lang }: Props) {
  const isAr = lang === 'ar'
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = () => {
    if (!name.trim() || !message.trim()) return
    setSubmitted(true)
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === field ? 'var(--gold)' : 'var(--border-strong)'}`,
    padding: '12px 0',
    fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-cormorant)',
    fontSize: isAr ? '18px' : '20px',
    fontWeight: 300,
    color: 'var(--text-dark)',
    outline: 'none',
    direction: isAr ? 'rtl' : 'ltr',
    transition: 'border-color 0.3s ease',
    textAlign: isAr ? 'right' : 'left',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-montserrat)',
    fontSize: '10px',
    letterSpacing: isAr ? '0' : '2.5px',
    textTransform: isAr ? 'none' : 'uppercase',
    color: 'var(--gold)',
    marginBottom: '8px',
    direction: isAr ? 'rtl' : 'ltr',
    textAlign: isAr ? 'right' : 'left',
  }

  return (
    <section className="gm-section" style={{
      background: 'var(--cream)',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      flexDirection: isAr ? 'row-reverse' : 'row',
      minHeight: '680px',
      overflow: 'hidden',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .gm-section { flex-direction: column !important; min-height: unset !important; }
          .gm-image-wrap { flex: 0 0 300px !important; width: 100% !important; }
          .gm-image-fade {
            top: auto !important; left: 0 !important; right: 0 !important;
            bottom: 0 !important; width: 100% !important; height: 80px !important;
            background: linear-gradient(to bottom, transparent, var(--cream)) !important;
          }
          .gm-form-col {
            padding: 40px 24px 60px !important;
            text-align: center !important;
            align-items: center !important;
          }
          .gm-form-col button { align-self: center !important; }
          .gm-form-inner { max-width: 100% !important; }
        }
      `}</style>

      {/* Image — flush, fills full section height */}
      <Animate from={isAr ? 'right' : 'left'} delay={0.15} duration={1.1} distance={50}
        className="gm-image-wrap" style={{ flex: '0 0 44%', position: 'relative', overflow: 'hidden' }}>
        <img
          src="/couple1.jpeg"
          alt="Muhammad & Ola"
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
        {/* soft fade into the form background */}
        <div className="gm-image-fade" style={{
          position: 'absolute',
          top: 0,
          ...(isAr ? { left: 0 } : { right: 0 }),
          bottom: 0,
          width: '100px',
          background: isAr
            ? 'linear-gradient(to left, transparent, var(--cream))'
            : 'linear-gradient(to right, transparent, var(--cream))',
          pointerEvents: 'none',
        }} />
      </Animate>

      {/* Form column */}
      <Animate from={isAr ? 'left' : 'right'} delay={0.35} duration={1.1} distance={40}
        className="gm-form-col" style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 72px 80px 56px',
          textAlign: isAr ? 'right' : 'left',
        }}>
        <div className="gm-form-inner" style={{ maxWidth: '460px', ...(isAr ? { marginRight: 0 } : {}) }}>
          <p style={{ fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-montserrat)', fontSize: '11px', letterSpacing: isAr ? '0' : '4px', textTransform: isAr ? 'none' : 'uppercase', color: 'var(--gold)', marginBottom: '16px', direction: isAr ? 'rtl' : 'ltr' }}>
            {isAr ? 'أرسل تهانيك' : 'Leave a Message'}
          </p>

          <h2 style={{ fontFamily: 'var(--font-great-vibes)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 400, color: 'var(--text-dark)', marginBottom: '12px', lineHeight: 1.2 }}>
            {isAr ? 'أضئ يومنا بكلمة' : 'Share Your Wishes'}
          </h2>

          <div style={{ width: '48px', height: '1px', background: 'var(--gold-muted)', margin: isAr ? '0 0 20px auto' : '0 0 20px 0' }} />

          <p style={{ fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-cormorant)', fontSize: isAr ? '18px' : '20px', fontStyle: isAr ? 'normal' : 'italic', fontWeight: 300, color: 'var(--text-mid)', marginBottom: '44px', direction: isAr ? 'rtl' : 'ltr', lineHeight: 1.7 }}>
            {isAr ? 'كلماتكم هدية تُضاف لذكريات يومنا' : 'Your words are a gift we will cherish forever'}
          </p>

          {submitted ? (
            <div style={{ padding: '48px 32px', border: '1px solid var(--border)', background: 'var(--off-white)', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: 'var(--gold)', marginBottom: '16px' }}>♡</div>
              <h3 style={{ fontFamily: 'var(--font-great-vibes)', fontSize: '36px', color: 'var(--text-dark)', marginBottom: '12px', fontWeight: 400 }}>
                {isAr ? 'شكراً لكم' : 'Thank You'}
              </h3>
              <p style={{ fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-cormorant)', fontSize: isAr ? '17px' : '18px', color: 'var(--text-mid)', fontStyle: isAr ? 'normal' : 'italic', direction: isAr ? 'rtl' : 'ltr', lineHeight: 1.8 }}>
                {isAr ? `شكراً ${name}، كلماتك ستبقى في قلوبنا إلى الأبد` : `Dear ${name}, your kind words mean the world to us.`}
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              <div>
                <label style={labelStyle}>{isAr ? 'الاسم' : 'Your Name'}</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder={isAr ? 'اكتب اسمك هنا' : 'Enter your name'}
                  style={inputStyle('name')}
                />
              </div>
              <div>
                <label style={labelStyle}>{isAr ? 'رسالتك' : 'Your Message'}</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder={isAr ? 'اكتب تهنئتك وأمنياتك هنا...' : 'Write your wishes here...'}
                  rows={5}
                  style={{
                    ...inputStyle('message'),
                    resize: 'none',
                    borderBottom: 'none',
                    border: `1px solid ${focused === 'message' ? 'var(--gold)' : 'var(--border-strong)'}`,
                    padding: '16px',
                    borderRadius: '2px',
                    background: 'rgba(250,248,243,0.6)',
                    lineHeight: 1.8,
                  }}
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!name.trim() || !message.trim()}
                style={{
                  border: `1px solid ${name.trim() && message.trim() ? 'var(--gold)' : 'var(--border)'}`,
                  background: 'transparent',
                  padding: '16px 48px',
                  fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-montserrat)',
                  fontSize: '11px',
                  letterSpacing: isAr ? '0' : '3px',
                  textTransform: isAr ? 'none' : 'uppercase',
                  color: name.trim() && message.trim() ? 'var(--gold-dark)' : 'var(--text-light)',
                  cursor: name.trim() && message.trim() ? 'pointer' : 'not-allowed',
                  transition: 'all 0.3s ease',
                  alignSelf: isAr ? 'flex-end' : 'flex-start',
                  width: 'fit-content',
                }}
              >
                {isAr ? 'أرسل رسالتك ♡' : 'Send Wishes ♡'}
              </button>
            </div>
          )}
        </div>
      </Animate>
    </section>
  )
}
