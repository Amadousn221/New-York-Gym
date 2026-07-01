'use client'

import { useState, useRef, useEffect, type CSSProperties } from 'react'
import Link from 'next/link'
import {
  DollarSign, Briefcase, CheckCircle, XCircle,
  TrendingUp, TrendingDown, Calendar, RefreshCw,
  MoreVertical, Pencil, Trash2, ArrowUpDown,
  ChevronLeft, ChevronRight,
} from 'lucide-react'

const PRIMARY = 'rgb(86, 20, 150)'
const PRIMARY_LIGHT = 'rgba(86, 20, 150, 0.1)'
const PRIMARY_LIGHTER = '#EDE9F7'
const SUCCESS = '#1ABE17'
const DANGER = '#EF1E1E'
const WARNING = '#FFA201'
const INFO = '#00ADEF'
const BORDER = '#E8E8E8'
const BG = '#F7F8F9'
const TEXT_DARK = '#1F2020'
const TEXT_MID = '#707070'

interface Deal {
  name: string
  contact: string
  value: string
  closeDate: string
  owner: string
  status: string
}

const deals: Deal[] = []

const activities = [
  { initials: 'DR', color: PRIMARY,  bg: PRIMARY_LIGHTER, text: 'Darlee Robertson a créé le deal Abonnement Premium',     time: 'Il y a 1h' },
  { initials: 'SR', color: SUCCESS,  bg: '#E8F5E9',        text: 'Sharon Roy a mis à jour le deal Licence Entreprise',     time: 'Il y a 2h' },
  { initials: 'VL', color: WARNING,  bg: '#FFF3E0',        text: 'Vaughan Lewis a clôturé le deal Contrat Annuel',         time: 'Il y a 3h' },
  { initials: 'JB', color: DANGER,   bg: '#FDE9E9',        text: 'Jessica Burns a perdu le deal Pack Marketing',           time: 'Il y a 5h' },
  { initials: 'CL', color: INFO,     bg: '#E0F5FF',        text: 'Caroline Lacroix a gagné le deal Solution Cloud',        time: 'Il y a 8h' },
]

const performers = [
  { initials: 'JI', color: PRIMARY,  bg: PRIMARY_LIGHTER, name: 'Jackson Inno',   deals: 156, value: '$1,24,502', pct: 100 },
  { initials: 'GH', color: SUCCESS,  bg: '#E8F5E9',        name: 'Guillory Hunt',  deals: 124, value: '$98,234',   pct: 80  },
  { initials: 'AC', color: WARNING,  bg: '#FFF3E0',        name: 'Abigail Clarke', deals: 98,  value: '$76,891',   pct: 63  },
  { initials: 'CJ', color: DANGER,   bg: '#FDE9E9',        name: 'Carla Jenkins',  deals: 87,  value: '$68,432',   pct: 56  },
  { initials: 'AF', color: INFO,     bg: '#E0F5FF',        name: 'Angela Foster',  deals: 72,  value: '$54,219',   pct: 46  },
]

const chartBars = [
  { month: 'Jan', pct: 60 }, { month: 'Fév', pct: 75 }, { month: 'Mar', pct: 55 },
  { month: 'Avr', pct: 80 }, { month: 'Mai', pct: 70 }, { month: 'Jun', pct: 90 },
  { month: 'Jul', pct: 65 }, { month: 'Aoû', pct: 85 }, { month: 'Sep', pct: 75 },
  { month: 'Oct', pct: 95 }, { month: 'Nov', pct: 60 }, { month: 'Déc', pct: 80 },
]

const kpiCards = [
  { icon: DollarSign, iconBg: PRIMARY_LIGHTER, iconColor: PRIMARY,  value: '$4,23,742', label: 'Chiffre d\'affaires total', trend: '+3.5%',  up: true  },
  { icon: Briefcase,  iconBg: '#FFF3E0',        iconColor: WARNING,  value: '1,287',     label: 'Total des deals',           trend: '+12%',   up: true  },
  { icon: CheckCircle,iconBg: '#E8F5E9',        iconColor: SUCCESS,  value: '483',       label: 'Deals gagnés',              trend: '+8.2%',  up: true  },
  { icon: XCircle,    iconBg: '#FDE9E9',        iconColor: DANGER,   value: '246',       label: 'Deals perdus',              trend: '-5.1%',  up: false },
]

