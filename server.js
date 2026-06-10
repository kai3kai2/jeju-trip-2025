import express from 'express'
import cors from 'cors'
import crypto from 'crypto'
import axios from 'axios'
import dotenv from 'dotenv'
import { tripInfo, tabs, days } from './src/data.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Line Messaging API 設定
const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN
const LINE_CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://kai3kai2.github.io'
  ]
}))
app.use(express.json())

// 驗證 Line Webhook 簽名
const validateSignature = (body, signature) => {
  const hash = crypto
    .createHmac('sha256', LINE_CHANNEL_SECRET)
    .update(body)
    .digest('base64')

  return signature === `sha256=${hash}`
}

// 根據用戶訊息解析要查詢的日期
const parseDayQuery = (text) => {
  const dayMap = {
    '前言': 'day-1',
    '出發': 'day-1',
    'day1': 'day1',
    '第一天': 'day1',
    'd1': 'day1',
    'day2': 'day2',
    '第二天': 'day2',
    'd2': 'day2',
    'day3': 'day3',
    '第三天': 'day3',
    'd3': 'day3',
    'day4': 'day4',
    '第四天': 'day4',
    'd4': 'day4',
    'day5': 'day5',
    '第五天': 'day5',
    'd5': 'day5',
    '回程': 'day6',
    'day6': 'day6',
    '推薦加選': 'day0',
    '加選': 'day0',
  }

  const input = text.toLowerCase().trim()
  return dayMap[input] || null
}

// 構建行程卡片 Flex Message
const buildTripFlexMessage = (dayId) => {
  const dayData = days[dayId]
  if (!dayData) return null

  const sections = dayData.sections || []
  const baseItems = []

  sections.forEach((section, idx) => {
    if (section.type === 'label') {
      baseItems.push({
        type: 'box',
        layout: 'vertical',
        margin: 'md',
        spacing: 'sm',
        contents: [
          {
            type: 'text',
            text: `${section.emoji} ${section.title}`,
            size: 'sm',
            weight: 'bold',
            color: '#555555'
          }
        ]
      })
    } else if (section.type === 'info' && section.items) {
      const items = section.items.slice(0, 3)
      baseItems.push({
        type: 'box',
        layout: 'vertical',
        spacing: 'xs',
        contents: items.map(item => ({
          type: 'box',
          layout: 'baseline',
          margin: 'xs',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: '•',
              color: '#999999',
              flex: 0
            },
            {
              type: 'text',
              text: item,
              size: 'xs',
              color: '#666666',
              wrap: true
            }
          ]
        }))
      })
    }
  })

  return {
    type: 'flex',
    altText: `${dayData.title} - ${dayData.subtitle}`,
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'md',
        contents: [
          {
            type: 'text',
            text: dayData.title,
            weight: 'bold',
            size: 'xl',
            margin: 'md'
          },
          {
            type: 'text',
            text: dayData.subtitle,
            size: 'xs',
            color: '#999999',
            wrap: true
          },
          {
            type: 'separator',
            margin: 'md'
          },
          ...baseItems
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'link',
            height: 'sm',
            action: {
              type: 'uri',
              label: '查看完整行程',
              uri: 'https://kai3kai2.github.io/jeju-trip-2025/'
            }
          }
        ]
      }
    }
  }
}

// 識別用戶意圖並回覆
const handleUserMessage = async (text) => {
  text = text.toLowerCase().trim()

  // 查詢特定日期的行程
  const dayId = parseDayQuery(text)
  if (dayId) {
    const flexMsg = buildTripFlexMessage(dayId)
    if (flexMsg) {
      return {
        type: 'flex',
        altText: '行程查詢',
        contents: flexMsg.contents
      }
    }
  }

  // 關鍵詞回覆
  if (text.includes('幫助') || text.includes('help') || text === '?') {
    return {
      type: 'text',
      text: '你可以詢問我以下內容：\n\n🗺️ 行程查詢：\n• Day1, Day2, Day3, Day4, Day5\n• 前言（出發提醒）\n• 回程\n• 推薦加選\n\n💡 範例：「Day1 的行程是什麼」'
    }
  }

  if (text.includes('開始時間') || text.includes('什麼時候') || text.includes('幾點')) {
    return {
      type: 'text',
      text: '⏰ 行程時間：\n• 出發：2026/6/23\n• 回程：2026/6/27\n\n詢問特定日期的詳細時間？試試「Day1」'
    }
  }

  if (text.includes('行程') || text.includes('景點') || text.includes('吃') || text.includes('住')) {
    return {
      type: 'text',
      text: '📍 試試詢問特定日期的行程：\n• 「Day1」查詢第一天\n• 「Day2」查詢第二天\n• 「Day3」查詢第三天\n\n或說「幫助」瞭解更多選項！',
      quickReply: {
        items: [
          { type: 'action', action: { type: 'message', label: 'Day1', text: 'Day1' } },
          { type: 'action', action: { type: 'message', label: 'Day2', text: 'Day2' } },
          { type: 'action', action: { type: 'message', label: 'Day3', text: 'Day3' } },
          { type: 'action', action: { type: 'message', label: '幫助', text: '幫助' } }
        ]
      }
    }
  }

  // 預設回覆
  return {
    type: 'text',
    text: `感謝你的訊息！✨\n\n${text}\n\n你可以問我關於濟州行程的任何問題，或輸入「幫助」了解更多！`,
    quickReply: {
      items: [
        { type: 'action', action: { type: 'message', label: '查詢行程', text: '幫助' } },
        { type: 'action', action: { type: 'message', label: 'Day1', text: 'Day1' } },
        { type: 'action', action: { type: 'message', label: 'Day2', text: 'Day2' } }
      ]
    }
  }
}

