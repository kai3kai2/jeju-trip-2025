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
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation tabs={tabs} activeDay={activeDay} setActiveDay={setActiveDay} />
      <main className="max-w-full lg:max-w-4xl mx-auto pb-20">
        {currentDay && <DayContent day={currentDay} />}
      </main>
      <Footer />
      <FeedbackButton />
    </div>
  )
}
