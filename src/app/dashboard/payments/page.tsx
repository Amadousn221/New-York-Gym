'use client'

import { useState, useRef, useEffect, type CSSProperties } from 'react'
import Link from 'next/link'
import {
  Search, ArrowUpDown, Filter, Download, RefreshCw,
  LayoutGrid, ChevronDown, ChevronLeft, ChevronRight,
  MoreVertical, Eye, Trash2, CalendarDays,
} from 'lucide-react'

const ACCENT = '#E41F07'
const MANAGE_COL = 'rgb(53, 56, 205)'
const MANAGE_COL_BG = 'rgb(234, 237, 247)'
const BORDER = 'rgb(226, 232, 240)'
const BORDER_LIGHT = 'rgb(232, 232, 232)'
const BG = 'rgb(247, 248, 249)'
const TEXT_DARK = 'rgb(31, 32, 32)'
const TEXT_MID = 'rgb(112, 112, 112)'
const TH_BG = 'rgb(247, 248, 249)'
const SHADOW = 'rgba(219, 219, 219, 0.25) 0px 4px 4px 0px'

interface Payment {
  invoiceId: string
  client: string
  amount: string
  dueDate: string
  paymentMethod: 'Cash' | 'Credit'
  transactionId: string
  companyColor: string
  companyLetter: string
}

const payments: Payment[] = [
  { invoiceId: '#1254058', client: 'NovaWave LLC',       amount: '$2500', dueDate: '', paymentMethod: 'Cash',   transactionId: 'TXNID1234567890',  companyColor: '#1B2850', companyLetter: 'N' },
  { invoiceId: '#1254057', client: 'BlueSky Industries', amount: '$1450', dueDate: '', paymentMethod: 'Credit', transactionId: 'TXNID9876543210',  companyColor: '#FF6B35', companyLetter: 'B' },
  { invoiceId: '#1254056', client: 'Silver Hawk',        amount: '$2100', dueDate: '', paymentMethod: 'Cash',   transactionId: 'TXNID2468135790',  companyColor: '#2D9B6A', companyLetter: 'S' },
  { invoiceId: '#1254055', client: 'Summit Peak',        amount: '$4000', dueDate: '', paymentMethod: 'Credit', transactionId: 'TXNID1357924680',  companyColor: '#4472CA', companyLetter: 'S' },
  { invoiceId: '#1254054', client: 'RiverStone Ventur',  amount: '$2120', dueDate: '', paymentMethod: 'Cash',   transactionId: 'TXNID0123456789',  companyColor: '#1F2020', companyLetter: 'R' },
  { invoiceId: '#1254053', client: 'CoastalStar Co.',    amount: '$3500', dueDate: '', paymentMethod: 'Credit', transactionId: 'TXNIDABCDE12345',  companyColor: '#E41F07', companyLetter: 'C' },
  { invoiceId: '#1254052', client: 'HarborView',         amount: '$1230', dueDate: '', paymentMethod: 'Cash',   transactionId: 'TXNID54321XYZ789', companyColor: '#4472CA', companyLetter: 'H' },
  { invoiceId: '#1254051', client: 'Golden Gate Ltd',    amount: '$3125', dueDate: '', paymentMethod: 'Credit', transactionId: 'TXNIDQWERTY0987',  companyColor: '#F9B801', companyLetter: 'G' },
  { invoiceId: '#1254050', client: 'Redwood Inc',        amount: '$4180', dueDate: '', paymentMethod: 'Cash',   transactionId: 'TXNID98765ASDF43', companyColor: '#2D9B6A', companyLetter: 'R' },
  { invoiceId: '#1254049', client: 'NovaWave LLC',       amount: '$5000', dueDate: '', paymentMethod: 'Cash',   transactionId: 'TXNID1A2B3C4D5E6', companyColor: '#1B2850', companyLetter: 'N' },
]

const columns = ['N° Facture', 'Client', 'Montant', 'Date échéance', 'Mode de paiement', 'ID Transaction', 'Action']

const toolbarBtn: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 6,
  backgroundColor: '#fff', border: `0.67px solid ${BORDER}`,
  borderRadius: 5, padding: '8px 10px', fontSize: 14, fontWeight: 400,
  color: TEXT_DARK, cursor: 'pointer', whiteSpace: 'nowrap',
  boxShadow: SHADOW, fontFamily: '"Golos Text", sans-serif',
}

