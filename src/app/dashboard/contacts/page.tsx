'use client'

import { useState, useRef, useEffect, type CSSProperties } from 'react'
import Link from 'next/link'
import {
  Filter, Search, LayoutGrid, List, Plus,
  Mail, Phone, Globe, MessageCircle, Paperclip,
  MoreVertical, Pencil, Trash2, Eye,
  RefreshCw, Download, ChevronDown, X, Users,
} from 'lucide-react'

const ACCENT = '#E41F07'
const SUCCESS = '#1ABE17'
const BORDER = 'rgb(226, 232, 240)'
const BORDER_LIGHT = 'rgb(232, 232, 232)'
const BG = '#F7F8F9'
const TEXT_DARK = 'rgb(31, 32, 32)'
const TEXT_MID = 'rgb(112, 112, 112)'
const SHADOW = 'rgba(219, 219, 219, 0.25) 0px 4px 4px 0px'

const AVATAR_COLORS = [
  { bg: '#1B2850', text: '#F59E0B' },
  { bg: '#FF6B35', text: '#fff' },
  { bg: '#2D9B6A', text: '#fff' },
  { bg: '#4472CA', text: '#fff' },
  { bg: '#6C3AFF', text: '#fff' },
  { bg: '#E41F07', text: '#fff' },
  { bg: '#F9B801', text: '#fff' },
]

interface Contact {
  id: number
  name: string
  role: string
  email: string
  phone: string
  location: string
  colorIdx: number
  tags: string[]
}

const toolbarBtn: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 6,
  backgroundColor: '#fff', border: `0.67px solid ${BORDER}`,
  borderRadius: 5, padding: '7px 10px', fontSize: 14,
  color: TEXT_DARK, cursor: 'pointer', whiteSpace: 'nowrap',
  boxShadow: SHADOW, fontFamily: '"Golos Text", sans-serif',
}

const inputStyle: CSSProperties = {
  width: '100%', padding: '8px 12px', fontSize: 14,
  border: `0.67px solid ${BORDER}`, borderRadius: 5,
  color: TEXT_DARK, backgroundColor: '#fff',
  outline: 'none', fontFamily: '"Golos Text", sans-serif',
}

