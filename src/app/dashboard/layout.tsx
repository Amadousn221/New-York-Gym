'use client'

import { useState, useEffect, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode, ComponentType } from 'react'
import {
  LayoutDashboard, ChevronDown, ChevronUp,
  Users, DollarSign, CreditCard, Receipt, PackagePlus,
  Search, Maximize2, Moon, LayoutGrid, HelpCircle, Activity,
  MessageSquare, Bell, PanelLeftClose, PanelLeftOpen,
  TrendingUp,
} from 'lucide-react'

const ACCENT = '#E41F07'
const ACCENT_BG = 'rgb(253, 233, 233)'
const TEXT_DARK = '#1F2020'
const TEXT_MID = '#707070'
const BORDER = '#E8E8E8'
const BG = '#F7F8F9'

function CrmsLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="#1B2850" />
      <path d="M8 18 L11 10 L14 15 L17 8 L20 18 Z" fill="#F59E0B" opacity="0.9" />
      <path d="M10 18 L13 12 L16 16 L18 10 L20 18 Z" fill="#EF4444" opacity="0.8" />
      <circle cx="14" cy="11" r="2.5" fill="#FCD34D" />
      <path d="M12 18 L14 13 L16 18 Z" fill="#F97316" />
    </svg>
  )
}

interface NavItem {
  label: string
  icon: ComponentType<{ size?: number; color?: string }>
  href: string
}

interface NavGroup {
  label: string
  icon: ComponentType<{ size?: number; color?: string }>
  items: NavItem[]
}

interface NavSection {
  sectionLabel: string
  groups?: NavGroup[]
  items?: NavItem[]
}