// 發送訊息到 Line
const sendLineMessage = async (userId, message) => {
  try {
    const response = await axios.post(
      'https://api.line.me/v2/bot/message/push',
      {
        to: userId,
        messages: [
          {
            type: 'text',
            text: message
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    )
    return response.data
  } catch (error) {
    console.error('Error sending Line message:', error.response?.data || error.message)
    throw error
  }
}

// 應用 Webhook - 接收和處理用戶訊息
app.post('/api/line/webhook', async (req, res) => {
  try {
    // 驗證簽名
    const signature = req.get('x-line-signature')
    const body = JSON.stringify(req.body)

    if (!validateSignature(body, signature)) {
      console.warn('Invalid signature')
      return res.status(401).json({ error: 'Invalid signature' })
    }

    // 處理事件
    const events = req.body.events || []

    for (const event of events) {
      if (event.type === 'message' && event.message.type === 'text') {
        const { replyToken, source, message } = event
        const userId = source.userId

        console.log(`📨 收到來自 ${userId} 的訊息:`, message.text)

        try {
          const replyMessage = await handleUserMessage(message.text)

          await axios.post(
            'https://api.line.me/v2/bot/message/reply',
            {
              replyToken: replyToken,
              messages: [replyMessage]
            },
            {
              headers: {
                'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
              }
            }
          )
        } catch (error) {
          console.error('Error sending reply:', error.response?.data || error.message)
        }
      }

      // 加好友事件
      if (event.type === 'follow') {
        const userId = event.source.userId
        console.log(`👥 新用戶加好友: ${userId}`)

        try {
          await sendLineMessage(
            userId,
            '你好！👋\n\n歡迎使用濟州行程助手！\n\n有任何問題或建議，歡迎隨時告訴我。'
          )
        } catch (error) {
          console.error('Error greeting new follower:', error.message)
        }
      }

      // 取消加好友事件
      if (event.type === 'unfollow') {
        console.log(`👋 用戶已取消追蹤`)
      }
    }

    res.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error.message)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// 應用 API - 發送用戶反饋到 Line
app.post('/api/send-feedback', async (req, res) => {
  try {
    const { type, message, contact, timestamp } = req.body

    // 驗證必要欄位
    if (!message || !LINE_CHANNEL_ACCESS_TOKEN) {
      return res.status(400).json({ error: '缺少必要資訊' })
    }

    // 組織 Line 訊息
    const emoji = type === 'error' ? '🐛' : '💡'
    const typeLabel = type === 'error' ? '錯誤回報' : '使用建議'

    const notifyMessage = `${emoji} 新的${typeLabel}\n\n📝 訊息：\n${message}\n${
      contact ? `\n📧 聯絡方式：${contact}` : ''
    }\n\n⏰ 時間：${timestamp}`

    // 發送到你的 Line 官方帳號
    // 需要用管理員 ID（可從 Webhook 事件中取得）
    // 或者使用 Broadcast API 廣播給所有用戶

    // 方式 1: 使用 Broadcast API（發送給所有追蹤用戶）
    const broadcastResponse = await axios.post(
      'https://api.line.me/v2/bot/message/broadcast',
      {
        messages: [
          {
            type: 'text',
            text: notifyMessage
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    )

    if (broadcastResponse.status === 200) {
      res.json({ success: true, message: '反饋已發送到 Line' })
    } else {
      res.status(500).json({ error: 'Line 訊息發送失敗' })
    }
  } catch (error) {
    console.error('Error sending feedback:', error.response?.data || error.message)
    res.status(500).json({
      error: '伺服器錯誤',
      details: error.message
    })
  }
})

// 健康檢查
app.get('/api/health', (req, res) => {
  const status = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    lineConnected: !!LINE_CHANNEL_ACCESS_TOKEN
  }
  res.json(status)
})

// 簡單的健康檢查頁面
app.get('/', (req, res) => {
  res.json({
    service: '濟州行程助手 - 意見回報服務',
    status: 'running',
    endpoints: {
      webhook: 'POST /api/line/webhook',
      feedback: 'POST /api/send-feedback',
      health: 'GET /api/health'
    }
  })
})

app.listen(PORT, () => {
  console.log(`✅ 伺服器運行於 http://localhost:${PORT}`)
  console.log(`📱 Line Messaging API 已${LINE_CHANNEL_ACCESS_TOKEN ? '連接 ✓' : '未連接 ✗'}`)
  console.log(`🔗 Webhook URL: ${process.env.WEBHOOK_URL || '尚未設定'}`)
  console.log(`\n💡 提示: 本地測試請使用 ngrok:`)
  console.log(`   ngrok http ${PORT}`)
})
