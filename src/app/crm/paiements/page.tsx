'use client'

import { useState, useRef, useEffect, type CSSProperties } from 'react'
import Link from 'next/link'
import {
  Search, ArrowUpDown, Calendar, Filter, LayoutGrid,
  Plus, MoreVertical, ChevronLeft, ChevronRight,
  Download, RefreshCw, Pencil, Trash2,
} from 'lucide-react'

interface Paiement {
  id: number
  membre: string
  avatar: string
  montant: number
  date: string
  typeAdhesion: string
  statut: 'Payé' | 'En attente' | 'Échoué'
}

const paiements: Paiement[] = [
  { id: 1,  membre: 'Sophie Martin',   avatar: 'SM', montant: 24.99, date: '01 Jan 2026', typeAdhesion: 'NY Gym Black Card®', statut: 'Payé' },
  { id: 2,  membre: 'Karim Benali',    avatar: 'KB', montant: 15.00, date: '03 Jan 2026', typeAdhesion: 'Classique',           statut: 'Payé' },
  { id: 3,  membre: 'Emma Rousseau',   avatar: 'ER', montant: 24.99, date: '05 Jan 2026', typeAdhesion: 'NY Gym Black Card®', statut: 'En attente' },
  { id: 4,  membre: 'Luca Ferrari',    avatar: 'LF', montant: 15.00, date: '07 Jan 2026', typeAdhesion: 'Classique',           statut: 'Payé' },
  { id: 5,  membre: 'Amira Diallo',    avatar: 'AD', montant: 24.99, date: '09 Jan 2026', typeAdhesion: 'NY Gym Black Card®', statut: 'Échoué' },
  { id: 6,  membre: 'Nathan Dupont',   avatar: 'ND', montant: 15.00, date: '11 Jan 2026', typeAdhesion: 'Classique',           statut: 'Payé' },
  { id: 7,  membre: 'Yasmine Chabane', avatar: 'YC', montant: 24.99, date: '13 Jan 2026', typeAdhesion: 'NY Gym Black Card®', statut: 'Payé' },
  { id: 8,  membre: 'Théo Bernard',    avatar: 'TB', montant: 15.00, date: '15 Jan 2026', typeAdhesion: 'Classique',           statut: 'En attente' },
]

const PRIMARY = 'rgb(86, 20, 150)'

const statutStyle: Record<Paiement['statut'], CSSProperties> = {
  'Payé':       { backgroundColor: '#1ABE17', color: '#fff' },
  'En attente': { backgroundColor: '#FFA201', color: '#fff' },
  'Échoué':     { backgroundColor: '#EF1E1E', color: '#fff' },
}

