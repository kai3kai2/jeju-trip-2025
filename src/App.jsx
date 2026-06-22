import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import DayContent from './components/DayContent'
import Footer from './components/Footer'
import FeedbackButton from './components/FeedbackButton'
import { tabs, days } from './data'

export default function App() {
  const [activeDay, setActiveDay] = useState('day1')

  const currentDay = days[activeDay]
  const activeIndex = tabs.findIndex((t) => t.id === activeDay)

  // 切換分頁時自動滾回頁面最上方
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeDay])

  const goToTab = (index) => {
    if (index < 0 || index >= tabs.length) return
    setActiveDay(tabs[index].id)
  }

  // 手機版左右滑動切換分頁
  const touchStart = useRef(null)

  const handleTouchStart = (e) => {
    const t = e.changedTouches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    // 僅在水平滑動明顯大於垂直滑動、且距離足夠時才切換
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) {
        goToTab(activeIndex + 1) // 向左滑 → 下一頁
      } else {
        goToTab(activeIndex - 1) // 向右滑 → 上一頁
      }
    }
  }

  return (
    <div className="flex justify-center min-h-screen bg-[#F0F4F3]">
      <div className="w-full max-w-[480px] lg:max-w-desktop flex flex-col">
        <Header />
        <Navigation tabs={tabs} activeDay={activeDay} setActiveDay={setActiveDay} />
        <main
          className="flex-1 pb-20"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {currentDay && <DayContent day={currentDay} />}
        </main>
        <Footer />
        <FeedbackButton />
      </div>
    </div>
  )
}
