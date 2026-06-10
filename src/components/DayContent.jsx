import SectionLabel from './SectionLabel'
import InfoBullets from './InfoBullets'
import Card from './Card'

function FlightCard({ airline, from, to, duration }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a3a6e, #2b5ba8)',
      borderRadius: '14px',
      padding: '16px 14px',
      margin: '4px 0',
      boxShadow: '0 3px 14px rgba(0,0,0,.12)',
      color: 'white'
    }}>
      <div style={{ fontSize: '11.5px', opacity: '.85', marginBottom: '14px', fontWeight: 600, letterSpacing: '.5px' }}>
        {airline}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '1px' }}>{from.code}</div>
          <div style={{ fontSize: '10px', opacity: '.8', marginTop: '2px' }}>{from.name}</div>
          <div style={{ fontSize: '20px', fontWeight: 700, marginTop: '6px' }}>{from.time}</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
          <div style={{ width: '100%', height: '1.5px', background: 'rgba(255,255,255,.4)' }}></div>
          <span style={{ fontSize: '18px' }}>✈</span>
          <div style={{ width: '100%', height: '1.5px', background: 'rgba(255,255,255,.4)' }}></div>
          <div style={{ fontSize: '10px', opacity: '.75', marginTop: '2px' }}>{duration}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '1px' }}>{to.code}</div>
          <div style={{ fontSize: '10px', opacity: '.8', marginTop: '2px' }}>{to.name}</div>
          <div style={{ fontSize: '20px', fontWeight: 700, marginTop: '6px' }}>{to.time}</div>
        </div>
      </div>
    </div>
  )
}

function ChecklistSection({ items }) {
  return (
    <div style={{
      background: '#F0F7FF',
      border: '1.5px solid #B8D4F0',
      borderRadius: '10px',
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      margin: '2px 0'
    }}>
      {items.map((item, idx) => (
        <div key={idx} style={{ display: 'flex', gap: '10px', fontSize: '13px', alignItems: 'flex-start', padding: '3px 0' }}>
          <span style={{ color: '#2b5ba8', fontSize: '15px', flexShrink: 0 }}>□</span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </div>
      ))}
    </div>
  )
}

function TimelineSection({ items }) {
  return (
    <div style={{
      background: 'white',
      border: '1.5px solid #dde8f0',
      borderRadius: '10px',
      overflow: 'hidden',
      margin: '2px 0'
    }}>
      {items.map((item, idx) => (
        <div key={idx} style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '9px 14px',
          borderBottom: '.5px solid #eef4f8',
          background: item.highlight ? 'linear-gradient(90deg, #e8f2ff, #f0f8ff)' : 'transparent'
        }}>
          <div style={{
            fontSize: '12px',
            fontWeight: 700,
            minWidth: '38px',
            paddingTop: '1px',
            color: item.highlight ? '#1a3a6e' : '#2b5ba8'
          }}>
            {item.time}
          </div>
          <div style={{
            fontSize: '13px',
            fontWeight: item.highlight ? 700 : 'normal',
            color: item.highlight ? '#1a3a6e' : 'inherit'
          }}>
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function DayContent({ day }) {
  if (!day) return null

  const getGradientStyle = (headerGradient) => {
    const gradients = {
      'from-teal-700 to-teal-800': 'linear-gradient(90deg, #2C7873, #2C7873)',
      'from-teal-700 to-teal-600': 'linear-gradient(90deg, #2C7873, #3d9189)',
      'from-blue-700 to-blue-800': 'linear-gradient(90deg, #1a3a6e, #2b5ba8)',
      'from-blue-900 to-blue-600': 'linear-gradient(90deg, #1a3a6e, #2b5ba8)',
      'from-green-600 to-green-700': 'linear-gradient(90deg, #1a6b4e, #2d8659)'
    }
    return gradients[headerGradient] || 'linear-gradient(90deg, #2C7873, #2C7873)'
  }

  return (
    <section className="ds active">
      <div className="dh" style={{ background: getGradientStyle(day.headerGradient) }}>
        <span className="dn">{day.emoji}</span>
        <div>
          <div className="dd">{day.title}</div>
          <div className="dt">{day.subtitle}</div>
        </div>
      </div>
      <div className="db">
        {day.sections.length === 0 ? (
          <p className="text-center py-5" style={{ color: '#888' }}>詳細資訊載入中...</p>
        ) : (
          day.sections.map((section, idx) => {
            switch (section.type) {
              case 'label':
                return <SectionLabel key={idx} emoji={section.emoji} title={section.title} />
              case 'info':
                return <InfoBullets key={idx} items={section.items} />
              case 'checklist':
                return <ChecklistSection key={idx} items={section.items} />
              case 'timeline':
                return <TimelineSection key={idx} items={section.items} />
              case 'flight':
                return <FlightCard key={idx} {...section} />
              case 'card':
                return <Card key={idx} {...section} />
              default:
                return null
            }
          })
        )}
      </div>
    </section>
  )
}
