import Animate from './Animate'

export default function VenuePhoto() {
  return (
    <Animate delay={0.3} duration={1.0} distance={24}>
      <div style={{ maxWidth: '520px', margin: '0 auto', marginTop: '48px', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 40px rgba(201,168,76,0.08)' }}>
        <img 
          src="/venue.webp" 
          alt="Venue" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>
    </Animate>
  )
}
