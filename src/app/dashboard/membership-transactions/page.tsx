'use client'

import { useState, type CSSProperties } from 'react'
import {
  Search, Upload, ChevronDown, RefreshCw, Settings,
  ListFilter, ArrowUpDown, Calendar, Columns2, Star, ChevronsUpDown,
  ChevronLeft, ChevronRight, Plus, X, Receipt,
} from 'lucide-react'

const ACCENT = '#E41F07'
const BORDER = 'rgb(226, 228, 230)'
const TEXT_DARK = 'rgba(0, 0, 0, 0.88)'
const TEXT_MID = '#707070'
const BG = '#F7F8F9'

type Status = 'Complété' | 'Annulé'
type TxType = 'Recharge portefeuille' | 'Achat' | 'Remboursement'
type PayType = 'Paypal' | 'Cash' | 'Carte'

interface Transaction {
  id: number
  type: TxType
  amount: string
  date: string
  paymentType: PayType
  status: Status
  starred: boolean
}

const toolBtn: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 6,
  backgroundColor: '#fff', border: `0.67px solid rgb(226, 232, 240)`,
  borderRadius: 5, padding: '7px 12px', fontSize: 13, color: TEXT_DARK,
  cursor: 'pointer', boxShadow: 'rgba(219,219,219,0.25) 0px 4px 4px',
  fontFamily: '"Golos Text", sans-serif',
}

const inputStyle: CSSProperties = {
  width: '100%', padding: '8px 12px', fontSize: 14,
  border: `0.67px solid ${BORDER}`, borderRadius: 5,
  color: TEXT_DARK, backgroundColor: '#fff',
  outline: 'none', fontFamily: '"Golos Text", sans-serif',
  boxSizing: 'border-box',
}

const labelStyle: CSSProperties = {
  display: 'block', fontSize: 13, color: TEXT_MID, marginBottom: 4, fontWeight: 500,
}

