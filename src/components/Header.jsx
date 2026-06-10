import { tripInfo } from '../data'

export default function Header() {
  return (
    <div className="hero">
      <h1>{tripInfo.title}</h1>
      <div className="hero-sub">{tripInfo.subtitle}</div>
      <div className="info-grid">
        {tripInfo.chips.map((chip, idx) => (
          <div key={idx} className="info-chip">
            <strong>{chip.icon} {chip.label}</strong>
            <div>{chip.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