const labelStyle: CSSProperties = {
  display: 'block', fontSize: 13, color: TEXT_MID, marginBottom: 4, fontWeight: 500,
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<Contact | null>(null)
  const [form, setForm] = useState({ name: '', role: '', email: '', phone: '', location: '', tags: '' })
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const nextId = useRef(1)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function openAdd() {
    setEditing(null)
    setForm({ name: '', role: '', email: '', phone: '', location: '', tags: '' })
    setShowModal(true)
  }

  function openEdit(contact: Contact) {
    setEditing(contact)
    setForm({ name: contact.name, role: contact.role, email: contact.email, phone: contact.phone, location: contact.location, tags: contact.tags.join(', ') })
    setOpenMenu(null)
    setShowModal(true)
  }

  function save() {
    if (!form.name.trim()) return
    const tags = form.tags.split(',').map(t => t.trim()).filter(Boolean)
    if (editing) {
      setContacts(prev => prev.map(c => c.id === editing.id ? { ...c, ...form, tags } : c))
    } else {
      setContacts(prev => [...prev, {
        id: nextId.current++,
        name: form.name,
        role: form.role,
        email: form.email,
        phone: form.phone,
        location: form.location,
        colorIdx: prev.length % AVATAR_COLORS.length,
        tags,
      }])
    }
    setShowModal(false)
  }

  function deleteContact(id: number) {
    setContacts(prev => prev.filter(c => c.id !== id))
    setOpenMenu(null)
  }

  const filtered = contacts.filter(c =>
    search === '' ||
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.role.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

      {/* Page header */}
      <div style={{ backgroundColor: '#fff', borderBottom: `1px solid ${BORDER}`, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: TEXT_DARK, margin: 0 }}>Contacts</h1>
            <span style={{ backgroundColor: 'rgb(252, 233, 230)', color: ACCENT, fontSize: 12, fontWeight: 600, padding: '3px 8px', borderRadius: 6 }}>
              {contacts.length}
            </span>
          </div>
          <nav style={{ marginTop: 4 }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0, padding: 0, listStyle: 'none' }}>
              <li><Link href="/dashboard/leads-dashboard" style={{ color: TEXT_MID, textDecoration: 'none', fontSize: 13 }}>Accueil</Link></li>
              <li style={{ color: TEXT_MID, fontSize: 13 }}>›</li>
              <li style={{ color: TEXT_DARK, fontSize: 13 }}>Contacts</li>
            </ol>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, backgroundColor: '#fff', border: `0.67px solid ${BORDER}`, borderRadius: 5, cursor: 'pointer', boxShadow: SHADOW }}>
            <RefreshCw size={15} color={TEXT_MID} />
          </button>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, backgroundColor: '#fff', border: `0.67px solid ${BORDER}`, borderRadius: 5, cursor: 'pointer', boxShadow: SHADOW }}>
            <Download size={15} color={TEXT_MID} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 24, flex: 1 }}>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={toolbarBtn}>
              <Filter size={14} color={TEXT_MID} />
              Filtrer
              <ChevronDown size={13} color={TEXT_MID} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: `0.67px solid ${BORDER_LIGHT}`, borderRadius: 5, padding: '7px 12px', backgroundColor: '#fff', boxShadow: SHADOW }}>
              <Search size={14} color={TEXT_MID} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher"
                style={{ border: 'none', background: 'none', outline: 'none', fontSize: 14, color: TEXT_DARK, width: 180, fontFamily: '"Golos Text", sans-serif' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', border: `0.67px solid ${BORDER}`, borderRadius: 5, overflow: 'hidden' }}>
              <button onClick={() => setViewMode('list')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'list' ? 'rgb(232,249,232)' : '#fff', color: viewMode === 'list' ? SUCCESS : TEXT_MID }}>
                <List size={16} />
              </button>
              <button onClick={() => setViewMode('grid')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'grid' ? ACCENT : '#fff', color: viewMode === 'grid' ? '#fff' : TEXT_MID }}>
                <LayoutGrid size={16} />
              </button>
            </div>
            <button onClick={openAdd} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, backgroundColor: ACCENT, color: '#fff', border: 'none', borderRadius: 5, padding: '8px 14px', fontSize: 14, cursor: 'pointer', fontWeight: 500, fontFamily: '"Golos Text", sans-serif' }}>
              <Plus size={16} />
              Ajouter un contact
            </button>
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', color: TEXT_MID }}>
            <Users size={48} color={BORDER} />
            <p style={{ marginTop: 16, fontSize: 16, fontWeight: 600, color: TEXT_DARK }}>Aucun contact</p>
            <p style={{ margin: '4px 0 20px', fontSize: 14 }}>
              {search ? 'Aucun résultat pour cette recherche.' : 'Ajoutez votre premier contact pour commencer.'}
            </p>
            {!search && (
              <button onClick={openAdd} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, backgroundColor: ACCENT, color: '#fff', border: 'none', borderRadius: 5, padding: '10px 20px', fontSize: 14, cursor: 'pointer', fontWeight: 500 }}>
                <Plus size={16} />
                Ajouter un contact
              </button>
            )}
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {filtered.map((contact, idx) => {
              const ac = AVATAR_COLORS[contact.colorIdx]
              const isMenuOpen = openMenu === contact.id
              return (
                <div key={contact.id} style={{ backgroundColor: '#fff', border: `0.67px solid ${BORDER}`, borderRadius: 5, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ padding: '15px 15px 12px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', flexShrink: 0, backgroundColor: ac.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: ac.text }}>
                        {contact.name.charAt(0).toUpperCase()}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: TEXT_DARK, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{contact.name}</div>
                        <div style={{ fontSize: 12, color: TEXT_MID, marginTop: 2 }}>{contact.role || '—'}</div>
                      </div>
                    </div>
                    <div style={{ position: 'relative', flexShrink: 0 }} ref={isMenuOpen ? menuRef : undefined}>
                      <button onClick={() => setOpenMenu(isMenuOpen ? null : contact.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', color: TEXT_MID, borderRadius: 4 }}>
                        <MoreVertical size={16} />
                      </button>
                      {isMenuOpen && (
                        <div style={{ position: 'absolute', right: 0, top: '100%', zIndex: 30, backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: 130, overflow: 'hidden' }}>
                          <button onClick={() => openEdit(contact)} style={menuItem(false)}>
                            <Pencil size={13} /> Modifier
                          </button>
                          <button onClick={() => deleteContact(contact.id)} style={menuItem(true)}>
                            <Trash2 size={13} /> Supprimer
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ height: 1, backgroundColor: BORDER, margin: '0 15px' }} />

                  <div style={{ padding: '12px 15px' }}>
                    {[
                      { icon: Mail, text: contact.email || '—' },
                      { icon: Phone, text: contact.phone || '—' },
                      { icon: Globe, text: contact.location || '—' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <row.icon size={13} color={TEXT_MID} />
                        <span style={{ fontSize: 13, color: TEXT_MID, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.text}</span>
                      </div>
                    ))}
                    {contact.tags.length > 0 && (
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                        {contact.tags.map(tag => (
                          <span key={tag} style={{ fontSize: 12, fontWeight: 500, backgroundColor: 'rgb(232,249,232)', color: SUCCESS, padding: '4px 8px', borderRadius: 6 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ height: 1, backgroundColor: BORDER, margin: '0 15px' }} />

                  <div style={{ padding: '10px 15px', display: 'flex', alignItems: 'center', gap: 12 }}>
                    {[Mail, Phone, MessageCircle, Paperclip].map((Icon, i) => (
                      <button key={i} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: TEXT_MID }}>
                        <Icon size={15} />
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Modal Add/Edit */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ backgroundColor: '#fff', borderRadius: 8, width: '100%', maxWidth: 480, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${BORDER}` }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: TEXT_DARK }}>{editing ? 'Modifier le contact' : 'Nouveau contact'}</span>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: TEXT_MID, display: 'flex' }}>
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {([
                { key: 'name', label: 'Nom *', placeholder: 'Jean Dupont' },
                { key: 'role', label: 'Rôle', placeholder: 'Responsable commercial' },
                { key: 'email', label: 'Email', placeholder: 'jean@exemple.com' },
                { key: 'phone', label: 'Téléphone', placeholder: '+33 6 00 00 00 00' },
                { key: 'location', label: 'Localisation', placeholder: 'Paris, France' },
                { key: 'tags', label: 'Tags (séparés par virgule)', placeholder: 'VIP, Prioritaire' },
              ] as { key: keyof typeof form; label: string; placeholder: string }[]).map(field => (
                <div key={field.key}>
                  <label style={labelStyle}>{field.label}</label>
                  <input
                    value={form[field.key]}
                    onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                    placeholder={field.placeholder}
                    style={inputStyle}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 20px', borderTop: `1px solid ${BORDER}` }}>
              <button onClick={() => setShowModal(false)} style={{ padding: '8px 16px', borderRadius: 5, fontSize: 13, cursor: 'pointer', backgroundColor: BG, color: TEXT_DARK, border: `1px solid ${BORDER}`, fontFamily: '"Golos Text", sans-serif' }}>
                Annuler
              </button>
              <button onClick={save} style={{ padding: '8px 16px', borderRadius: 5, fontSize: 13, cursor: 'pointer', backgroundColor: ACCENT, color: '#fff', border: 'none', fontWeight: 500, fontFamily: '"Golos Text", sans-serif' }}>
                {editing ? 'Enregistrer' : 'Créer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function menuItem(danger: boolean): CSSProperties {
  return {
    display: 'flex', alignItems: 'center', gap: 8,
    width: '100%', padding: '8px 14px', background: 'none', border: 'none',
    fontSize: 13, color: danger ? ACCENT : TEXT_DARK,
    cursor: 'pointer', textAlign: 'left', fontFamily: '"Golos Text", sans-serif',
  }
}
