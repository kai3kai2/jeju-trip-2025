import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import DayContent from './components/DayContent'
import Footer from './components/Footer'
import FeedbackButton from './components/FeedbackButton'
import { tabs, days } from './data'

export default function App() {
  const [activeDay, setActiveDay] = useState('day1')

  const currentDay = days[activeDay]

  return (
    <div className="flex justify-center min-h-screen bg-[#F0F4F3]">
      <div className="w-full max-w-[480px] flex flex-col">
        <Header />
        <Navigation tabs={tabs} activeDay={activeDay} setActiveDay={setActiveDay} />
        <main className="flex-1 pb-20">
          {currentDay && <DayContent day={currentDay} />}
        </main>
        <Footer />
        <FeedbackButton />
      </div>
    </div>
  )
}