function statusStyle(status: string): CSSProperties {
  switch (status) {
    case 'Gagné':      return { backgroundColor: SUCCESS,        color: '#fff' }
    case 'En cours':   return { backgroundColor: PRIMARY_LIGHTER, color: PRIMARY }
    case 'En attente': return { backgroundColor: '#FFF3E0',       color: WARNING }
    case 'Perdu':      return { backgroundColor: '#FDE9E9',       color: DANGER }
    default:           return { backgroundColor: BG,              color: TEXT_MID }
  }
}

export default function DealsDashboardPage() {
  const [activeTab, setActiveTab] = useState('Revenus')
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

      {/* Page header */}
      <div style={{
        backgroundColor: '#fff', borderBottom: `1px solid ${BORDER}`,
        padding: '12px 24px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: TEXT_DARK, margin: 0 }}>Tableau de bord</h1>
            <span style={{ backgroundColor: PRIMARY_LIGHTER, color: PRIMARY, fontSize: 12, fontWeight: 500, padding: '4px 8px', borderRadius: 6 }}>
              2025
            </span>
          </div>
          <nav style={{ marginTop: 4 }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0, padding: 0, listStyle: 'none' }}>
              <li><Link href="/dashboard/leads-dashboard" style={{ color: TEXT_MID, textDecoration: 'none', fontSize: 13 }}>Accueil</Link></li>
              <li style={{ color: TEXT_MID, fontSize: 13 }}>›</li>
              <li style={{ color: TEXT_DARK, fontSize: 13 }}>Tableau de bord</li>
            </ol>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={outlineBtn}><Calendar size={14} />Jan 2025 - Déc 2025</button>
          <button style={iconBtn}><RefreshCw size={16} /></button>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 24, flex: 1 }}>

        {/* KPI Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
          {kpiCards.map(card => {
            const Icon = card.icon
            const TrendIcon = card.up ? TrendingUp : TrendingDown
            return (
              <div key={card.label} style={{
                backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 8,
                padding: 20, flex: '1 1 200px', display: 'flex', flexDirection: 'column',
                gap: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 8,
                    backgroundColor: card.iconBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} color={card.iconColor} />
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    color: card.up ? SUCCESS : DANGER, fontSize: 12, fontWeight: 500,
                  }}>
                    <TrendIcon size={14} />
                    {card.trend}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: TEXT_DARK, lineHeight: 1.2 }}>{card.value}</div>
                  <div style={{ fontSize: 13, color: TEXT_MID, marginTop: 2 }}>{card.label}</div>
                </div>
                <div style={{ fontSize: 11, color: TEXT_MID }}>vs mois dernier</div>
              </div>
            )
          })}
        </div>

        {/* Charts row */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>

          {/* Bar chart card */}
          <div style={{ ...cardStyle, flex: 3, minWidth: 280, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: TEXT_DARK }}>Aperçu des deals</div>
                <div style={{ fontSize: 12, color: TEXT_MID, marginTop: 2 }}>Jan - Déc 2025</div>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {['Revenus', 'Deals', 'Contacts'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontSize: 13, fontWeight: 500, padding: '6px 10px',
                      color: activeTab === tab ? PRIMARY : TEXT_MID,
                      borderBottom: activeTab === tab ? `2px solid ${PRIMARY}` : '2px solid transparent',
                      transition: 'color 0.15s, border-color 0.15s',
                    }}
                  >{tab}</button>
                ))}
              </div>
            </div>

            {/* Bars */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 180, paddingBottom: 0 }}>
              {chartBars.map((bar, i) => (
                <div key={bar.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{
                    width: '100%',
                    height: `${bar.pct}%`,
                    backgroundColor: i === 9 ? PRIMARY : PRIMARY_LIGHT,
                    borderRadius: '4px 4px 0 0',
                    transition: 'background-color 0.2s',
                  }} />
                </div>
              ))}
            </div>
            {/* X-axis labels */}
            <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
              {chartBars.map(bar => (
                <div key={bar.month} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: TEXT_MID }}>{bar.month}</div>
              ))}
            </div>
          </div>

          {/* Donut chart card */}
          <div style={{ ...cardStyle, flex: 2, minWidth: 240, padding: 20 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: TEXT_DARK, marginBottom: 16 }}>Deals par étape</div>

            {/* Donut */}
            <div style={{
              width: 160, height: 160, borderRadius: '50%',
              background: `conic-gradient(${PRIMARY} 0% 38%, ${WARNING} 38% 66%, ${DANGER} 66% 85%, ${INFO} 85% 100%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <div style={{
                width: 100, height: 100, borderRadius: '50%', backgroundColor: '#fff',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 11, color: TEXT_MID }}>Total</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: TEXT_DARK }}>1,287</span>
              </div>
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { color: PRIMARY,  label: 'Gagnés',     pct: '38%' },
                { color: WARNING,  label: 'En cours',   pct: '28%' },
                { color: DANGER,   label: 'Perdus',     pct: '19%' },
                { color: INFO,     label: 'En attente', pct: '15%' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: item.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: TEXT_MID }}>{item.label}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 500, color: TEXT_DARK }}>{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Deals Table */}
        <div style={{ ...cardStyle, marginBottom: 24 }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '16px 20px', borderBottom: `1px solid ${BORDER}`,
          }}>
            <span style={{ fontSize: 16, fontWeight: 600, color: TEXT_DARK }}>Deals récents</span>
            <button style={{ ...outlineBtn, color: PRIMARY, borderColor: PRIMARY }}>Voir tous les deals</button>
          </div>
          {deals.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px', color: TEXT_MID }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: TEXT_DARK, margin: '0 0 4px' }}>Aucun deal</p>
              <p style={{ fontSize: 14, margin: 0 }}>Les deals créés apparaîtront ici.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: BG }}>
                    {['Nom du deal', 'Contact', 'Valeur', 'Date clôture', 'Propriétaire', 'Statut', 'Action'].map((col, i) => (
                      <th key={col} style={thStyle}>
                        {i < 6
                          ? <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>{col}<ArrowUpDown size={13} color="#9ca3af" /></div>
                          : col
                        }
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {deals.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < deals.length - 1 ? `1px solid ${BORDER}` : 'none', backgroundColor: '#fff' }}>
                      <td style={tdStyle}><span style={{ color: PRIMARY, fontWeight: 500 }}>{row.name}</span></td>
                      <td style={tdStyle}>{row.contact}</td>
                      <td style={tdStyle}><strong>{row.value}</strong></td>
                      <td style={tdStyle}>{row.closeDate}</td>
                      <td style={tdStyle}>{row.owner}</td>
                      <td style={tdStyle}>
                        <span style={{ ...statusStyle(row.status), fontSize: 12, fontWeight: 500, padding: '4px 8px', borderRadius: 6, display: 'inline-block' }}>
                          {row.status}
                        </span>
                      </td>
                      <td style={tdStyle}>
                        <div style={{ position: 'relative' }} ref={openMenu === idx ? menuRef : undefined}>
                          <button
                            onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: TEXT_MID, padding: 4, display: 'flex' }}
                          >
                            <MoreVertical size={18} />
                          </button>
                          {openMenu === idx && (
                            <div style={{
                              position: 'absolute', right: 0, top: '100%', zIndex: 20,
                              backgroundColor: '#fff', border: `1px solid ${BORDER}`,
                              borderRadius: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                              minWidth: 120, overflow: 'hidden',
                            }}>
                              <button style={dropdownItem} onClick={() => setOpenMenu(null)}><Pencil size={14} />Modifier</button>
                              <button style={{ ...dropdownItem, color: DANGER }} onClick={() => setOpenMenu(null)}><Trash2 size={14} />Supprimer</button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 20px', borderTop: `1px solid ${BORDER}`, flexWrap: 'wrap', gap: 8,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: TEXT_MID }}>
              <span>Afficher</span>
              <select style={{ border: `1px solid ${BORDER}`, borderRadius: 4, padding: '4px 8px', fontSize: 13, color: TEXT_DARK, backgroundColor: '#fff', cursor: 'pointer', outline: 'none' }}>
                <option>10</option><option>25</option><option>50</option>
              </select>
              <span>entrées</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <button style={pageBtn(false)}><ChevronLeft size={16} /></button>
              <button style={pageBtn(true)}>1</button>
              <button style={pageBtn(false)}><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>

          {/* Activity feed */}
          <div style={{ ...cardStyle, flex: 1, minWidth: 280 }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${BORDER}` }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: TEXT_DARK }}>Activité récente</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {activities.map((a, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 20px' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                      backgroundColor: a.bg, color: a.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 700,
                    }}>{a.initials}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, color: TEXT_DARK, lineHeight: 1.4 }}>{a.text}</div>
                      <div style={{ fontSize: 11, color: TEXT_MID, marginTop: 3 }}>{a.time}</div>
                    </div>
                  </div>
                  {i < activities.length - 1 && <div style={{ height: 1, backgroundColor: BORDER, margin: '0 20px' }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Top performers */}
          <div style={{ ...cardStyle, flex: 1, minWidth: 280 }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${BORDER}` }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: TEXT_DARK }}>Meilleures performances</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {performers.map((p, i) => (
                <div key={i}>
                  <div style={{ padding: '12px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                        backgroundColor: p.bg, color: p.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 13, fontWeight: 700,
                      }}>{p.initials}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 500, color: TEXT_DARK }}>{p.name}</div>
                        <div style={{ fontSize: 12, color: TEXT_MID }}>{p.deals} deals</div>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: TEXT_DARK, flexShrink: 0 }}>{p.value}</div>
                    </div>
                    <div style={{ height: 6, backgroundColor: BG, borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${p.pct}%`, backgroundColor: PRIMARY, borderRadius: 3, transition: 'width 0.3s' }} />
                    </div>
                  </div>
                  {i < performers.length - 1 && <div style={{ height: 1, backgroundColor: BORDER, margin: '0 20px' }} />}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

