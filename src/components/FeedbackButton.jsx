import { useState } from 'react'
import FeedbackWindow from './FeedbackWindow'

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 浮動按鈕 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="意見回報"
        title="意見回報"
      >
        <span className="text-2xl">💬</span>
      </button>

      {/* 聊天窗口 */}
      {isOpen && (
        <FeedbackWindow onClose={() => setIsOpen(false)} />
      )}
    </>
  )
}
