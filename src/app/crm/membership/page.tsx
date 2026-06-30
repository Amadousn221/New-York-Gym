'use client'

import { useState, useRef, useEffect, type CSSProperties } from 'react'
import Link from 'next/link'
import {
  Plus, MoreVertical, ArrowUpDown, Filter,
  ChevronLeft, ChevronRight, Pencil, Trash2, Users,
} from 'lucide-react'

interface Plan {
  id: number
  nom: string
  prix: number
  duree: string
  membres: number
  avantages: string[]
  statut: 'Actif' | 'Inactif'
}

const plans: Plan[] = [
  {
    id: 1,
    nom: 'NY Gym Black Card®',
    prix: 24.99,
    duree: 'Mensuel',
    membres: 128,
    avantages: ['Accès à tous les clubs', 'Invité gratuit', 'NY Gym+ premium', 'Solarium inclus'],
    statut: 'Actif',
  },
  {
    id: 2,
    nom: 'Classique',
    prix: 15.00,
    duree: 'Mensuel',
    membres: 214,
    avantages: ['Accès à votre club d\'origine', 'Équipements cardio & musculation'],
    statut: 'Actif',
  },
  {
    id: 3,
    nom: 'Annuel Black Card®',
    prix: 239.99,
    duree: 'Annuel',
    membres: 47,
    avantages: ['Tous les avantages Black Card®', '2 mois offerts', 'Frais d\'inscription offerts'],
    statut: 'Actif',
  },
  {
    id: 4,
    nom: 'Journée découverte',
    prix: 5.00,
    duree: 'Journée',
    membres: 0,
    avantages: ['Accès 1 jour', 'Équipements complets'],
    statut: 'Inactif',
  },
]

const PRIMARY = 'rgb(86, 20, 150)'

export default function MembershipPage() {
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1F2020', margin: 0 }}>Membership</h1>
            <span style={{ backgroundColor: '#EDE9F7', color: PRIMARY, fontSize: 12, fontWeight: 500, padding: '4px 8px', borderRadius: 6 }}>
              {plans.length} plans
            </span>
          </div>
          <nav style={{ marginTop: 4 }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0, padding: 0, listStyle: 'none' }}>
              <li><Link href="/crm" style={{ color: '#707070', textDecoration: 'none', fontSize: 13 }}>Accueil</Link></li>
              <li style={{ color: '#707070', fontSize: 13 }}>›</li>
              <li style={{ color: '#1F2020', fontSize: 13 }}>Membership</li>
            </ol>
          </nav>
        </div>
        <button style={{ backgroundColor: PRIMARY, color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', padding: '8px 16px', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Plus size={16} />Nouveau plan
        </button>
      </div>

      {/* Stats */}
      <div style={{ padding: '24px 24px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
        {[
          { label: 'Total membres', value: plans.reduce((s, p) => s + p.membres, 0), color: PRIMARY },
          { label: 'Plans actifs', value: plans.filter(p => p.statut === 'Actif').length, color: '#1ABE17' },
          { label: 'Plans inactifs', value: plans.filter(p => p.statut === 'Inactif').length, color: '#707070' },
          { label: 'Revenu mensuel est.', value: `${plans.filter(p => p.statut === 'Actif' && p.duree === 'Mensuel').reduce((s, p) => s + p.prix * p.membres, 0).toFixed(0)} $`, color: '#0E9384' },
        ].map(stat => (
          <div key={stat.label} style={{ backgroundColor: '#fff', border: '1px solid #E8E8E8', borderRadius: 10, padding: '16px 20px' }}>
            <p style={{ margin: 0, fontSize: 12, color: '#707070', marginBottom: 4 }}>{stat.label}</p>
            <p style={{ margin: 0, fontSize: 24, fontWeight: 700, color: stat.color }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: 24, flex: 1 }}>
        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={outlineBtn}><ArrowUpDown size={14} />Trier par</button>
            <button style={outlineBtn}><Filter size={14} />Filtrer</button>
          </div>
        </div>

        {/* Table */}
        <div style={{ backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #E8E8E8' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F7F8F9' }}>
                  <SortTh label="Plan" />
                  <SortTh label="Prix" />
                  <SortTh label="Durée" />
                  <SortTh label="Membres" />
                  <SortTh label="Avantages" />
                  <SortTh label="Statut" />
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, idx) => (
                  <tr key={plan.id} style={{ borderBottom: idx < plans.length - 1 ? '1px solid #E8E8E8' : 'none', backgroundColor: '#fff' }}>
                    <td style={tdStyle}>
                      <span style={{ color: PRIMARY, fontWeight: 600, fontSize: 14 }}>{plan.nom}</span>
                    </td>
                    <td style={tdStyle}>
                      <strong style={{ color: '#1F2020' }}>{plan.prix.toFixed(2)} $</strong>
                    </td>
                    <td style={tdStyle}>{plan.duree}</td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Users size={14} color="#707070" />
                        <span>{plan.membres}</span>
                      </div>
                    </td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {plan.avantages.slice(0, 2).map(a => (
                          <span key={a} style={{ backgroundColor: '#F7F8F9', color: '#707070', fontSize: 11, padding: '2px 6px', borderRadius: 4 }}>{a}</span>
                        ))}
                        {plan.avantages.length > 2 && (
                          <span style={{ backgroundColor: '#EDE9F7', color: PRIMARY, fontSize: 11, padding: '2px 6px', borderRadius: 4 }}>+{plan.avantages.length - 2}</span>
                        )}
                      </div>
                    </td>
                    <td style={tdStyle}>
                      <span style={{
                        backgroundColor: plan.statut === 'Actif' ? '#1ABE17' : '#707070',
                        color: '#fff', fontSize: 12, fontWeight: 500,
                        padding: '4px 8px', borderRadius: 6, display: 'inline-block',
                      }}>
                        {plan.statut}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <div style={{ position: 'relative' }} ref={openMenu === plan.id ? menuRef : undefined}>
                        <button onClick={() => setOpenMenu(openMenu === plan.id ? null : plan.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#707070', padding: 4, display: 'flex' }}>
                          <MoreVertical size={18} />
                        </button>
                        {openMenu === plan.id && (
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '12px 16px', borderTop: '1px solid #E8E8E8', gap: 4 }}>
            <button style={pageBtn(false)}><ChevronLeft size={16} /></button>
            <button style={pageBtn(true)}>1</button>
            <button style={pageBtn(false)}><ChevronRight size={16} /></button>
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

const dropdownItem: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8,
  width: '100%', padding: '8px 14px',
  background: 'none', border: 'none',
  fontSize: 13, color: '#1F2020', cursor: 'pointer', textAlign: 'left',
}