function pageBtn(active: boolean): CSSProperties {
  return {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 32, height: 32, borderRadius: 4,
    border: active ? 'none' : `1px solid ${BORDER}`,
    backgroundColor: active ? PRIMARY : '#fff',
    color: active ? '#fff' : TEXT_MID,
    cursor: 'pointer', fontSize: 14, fontWeight: active ? 600 : 400,
  }
}

const outlineBtn: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 6,
  border: `1px solid ${BORDER}`, borderRadius: 6,
  backgroundColor: '#fff', color: TEXT_DARK,
  padding: '7px 12px', fontSize: 13,
  cursor: 'pointer', fontWeight: 400, whiteSpace: 'nowrap',
}

const iconBtn: CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  border: `1px solid ${BORDER}`, borderRadius: 6,
  backgroundColor: '#fff', color: TEXT_MID,
  width: 34, height: 34, cursor: 'pointer',
}

const thStyle: CSSProperties = {
  padding: '8px 16px', fontSize: 13, fontWeight: 600,
  color: 'rgba(0,0,0,0.88)', textAlign: 'left',
  borderBottom: '1px solid rgb(226,228,230)', whiteSpace: 'nowrap',
}

const tdStyle: CSSProperties = {
  padding: '14px 8px 14px 16px', fontSize: 14,
  color: TEXT_DARK, verticalAlign: 'middle',
}

const cardStyle: CSSProperties = {
  backgroundColor: '#fff', border: `1px solid ${BORDER}`,
  borderRadius: 8, overflow: 'hidden',
  boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
}

const dropdownItem: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8,
  width: '100%', padding: '8px 14px',
  background: 'none', border: 'none',
  fontSize: 13, color: TEXT_DARK,
  cursor: 'pointer', textAlign: 'left',
}
