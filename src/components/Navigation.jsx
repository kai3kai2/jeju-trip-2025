export default function Navigation({ tabs, activeDay, setActiveDay }) {
  const getTabColor = (color) => {
    const colors = {
      blue: "text-blue-700",
      teal: "text-teal-700",
      red: "text-red-600"
    }
    return colors[color] || colors.teal
  }

  const getTabBgColor = (color, isActive) => {
    if (!isActive) return ""
    const colors = {
      blue: "bg-blue-50",
      teal: "bg-primary-light",
      red: "bg-red-50"
    }
    return colors[color] || colors.teal
  }

  const getBorderColor = (color, isActive) => {
    if (!isActive) return "border-transparent"
    const colors = {
      blue: "border-blue-700",
      teal: "border-primary",
      red: "border-red-600"
    }
    return colors[color] || colors.teal
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="flex overflow-x-auto scroll-smooth lg:overflow-x-visible lg:justify-center lg:flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveDay(tab.id)}
            className={`flex-shrink-0 px-3 sm:px-4 py-3 min-w-[60px] sm:min-w-[70px] border-b-4 transition-colors text-center ${
              activeDay === tab.id
                ? `${getTabBgColor(tab.color, true)} ${getBorderColor(tab.color, true)}`
                : "border-transparent hover:bg-gray-50"
            }`}
          >
            <div className={`text-xs sm:text-sm font-bold ${getTabColor(tab.color)}`}>
              {tab.label}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">
              {tab.date}
            </div>
            {tab.desc && (
              <div className="text-xs text-dark font-semibold mt-0.5">
                {tab.desc}
              </div>
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