const iconOnlyBtn: CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: 34, height: 34, backgroundColor: '#fff',
  border: `0.67px solid ${BORDER}`, borderRadius: 5,
  cursor: 'pointer', boxShadow: SHADOW, flexShrink: 0,
}

export default function PaymentsPage() {
  const [search, setSearch] = useState('')
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [allSelected, setAllSelected] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set())
      setAllSelected(false)
    } else {
      setSelected(new Set(payments.map((_, i) => i)))
      setAllSelected(true)
    }
  }

  function toggleRow(idx: number) {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  const filtered = payments.filter(p =>
    search === '' ||
    p.client.toLowerCase().includes(search.toLowerCase()) ||
    p.invoiceId.includes(search) ||
    p.transactionId.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

      {/* Page header */}
      <div style={{
        backgroundColor: '#fff', borderBottom: `1px solid ${BORDER}`,
        padding: '14px 24px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: TEXT_DARK, margin: 0, lineHeight: '24px' }}>Paiements</h1>
            <span style={{
              backgroundColor: ACCENT, color: '#fff',
              fontSize: 11, fontWeight: 600, padding: '2px 7px',
              borderRadius: 4, lineHeight: 1.5,
            }}>125</span>
          </div>
          <nav style={{ marginTop: 4 }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0, padding: 0, listStyle: 'none' }}>
              <li><Link href="/dashboard/leads-dashboard" style={{ color: TEXT_MID, textDecoration: 'none', fontSize: 13 }}>Accueil</Link></li>
              <li style={{ color: TEXT_MID, fontSize: 13 }}>›</li>
              <li style={{ color: TEXT_DARK, fontSize: 13 }}>Paiements</li>
            </ol>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={toolbarBtn}>
            <Download size={14} color={TEXT_MID} />
            Exporter
            <ChevronDown size={13} color={TEXT_MID} />
          </button>
          <button style={iconOnlyBtn}><RefreshCw size={15} color={TEXT_MID} /></button>
          <button style={iconOnlyBtn}><LayoutGrid size={15} color={TEXT_MID} /></button>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 24, flex: 1 }}>
        <div style={{
          backgroundColor: '#fff', border: `1px solid ${BORDER}`,
          borderRadius: 8, overflow: 'hidden',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        }}>
          {/* Toolbar row 1: search */}
          <div style={{ padding: '16px 20px 0' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              border: `0.67px solid ${BORDER_LIGHT}`, borderRadius: 6,
              padding: '0 12px', width: 220, height: 38, backgroundColor: '#fff',
            }}>
              <Search size={15} color={TEXT_MID} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher"
                style={{
                  border: 'none', background: 'none', outline: 'none',
                  fontSize: 14, color: TEXT_DARK, width: '100%',
                  fontFamily: '"Golos Text", sans-serif',
                }}
              />
            </div>
          </div>

          {/* Toolbar row 2: sort, date, filter, manage columns */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 20px', gap: 8, flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button style={toolbarBtn}>
                <ArrowUpDown size={14} color={TEXT_MID} />
                Trier par
                <ChevronDown size={13} color={TEXT_MID} />
              </button>
              <button style={toolbarBtn}>
                <CalendarDays size={14} color={TEXT_MID} />
                30 June 26 - 30 June 2
                <ChevronDown size={13} color={TEXT_MID} />
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button style={toolbarBtn}>
                <Filter size={14} color={TEXT_MID} />
                Filtrer
                <ChevronDown size={13} color={TEXT_MID} />
              </button>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                backgroundColor: MANAGE_COL_BG, border: 'none',
                borderRadius: 5, padding: '8px 10px', fontSize: 14,
                color: MANAGE_COL, cursor: 'pointer', whiteSpace: 'nowrap',
                fontFamily: '"Golos Text", sans-serif', fontWeight: 400,
              }}>
                <LayoutGrid size={14} color={MANAGE_COL} />
                Gérer les colonnes
              </button>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'auto' }}>
              <thead>
                <tr>
                  {/* Checkbox column */}
                  <th style={{ ...thStyle, width: 48, textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={toggleAll}
                      style={{ cursor: 'pointer', accentColor: ACCENT }}
                    />
                  </th>
                  {columns.slice(0, -1).map(col => (
                    <th key={col} style={thStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        {col}
                        <ArrowUpDown size={13} color={TEXT_MID} style={{ flexShrink: 0 }} />
                      </div>
                    </th>
                  ))}
                  <th style={{ ...thStyle }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: selected.has(idx) ? 'rgba(228,31,7,0.03)' : '#fff' }}>
                    <td style={{ ...tdStyle, textAlign: 'center', width: 48 }}>
                      <input
                        type="checkbox"
                        checked={selected.has(idx)}
                        onChange={() => toggleRow(idx)}
                        style={{ cursor: 'pointer', accentColor: ACCENT }}
                      />
                    </td>
                    <td style={{ ...tdStyle, color: TEXT_DARK, fontWeight: 500 }}>
                      {row.invoiceId}
                    </td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                          backgroundColor: row.companyColor,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 12, fontWeight: 700, color: '#fff',
                        }}>
                          {row.companyLetter}
                        </div>
                        <span style={{ color: TEXT_DARK }}>{row.client}</span>
                      </div>
                    </td>
                    <td style={{ ...tdStyle, color: TEXT_DARK, fontWeight: 500 }}>{row.amount}</td>
                    <td style={tdStyle}>{row.dueDate}</td>
                    <td style={tdStyle}>{row.paymentMethod}</td>
                    <td style={{ ...tdStyle, color: TEXT_MID, fontFamily: 'monospace', fontSize: 13 }}>
                      {row.transactionId}
                    </td>
                    <td style={tdStyle}>
                      <div style={{ position: 'relative' }} ref={openMenu === idx ? menuRef : undefined}>
                        <button
                          onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                          style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            color: TEXT_MID, padding: 4, display: 'flex',
                            borderRadius: 4,
                          }}
                        >
                          <MoreVertical size={17} />
                        </button>
                        {openMenu === idx && (
                          <div style={{
                            position: 'absolute', right: 0, top: '100%', zIndex: 20,
                            backgroundColor: '#fff', border: `1px solid ${BORDER}`,
                            borderRadius: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            minWidth: 130, overflow: 'hidden',
                          }}>
                            <button
                              style={dropdownItem}
                              onClick={() => setOpenMenu(null)}
                            >
                              <Eye size={14} />
                              Aperçu
                            </button>
                            <button
                              style={{ ...dropdownItem, color: ACCENT }}
                              onClick={() => setOpenMenu(null)}
                            >
                              <Trash2 size={14} />
                              Supprimer
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 20px', borderTop: `0.67px solid ${BORDER}`,
            flexWrap: 'wrap', gap: 8,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: TEXT_MID, fontSize: 14 }}>
              <span>Afficher</span>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                border: `0.67px solid ${BORDER}`, borderRadius: 5, padding: '4px 8px',
                fontSize: 12, color: TEXT_DARK, backgroundColor: '#fff', cursor: 'pointer',
                boxShadow: SHADOW,
              }}>
                10 <ChevronDown size={12} color={TEXT_MID} />
              </button>
              <span>entrées</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <button style={pageBtn(false)}><ChevronLeft size={15} /></button>
              <button style={pageBtn(true)}>1</button>
              <button style={pageBtn(false)}><ChevronRight size={15} /></button>
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
    width: 32, height: 32, borderRadius: 5,
    border: active ? 'none' : `0.67px solid ${BORDER}`,
    backgroundColor: active ? ACCENT : '#fff',
    color: active ? '#fff' : TEXT_DARK,
    cursor: 'pointer', fontSize: 14, fontWeight: active ? 600 : 400,
    boxShadow: active ? 'none' : SHADOW,
  }
}

const thStyle: CSSProperties = {
  padding: '8px 16px', fontSize: 13, fontWeight: 600,
  color: 'rgba(0, 0, 0, 0.88)', textAlign: 'left',
  backgroundColor: TH_BG, whiteSpace: 'nowrap',
  borderBottom: `0.67px solid rgb(226, 228, 230)`,
}

const tdStyle: CSSProperties = {
  padding: '16px 8px 16px 16px', fontSize: 14,
  color: TEXT_MID, borderBottom: `0.67px solid rgb(226, 228, 230)`,
  verticalAlign: 'middle',
}

const dropdownItem: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8,
  width: '100%', padding: '9px 14px',
  background: 'none', border: 'none',
  fontSize: 13, color: TEXT_DARK,
  cursor: 'pointer', textAlign: 'left',
  fontFamily: '"Golos Text", sans-serif',
}
