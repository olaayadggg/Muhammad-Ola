import { useEffect, useState } from 'react'
import type { Lang } from '../pages/index'
import Animate from './Animate'

interface Props { lang: Lang }

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    }
  }
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    setTime(calc())
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function DateSection({ lang }: Props) {
  const isAr = lang === 'ar'
  const weddingDate = new Date('2026-09-26T18:00:00')
  const { days, hours, minutes, seconds } = useCountdown(weddingDate)
  const labels = isAr ? ['أيام','ساعات','دقائق','ثواني'] : ['Days','Hours','Minutes','Seconds']

  return (
    <section style={{ padding: '100px 24px', textAlign: 'center', background: 'var(--cream)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <Animate delay={0} duration={0.9}>
        <p style={{ fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-montserrat)', fontSize: '11px', letterSpacing: isAr ? '0' : '4px', textTransform: isAr ? 'none' : 'uppercase', color: 'var(--gold)', marginBottom: '32px', direction: isAr ? 'rtl' : 'ltr' }}>
          {isAr ? 'موعد الفرح' : 'Save the Date'}
        </p>
      </Animate>

      <Animate delay={0.2} duration={1.0} distance={22}>
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(48px, 10vw, 96px)', fontWeight: 300, color: 'var(--text-dark)', lineHeight: 1, letterSpacing: '8px' }}>26</div>
          <div style={{ fontFamily: 'var(--font-montserrat)', fontSize: '11px', letterSpacing: '6px', textTransform: 'uppercase', color: 'var(--gold)', margin: '12px 0' }}>September</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(48px, 10vw, 96px)', fontWeight: 300, color: 'var(--text-dark)', lineHeight: 1, letterSpacing: '8px' }}>2026</div>
        </div>
      </Animate>

      <Animate delay={0.35} duration={0.9} distance={18}>
        {isAr ? (
          <p style={{ fontFamily: 'Noto Naskh Arabic, serif', fontSize: '22px', color: 'var(--text-mid)', marginBottom: '16px', direction: 'rtl' }}>السبت، ٢٦ سبتمبر ٢٠٢٦</p>
        ) : (
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontStyle: 'italic', color: 'var(--text-mid)', marginBottom: '16px', letterSpacing: '2px' }}>Saturday Evening</p>
        )}
      </Animate>

      <div className="ornament" style={{ maxWidth: '300px', margin: '32px auto' }}>
        <div className="ornament-line" />
        <div className="ornament-diamond-sm" />
        <div className="ornament-diamond" />
        <div className="ornament-diamond-sm" />
        <div className="ornament-line right" />
      </div>

      <Animate delay={0.5} duration={0.9} distance={16}>
        <p style={{ fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-montserrat)', fontSize: '11px', letterSpacing: isAr ? '0' : '3px', textTransform: isAr ? 'none' : 'uppercase', color: 'var(--text-light)', marginBottom: '32px', direction: isAr ? 'rtl' : 'ltr' }}>
          {isAr ? 'العد التنازلي' : 'Counting Down'}
        </p>
      </Animate>

      <Animate delay={0.65} duration={1.0} distance={20}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(12px,4vw,32px)', flexWrap: 'wrap', direction: 'ltr' }}>
          {[days, hours, minutes, seconds].map((val, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '72px' }}>
              <div style={{ width: '80px', height: '80px', border: '1px solid var(--border-strong)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(201,168,76,0.04)', boxShadow: '0 2px 16px rgba(201,168,76,0.08)', marginBottom: '10px' }}>
                <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '36px', fontWeight: 300, color: 'var(--text-dark)', lineHeight: 1 }}>
                  {String(val).padStart(2, '0')}
                </span>
              </div>
              <span style={{ fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-montserrat)', fontSize: '10px', letterSpacing: isAr ? '0' : '2px', textTransform: isAr ? 'none' : 'uppercase', color: 'var(--gold)' }}>
                {labels[i]}
              </span>
            </div>
          ))}
        </div>
      </Animate>
    </section>
  )
}
