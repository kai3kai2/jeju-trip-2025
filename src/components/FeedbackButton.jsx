import { useState } from 'react'
import FeedbackWindow from './FeedbackWindow'

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="feedback-btn"
        aria-label="意見回報"
        title="意見回報"
      >
        <span className="text-2xl">💬</span>
      </button>

      {isOpen && (
        <FeedbackWindow onClose={() => setIsOpen(false)} />
      )}
    </>
  )
}
