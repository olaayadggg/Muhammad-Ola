import type { Lang } from '../pages/index'
import Animate from './Animate'

interface Props { lang: Lang }

export default function HeroSection({ lang }: Props) {
  const isAr = lang === 'ar'

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px 60px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: `linear-gradient(rgba(10,8,5,0.48), rgba(10,8,5,0.48)), url('/couple2.png') center/cover no-repeat`,
    }}>
      <CornerOrnament pos="tl" />
      <CornerOrnament pos="tr" />
      <CornerOrnament pos="bl" />
      <CornerOrnament pos="br" />

      <Animate delay={0.3} duration={1.0}>
        <p style={{
          fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-montserrat)',
          fontSize: '11px',
          letterSpacing: isAr ? '0' : '4px',
          textTransform: isAr ? 'none' : 'uppercase',
          color: 'var(--gold)',
          marginBottom: '28px',
          direction: isAr ? 'rtl' : 'ltr',
        }}>
          {isAr ? 'يسعدنا دعوتكم لحضور حفل زفافنا' : 'Together with their families'}
        </p>
      </Animate>

      <Animate delay={0.6} duration={1.1} distance={22}>
        <div>
          <h1 style={{
            fontFamily: 'var(--font-great-vibes)',
            fontSize: 'clamp(56px, 10vw, 100px)',
            fontWeight: 400,
            color: 'rgba(255,250,235,1)',
            lineHeight: 1,
            letterSpacing: '2px',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}>Muhammad</h1>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '12px 0' }}>
            <div style={{ width: '60px', height: '1px', background: 'rgba(201,168,76,0.7)' }} />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', fontWeight: 300, color: 'var(--gold)', letterSpacing: '6px', textTransform: 'uppercase' }}>
              {isAr ? 'و' : '&'}
            </span>
            <div style={{ width: '60px', height: '1px', background: 'rgba(201,168,76,0.7)' }} />
          </div>

          <h1 style={{
            fontFamily: 'var(--font-great-vibes)',
            fontSize: 'clamp(56px, 10vw, 100px)',
            fontWeight: 400,
            color: 'rgba(255,250,235,1)',
            lineHeight: 1,
            letterSpacing: '2px',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}>Ola</h1>
        </div>
      </Animate>

      {isAr && (
        <Animate delay={0.9} duration={1.0} distance={18}>
          <p style={{ fontFamily: 'Noto Naskh Arabic, serif', fontSize: '28px', color: 'rgba(255,250,235,0.9)', marginTop: '12px', direction: 'rtl' }}>
            محمد وعلا
          </p>
        </Animate>
      )}

      <Animate delay={isAr ? 1.1 : 0.9} duration={1.0} distance={18}>
        <p style={{
          marginTop: '40px',
          fontFamily: isAr ? 'Noto Naskh Arabic, serif' : 'var(--font-cormorant)',
          fontSize: isAr ? '20px' : '22px',
          fontWeight: 300,
          fontStyle: isAr ? 'normal' : 'italic',
          color: 'rgba(255,250,235,0.82)',
          letterSpacing: '1px',
          maxWidth: '440px',
          lineHeight: 1.8,
          direction: isAr ? 'rtl' : 'ltr',
        }}>
          {isAr ? 'يشرفنا حضوركم معنا في أبهى لحظات حياتنا' : 'request the honour of your presence at the celebration of their marriage'}
        </p>
      </Animate>

      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'float 2.5s ease-in-out infinite' }}>
        <style>{`@keyframes float { 0%,100%{transform:translateX(-50%) translateY(0);opacity:.6}50%{transform:translateX(-50%) translateY(6px);opacity:1} }`}</style>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, transparent, var(--gold-muted))' }} />
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)' }} />
      </div>
    </section>
  )
}

function CornerOrnament({ pos }: { pos: 'tl'|'tr'|'bl'|'br' }) {
  const style: React.CSSProperties = {
    position: 'absolute', width: '80px', height: '80px',
    ...(pos==='tl'&&{top:'20px',left:'20px'}),
    ...(pos==='tr'&&{top:'20px',right:'20px',transform:'scaleX(-1)'}),
    ...(pos==='bl'&&{bottom:'20px',left:'20px',transform:'scaleY(-1)'}),
    ...(pos==='br'&&{bottom:'20px',right:'20px',transform:'scale(-1)'}),
  }
  return (
    <svg style={style} viewBox="0 0 80 80" fill="none">
      <path d="M10 70 L10 10 L70 10" stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" opacity="0.75"/>
      <path d="M10 10 L25 10" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" opacity="1"/>
      <path d="M10 10 L10 25" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" opacity="1"/>
      <circle cx="10" cy="10" r="2.5" fill="var(--gold)" opacity="0.9"/>
      <circle cx="26" cy="10" r="1" fill="var(--gold-light)" opacity="0.7"/>
      <circle cx="10" cy="26" r="1" fill="var(--gold-light)" opacity="0.7"/>
    </svg>
  )
}
