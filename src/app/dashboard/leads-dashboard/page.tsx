'use client'

import { useState, type CSSProperties } from 'react'
import { Calendar, RefreshCw, Download, ChevronDown } from 'lucide-react'

const ACCENT = '#E41F07'
const SUCCESS = '#1ABE17'
const WARNING = '#F9B801'
const BLUE = '#4472CA'
const GREEN = '#27AC62'
const BORDER = '#E2E8F0'
const TEXT_DARK = '#1F2020'
const TEXT_MID = '#707070'
const CARD_SHADOW = '0 1px 4px rgba(0,0,0,0.06)'
const PURPLE = '#6C3AFF'

interface Lead {
  name: string
  company: string
  companyIcon: string
  phone: string
  status: 'Clôturé' | 'Contacté'
}

const leads: Lead[] = []

const pieSegments = [
  { color: BLUE, label: 'En pipeline', pct: 30 },
  { color: GREEN, label: 'Suivi', pct: 35 },
  { color: '#F9B801', label: 'Service planifié', pct: 10 },
  { color: ACCENT, label: 'Conversation', pct: 25 },
]

const areaPoints = [
  { label: 'Jan', v: 3000 },
  { label: 'Fév', v: 4200 },
  { label: 'Mar', v: 2800 },
  { label: 'Avr', v: 2200 },
  { label: 'Mai', v: 3100 },
  { label: 'Jun', v: 2600 },
  { label: 'Jul', v: 3200 },
  { label: 'Aoû', v: 2800 },
  { label: 'Sep', v: 3800 },
  { label: 'Oct', v: 4900 },
  { label: 'Nov', v: 4100 },
  { label: 'Déc', v: 2400 },
]

const lostDeals = [
  { label: 'Conversation', v: 380 },
  { label: 'Suivi', v: 270 },
  { label: 'En pipeline', v: 460 },
]

const wonDeals = [
  { label: 'Conversation', v: 395 },
  { label: 'Suivi', v: 105 },
  { label: 'En pipeline', v: 300 },
]

function StatusBadge({ status }: { status: 'Clôturé' | 'Contacté' }) {
  const styles: Record<string, CSSProperties> = {
    'Clôturé': { backgroundColor: SUCCESS, color: '#fff' },
    'Contacté': { backgroundColor: WARNING, color: '#fff' },
  }
  return (
    <span style={{
      display: 'inline-block', fontSize: 12, fontWeight: 500,
      padding: '5px 8px', borderRadius: 6,
      ...styles[status],
    }}>
      {status}
    </span>
  )
}

function DropdownBtn({ children }: { children: React.ReactNode }) {
  return (
    <button style={{
      display: 'flex', alignItems: 'center', gap: 4,
      border: `1px solid ${BORDER}`, borderRadius: 6,
      backgroundColor: '#fff', color: TEXT_DARK,
      padding: '6px 12px', fontSize: 13, cursor: 'pointer',
      whiteSpace: 'nowrap', fontFamily: '"Golos Text", sans-serif',
    }}>
      {children}
      <ChevronDown size={13} color={TEXT_MID} />
    </button>
  )
}

