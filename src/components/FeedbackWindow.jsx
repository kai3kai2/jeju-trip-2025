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
      const response = await fetch('/api/send-feedback', {
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
    <div className="fixed bottom-24 right-6 z-40 w-80 max-h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200">
      {/* 頭部 */}
      <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <h3 className="font-bold text-lg">💬 意見回報</h3>
        <button
          onClick={onClose}
          className="text-xl hover:bg-green-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
        >
          ✕
        </button>
      </div>

      {/* 內容 */}
      <div className="flex-1 overflow-y-auto p-4">
        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">✅</div>
            <p className="text-green-600 font-semibold">感謝你的回報！</p>
            <p className="text-sm text-gray-600 mt-2">我們已收到你的訊息</p>
          </div>
        ) : submitStatus === 'error' ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">❌</div>
            <p className="text-red-600 font-semibold">傳送失敗</p>
            <p className="text-sm text-gray-600 mt-2">請稍後重試</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 類型選擇 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🏷️ 反饋類型
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setFeedbackType('error')}
                  className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-colors text-sm ${
                    feedbackType === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  🐛 錯誤回報
                </button>
                <button
                  type="button"
                  onClick={() => setFeedbackType('suggestion')}
                  className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-colors text-sm ${
                    feedbackType === 'suggestion'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  💡 建議
                </button>
              </div>
            </div>

            {/* 訊息內容 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📝 訊息內容 *
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="詳細描述你的問題或建議..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                rows={4}
                disabled={isLoading}
              />
            </div>

            {/* 聯絡方式 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📧 聯絡方式（選填）
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Email、電話或Line ID..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                disabled={isLoading}
              />
            </div>

            {/* 提交按鈕 */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-2.5 px-4 rounded-lg transition-colors"
            >
              {isLoading ? '⏳ 傳送中...' : '✈️ 發送回報'}
            </button>
          </form>
        )}
      </div>

      {/* 提示文字 */}
      {!submitStatus && (
        <div className="border-t border-gray-200 bg-gray-50 p-3 rounded-b-2xl text-xs text-gray-600">
          💬 感謝你的反饋，幫助我們改進應用程式！
        </div>
      )}
    </div>
  )
}