const navSections: NavSection[] = [
  {
    sectionLabel: 'Main Menu',
    groups: [
      {
        label: 'Dashboard',
        icon: LayoutDashboard,
        items: [
          { label: 'Deals Dashboard', icon: TrendingUp, href: '/dashboard/deals-dashboard' },
          { label: 'Leads Dashboard', icon: LayoutDashboard, href: '/dashboard/leads-dashboard' },
        ],
      },
    ],
  },
  {
    sectionLabel: 'CRM',
    items: [
      { label: 'Contacts', icon: Users, href: '/dashboard/contacts' },
      { label: 'Payments', icon: DollarSign, href: '/dashboard/payments' },
    ],
  },
  {
    sectionLabel: 'Adhésions',
    items: [
      { label: 'Plans d\'adhésion', icon: CreditCard, href: '/dashboard/membership-plans' },
      { label: 'Options d\'adhésion', icon: PackagePlus, href: '/dashboard/membership-addons' },
      { label: 'Transactions', icon: Receipt, href: '/dashboard/membership-transactions' },
    ],
  },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['Dashboard']))

  useEffect(() => {
    navSections.forEach(section => {
      section.groups?.forEach(group => {
        if (group.items.some(i => pathname.startsWith(i.href))) {
          setExpandedGroups(prev => new Set([...prev, group.label]))
        }
      })
    })
  }, [pathname])

  const sidebarWidth = sidebarOpen ? 240 : 70

  function toggleGroup(label: string) {
    setExpandedGroups(prev => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: BG, fontFamily: '"Golos Text", sans-serif', fontSize: 14, color: TEXT_MID }}>

      {/* Sidebar */}
      <aside style={{
        width: sidebarWidth, minWidth: sidebarWidth, position: 'fixed', top: 0, left: 0,
        height: '100vh', backgroundColor: '#fff', borderRight: `1px solid ${BORDER}`,
        zIndex: 50, display: 'flex', flexDirection: 'column',
        transition: 'width 0.2s ease, min-width 0.2s ease', overflowY: 'auto', overflowX: 'hidden',
      }}>
        {/* Logo row */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: sidebarOpen ? 'space-between' : 'center',
          padding: '14px 16px', borderBottom: `1px solid ${BORDER}`,
          minHeight: 56, flexShrink: 0,
        }}>
          {sidebarOpen && (
            <Link href="/dashboard/leads-dashboard" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <CrmsLogo />
              <span style={{ fontWeight: 700, fontSize: 18, color: TEXT_DARK }}>CRMS</span>
            </Link>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', alignItems: 'center', color: TEXT_MID }}
          >
            {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '8px 0' }}>
          {navSections.map(section => (
            <div key={section.sectionLabel}>
              {sidebarOpen && (
                <div style={sectionLabelStyle}>{section.sectionLabel}</div>
              )}
              {!sidebarOpen && <div style={{ height: 8 }} />}

              {/* Groups with expandable sub-items */}
              {section.groups?.map(group => {
                const Icon = group.icon
                const isExpanded = expandedGroups.has(group.label)
                const isGroupActive = group.items.some(i => pathname === i.href || pathname.startsWith(i.href + '/'))

                return (
                  <div key={group.label}>
                    <button
                      onClick={() => toggleGroup(group.label)}
                      style={{
                        display: 'flex', alignItems: 'center',
                        justifyContent: sidebarOpen ? 'space-between' : 'center',
                        gap: 10, padding: sidebarOpen ? '10px 16px' : '10px 0',
                        background: isGroupActive && !isExpanded ? ACCENT_BG : 'none',
                        border: 'none', cursor: 'pointer', borderRadius: 6, margin: '1px 8px',
                        width: sidebarOpen ? 'calc(100% - 16px)' : '100%',
                        color: isGroupActive ? ACCENT : TEXT_DARK,
                        fontSize: 14, fontWeight: 500,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Icon size={17} color={isGroupActive ? ACCENT : TEXT_MID} />
                        {sidebarOpen && <span>{group.label}</span>}
                      </div>
                      {sidebarOpen && (
                        isExpanded
                          ? <ChevronUp size={14} color={TEXT_MID} />
                          : <ChevronDown size={14} color={TEXT_MID} />
                      )}
                    </button>

                    {isExpanded && sidebarOpen && (
                      <div style={{ paddingLeft: 16, marginBottom: 4 }}>
                        {group.items.map(item => {
                          const isActive = pathname === item.href
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                padding: '8px 12px', textDecoration: 'none', borderRadius: 6,
                                backgroundColor: isActive ? ACCENT_BG : 'transparent',
                                color: isActive ? ACCENT : TEXT_MID,
                                fontSize: 14, fontWeight: isActive ? 500 : 400,
                                margin: '1px 0',
                                transition: 'background 0.15s, color 0.15s',
                              }}
                            >
                              <div style={{
                                width: 6, height: 6, borderRadius: '50%',
                                backgroundColor: isActive ? ACCENT : '#D0D0D0',
                                flexShrink: 0,
                              }} />
                              {item.label}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Flat items */}
              {section.items?.map(item => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: 'flex', alignItems: 'center',
                      justifyContent: sidebarOpen ? 'flex-start' : 'center',
                      gap: 10, padding: sidebarOpen ? '9px 16px' : '9px 0',
                      textDecoration: 'none', borderRadius: 6, margin: '1px 8px',
                      backgroundColor: isActive ? ACCENT_BG : 'transparent',
                      color: isActive ? ACCENT : TEXT_MID,
                      fontSize: 14, fontWeight: isActive ? 500 : 400,
                      transition: 'background 0.15s, color 0.15s',
                    }}
                  >
                    <Icon size={17} color={isActive ? ACCENT : TEXT_MID} />
                    {sidebarOpen && <span>{item.label}</span>}
                  </Link>
                )
              })}
            </div>
          ))}
        </nav>
      </aside>

      {/* Right side */}
      <div style={{ marginLeft: sidebarWidth, flex: 1, display: 'flex', flexDirection: 'column', transition: 'margin-left 0.2s ease', minWidth: 0 }}>
        {/* Topbar */}
        <header style={{
          position: 'fixed', top: 0, left: sidebarWidth, right: 0, height: 56,
          backgroundColor: '#fff', borderBottom: `1px solid ${BORDER}`,
          display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12, zIndex: 30,
          transition: 'left 0.2s ease',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            border: `1px solid ${BORDER}`, borderRadius: 6,
            padding: '6px 12px', minWidth: 200, flex: '0 0 auto',
          }}>
            <Search size={15} color={TEXT_MID} />
            <input
              placeholder="Search Keyword"
              style={{ border: 'none', background: 'none', outline: 'none', fontSize: 13, color: TEXT_DARK, width: 130 }}
            />
            <span style={{ fontSize: 11, color: TEXT_MID, border: `1px solid ${BORDER}`, borderRadius: 4, padding: '1px 5px' }}>⌘</span>
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TopbarBtn icon={Maximize2} />
            <TopbarBtn icon={Moon} />
            <TopbarBtn icon={LayoutGrid} active />
            <TopbarBtn icon={HelpCircle} active />
            <TopbarBtn icon={Activity} />
            <div style={{ position: 'relative' }}>
              <TopbarBtn icon={MessageSquare} />
              <Badge count={14} />
            </div>
            <div style={{ position: 'relative' }}>
              <TopbarBtn icon={Bell} />
              <Badge count={10} />
            </div>
            <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', cursor: 'pointer', marginLeft: 4, flexShrink: 0, backgroundColor: '#E8E8E8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: TEXT_MID }}>A</span>
            </div>
          </div>
        </header>

        <main style={{ paddingTop: 56, flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>

        <footer style={{ padding: '16px 24px', borderTop: `1px solid ${BORDER}`, backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, color: TEXT_MID }}>
          <span>Copyright © 2026 <Link href="/dashboard/leads-dashboard" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>CRMS</Link></span>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="#" style={{ color: TEXT_MID, textDecoration: 'none' }}>About</Link>
            <Link href="#" style={{ color: TEXT_MID, textDecoration: 'none' }}>Terms</Link>
            <Link href="#" style={{ color: TEXT_MID, textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

function TopbarBtn({ icon: Icon, active }: { icon: ComponentType<{ size?: number; color?: string }>; active?: boolean }) {
  return (
    <button style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: 34, height: 34, borderRadius: 8, cursor: 'pointer',
      background: active ? 'rgb(232, 244, 248)' : 'none',
      border: 'none', color: active ? '#0099CC' : TEXT_DARK,
      transition: 'background 0.15s',
    }}>
      <Icon size={18} color={active ? '#0099CC' : TEXT_MID} />
    </button>
  )
}

function Badge({ count }: { count: number }) {
  return (
    <span style={{
      position: 'absolute', top: 1, right: 1,
      backgroundColor: ACCENT, color: '#fff',
      fontSize: 9, fontWeight: 600, borderRadius: 999,
      padding: '1px 4px', lineHeight: 1.5, minWidth: 16, textAlign: 'center',
    }}>{count}</span>
  )
}

const sectionLabelStyle: CSSProperties = {
  fontSize: 11, fontWeight: 600, color: TEXT_MID,
  letterSpacing: '0.08em', textTransform: 'uppercase',
  padding: '10px 16px 4px', userSelect: 'none',
}
