'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'
import {
  Search, Upload, ChevronDown, RefreshCw, Settings,
  ListFilter, ArrowUpDown, Calendar, Columns2, Star, ChevronsUpDown,
  ChevronLeft, ChevronRight,
} from 'lucide-react'

const ACCENT = '#E41F07'
const BORDER = 'rgb(226, 228, 230)'
const TEXT_DARK = 'rgba(0, 0, 0, 0.88)'
const TEXT_MID = '#707070'
const BG = '#F7F8F9'

interface Transaction {
  id: number
  type: string
  amount: string
  date: string
  paymentType: string
  status: 'Completed' | 'Cancel' | 'Complété' | 'Annulé'
  starred: boolean
}

const allRows: Transaction[] = [
  { id: 1, type: 'Recharge portefeuille', amount: '+$650', date: '25 Sep 2025, 13:22', paymentType: 'Paypal', status: 'Complété', starred: false },
  { id: 2, type: 'Achat',                 amount: '-350',  date: '27 Sep 2025, 16:18', paymentType: 'Cash',   status: 'Annulé',   starred: false },
  { id: 3, type: 'Remboursement',         amount: '+$100', date: '29 Sep 2025, 10:08', paymentType: 'Paypal', status: 'Complété', starred: false },
  { id: 4, type: 'Recharge portefeuille', amount: '+$650', date: '05 Oct 2025, 09:43', paymentType: 'Cash',   status: 'Complété', starred: false },
  { id: 5, type: 'Recharge portefeuille', amount: '+$650', date: '17 Oct 2025, 01:22', paymentType: 'Paypal', status: 'Annulé',   starred: false },
  { id: 6, type: 'Recharge portefeuille', amount: '+$650', date: '22 Oct 2025, 18:32', paymentType: 'Cash',   status: 'Complété', starred: false },
  { id: 7, type: 'Remboursement',         amount: '+$500', date: '05 Mai 2025, 10:45', paymentType: 'Cash',   status: 'Complété', starred: false },
  { id: 8, type: 'Recharge portefeuille', amount: '+$380', date: '03 Mai 2025, 09:45', paymentType: 'Cash',   status: 'Complété', starred: false },
  { id: 9, type: 'Remboursement',         amount: '+$290', date: '15 Fév 2025, 14:02', paymentType: 'PayPal', status: 'Complété', starred: false },
  { id: 10, type: 'Recharge portefeuille', amount: '+$380', date: '25 Fév 2025, 13:22', paymentType: 'Cash',  status: 'Complété', starred: false },
]

const toolBtn: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 6,
  backgroundColor: '#fff', border: `0.67px solid rgb(226, 232, 240)`,
  borderRadius: 5, padding: '7px 12px', fontSize: 13, color: TEXT_DARK,
  cursor: 'pointer', boxShadow: 'rgba(219,219,219,0.25) 0px 4px 4px',
  fontFamily: '"Golos Text", sans-serif',
}