export default function PaiementsPage() {
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const [checkedRows, setCheckedRows] = useState<Set<number>>(new Set())
  const [allChecked, setAllChecked] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function toggleRow(id: number) {
    setCheckedRows(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  function toggleAll() {
    if (allChecked) { setCheckedRows(new Set()); setAllChecked(false) }
    else { setCheckedRows(new Set(paiements.map(p => p.id))); setAllChecked(true) }
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Page header */}
      <div style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #E8E8E8',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1F2020', margin: 0 }}>Paiements</h1>
            <span style={{ backgroundColor: '#EDE9F7', color: PRIMARY, fontSize: 12, fontWeight: 500, padding: '4px 8px', borderRadius: 6 }}>
              {paiements.length}
            </span>
          </div>
          <nav style={{ marginTop: 4 }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0, padding: 0, listStyle: 'none' }}>
              <li><Link href="/crm" style={{ color: '#707070', textDecoration: 'none', fontSize: 13 }}>Accueil</Link></li>
              <li style={{ color: '#707070', fontSize: 13 }}>›</li>
              <li style={{ color: '#1F2020', fontSize: 13 }}>Paiements</li>
            </ol>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={outlineBtn}><Download size={14} />Exporter<ChevronRight size={14} style={{ transform: 'rotate(90deg)' }} /></button>
          <button style={iconBtn}><RefreshCw size={16} /></button>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 24, flex: 1 }}>
        {/* Search + Add */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E8E8E8', borderRadius: 6, backgroundColor: '#fff', padding: '8px 12px', gap: 8, maxWidth: 280, width: '100%' }}>
            <Search size={16} color="#707070" />
            <input placeholder="Rechercher un paiement..." style={{ border: 'none', background: 'none', outline: 'none', fontSize: 14, color: '#1F2020', width: '100%' }} />
          </div>
          <button style={{ backgroundColor: PRIMARY, color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', padding: '8px 16px', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Plus size={16} />Nouveau paiement
          </button>
        </div>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <button style={outlineBtn}><ArrowUpDown size={14} />Trier par<ChevronRight size={14} style={{ transform: 'rotate(90deg)' }} /></button>
            <button style={outlineBtn}><Calendar size={14} />01 Jan 2026 — 31 Jan 2026</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={outlineBtn}><Filter size={14} />Filtrer<ChevronRight size={14} style={{ transform: 'rotate(90deg)' }} /></button>
            <button style={{ ...outlineBtn, backgroundColor: '#EDE9F7', borderColor: '#c4b5fd', color: PRIMARY }}>
              <LayoutGrid size={14} />Gérer les colonnes
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #E8E8E8' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F7F8F9' }}>
                  <th style={thStyle}><input type="checkbox" checked={allChecked} onChange={toggleAll} style={{ cursor: 'pointer' }} /></th>
                  <SortTh label="Membre" />
                  <SortTh label="Montant" />
                  <SortTh label="Date" />
                  <SortTh label="Type d'adhésion" />
                  <SortTh label="Statut" />
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {paiements.map((row, idx) => (
                  <tr key={row.id} style={{ borderBottom: idx < paiements.length - 1 ? '1px solid #E8E8E8' : 'none', backgroundColor: '#fff' }}>
                    <td style={tdStyle}><input type="checkbox" checked={checkedRows.has(row.id)} onChange={() => toggleRow(row.id)} style={{ cursor: 'pointer' }} /></td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: PRIMARY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                          {row.avatar}
                        </div>
                        <span style={{ color: PRIMARY, fontWeight: 500, cursor: 'pointer' }}>{row.membre}</span>
                      </div>
                    </td>
                    <td style={tdStyle}><strong>{row.montant.toFixed(2)} $</strong></td>
                    <td style={tdStyle}>{row.date}</td>
                    <td style={tdStyle}>{row.typeAdhesion}</td>
                    <td style={tdStyle}>
                      <span style={{ ...statutStyle[row.statut], fontSize: 12, fontWeight: 500, padding: '4px 8px', borderRadius: 6, display: 'inline-block' }}>
                        {row.statut}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <div style={{ position: 'relative' }} ref={openMenu === row.id ? menuRef : undefined}>
                        <button onClick={() => setOpenMenu(openMenu === row.id ? null : row.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#707070', padding: 4, display: 'flex', alignItems: 'center' }}>
                          <MoreVertical size={18} />
                        </button>
                        {openMenu === row.id && (
                          <div style={{ position: 'absolute', right: 0, top: '100%', zIndex: 20, backgroundColor: '#fff', border: '1px solid #E8E8E8', borderRadius: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: 130, overflow: 'hidden' }}>
                            <button style={dropdownItem} onClick={() => setOpenMenu(null)}><Pencil size={14} />Modifier</button>
                            <button style={{ ...dropdownItem, color: '#EF1E1E' }} onClick={() => setOpenMenu(null)}><Trash2 size={14} />Supprimer</button>
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderTop: '1px solid #E8E8E8', flexWrap: 'wrap', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#707070' }}>
              <span>Afficher</span>
              <select style={{ border: '1px solid #E8E8E8', borderRadius: 4, padding: '4px 8px', fontSize: 13, color: '#1F2020', backgroundColor: '#fff', cursor: 'pointer', outline: 'none' }}>
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
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '16px 24px', borderTop: '1px solid #E8E8E8', backgroundColor: '#fff', color: '#707070', fontSize: 13 }}>
        © 2026 <span style={{ color: PRIMARY, fontWeight: 600 }}>NY Gym</span>
      </footer>
    </div>
  )
}

function SortTh({ label }: { label: string }) {
  return (
    <th style={thStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {label}<ArrowUpDown size={13} color="#9ca3af" />
      </div>
    </th>
  )
}

function pageBtn(active: boolean): CSSProperties {
  return {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 32, height: 32, borderRadius: 4,
    border: active ? 'none' : '1px solid #E8E8E8',
    backgroundColor: active ? PRIMARY : '#fff',
    color: active ? '#fff' : '#707070',
    cursor: 'pointer', fontSize: 14, fontWeight: active ? 600 : 400,
  }
}

const thStyle: CSSProperties = {
  padding: '10px 16px', fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.75)',
  textAlign: 'left', borderBottom: '1px solid #E8E8E8', whiteSpace: 'nowrap',
}

const tdStyle: CSSProperties = {
  padding: '14px 8px 14px 16px', fontSize: 14, color: '#1F2020', verticalAlign: 'middle',
}

const outlineBtn: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 6,
  border: '1px solid #E8E8E8', borderRadius: 6,
  backgroundColor: '#fff', color: '#1F2020',
  padding: '7px 12px', fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap',
}

const iconBtn: CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  border: '1px solid #E8E8E8', borderRadius: 6,
  backgroundColor: '#fff', color: '#707070', width: 34, height: 34, cursor: 'pointer',
}

const dropdownItem: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8,
  width: '100%', padding: '8px 14px',
  background: 'none', border: 'none',
  fontSize: 13, color: '#1F2020', cursor: 'pointer', textAlign: 'left',
}
