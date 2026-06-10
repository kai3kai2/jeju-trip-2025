export default function InfoBullets({ items }) {
  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-2 sm:gap-3 items-start text-sm">
          <span className="text-primary font-bold flex-shrink-0 text-base">▸</span>
          <span className="text-gray-700 leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  )
}