export default function MembershipTransactionsPage() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [starred, setStarred] = useState<Set<number>>(new Set())
  const [page, setPage] = useState(1)
  const [perPage] = useState(10)

  const filtered = allRows.filter(r =>
    r.type.toLowerCase().includes(search.toLowerCase()) ||
    r.paymentType.toLowerCase().includes(search.toLowerCase()) ||
    r.status.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const pageRows = filtered.slice((page - 1) * perPage, page * perPage)

  function toggleSelect(id: number) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function toggleAll() {
    if (selected.size === pageRows.length) setSelected(new Set())
    else setSelected(new Set(pageRows.map(r => r.id)))
  }

  function toggleStar(id: number) {
    setStarred(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const thStyle: CSSProperties = {
    backgroundColor: 'rgb(247, 248, 249)',
    color: TEXT_MID,
    fontSize: 13, fontWeight: 600,
    padding: '8px 16px',
    borderBottom: `0.67px solid ${BORDER}`,
    textAlign: 'left', whiteSpace: 'nowrap',
  }

  const tdStyle: CSSProperties = {
    padding: '16px',
    fontSize: 14, color: TEXT_DARK,
    borderBottom: `0.67px solid ${BORDER}`,
    verticalAlign: 'middle',
  }

  return (
    <div style={{ padding: 24, backgroundColor: BG, flex: 1, fontFamily: '"Golos Text", sans-serif' }}>

      {/* Page header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h4 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#1F2020' }}>
              Transactions d&apos;adhésion
            </h4>
            <span style={{
              backgroundColor: ACCENT, color: '#fff',
              fontSize: 11, fontWeight: 600, borderRadius: 4,
              padding: '1px 8px', lineHeight: '18px',
            }}>152</span>
          </div>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: TEXT_MID }}>
            <span style={{ cursor: 'pointer' }}>Accueil</span>
            <span style={{ margin: '0 6px' }}>›</span>
            <span style={{ color: '#1F2020', fontWeight: 500 }}>Transactions d&apos;adhésion</span>
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={toolBtn}>
            <Upload size={14} color={TEXT_MID} />
            Export
            <ChevronDown size={13} color={TEXT_MID} />
          </button>
          <button style={{ ...toolBtn, padding: '7px', gap: 0 }}>
            <RefreshCw size={15} color={TEXT_MID} />
          </button>
          <button style={{ ...toolBtn, padding: '7px', gap: 0 }}>
            <Settings size={15} color={TEXT_MID} />
          </button>
        </div>
      </div>

      {/* Search */}
      <div style={{
        backgroundColor: '#fff', border: `0.67px solid rgb(226, 232, 240)`,
        borderRadius: 5, padding: '10px 16px', marginBottom: 12,
        boxShadow: 'rgba(219,219,219,0.25) 0px 4px 4px',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          border: `1px solid #E8E8E8`, borderRadius: 5,
          padding: '7px 12px', width: 220,
        }}>
          <Search size={14} color={TEXT_MID} />
          <input
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1) }}
            placeholder="Rechercher"
            style={{ border: 'none', background: 'none', outline: 'none', fontSize: 13, color: '#1F2020', width: '100%', fontFamily: '"Golos Text", sans-serif' }}
          />
        </div>
      </div>

      {/* Filter toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={toolBtn}>
            <ListFilter size={14} color={TEXT_MID} />
            Filtrer
            <ChevronDown size={13} color={TEXT_MID} />
          </button>
          <button style={toolBtn}>
            <Calendar size={14} color={TEXT_MID} />
            30 June 26 - 30 June 2
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={toolBtn}>
            <ArrowUpDown size={14} color={TEXT_MID} />
            Trier par
            <ChevronDown size={13} color={TEXT_MID} />
          </button>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 6,
            backgroundColor: 'rgb(234, 237, 247)', color: 'rgb(53, 56, 205)',
            border: 'none', borderRadius: 5, padding: '7px 12px',
            fontSize: 13, fontWeight: 500, cursor: 'pointer',
            fontFamily: '"Golos Text", sans-serif',
          }}>
            <Columns2 size={14} color="rgb(53, 56, 205)" />
            Gérer les colonnes
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={{
        backgroundColor: '#fff', border: `0.67px solid rgb(226, 232, 240)`,
        borderRadius: 5, overflow: 'hidden',
        boxShadow: 'rgba(219,219,219,0.25) 0px 4px 4px',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...thStyle, width: 40, textAlign: 'center' }}>
                <input
                  type="checkbox"
                  checked={selected.size === pageRows.length && pageRows.length > 0}
                  onChange={toggleAll}
                  style={{ cursor: 'pointer', accentColor: ACCENT }}
                />
              </th>
              <th style={{ ...thStyle, width: 40 }} />
              <th style={thStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  Type <ChevronsUpDown size={12} color={TEXT_MID} />
                </div>
              </th>
              <th style={thStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  Montant <ChevronsUpDown size={12} color={TEXT_MID} />
                </div>
              </th>
              <th style={thStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  Date <ChevronsUpDown size={12} color={TEXT_MID} />
                </div>
              </th>
              <th style={thStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  Mode de paiement <ChevronsUpDown size={12} color={TEXT_MID} />
                </div>
              </th>
              <th style={thStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  Statut <ChevronsUpDown size={12} color={TEXT_MID} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map(row => (
              <tr key={row.id} style={{ backgroundColor: selected.has(row.id) ? 'rgb(253,233,233)' : '#fff' }}>
                <td style={{ ...tdStyle, textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={selected.has(row.id)}
                    onChange={() => toggleSelect(row.id)}
                    style={{ cursor: 'pointer', accentColor: ACCENT }}
                  />
                </td>
                <td style={{ ...tdStyle, textAlign: 'center' }}>
                  <button
                    onClick={() => toggleStar(row.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
                  >
                    <Star
                      size={16}
                      color={starred.has(row.id) ? '#F9B801' : '#CED4DA'}
                      fill={starred.has(row.id) ? '#F9B801' : 'none'}
                    />
                  </button>
                </td>
                <td style={tdStyle}>{row.type}</td>
                <td style={tdStyle}>{row.amount}</td>
                <td style={tdStyle}>{row.date}</td>
                <td style={tdStyle}>{row.paymentType}</td>
                <td style={tdStyle}>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: (row.status === 'Completed' || row.status === 'Complété') ? 'rgb(26, 190, 23)' : 'rgb(239, 30, 30)',
                    color: '#fff',
                    fontSize: 12, fontWeight: 500,
                    borderRadius: 6, padding: '5px 6px',
                    lineHeight: 1,
                  }}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 16px', borderTop: `0.67px solid ${BORDER}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: TEXT_DARK }}>
            <span>Afficher</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, border: `0.67px solid ${BORDER}`, borderRadius: 5, padding: '4px 8px', backgroundColor: '#fff' }}>
              <span>10</span>
              <ChevronDown size={12} color={TEXT_MID} />
            </div>
            <span>entrées</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              style={{
                width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `0.67px solid ${BORDER}`, borderRadius: 5, backgroundColor: '#fff',
                cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.4 : 1,
              }}
            >
              <ChevronLeft size={14} color={TEXT_MID} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => setPage(p)}
                style={{
                  width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `0.67px solid ${page === p ? ACCENT : BORDER}`,
                  borderRadius: 5,
                  backgroundColor: page === p ? ACCENT : '#fff',
                  color: page === p ? '#fff' : TEXT_DARK,
                  fontSize: 13, fontWeight: page === p ? 600 : 400, cursor: 'pointer',
                  fontFamily: '"Golos Text", sans-serif',
                }}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              style={{
                width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `0.67px solid ${BORDER}`, borderRadius: 5, backgroundColor: '#fff',
                cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.4 : 1,
              }}
            >
              <ChevronRight size={14} color={TEXT_MID} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
