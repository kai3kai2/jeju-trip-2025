import SectionLabel from './SectionLabel'
import InfoBullets from './InfoBullets'
import Card from './Card'

export default function DayContent({ day }) {
  if (!day) return null

  return (
    <section className="px-4 sm:px-6">
      {/* Day Header */}
      <div className={`bg-gradient-to-r ${day.headerGradient} text-white p-4 sm:p-5 rounded-t-lg`}>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="text-2xl sm:text-3xl font-black bg-white bg-opacity-20 rounded-lg px-3 py-1">
            {day.emoji}
          </div>
          <div className="flex-1">
            <div className="text-base sm:text-lg font-bold">
              {day.title}
            </div>
            <div className="text-xs sm:text-sm opacity-90 mt-1">
              {day.subtitle}
            </div>
          </div>
        </div>
      </div>

      {/* Day Content */}
      <div className="bg-white px-4 sm:px-5 py-3 sm:py-4 space-y-3 sm:space-y-4 rounded-b-lg shadow-sm">
        {day.sections.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            詳細資訊載入中...
          </p>
        ) : (
          day.sections.map((section, idx) => {
            switch (section.type) {
              case 'label':
                return (
                  <SectionLabel
                    key={idx}
                    emoji={section.emoji}
                    title={section.title}
                  />
                )
              case 'info':
                return (
                  <InfoBullets
                    key={idx}
                    items={section.items}
                  />
                )
              case 'card':
                return (
                  <Card
                    key={idx}
                    {...section}
                  />
                )
              default:
                return null
            }
          })
        )}
      </div>
    </section>
  )
}
