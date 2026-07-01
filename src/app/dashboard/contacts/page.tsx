'use client'

import { useState, useRef, useEffect, type CSSProperties } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Filter, Search, List, LayoutGrid, Plus,
  Mail, Phone, Globe, MessageCircle, Paperclip,
  MoreVertical, Pencil, Trash2, Eye,
  RefreshCw, Download, ChevronDown, Sparkles,
} from 'lucide-react'

const ACCENT = '#E41F07'
const SUCCESS = '#1ABE17'
const WARNING = '#F9B801'
const BORDER = 'rgb(226, 232, 240)'
const BORDER_LIGHT = 'rgb(232, 232, 232)'
const BG = '#F7F8F9'
const TEXT_DARK = 'rgb(31, 32, 32)'
const TEXT_MID = 'rgb(112, 112, 112)'
const SHADOW = 'rgba(219, 219, 219, 0.25) 0px 4px 4px 0px'

interface Contact {
  name: string
  role: string
  email: string
  phone: string
  location: string
  tags: Array<{ text: string; bg: string; color: string }>
  avatar: string
  secondAvatar: string
}

const contacts: Contact[] = [
  { name: 'Darlee Robertson', role: 'Facility Manager',   email: 'robertson@example.com', phone: '1234567890',    location: 'Germany',   tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'VIP',   bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-19.jpg', secondAvatar: '/images/crm/profiles/avatar-12.jpg' },
  { name: 'Sharon Roy',       role: 'Installer',           email: 'sharon@example.com',    phone: '+1 989757485', location: '+1 989757485', tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-20.jpg', secondAvatar: '/images/crm/profiles/avatar-08.jpg' },
  { name: 'Vaughan Lewis',    role: 'Senior Manager',      email: 'vaughan12@example.com', phone: '+1 546555455', location: 'India',     tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-21.jpg', secondAvatar: '/images/crm/profiles/avatar-09.jpg' },
  { name: 'Jessica Louise',   role: 'Test Engineer',       email: 'jessica13@example.com', phone: '+1 454478787', location: 'India',     tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-23.jpg', secondAvatar: '/images/crm/profiles/avatar-10.jpg' },
  { name: 'Carol Thomas',     role: 'UI /UX Designer',     email: 'caroltho3@example.com', phone: '+1 124547845', location: 'China',     tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-16.jpg', secondAvatar: '/images/crm/profiles/avatar-01.jpg' },
  { name: 'Dawn Mercha',      role: 'Technician',          email: 'dawnmercha@example.com', phone: '+1 478845447', location: 'Martin Lewis', tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-22.jpg', secondAvatar: '/images/crm/profiles/avatar-02.jpg' },
  { name: 'Rachel Hampton',   role: 'Software Developer',  email: 'rachel@example.com',    phone: '+1 215544845', location: 'Indonesia', tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-24.jpg', secondAvatar: '/images/crm/profiles/avatar-03.jpg' },
  { name: 'Jonelle Curtiss',  role: 'Supervisor',          email: 'jonelle@example.com',   phone: '+1 121145471', location: 'Cuba',      tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-25.jpg', secondAvatar: '/images/crm/profiles/avatar-04.jpg' },
  { name: 'Jonathan Smith',   role: 'Team Lead Dev',       email: 'jonathan@example.com',  phone: '+1 321454789', location: 'Isreal',    tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-26.jpg', secondAvatar: '/images/crm/profiles/avatar-05.jpg' },
  { name: 'Brook Carter',     role: 'Team Lead Dev',       email: 'brook@example.com',     phone: '+1 278907145', location: 'Colombia',  tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-01.jpg', secondAvatar: '/images/crm/profiles/avatar-06.jpg' },
  { name: 'Eric Adams',       role: 'HR Manager',          email: 'ericadams@example.com', phone: '+1 19023-78104', location: 'France', tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-06.jpg', secondAvatar: '/images/crm/profiles/avatar-06.jpg' },
  { name: 'Richard Cooper',   role: 'Devops Engineer',     email: 'richard@example.com',   phone: '+1 18902-63904', location: 'Belgium', tags: [{ text: 'Collab', bg: 'rgb(232,249,232)', color: 'rgb(26,190,23)' }, { text: 'Rated', bg: 'rgb(254,248,230)', color: 'rgb(249,184,1)' }], avatar: '/images/crm/profiles/avatar-05.jpg', secondAvatar: '/images/crm/profiles/avatar-07.jpg' },
]

const toolbarBtn: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 6,
  backgroundColor: '#fff', border: `0.67px solid ${BORDER}`,
  borderRadius: 5, padding: '7px 10px', fontSize: 14,
  color: TEXT_DARK, cursor: 'pointer', whiteSpace: 'nowrap',
  boxShadow: SHADOW, fontFamily: '"Golos Text", sans-serif',
}

export default function ContactsPage() {
  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filtered = contacts.filter(c =>
    search === '' ||
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.role.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
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
            <h1 style={{ fontSize: 20, fontWeight: 700, color: TEXT_DARK, margin: 0, lineHeight: '24px' }}>Contacts</h1>
            <span style={{
              backgroundColor: 'rgb(252, 233, 230)', color: ACCENT,
              fontSize: 12, fontWeight: 600, padding: '5px 6px',
              borderRadius: 6,
            }}>125</span>
          </div>
          <nav style={{ marginTop: 4 }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0, padding: 0, listStyle: 'none' }}>
              <li><Link href="/dashboard" style={{ color: TEXT_MID, textDecoration: 'none', fontSize: 13 }}>Home</Link></li>
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
              Filter
              <ChevronDown size={13} color={TEXT_MID} />
            </button>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              border: `0.67px solid ${BORDER_LIGHT}`, borderRadius: 5,
              padding: '7px 12px', backgroundColor: '#fff', boxShadow: SHADOW,
            }}>
              <Search size={14} color={TEXT_MID} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
                style={{ border: 'none', background: 'none', outline: 'none', fontSize: 14, color: TEXT_DARK, width: 180, fontFamily: '"Golos Text", sans-serif' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* View toggle */}
            <div style={{ display: 'flex', border: `0.67px solid ${BORDER}`, borderRadius: 5, overflow: 'hidden' }}>
              <button
                onClick={() => setViewMode('list')}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'list' ? 'rgb(232,249,232)' : '#fff', color: viewMode === 'list' ? SUCCESS : TEXT_MID, transition: 'background 0.15s' }}
              >
                <List size={16} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'grid' ? ACCENT : '#fff', color: viewMode === 'grid' ? '#fff' : TEXT_MID, transition: 'background 0.15s' }}
              >
                <LayoutGrid size={16} />
              </button>
            </div>

            {/* Add Contacts */}
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              backgroundColor: ACCENT, color: '#fff', border: 'none',
              borderRadius: 5, padding: '8px 14px', fontSize: 14,
              cursor: 'pointer', fontWeight: 500, whiteSpace: 'nowrap',
              fontFamily: '"Golos Text", sans-serif',
            }}>
              <Plus size={16} />
              Add Contacts
            </button>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }}>
          {filtered.map((contact, idx) => (
            <ContactCard
              key={idx}
              contact={contact}
              menuOpen={openMenu === idx}
              onMenuToggle={() => setOpenMenu(openMenu === idx ? null : idx)}
              menuRef={openMenu === idx ? menuRef : undefined}
            />
          ))}
        </div>

        {/* Load More */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: ACCENT, color: '#fff', border: 'none',
            borderRadius: 5, padding: '10px 24px', fontSize: 14,
            cursor: 'pointer', fontWeight: 500,
            fontFamily: '"Golos Text", sans-serif',
          }}>
            <Sparkles size={15} />
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}

