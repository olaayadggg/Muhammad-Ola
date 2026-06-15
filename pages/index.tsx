import { useState } from 'react'
import type { NextPage } from 'next'
import HeroSection from '../components/HeroSection'
import DateSection from '../components/DateSection'
import VenueSection from '../components/VenueSection'
import GuestMessage from '../components/GuestMessage'
import BackgroundMusic from '../components/BackgroundMusic'

export type Lang = 'en' | 'ar'

const Home: NextPage = () => {
  const [lang, setLang] = useState<Lang>('en')

  return (
    <main style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* Language Toggle */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '24px',
        zIndex: 100,
        display: 'flex',
        gap: '4px',
        background: 'rgba(250,248,243,0.9)',
        backdropFilter: 'blur(8px)',
        border: '1px solid var(--border-strong)',
        borderRadius: '40px',
        padding: '4px',
      }}>
        {(['en', 'ar'] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              padding: '6px 16px',
              borderRadius: '40px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: l === 'ar' ? 'Noto Naskh Arabic, serif' : 'var(--font-montserrat)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: l === 'en' ? '1px' : '0',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              background: lang === l ? 'var(--gold)' : 'transparent',
              color: lang === l ? '#FAF8F3' : 'var(--text-mid)',
            }}
          >
            {l === 'en' ? 'EN' : 'ع'}
          </button>
        ))}
      </div>

      <HeroSection lang={lang} />
      <DateSection lang={lang} />
      <VenueSection lang={lang} />
      <GuestMessage lang={lang} />
      <BackgroundMusic />

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '40px 24px',
        borderTop: '1px solid var(--border)',
        background: 'var(--cream)',
      }}>
        <p style={{
          fontFamily: 'var(--font-great-vibes)',
          fontSize: '22px',
          color: 'var(--gold)',
          letterSpacing: '1px',
        }}>
          {lang === 'en' ? 'With all our love' : 'بكل محبتنا'}
        </p>
        <p style={{
          fontFamily: lang === 'ar' ? 'Noto Naskh Arabic, serif' : 'var(--font-cormorant)',
          marginTop: '8px',
          fontSize: '14px',
          color: 'var(--text-light)',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          direction: lang === 'ar' ? 'rtl' : 'ltr',
        }}>
          Muhammad &amp; Ola — 26 · IX · 2026
        </p>
      </footer>
    </main>
  )
}

export default Home