function nowLabel() {
  return new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export default function MembershipTransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [starred, setStarred] = useState<Set<number>>(new Set())
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState<{ type: TxType; amount: string; paymentType: PayType; status: Status }>({
    type: 'Recharge portefeuille', amount: '', paymentType: 'Cash', status: 'Complété',
  })
  const [_idCounter, setIdCounter] = useState(1)

  const perPage = 10

  const filtered = transactions.filter(r =>
    r.type.toLowerCase().includes(search.toLowerCase()) ||
    r.paymentType.toLowerCase().includes(search.toLowerCase()) ||
    r.status.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const pageRows = filtered.slice((page - 1) * perPage, page * perPage)

  function addTransaction() {
    if (!form.amount.trim()) return
    const id = _idCounter
    setIdCounter(n => n + 1)
    setTransactions(prev => [
      {
        id,
        type: form.type,
        amount: form.amount.startsWith('+') || form.amount.startsWith('-') ? form.amount : `+${form.amount}`,
        date: nowLabel(),
        paymentType: form.paymentType,
        status: form.status,
        starred: false,
      },
      ...prev,
    ])
    setForm({ type: 'Recharge portefeuille', amount: '', paymentType: 'Cash', status: 'Complété' })
    setShowModal(false)
  }

  function toggleSelect(id: number) {
    setSelected(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })
  }

  function toggleAll() {
    if (selected.size === pageRows.length) setSelected(new Set())
    else setSelected(new Set(pageRows.map(r => r.id)))
  }

  function toggleStar(id: number) {
    setStarred(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })
  }

  function deleteSelected() {
    setTransactions(prev => prev.filter(r => !selected.has(r.id)))
    setSelected(new Set())
  }

  const thStyle: CSSProperties = {
    backgroundColor: 'rgb(247, 248, 249)', color: TEXT_MID, fontSize: 13, fontWeight: 600,
    padding: '8px 16px', borderBottom: `0.67px solid ${BORDER}`, textAlign: 'left', whiteSpace: 'nowrap',
  }
  const tdStyle: CSSProperties = {
    padding: '16px', fontSize: 14, color: TEXT_DARK, borderBottom: `0.67px solid ${BORDER}`, verticalAlign: 'middle',
  }

  return (
    <div style={{ padding: 24, backgroundColor: BG, flex: 1, fontFamily: '"Golos Text", sans-serif' }}>

      {/* Page header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h4 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#1F2020' }}>Transactions d&apos;adhésion</h4>
            <span style={{ backgroundColor: ACCENT, color: '#fff', fontSize: 11, fontWeight: 600, borderRadius: 4, padding: '1px 8px', lineHeight: '18px' }}>{transactions.length}</span>
          </div>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: TEXT_MID }}>
            <span>Accueil</span><span style={{ margin: '0 6px' }}>›</span>
            <span style={{ color: '#1F2020', fontWeight: 500 }}>Transactions d&apos;adhésion</span>
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={() => setShowModal(true)} style={{ display: 'flex', alignItems: 'center', gap: 6, backgroundColor: ACCENT, color: '#fff', border: 'none', borderRadius: 5, padding: '8px 14px', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: '"Golos Text", sans-serif' }}>
            <Plus size={15} /> Nouvelle transaction
          </button>
          <button style={toolBtn}><Upload size={14} color={TEXT_MID} /> Exporter <ChevronDown size={13} color={TEXT_MID} /></button>
          <button style={{ ...toolBtn, padding: '7px', gap: 0 }}><RefreshCw size={15} color={TEXT_MID} /></button>
          <button style={{ ...toolBtn, padding: '7px', gap: 0 }}><Settings size={15} color={TEXT_MID} /></button>
        </div>
      </div>

      {/* Search */}
      <div style={{ backgroundColor: '#fff', border: `0.67px solid rgb(226, 232, 240)`, borderRadius: 5, padding: '10px 16px', marginBottom: 12, boxShadow: 'rgba(219,219,219,0.25) 0px 4px 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: `1px solid #E8E8E8`, borderRadius: 5, padding: '7px 12px', width: 220 }}>
          <Search size={14} color={TEXT_MID} />
          <input value={search} onChange={e => { setSearch(e.target.value); setPage(1) }} placeholder="Rechercher" style={{ border: 'none', background: 'none', outline: 'none', fontSize: 13, color: '#1F2020', width: '100%', fontFamily: '"Golos Text", sans-serif' }} />
        </div>
      </div>

      {/* Filter toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={toolBtn}><ListFilter size={14} color={TEXT_MID} /> Filtrer <ChevronDown size={13} color={TEXT_MID} /></button>
          <button style={toolBtn}><Calendar size={14} color={TEXT_MID} /> Date</button>
          {selected.size > 0 && (
            <button onClick={deleteSelected} style={{ ...toolBtn, color: ACCENT, borderColor: ACCENT }}>
              Supprimer ({selected.size})
            </button>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={toolBtn}><ArrowUpDown size={14} color={TEXT_MID} /> Trier par <ChevronDown size={13} color={TEXT_MID} /></button>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, backgroundColor: 'rgb(234, 237, 247)', color: 'rgb(53, 56, 205)', border: 'none', borderRadius: 5, padding: '7px 12px', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: '"Golos Text", sans-serif' }}>
            <Columns2 size={14} color="rgb(53, 56, 205)" /> Gérer les colonnes
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: '#fff', border: `0.67px solid rgb(226, 232, 240)`, borderRadius: 5, overflow: 'hidden', boxShadow: 'rgba(219,219,219,0.25) 0px 4px 4px' }}>
        {filtered.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 24px', color: TEXT_MID }}>
            <Receipt size={40} color={BORDER} />
            <p style={{ marginTop: 12, fontSize: 15, fontWeight: 600, color: '#1F2020' }}>Aucune transaction</p>
            <p style={{ margin: '4px 0 16px', fontSize: 14 }}>
              {search ? 'Aucun résultat.' : 'Ajoutez votre première transaction.'}
            </p>
            {!search && (
              <button onClick={() => setShowModal(true)} style={{ display: 'flex', alignItems: 'center', gap: 6, backgroundColor: ACCENT, color: '#fff', border: 'none', borderRadius: 5, padding: '10px 20px', fontSize: 14, cursor: 'pointer', fontWeight: 500 }}>
                <Plus size={16} /> Nouvelle transaction
              </button>
            )}
          </div>
        ) : (
          <>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ ...thStyle, width: 40, textAlign: 'center' }}>
                    <input type="checkbox" checked={selected.size === pageRows.length && pageRows.length > 0} onChange={toggleAll} style={{ cursor: 'pointer', accentColor: ACCENT }} />
                  </th>
                  <th style={{ ...thStyle, width: 40 }} />
                  <th style={thStyle}><div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>Type <ChevronsUpDown size={12} color={TEXT_MID} /></div></th>
                  <th style={thStyle}><div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>Montant <ChevronsUpDown size={12} color={TEXT_MID} /></div></th>
                  <th style={thStyle}><div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>Date <ChevronsUpDown size={12} color={TEXT_MID} /></div></th>
                  <th style={thStyle}><div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>Mode de paiement <ChevronsUpDown size={12} color={TEXT_MID} /></div></th>
                  <th style={thStyle}><div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>Statut <ChevronsUpDown size={12} color={TEXT_MID} /></div></th>
                </tr>
              </thead>
              <tbody>
                {pageRows.map(row => (
                  <tr key={row.id} style={{ backgroundColor: selected.has(row.id) ? 'rgb(253,233,233)' : '#fff' }}>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <input type="checkbox" checked={selected.has(row.id)} onChange={() => toggleSelect(row.id)} style={{ cursor: 'pointer', accentColor: ACCENT }} />
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <button onClick={() => toggleStar(row.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}>
                        <Star size={16} color={starred.has(row.id) ? '#F9B801' : '#CED4DA'} fill={starred.has(row.id) ? '#F9B801' : 'none'} />
                      </button>
                    </td>
                    <td style={tdStyle}>{row.type}</td>
                    <td style={{ ...tdStyle, fontWeight: 600, color: row.amount.startsWith('+') ? '#27AC62' : ACCENT }}>{row.amount}</td>
                    <td style={tdStyle}>{row.date}</td>
                    <td style={tdStyle}>{row.paymentType}</td>
                    <td style={tdStyle}>
                      <span style={{ display: 'inline-block', backgroundColor: row.status === 'Complété' ? 'rgb(26, 190, 23)' : 'rgb(239, 30, 30)', color: '#fff', fontSize: 12, fontWeight: 500, borderRadius: 6, padding: '5px 6px', lineHeight: 1 }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderTop: `0.67px solid ${BORDER}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: TEXT_DARK }}>
                <span>Afficher</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, border: `0.67px solid ${BORDER}`, borderRadius: 5, padding: '4px 8px', backgroundColor: '#fff' }}>
                  <span>10</span><ChevronDown size={12} color={TEXT_MID} />
                </div>
                <span>entrées</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={pageBtn(false, page === 1)}><ChevronLeft size={14} color={TEXT_MID} /></button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button key={p} onClick={() => setPage(p)} style={pageBtn(page === p, false)}>{p}</button>
                ))}
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={pageBtn(false, page === totalPages)}><ChevronRight size={14} color={TEXT_MID} /></button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ backgroundColor: '#fff', borderRadius: 8, width: '100%', maxWidth: 440, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${BORDER}` }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#1F2020' }}>Nouvelle transaction</span>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: TEXT_MID, display: 'flex' }}><X size={20} /></button>
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={labelStyle}>Type</label>
                <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value as TxType }))} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option>Recharge portefeuille</option>
                  <option>Achat</option>
                  <option>Remboursement</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Montant * (ex: +650 ou -350)</label>
                <input value={form.amount} onChange={e => setForm(p => ({ ...p, amount: e.target.value }))} placeholder="+650" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Mode de paiement</label>
                <select value={form.paymentType} onChange={e => setForm(p => ({ ...p, paymentType: e.target.value as PayType }))} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option>Cash</option>
                  <option>Paypal</option>
                  <option>Carte</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Statut</label>
                <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value as Status }))} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option>Complété</option>
                  <option>Annulé</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 20px', borderTop: `1px solid ${BORDER}` }}>
              <button onClick={() => setShowModal(false)} style={{ padding: '8px 16px', borderRadius: 5, fontSize: 13, cursor: 'pointer', backgroundColor: BG, color: TEXT_DARK, border: `1px solid ${BORDER}`, fontFamily: '"Golos Text", sans-serif' }}>Annuler</button>
              <button onClick={addTransaction} style={{ padding: '8px 16px', borderRadius: 5, fontSize: 13, cursor: 'pointer', backgroundColor: ACCENT, color: '#fff', border: 'none', fontWeight: 500, fontFamily: '"Golos Text", sans-serif' }}>Enregistrer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function pageBtn(active: boolean, disabled: boolean): CSSProperties {
  return { width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `0.67px solid ${active ? ACCENT : BORDER}`, borderRadius: 5, backgroundColor: active ? ACCENT : '#fff', color: active ? '#fff' : TEXT_DARK, fontSize: 13, fontWeight: active ? 600 : 400, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, fontFamily: '"Golos Text", sans-serif' }
}