function PieChart() {
  let cumulative = 0
  const segments = pieSegments.map(seg => {
    const start = cumulative
    cumulative += seg.pct
    return { ...seg, start, end: cumulative }
  })

  function polarToXY(pct: number, r: number) {
    const angle = (pct / 100) * 2 * Math.PI - Math.PI / 2
    return {
      x: 120 + r * Math.cos(angle),
      y: 120 + r * Math.sin(angle),
    }
  }

  function arcPath(startPct: number, endPct: number, r: number) {
    const start = polarToXY(startPct, r)
    const end = polarToXY(endPct, r)
    const large = (endPct - startPct) > 50 ? 1 : 0
    return `M 120 120 L ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y} Z`
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <svg width={240} height={240} viewBox="0 0 240 240">
        {segments.map((seg, i) => (
          <path
            key={i}
            d={arcPath(seg.start, seg.end, 100)}
            fill={seg.color}
            stroke="#fff"
            strokeWidth={2}
          />
        ))}
        {/* Inner circle (donut hole) - not needed for pie */}
      </svg>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        {pieSegments.map(seg => (
          <div key={seg.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: seg.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: TEXT_MID }}>{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AreaChart() {
  const maxV = 6000
  const chartW = 760
  const chartH = 200
  const padLeft = 45
  const padBottom = 30
  const padTop = 10
  const padRight = 10
  const innerW = chartW - padLeft - padRight
  const innerH = chartH - padBottom - padTop

  const points = areaPoints.map((p, i) => ({
    x: padLeft + (i / (areaPoints.length - 1)) * innerW,
    y: padTop + innerH - (p.v / maxV) * innerH,
    label: p.label,
    v: p.v,
  }))

  function smoothPath(pts: { x: number; y: number }[]) {
    if (pts.length < 2) return ''
    let d = `M ${pts[0].x} ${pts[0].y}`
    for (let i = 1; i < pts.length; i++) {
      const cp1x = pts[i - 1].x + (pts[i].x - pts[i - 1].x) * 0.4
      const cp1y = pts[i - 1].y
      const cp2x = pts[i].x - (pts[i].x - pts[i - 1].x) * 0.4
      const cp2y = pts[i].y
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pts[i].x} ${pts[i].y}`
    }
    return d
  }

  const linePath = smoothPath(points)
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padTop + innerH} L ${points[0].x} ${padTop + innerH} Z`

  const yLabels = [0, 1, 2, 3, 4, 5, 6]

  return (
    <svg width="100%" viewBox={`0 0 ${chartW} ${chartH}`} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={PURPLE} stopOpacity="0.35" />
          <stop offset="100%" stopColor={PURPLE} stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Y-axis grid lines */}
      {yLabels.slice(1).map(y => {
        const yPos = padTop + innerH - (y / 6) * innerH
        return (
          <g key={y}>
            <line x1={padLeft} y1={yPos} x2={padLeft + innerW} y2={yPos} stroke="#E2E8F0" strokeWidth={1} strokeDasharray="4 4" />
            <text x={padLeft - 6} y={yPos + 4} textAnchor="end" fontSize={11} fill={TEXT_MID}>{y}K</text>
          </g>
        )
      })}
      {/* X=0 line */}
      <line x1={padLeft} y1={padTop + innerH} x2={padLeft + innerW} y2={padTop + innerH} stroke="#E2E8F0" strokeWidth={1} />

      {/* Area fill */}
      <path d={areaPath} fill="url(#areaGrad)" />

      {/* Line */}
      <path d={linePath} fill="none" stroke={PURPLE} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />

      {/* X labels */}
      {points.map((p, i) => (
        <text key={i} x={p.x} y={chartH - 4} textAnchor="middle" fontSize={11} fill={TEXT_MID}>{p.label}</text>
      ))}
    </svg>
  )
}

function HorizontalBarChart({ data, color, maxVal }: { data: { label: string; v: number }[]; color: string; maxVal: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '8px 0' }}>
      {data.map(item => (
        <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 90, fontSize: 12, color: TEXT_MID, textAlign: 'right', flexShrink: 0 }}>{item.label}</div>
          <div style={{ flex: 1, height: 22, backgroundColor: '#F7F8F9', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: `${(item.v / maxVal) * 100}%`,
              backgroundColor: color, borderRadius: 4,
              transition: 'width 0.5s ease',
            }} />
          </div>
          <div style={{ width: 36, fontSize: 12, color: TEXT_MID, textAlign: 'right', flexShrink: 0 }}>{item.v}</div>
        </div>
      ))}
    </div>
  )
}

const cardStyle: CSSProperties = {
  backgroundColor: '#fff',
  border: `1px solid ${BORDER}`,
  borderRadius: 8,
  boxShadow: CARD_SHADOW,
  overflow: 'hidden',
}

const cardHeaderStyle: CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '15px 20px', borderBottom: `1px solid ${BORDER}`,
}

const cardTitleStyle: CSSProperties = {
  fontSize: 15, fontWeight: 600, color: TEXT_DARK,
}

