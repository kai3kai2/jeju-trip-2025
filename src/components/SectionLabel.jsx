export default function SectionLabel({ emoji, title }) {
  return (
    <div className="inline-flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-full text-xs sm:text-sm font-bold mt-3 sm:mt-4">
      <span>{emoji}</span>
      <span>{title}</span>
    </div>
  )
}
