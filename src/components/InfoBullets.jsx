export default function InfoBullets({ items }) {
  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx} className="ib">
          <span className="text-[#2C7873] font-bold flex-shrink-0">•</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}