export default function LeadsDashboardPage() {
  const [leadsFilter] = useState('30 derniers jours')
  const [pieFilter] = useState('30 derniers jours')
  const [areaFilter] = useState('30 derniers jours')
  const [areaPipeline] = useState('Pipeline des ventes')
  const [lostFilter] = useState('3 derniers mois')
  const [lostPipeline] = useState('Pipeline Marketing')
  const [wonFilter] = useState('3 derniers mois')
  const [wonPipeline] = useState('Pipeline Marketing')

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Page header */}
      <div style={{
        backgroundColor: '#fff', borderBottom: `1px solid ${BORDER}`,
        padding: '14px 24px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
      }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: TEXT_DARK, margin: 0 }}>Tableau de bord — Leads</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 6,
            border: `1px solid ${BORDER}`, borderRadius: 6,
            backgroundColor: '#fff', color: TEXT_DARK,
            padding: '7px 12px', fontSize: 13, cursor: 'pointer',
          }}>
            <Calendar size={14} color={TEXT_MID} />
            30 June 26 - 30 June 2026
          </button>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, border: `1px solid ${BORDER}`, borderRadius: 6, backgroundColor: '#fff', cursor: 'pointer' }}>
            <RefreshCw size={16} color={TEXT_MID} />
          </button>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, border: `1px solid ${BORDER}`, borderRadius: 6, backgroundColor: '#fff', cursor: 'pointer' }}>
            <Download size={16} color={TEXT_MID} />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Row 1: Recently Created Leads + Projects By Stage pie */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>

          {/* Recently Created Leads */}
          <div style={{ ...cardStyle, flex: '1 1 400px', minWidth: 320 }}>
            <div style={cardHeaderStyle}>
              <span style={cardTitleStyle}>Leads récemment créés</span>
              <DropdownBtn>{leadsFilter}</DropdownBtn>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Nom du lead', 'Entreprise', 'Téléphone', 'Statut'].map(col => (
                      <th key={col} style={{
                        padding: '8px 10px 8px 16px', fontSize: 13, fontWeight: 600,
                        color: TEXT_DARK, textAlign: 'left',
                        borderBottom: `1px solid ${BORDER}`, whiteSpace: 'nowrap',
                        backgroundColor: '#fff',
                      }}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.length === 0 ? (
                    <tr>
                      <td colSpan={4} style={{ padding: '32px 16px', textAlign: 'center', color: TEXT_MID, fontSize: 14 }}>
                        Aucun lead pour le moment.
                      </td>
                    </tr>
                  ) : leads.map((lead, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < leads.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                      <td style={{ padding: '10px 8px 10px 16px', fontSize: 14, color: TEXT_DARK, fontWeight: 500 }}>{lead.name}</td>
                      <td style={{ padding: '10px 8px', fontSize: 14, color: TEXT_MID }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, backgroundColor: '#F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CompanyIcon company={lead.company} idx={idx} />
                          </div>
                          <span>{lead.company}</span>
                        </div>
                      </td>
                      <td style={{ padding: '10px 8px', fontSize: 14, color: TEXT_MID, whiteSpace: 'nowrap' }}>{lead.phone}</td>
                      <td style={{ padding: '10px 8px 10px 10px', fontSize: 14 }}>
                        <StatusBadge status={lead.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Projects By Stage - Pie */}
          <div style={{ ...cardStyle, flex: '1 1 320px', minWidth: 280 }}>
            <div style={cardHeaderStyle}>
              <span style={cardTitleStyle}>Projets par étape</span>
              <DropdownBtn>{pieFilter}</DropdownBtn>
            </div>
            <div style={{ padding: '24px 20px', display: 'flex', justifyContent: 'center' }}>
              <PieChart />
            </div>
          </div>
        </div>

        {/* Row 2: Projects By Stage area chart */}
        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <span style={cardTitleStyle}>Projects By Stage</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <DropdownBtn>{areaPipeline}</DropdownBtn>
              <DropdownBtn>{areaFilter}</DropdownBtn>
            </div>
          </div>
          <div style={{ padding: '20px 20px 10px' }}>
            <AreaChart />
          </div>
        </div>

        {/* Row 3: Lost Deals + Won Deals */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>

          {/* Lost Deals Stage */}
          <div style={{ ...cardStyle, flex: '1 1 300px', minWidth: 260 }}>
            <div style={{ ...cardHeaderStyle, flexWrap: 'wrap', gap: 8 }}>
              <span style={cardTitleStyle}>Deals perdus — étape</span>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <DropdownBtn>{lostPipeline}</DropdownBtn>
                <DropdownBtn>{lostFilter}</DropdownBtn>
              </div>
            </div>
            <div style={{ padding: '20px' }}>
              <HorizontalBarChart data={lostDeals} color={ACCENT} maxVal={550} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, paddingLeft: 102, fontSize: 11, color: TEXT_MID }}>
                {[0, 100, 200, 300, 400, 500].map(v => (
                  <span key={v}>{v}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Won Deals Stage */}
          <div style={{ ...cardStyle, flex: '1 1 300px', minWidth: 260 }}>
            <div style={{ ...cardHeaderStyle, flexWrap: 'wrap', gap: 8 }}>
              <span style={cardTitleStyle}>Deals gagnés — étape</span>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <DropdownBtn>{wonPipeline}</DropdownBtn>
                <DropdownBtn>{wonFilter}</DropdownBtn>
              </div>
            </div>
            <div style={{ padding: '20px' }}>
              <HorizontalBarChart data={wonDeals} color={SUCCESS} maxVal={500} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, paddingLeft: 102, fontSize: 11, color: TEXT_MID }}>
                {[0, 100, 200, 300, 400].map(v => (
                  <span key={v}>{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

function CompanyIcon({ company, idx }: { company: string; idx: number }) {
  const colors = [
    { bg: '#1B2850', text: '#F59E0B' },
    { bg: '#FF6B35', text: '#fff' },
    { bg: '#2D9B6A', text: '#fff' },
    { bg: '#4472CA', text: '#fff' },
    { bg: '#1F2020', text: '#fff' },
  ]
  const c = colors[idx % colors.length]
  const letter = company.charAt(0)
  return (
    <div style={{
      width: 28, height: 28, borderRadius: '50%', backgroundColor: c.bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 11, fontWeight: 700, color: c.text, flexShrink: 0,
    }}>
      {letter}
    </div>
  )
}
