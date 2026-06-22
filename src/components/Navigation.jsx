import { useEffect, useRef } from 'react'

export default function Navigation({ tabs, activeDay, setActiveDay }) {
  const navRef = useRef(null)
  const btnRefs = useRef({})

  const getTabColor = (color) => {
    const colors = {
      blue: 'text-[#2b5ba8]',
      teal: 'text-[#2C7873]',
      red: 'text-[#E8604C]'
    }
    return colors[color] || colors.teal
  }

  // 切換分頁時，讓作用中的分頁按鈕自動捲入可視範圍（尤其手機左右滑動後）
  useEffect(() => {
    const btn = btnRefs.current[activeDay]
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeDay])

  return (
    <nav className="nav-wrap" ref={navRef}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          ref={(el) => { btnRefs.current[tab.id] = el }}
          onClick={() => setActiveDay(tab.id)}
          className={`tab ${activeDay === tab.id ? 'active' : ''}`}
          style={{ paddingLeft: '8px', paddingRight: '8px', minWidth: '50px' }}
        >
          <span className={`${getTabColor(tab.color)} font-bold`} style={{ fontSize: '11px' }}>
            {tab.label}
          </span>
          <span style={{ fontSize: '10px', color: '#888' }}>
            {tab.date}
          </span>
          {tab.desc && (
            <span style={{ fontSize: '11px', color: '#1a1a2e', fontWeight: 600 }}>
              {tab.desc}
            </span>
          )}
        </button>
      ))}
    </nav>
  )
}
