import { tripInfo } from '../data'

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-900 text-white px-4 sm:px-6 py-5 sm:py-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-xl sm:text-2xl font-black tracking-wide mb-2">
          {tripInfo.title}
        </h1>
        <p className="text-xs sm:text-sm opacity-90 leading-relaxed mb-4">
          {tripInfo.subtitle}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {tripInfo.chips.map((chip, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-15 backdrop-blur rounded-lg p-2 sm:p-3"
            >
              <div className="text-xs font-semibold opacity-80 mb-0.5">
                {chip.icon} {chip.label}
              </div>
              <div className="text-xs sm:text-sm font-medium">
                {chip.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
