'use client'

import { useState, useRef, useEffect, type CSSProperties } from 'react'
import Link from 'next/link'
import {
  ArrowUpDown, Filter, Calendar, Plus, MoreVertical,
  ChevronLeft, ChevronRight, Download, RefreshCw,
  Pencil, Trash2,
} from 'lucide-react'

interface Pipeline {
  id: number
  name: string
  value: string
  deals: number
  stage: string
  stageColor: string
  date: string
  status: 'Active' | 'Inactive'
}

const pipelines: Pipeline[] = [
  { id: 1, name: 'Sales',          value: '$4,50,664', deals: 315, stage: 'Win',          stageColor: '#1ABE17', date: '25 Sep 2025', status: 'Active' },
  { id: 2, name: 'Marketing',      value: '$3,12,893', deals: 447, stage: 'Win',          stageColor: '#1ABE17', date: '29 Sep 2025', status: 'Active' },
  { id: 3, name: 'Email',          value: '$2,89,274', deals: 654, stage: 'In Pipeline',  stageColor: '#800080', date: '15 Oct 2025', status: 'Active' },
  { id: 4, name: 'Chats',          value: '$1,59,326', deals: 768, stage: 'Win',          stageColor: '#1ABE17', date: '29 Oct 2025', status: 'Active' },
  { id: 5, name: 'Operational',    value: '$2,90,173', deals: 142, stage: 'Win',          stageColor: '#1ABE17', date: '03 Nov 2025', status: 'Inactive' },
  { id: 6, name: 'Collaborative',  value: '$4,51,417', deals: 315, stage: 'Conversation', stageColor: '#0E9384', date: '17 Nov 2025', status: 'Active' },
  { id: 7, name: 'Differentiate',  value: '$3,17,589', deals: 478, stage: 'Lost',         stageColor: '#EF1E1E', date: '23 Nov 2025', status: 'Active' },
  { id: 8, name: 'Interact',       value: '$1,69,146', deals: 664, stage: 'Lost',         stageColor: '#EF1E1E', date: '09 Dec 2025', status: 'Active' },
]

const PRIMARY = 'rgb(86, 20, 150)'

export default function PipelinePage() {
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
    else { setCheckedRows(new Set(pipelines.map(p => p.id))); setAllChecked(true) }
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Page header */}
      <div style={{
        backgroundColor: '#fff', borderBottom: '1px solid #E8E8E8',
        padding: '12px 24px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1F2020', margin: 0 }}>Pipeline</h1>
            <span style={{ backgroundColor: '#EDE9F7', color: PRIMARY, fontSize: 12, fontWeight: 500, padding: '4px 8px', borderRadius: 6 }}>
              {pipelines.length}
            </span>
          </div>
          <nav style={{ marginTop: 4 }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0, padding: 0, listStyle: 'none' }}>
              <li><Link href="/crm" style={{ color: '#707070', textDecoration: 'none', fontSize: 13 }}>Accueil</Link></li>
              <li style={{ color: '#707070', fontSize: 13 }}>›</li>
              <li style={{ color: '#1F2020', fontSize: 13 }}>Pipeline</li>
            </ol>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={outlineBtn}><Download size={14} />Exporter</button>
          <button style={iconBtn}><RefreshCw size={16} /></button>
          <button style={{ backgroundColor: PRIMARY, color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', padding: '8px 16px', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Plus size={16} />Nouveau pipeline
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 24, flex: 1 }}>
        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={outlineBtn}><ArrowUpDown size={14} />Trier par</button>
            <button style={outlineBtn}><Calendar size={14} />25 Sep — 09 Dec 2025</button>
          </div>
          <button style={outlineBtn}><Filter size={14} />Filtrer</button>
        </div>

        {/* Table */}
        <div style={{ backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #E8E8E8' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F7F8F9' }}>
                  <th style={thStyle}><input type="checkbox" checked={allChecked} onChange={toggleAll} style={{ cursor: 'pointer' }} /></th>
                  <SortTh label="Pipeline" />
                  <SortTh label="Valeur" />
                  <SortTh label="Deals" />
                  <SortTh label="Étape" />
                  <SortTh label="Date" />
                  <SortTh label="Statut" />
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {pipelines.map((row, idx) => (
                  <tr key={row.id} style={{ borderBottom: idx < pipelines.length - 1 ? '1px solid #E8E8E8' : 'none', backgroundColor: '#fff' }}>
                    <td style={tdStyle}><input type="checkbox" checked={checkedRows.has(row.id)} onChange={() => toggleRow(row.id)} style={{ cursor: 'pointer' }} /></td>
                    <td style={tdStyle}><span style={{ color: PRIMARY, fontWeight: 500 }}>{row.name}</span></td>
                    <td style={tdStyle}><strong>{row.value}</strong></td>
                    <td style={tdStyle}>{row.deals}</td>
                    <td style={tdStyle}>
                      <span style={{ color: row.stageColor, fontWeight: 500, fontSize: 13 }}>● {row.stage}</span>
                    </td>
                    <td style={tdStyle}>{row.date}</td>
                    <td style={tdStyle}>
                      <span style={{
                        backgroundColor: row.status === 'Active' ? '#1ABE17' : '#707070',
                        color: '#fff', fontSize: 12, fontWeight: 500,
                        padding: '4px 8px', borderRadius: 6, display: 'inline-block',
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <div style={{ position: 'relative' }} ref={openMenu === row.id ? menuRef : undefined}>
                        <button onClick={() => setOpenMenu(openMenu === row.id ? null : row.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#707070', padding: 4, display: 'flex' }}>
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
  const PRIMARY = 'rgb(86, 20, 150)'
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
