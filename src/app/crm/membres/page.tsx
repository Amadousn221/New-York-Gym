'use client'

import { useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { Search, Plus, MoreVertical, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react'

interface Membre {
  id: number
  nom: string
  email: string
  telephone: string
  avatar: string
  statut: 'Actif' | 'Expiré' | 'En attente'
  typeAdhesion: string
}

const membres: Membre[] = [
  { id: 1,  nom: 'Sophie Martin',   email: 'sophie.martin@email.com',   telephone: '+1 514 000 0001', avatar: 'SM', statut: 'Actif',      typeAdhesion: 'NY Gym Black Card®' },
  { id: 2,  nom: 'Karim Benali',    email: 'karim.benali@email.com',    telephone: '+1 514 000 0002', avatar: 'KB', statut: 'Actif',      typeAdhesion: 'Classique' },
  { id: 3,  nom: 'Emma Rousseau',   email: 'emma.rousseau@email.com',   telephone: '+1 514 000 0003', avatar: 'ER', statut: 'En attente', typeAdhesion: 'NY Gym Black Card®' },
  { id: 4,  nom: 'Luca Ferrari',    email: 'luca.ferrari@email.com',    telephone: '+1 514 000 0004', avatar: 'LF', statut: 'Actif',      typeAdhesion: 'Classique' },
  { id: 5,  nom: 'Amira Diallo',    email: 'amira.diallo@email.com',    telephone: '+1 514 000 0005', avatar: 'AD', statut: 'Expiré',     typeAdhesion: 'NY Gym Black Card®' },
  { id: 6,  nom: 'Nathan Dupont',   email: 'nathan.dupont@email.com',   telephone: '+1 514 000 0006', avatar: 'ND', statut: 'Actif',      typeAdhesion: 'Classique' },
  { id: 7,  nom: 'Yasmine Chabane', email: 'yasmine.chabane@email.com', telephone: '+1 514 000 0007', avatar: 'YC', statut: 'Actif',      typeAdhesion: 'NY Gym Black Card®' },
  { id: 8,  nom: 'Théo Bernard',    email: 'theo.bernard@email.com',    telephone: '+1 514 000 0008', avatar: 'TB', statut: 'En attente', typeAdhesion: 'Classique' },
  { id: 9,  nom: 'Clara Morin',     email: 'clara.morin@email.com',     telephone: '+1 514 000 0009', avatar: 'CM', statut: 'Actif',      typeAdhesion: 'NY Gym Black Card®' },
  { id: 10, nom: 'Omar Khalil',     email: 'omar.khalil@email.com',     telephone: '+1 514 000 0010', avatar: 'OK', statut: 'Expiré',     typeAdhesion: 'Classique' },
  { id: 11, nom: 'Julie Petit',     email: 'julie.petit@email.com',     telephone: '+1 514 000 0011', avatar: 'JP', statut: 'Actif',      typeAdhesion: 'NY Gym Black Card®' },
  { id: 12, nom: 'Rayan Bouzid',    email: 'rayan.bouzid@email.com',    telephone: '+1 514 000 0012', avatar: 'RB', statut: 'Actif',      typeAdhesion: 'Classique' },
]

const PRIMARY = 'rgb(86, 20, 150)'

const statutStyle: Record<Membre['statut'], { bg: string; color: string }> = {
  'Actif':      { bg: '#E8F7E8', color: '#1ABE17' },
  'Expiré':     { bg: '#FDE9E9', color: '#EF1E1E' },
  'En attente': { bg: '#FFF4E5', color: '#FFA201' },
}

const avatarColors = [PRIMARY, '#0E9384', '#1ABE17', '#FFA201', '#E41F07', '#0077cc']

export default function MembresPage() {
  const [search, setSearch] = useState('')
  const [filtreStatut, setFiltreStatut] = useState<string>('Tous')
  const [openMenu, setOpenMenu] = useState<number | null>(null)

  const filtered = membres.filter(m => {
    const matchSearch = m.nom.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
    const matchStatut = filtreStatut === 'Tous' || m.statut === filtreStatut
    return matchSearch && matchStatut
  })

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
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1F2020', margin: 0 }}>Membres</h1>
            <span style={{ backgroundColor: '#EDE9F7', color: PRIMARY, fontSize: 12, fontWeight: 500, padding: '4px 8px', borderRadius: 6 }}>
              {membres.length}
            </span>
          </div>
          <nav style={{ marginTop: 4 }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0, padding: 0, listStyle: 'none' }}>
              <li><Link href="/crm" style={{ color: '#707070', textDecoration: 'none', fontSize: 13 }}>Accueil</Link></li>
              <li style={{ color: '#707070', fontSize: 13 }}>›</li>
              <li style={{ color: '#1F2020', fontSize: 13 }}>Membres</li>
            </ol>
          </nav>
        </div>
        <button style={{ backgroundColor: PRIMARY, color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', padding: '8px 16px', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Plus size={16} />Ajouter un membre
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: 24, flex: 1 }}>
        {/* Search + filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E8E8E8', borderRadius: 6, backgroundColor: '#fff', padding: '8px 12px', gap: 8, flex: 1, maxWidth: 320 }}>
            <Search size={16} color="#707070" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher un membre..."
              style={{ border: 'none', background: 'none', outline: 'none', fontSize: 14, color: '#1F2020', width: '100%' }}
            />
          </div>

          {(['Tous', 'Actif', 'En attente', 'Expiré'] as const).map(s => (
            <button
              key={s}
              onClick={() => setFiltreStatut(s)}
              style={{
                padding: '7px 14px', borderRadius: 6, fontSize: 13, cursor: 'pointer',
                border: filtreStatut === s ? `1.5px solid ${PRIMARY}` : '1px solid #E8E8E8',
                backgroundColor: filtreStatut === s ? '#EDE9F7' : '#fff',
                color: filtreStatut === s ? PRIMARY : '#707070',
                fontWeight: filtreStatut === s ? 600 : 400,
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {filtered.map((membre, idx) => {
            const avatarBg = avatarColors[idx % avatarColors.length]
            return (
              <div
                key={membre.id}
                style={{
                  backgroundColor: '#fff', border: '1px solid #E8E8E8',
                  borderRadius: 12, padding: 20,
                  display: 'flex', flexDirection: 'column', gap: 12,
                  position: 'relative',
                  transition: 'box-shadow 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(86,20,150,0.10)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                {/* Action menu */}
                <div style={{ position: 'absolute', top: 12, right: 12 }}>
                  <button
                    onClick={() => setOpenMenu(openMenu === membre.id ? null : membre.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#707070', padding: 4, display: 'flex' }}
                  >
                    <MoreVertical size={16} />
                  </button>
                  {openMenu === membre.id && (
                    <div style={{ position: 'absolute', right: 0, top: '100%', zIndex: 20, backgroundColor: '#fff', border: '1px solid #E8E8E8', borderRadius: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: 130, overflow: 'hidden' }}>
                      <button style={dropdownItem} onClick={() => setOpenMenu(null)}>Voir le profil</button>
                      <button style={dropdownItem} onClick={() => setOpenMenu(null)}>Modifier</button>
                      <button style={{ ...dropdownItem, color: '#EF1E1E' }} onClick={() => setOpenMenu(null)}>Supprimer</button>
                    </div>
                  )}
                </div>

                {/* Avatar + name */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, paddingTop: 8 }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: avatarBg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700 }}>
                    {membre.avatar}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: 0, fontWeight: 600, color: '#1F2020', fontSize: 15 }}>{membre.nom}</p>
                    <span style={{
                      display: 'inline-block', marginTop: 4,
                      backgroundColor: statutStyle[membre.statut].bg,
                      color: statutStyle[membre.statut].color,
                      fontSize: 11, fontWeight: 600,
                      padding: '3px 8px', borderRadius: 999,
                    }}>
                      {membre.statut}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, borderTop: '1px solid #F0F0F0', paddingTop: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Mail size={13} color="#707070" />
                    <span style={{ fontSize: 12, color: '#707070', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{membre.email}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Phone size={13} color="#707070" />
                    <span style={{ fontSize: 12, color: '#707070' }}>{membre.telephone}</span>
                  </div>
                </div>

                {/* Plan badge */}
                <div style={{ backgroundColor: '#F7F8F9', borderRadius: 6, padding: '6px 10px', fontSize: 12, color: PRIMARY, fontWeight: 500, textAlign: 'center' }}>
                  {membre.typeAdhesion}
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 0', color: '#707070' }}>
            Aucun membre trouvé
          </div>
        )}

        {/* Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 24, gap: 4 }}>
          <button style={pageBtn(false)}><ChevronLeft size={16} /></button>
          <button style={pageBtn(true)}>1</button>
          <button style={pageBtn(false)}><ChevronRight size={16} /></button>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '16px 24px', borderTop: '1px solid #E8E8E8', backgroundColor: '#fff', color: '#707070', fontSize: 13 }}>
        © 2026 <span style={{ color: PRIMARY, fontWeight: 600 }}>NY Gym</span>
      </footer>
    </div>
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

const dropdownItem: CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8,
  width: '100%', padding: '8px 14px',
  background: 'none', border: 'none',
  fontSize: 13, color: '#1F2020', cursor: 'pointer', textAlign: 'left',
}
