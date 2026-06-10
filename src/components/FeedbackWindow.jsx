import { useState } from 'react'

export default function FeedbackWindow({ onClose }) {
  const [feedbackType, setFeedbackType] = useState('error') // error, suggestion
  const [message, setMessage] = useState('')
  const [contact, setContact] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!message.trim()) {
      alert('請輸入訊息內容')
      return
    }

    setIsLoading(true)
    setSubmitStatus(null)

    try {
      // 發送到 Line Notify
      // 需要後端 API 來安全地處理 Token
      const apiBase = import.meta.env.VITE_API_URL || ''
      const response = await fetch(`${apiBase}/api/send-feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: feedbackType,
          message,
          contact,
          timestamp: new Date().toLocaleString('zh-TW')
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setMessage('')
        setContact('')
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending feedback:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="feedback-window">
      <div className="feedback-header">
        <h3>💬 意見回報</h3>
        <button type="button" onClick={onClose} className="text-white hover:bg-[#05b047] rounded-full w-8 h-8 flex items-center justify-center transition-colors">✕</button>
      </div>

      <div className="feedback-content">
        {submitStatus === 'success' ? (
          <div className="feedback-status">
            <div className="feedback-status-icon">✅</div>
            <div className="feedback-status-title text-[#03c75a]">感謝你的回報！</div>
            <div className="feedback-status-desc">我們已收到你的訊息</div>
          </div>
        ) : submitStatus === 'error' ? (
          <div className="feedback-status">
            <div className="feedback-status-icon">❌</div>
            <div className="feedback-status-title text-red-600">傳送失敗</div>
            <div className="feedback-status-desc">請稍後重試</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="feedback-form">
            <div>
              <label className="feedback-label">🏷️ 反饋類型</label>
              <div className="feedback-type-buttons">
                <button
                  type="button"
                  onClick={() => setFeedbackType('error')}
                  className={`feedback-type-btn ${feedbackType === 'error' ? 'error' : 'inactive'}`}
                >
                  🐛 錯誤回報
                </button>
                <button
                  type="button"
                  onClick={() => setFeedbackType('suggestion')}
                  className={`feedback-type-btn ${feedbackType === 'suggestion' ? 'suggestion' : 'inactive'}`}
                >
                  💡 建議
                </button>
              </div>
            </div>

            <div>
              <label className="feedback-label">📝 訊息內容 *</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="詳細描述你的問題或建議..."
                rows={4}
                disabled={isLoading}
                className="feedback-textarea"
              />
            </div>

            <div>
              <label className="feedback-label">📧 聯絡方式（選填）</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Email、電話或Line ID..."
                disabled={isLoading}
                className="feedback-input"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="feedback-submit"
            >
              {isLoading ? '⏳ 傳送中...' : '✈️ 發送回報'}
            </button>
          </form>
        )}
      </div>

      {!submitStatus && (
        <div className="feedback-footer">
          💬 感謝你的反饋，幫助我們改進應用程式！
        </div>
      )}
    </div>
  )
}
