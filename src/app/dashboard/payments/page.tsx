'use client'

import { useState, useRef, useEffect, type CSSProperties } from 'react'
import Link from 'next/link'
import {
  Search, ArrowUpDown, Filter, Download, RefreshCw,
  LayoutGrid, ChevronDown, ChevronLeft, ChevronRight,
  MoreVertical, Eye, Trash2, CalendarDays, Plus, X, CreditCard,
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

const COMPANY_COLORS = ['#1B2850', '#FF6B35', '#2D9B6A', '#4472CA', '#1F2020', '#E41F07', '#4472CA', '#F9B801']

interface Payment {
  id: number
  invoiceId: string
  client: string
  amount: string
  dueDate: string
  paymentMethod: 'Espèces' | 'Carte'
  transactionId: string
  companyColor: string
  companyLetter: string
}

const columns = ['N° Facture', 'Client', 'Montant', 'Date échéance', 'Mode de paiement', 'ID Transaction', 'Actions']

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

const inputStyle: CSSProperties = {
  width: '100%', padding: '8px 12px', fontSize: 14,
  border: `0.67px solid ${BORDER}`, borderRadius: 5,
  color: TEXT_DARK, backgroundColor: '#fff',
  outline: 'none', fontFamily: '"Golos Text", sans-serif',
  boxSizing: 'border-box',
}

function generateInvoiceId(count: number) {
  return `#${(1254058 + count).toString()}`
}

function generateTxnId(count: number) {
  return `TXN${Date.now().toString().slice(-8)}${count.toString().padStart(3, '0')}`
}

function today() {
  return new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([])
  const [search, setSearch] = useState('')
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [allSelected, setAllSelected] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ client: '', amount: '', paymentMethod: 'Espèces' as 'Espèces' | 'Carte', dueDate: '' })
  const menuRef = useRef<HTMLDivElement>(null)
  const nextId = useRef(1)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function addPayment() {
    if (!form.client.trim() || !form.amount.trim()) return
    const id = nextId.current++
    setPayments(prev => [...prev, {
      id,
      invoiceId: generateInvoiceId(id),
      client: form.client,
      amount: form.amount.startsWith('$') || form.amount.startsWith('-') ? form.amount : `$${form.amount}`,
      dueDate: form.dueDate || today(),
      paymentMethod: form.paymentMethod,
      transactionId: generateTxnId(id),
      companyColor: COMPANY_COLORS[prev.length % COMPANY_COLORS.length],
      companyLetter: form.client.charAt(0).toUpperCase(),
    }])
    setForm({ client: '', amount: '', paymentMethod: 'Espèces', dueDate: '' })
    setShowModal(false)
  }

  function deletePayment(id: number) {
    setPayments(prev => prev.filter(p => p.id !== id))
    setOpenMenu(null)
    setSelected(prev => { const n = new Set(prev); n.delete(id); return n })
  }

  function toggleAll() {
    if (allSelected) { setSelected(new Set()); setAllSelected(false) }
    else { setSelected(new Set(filtered.map(p => p.id))); setAllSelected(true) }
  }

  function toggleRow(id: number) {
    setSelected(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })
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
      <div style={{ backgroundColor: '#fff', borderBottom: `1px solid ${BORDER}`, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: TEXT_DARK, margin: 0 }}>Paiements</h1>
            <span style={{ backgroundColor: ACCENT, color: '#fff', fontSize: 11, fontWeight: 600, padding: '2px 7px', borderRadius: 4, lineHeight: 1.5 }}>
              {payments.length}
            </span>
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
          <button onClick={() => setShowModal(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, backgroundColor: ACCENT, color: '#fff', border: 'none', borderRadius: 5, padding: '8px 14px', fontSize: 13, cursor: 'pointer', fontWeight: 500, fontFamily: '"Golos Text", sans-serif' }}>
            <Plus size={15} />
            Nouveau paiement
          </button>
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
        <div style={{ backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>

          {/* Search */}
          <div style={{ padding: '16px 20px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: `0.67px solid ${BORDER_LIGHT}`, borderRadius: 6, padding: '0 12px', width: 220, height: 38, backgroundColor: '#fff' }}>
              <Search size={15} color={TEXT_MID} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher"
                style={{ border: 'none', background: 'none', outline: 'none', fontSize: 14, color: TEXT_DARK, width: '100%', fontFamily: '"Golos Text", sans-serif' }}
              />
            </div>
          </div>

          {/* Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', gap: 8, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button style={toolbarBtn}>
                <ArrowUpDown size={14} color={TEXT_MID} />
                Trier par
                <ChevronDown size={13} color={TEXT_MID} />
              </button>
              <button style={toolbarBtn}>
                <CalendarDays size={14} color={TEXT_MID} />
                Date
                <ChevronDown size={13} color={TEXT_MID} />
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button style={toolbarBtn}>
                <Filter size={14} color={TEXT_MID} />
                Filtrer
                <ChevronDown size={13} color={TEXT_MID} />
              </button>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, backgroundColor: MANAGE_COL_BG, border: 'none', borderRadius: 5, padding: '8px 10px', fontSize: 14, color: MANAGE_COL, cursor: 'pointer', fontFamily: '"Golos Text", sans-serif' }}>
                <LayoutGrid size={14} color={MANAGE_COL} />
                Gérer les colonnes
              </button>
            </div>
          </div>

          {/* Table */}
          {filtered.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 24px', color: TEXT_MID }}>
              <CreditCard size={40} color={BORDER} />
              <p style={{ marginTop: 12, fontSize: 15, fontWeight: 600, color: TEXT_DARK }}>Aucun paiement</p>
              <p style={{ margin: '4px 0 16px', fontSize: 14 }}>
                {search ? 'Aucun résultat.' : 'Cliquez sur « Nouveau paiement » pour commencer.'}
              </p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'auto' }}>
                <thead>
                  <tr>
                    <th style={{ ...thStyle, width: 48, textAlign: 'center' }}>
                      <input type="checkbox" checked={allSelected} onChange={toggleAll} style={{ cursor: 'pointer', accentColor: ACCENT }} />
                    </th>
                    {columns.slice(0, -1).map(col => (
                      <th key={col} style={thStyle}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          {col} <ArrowUpDown size={13} color={TEXT_MID} />
                        </div>
                      </th>
                    ))}
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row) => (
                    <tr key={row.id} style={{ backgroundColor: selected.has(row.id) ? 'rgba(228,31,7,0.03)' : '#fff' }}>
                      <td style={{ ...tdStyle, textAlign: 'center', width: 48 }}>
                        <input type="checkbox" checked={selected.has(row.id)} onChange={() => toggleRow(row.id)} style={{ cursor: 'pointer', accentColor: ACCENT }} />
                      </td>
                      <td style={{ ...tdStyle, color: TEXT_DARK, fontWeight: 500 }}>{row.invoiceId}</td>
                      <td style={tdStyle}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, backgroundColor: row.companyColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>
                            {row.companyLetter}
                          </div>
                          <span style={{ color: TEXT_DARK }}>{row.client}</span>
                        </div>
                      </td>
                      <td style={{ ...tdStyle, color: TEXT_DARK, fontWeight: 500 }}>{row.amount}</td>
                      <td style={tdStyle}>{row.dueDate}</td>
                      <td style={tdStyle}>{row.paymentMethod}</td>
                      <td style={{ ...tdStyle, color: TEXT_MID, fontFamily: 'monospace', fontSize: 12 }}>{row.transactionId}</td>
                      <td style={tdStyle}>
                        <div style={{ position: 'relative' }} ref={openMenu === row.id ? menuRef : undefined}>
                          <button onClick={() => setOpenMenu(openMenu === row.id ? null : row.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: TEXT_MID, padding: 4, display: 'flex', borderRadius: 4 }}>
                            <MoreVertical size={17} />
                          </button>
                          {openMenu === row.id && (
                            <div style={{ position: 'absolute', right: 0, top: '100%', zIndex: 20, backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: 130, overflow: 'hidden' }}>
                              <button style={dropdownItem(false)} onClick={() => setOpenMenu(null)}>
                                <Eye size={14} /> Aperçu
                              </button>
                              <button style={dropdownItem(true)} onClick={() => deletePayment(row.id)}>
                                <Trash2 size={14} /> Supprimer
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
          )}

          {/* Pagination */}
          {filtered.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderTop: `0.67px solid ${BORDER}`, flexWrap: 'wrap', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: TEXT_MID, fontSize: 14 }}>
                <span>Afficher</span>
                <button style={{ display: 'inline-flex', alignItems: 'center', gap: 4, border: `0.67px solid ${BORDER}`, borderRadius: 5, padding: '4px 8px', fontSize: 12, color: TEXT_DARK, backgroundColor: '#fff', cursor: 'pointer', boxShadow: SHADOW }}>
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
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ backgroundColor: '#fff', borderRadius: 8, width: '100%', maxWidth: 440, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${BORDER}` }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: TEXT_DARK }}>Nouveau paiement</span>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: TEXT_MID, display: 'flex' }}><X size={20} /></button>
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={labelStyle}>Client *</label>
                <input value={form.client} onChange={e => setForm(p => ({ ...p, client: e.target.value }))} placeholder="Nom de l'entreprise" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Montant *</label>
                <input value={form.amount} onChange={e => setForm(p => ({ ...p, amount: e.target.value }))} placeholder="2500" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Date d&apos;échéance</label>
                <input type="date" value={form.dueDate} onChange={e => setForm(p => ({ ...p, dueDate: e.target.value }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Mode de paiement</label>
                <select value={form.paymentMethod} onChange={e => setForm(p => ({ ...p, paymentMethod: e.target.value as 'Espèces' | 'Carte' }))} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option value="Espèces">Espèces</option>
                  <option value="Carte">Carte</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 20px', borderTop: `1px solid ${BORDER}` }}>
              <button onClick={() => setShowModal(false)} style={{ padding: '8px 16px', borderRadius: 5, fontSize: 13, cursor: 'pointer', backgroundColor: BG, color: TEXT_DARK, border: `1px solid ${BORDER}`, fontFamily: '"Golos Text", sans-serif' }}>Annuler</button>
              <button onClick={addPayment} style={{ padding: '8px 16px', borderRadius: 5, fontSize: 13, cursor: 'pointer', backgroundColor: ACCENT, color: '#fff', border: 'none', fontWeight: 500, fontFamily: '"Golos Text", sans-serif' }}>Enregistrer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function pageBtn(active: boolean): CSSProperties {
  return { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 5, border: active ? 'none' : `0.67px solid ${BORDER}`, backgroundColor: active ? ACCENT : '#fff', color: active ? '#fff' : TEXT_DARK, cursor: 'pointer', fontSize: 14, fontWeight: active ? 600 : 400, boxShadow: active ? 'none' : SHADOW }
}

function dropdownItem(danger: boolean): CSSProperties {
  return { display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '9px 14px', background: 'none', border: 'none', fontSize: 13, color: danger ? ACCENT : TEXT_DARK, cursor: 'pointer', textAlign: 'left', fontFamily: '"Golos Text", sans-serif' }
}

const thStyle: CSSProperties = { padding: '8px 16px', fontSize: 13, fontWeight: 600, color: 'rgba(0, 0, 0, 0.88)', textAlign: 'left', backgroundColor: TH_BG, whiteSpace: 'nowrap', borderBottom: `0.67px solid rgb(226, 228, 230)` }
const tdStyle: CSSProperties = { padding: '16px 8px 16px 16px', fontSize: 14, color: TEXT_MID, borderBottom: `0.67px solid rgb(226, 228, 230)`, verticalAlign: 'middle' }
const labelStyle: CSSProperties = { display: 'block', fontSize: 13, color: TEXT_MID, marginBottom: 4, fontWeight: 500 }
