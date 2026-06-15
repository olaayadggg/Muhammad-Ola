import { useEffect, useRef, useState } from 'react'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.35
    audio.loop = true

    const tryPlay = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
    window.addEventListener('click', tryPlay, { once: true })
    window.addEventListener('touchstart', tryPlay, { once: true })
    return () => {
      window.removeEventListener('click', tryPlay)
      window.removeEventListener('touchstart', tryPlay)
    }
  }, [])

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const audio = audioRef.current
    if (!audio) return
    if (playing) { audio.pause(); setPlaying(false) }
    else { audio.play().then(() => setPlaying(true)).catch(() => {}) }
  }

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" preload="auto" />
      <button
        onClick={toggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title={playing ? 'Mute music' : 'Play music'}
        style={{
          position: 'fixed', bottom: '28px', right: '28px', zIndex: 200,
          width: '48px', height: '48px', borderRadius: '50%',
          border: '1px solid var(--border-strong)',
          background: hovered ? 'var(--gold)' : 'rgba(250,248,243,0.92)',
          backdropFilter: 'blur(8px)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: hovered ? '0 4px 20px rgba(201,168,76,0.35)' : '0 2px 12px rgba(201,168,76,0.15)',
          padding: 0, outline: 'none',
        }}
      >
        {playing ? <MusicIcon color={hovered ? '#FAF8F3' : 'var(--gold)'} /> : <MutedIcon color={hovered ? '#FAF8F3' : 'var(--text-light)'} />}
        {playing && <span style={{ position: 'absolute', inset: '-4px', borderRadius: '50%', border: '1px solid var(--gold)', opacity: 0.4, animation: 'musicRipple 2s ease-out infinite', pointerEvents: 'none' }} />}
      </button>

      {hovered && (
        <div style={{ position: 'fixed', bottom: '84px', right: '28px', zIndex: 200, background: 'rgba(250,248,243,0.96)', border: '1px solid var(--border)', borderRadius: '4px', padding: '8px 14px', boxShadow: '0 4px 16px rgba(201,168,76,0.12)', textAlign: 'right', pointerEvents: 'none', backdropFilter: 'blur(8px)', minWidth: '160px' }}>
          <p style={{ fontFamily: 'Noto Naskh Arabic, serif', fontSize: '13px', color: 'var(--text-dark)', direction: 'rtl', lineHeight: 1.5, marginBottom: '2px' }}>أنا لك على طول</p>
          <p style={{ fontFamily: 'var(--font-montserrat)', fontSize: '10px', letterSpacing: '1px', color: 'var(--gold)', textTransform: 'uppercase' }}>عبد الحليم حافظ</p>
          <div style={{ position: 'absolute', bottom: '-5px', right: '20px', width: '8px', height: '8px', background: 'rgba(250,248,243,0.96)', border: '1px solid var(--border)', borderTop: 'none', borderLeft: 'none', transform: 'rotate(45deg)' }} />
        </div>
      )}

      <style>{`@keyframes musicRipple{0%{transform:scale(1);opacity:.4}100%{transform:scale(1.7);opacity:0}}`}</style>
    </>
  )
}

function MusicIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M8 15V5.5L17 4V13.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6" cy="15" r="2" stroke={color} strokeWidth="1.4"/>
      <circle cx="15" cy="13.5" r="2" stroke={color} strokeWidth="1.4"/>
      <path d="M2 8.5L2 12" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
      <path d="M3.5 7L3.5 13.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.35"/>
    </svg>
  )
}

function MutedIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M8 15V5.5L17 4V13.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6" cy="15" r="2" stroke={color} strokeWidth="1.4"/>
      <circle cx="15" cy="13.5" r="2" stroke={color} strokeWidth="1.4"/>
      <path d="M2 7.5L4.5 10M4.5 7.5L2 10" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}