function ContactCard({
  contact, menuOpen, onMenuToggle, menuRef,
}: {
  contact: Contact
  menuOpen: boolean
  onMenuToggle: () => void
  menuRef?: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <div style={{
      backgroundColor: '#fff', border: `0.67px solid ${BORDER}`,
      borderRadius: 5, overflow: 'visible', display: 'flex', flexDirection: 'column',
    }}>
      {/* Card header */}
      <div style={{ padding: '15px 15px 12px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, backgroundColor: '#E8E8E8' }}>
            <Image
              src={contact.avatar}
              alt={contact.name}
              width={40}
              height={40}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: TEXT_DARK, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {contact.name}
            </div>
            <div style={{ fontSize: 12, color: TEXT_MID, marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {contact.role}
            </div>
          </div>
        </div>

        {/* Three-dot menu */}
        <div style={{ position: 'relative', flexShrink: 0 }} ref={menuRef}>
          <button
            onClick={onMenuToggle}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', color: TEXT_MID, borderRadius: 4 }}
          >
            <MoreVertical size={16} />
          </button>
          {menuOpen && (
            <div style={{
              position: 'absolute', right: 0, top: '100%', zIndex: 30,
              backgroundColor: '#fff', border: `1px solid ${BORDER}`,
              borderRadius: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              minWidth: 120, overflow: 'hidden',
            }}>
              {[
                { icon: Pencil, label: 'Edit' },
                { icon: Trash2, label: 'Delete', danger: true },
                { icon: Eye, label: 'Preview' },
              ].map(item => (
                <button
                  key={item.label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    width: '100%', padding: '8px 14px', background: 'none', border: 'none',
                    fontSize: 13, color: item.danger ? ACCENT : TEXT_DARK,
                    cursor: 'pointer', textAlign: 'left', fontFamily: '"Golos Text", sans-serif',
                  }}
                >
                  <item.icon size={13} />
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: BORDER, margin: '0 15px' }} />

      {/* Info */}
      <div style={{ padding: '12px 15px' }}>
        {[
          { icon: Mail, text: contact.email },
          { icon: Phone, text: contact.phone },
          { icon: Globe, text: contact.location },
        ].map(row => (
          <div key={row.text} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <row.icon size={13} color={TEXT_MID} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: TEXT_MID, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {row.text}
            </span>
          </div>
        ))}

        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
          {contact.tags.map(tag => (
            <span
              key={tag.text}
              style={{
                fontSize: 12, fontWeight: 500,
                backgroundColor: tag.bg, color: tag.color,
                padding: '5px 6px', borderRadius: 6,
              }}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: BORDER, margin: '0 15px' }} />

      {/* Action footer */}
      <div style={{ padding: '10px 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {[Mail, Phone, MessageCircle, Paperclip].map((Icon, i) => (
            <button
              key={i}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: TEXT_MID, transition: 'color 0.15s' }}
            >
              <Icon size={15} />
            </button>
          ))}
        </div>
        <div style={{ width: 30, height: 30, borderRadius: '50%', overflow: 'hidden', backgroundColor: '#E8E8E8', flexShrink: 0 }}>
          <Image
            src={contact.secondAvatar}
            alt="associated"
            width={30}
            height={30}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  )
}
