'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode, ComponentType } from 'react'
import {
  LayoutDashboard, TrendingUp, CreditCard,
  Users, UserPlus,
  Award, Package, Receipt,
  Settings,
  PanelLeftClose, PanelLeftOpen,
  Search, Maximize2, Moon, LayoutGrid, CircleHelp, Activity,
  MessageCircle, Bell, UserCircle, Menu,
} from 'lucide-react'

const PRIMARY = 'rgb(86, 20, 150)'
const PRIMARY_BG = 'rgba(86, 20, 150, 0.08)'

interface NavItemDef {
  label: string
  icon: ComponentType<{ size?: number; color?: string }>
  href: string
}

interface NavGroup {
  label: string
  items: NavItemDef[]
}

const navGroups: NavGroup[] = [
  {
    label: 'Dashboard',
    items: [
      { label: "Vue d'ensemble", icon: LayoutDashboard, href: '/crm/dashboard' },
      { label: 'Leads',          icon: TrendingUp,      href: '/crm/leads' },
      { label: 'Paiements',      icon: CreditCard,      href: '/crm/paiements' },
    ],
  },
  {
    label: 'Membres',
    items: [
      { label: 'Liste des membres', icon: Users,    href: '/crm/membres' },
      { label: 'Ajouter',           icon: UserPlus, href: '/crm/membres/nouveau' },
    ],
  },
  {
    label: 'Abonnements',
    items: [
      { label: 'Plans',        icon: Award,    href: '/crm/abonnements/plans' },
      { label: 'Modules',      icon: Package,  href: '/crm/abonnements/addons' },
      { label: 'Transactions', icon: Receipt,  href: '/crm/abonnements/transactions' },
    ],
  },
  {
    label: 'Paramètres',
    items: [
      { label: 'Profil', icon: Settings, href: '/crm/parametres' },
    ],
  },
]

export default function CRMLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const sidebarWidth = sidebarOpen ? 240 : 70
  const effectiveSidebarWidth = isMobile ? 0 : sidebarWidth

  return (
    <div
      style={{
        fontFamily: 'var(--font-sans), sans-serif',
        minHeight: '100vh',
        backgroundColor: '#F7F8F9',
        color: '#707070',
        fontSize: '14px',
        display: 'flex',
      }}
    >
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 40 }}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          width: sidebarWidth,
          minWidth: sidebarWidth,
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #E8E8E8',
          overflowY: 'auto',
          overflowX: 'hidden',
          zIndex: 50,
          transition: 'width 0.2s ease, min-width 0.2s ease, transform 0.2s ease',
          display: 'flex',
          flexDirection: 'column',
          transform: isMobile && !mobileSidebarOpen ? 'translateX(-100%)' : 'translateX(0)',
        }}
      >
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: sidebarOpen ? 'flex-start' : 'center',
          padding: '16px',
          borderBottom: '1px solid #E8E8E8',
          minHeight: 56,
          flexShrink: 0,
        }}>
          <Link href="/crm/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill={PRIMARY} />
              <text x="14" y="20" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="sans-serif">NY</text>
            </svg>
            {sidebarOpen && (
              <span style={{ fontWeight: 700, fontSize: 18, color: '#1F2020', whiteSpace: 'nowrap' }}>NY Gym</span>
            )}
          </Link>
        </div>

        {/* Nav groups */}
        <nav style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
          {navGroups.map((group, gi) => (
            <div key={group.label} style={{ marginBottom: gi < navGroups.length - 1 ? 4 : 0 }}>
              {sidebarOpen ? (
                <div style={{
                  fontSize: 10, fontWeight: 600, color: '#b0b0b0',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '12px 16px 4px',
                }}>
                  {group.label}
                </div>
              ) : (
                <div style={{ height: 10 }} />
              )}
              {group.items.map(item => {
                const isActive =
                  pathname === item.href ||
                  (item.href.length > 4 && pathname.startsWith(item.href))
                return (
                  <SideNavItem
                    key={item.href}
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    active={isActive}
                    collapsed={!sidebarOpen}
                  />
                )
              })}
            </div>
          ))}
        </nav>
      </aside>

      {/* Page wrapper */}
      <div style={{
        marginLeft: effectiveSidebarWidth,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        transition: 'margin-left 0.2s ease',
        minWidth: 0,
      }}>
        {/* Topbar */}
        <header style={{
          position: 'fixed',
          top: 0,
          left: effectiveSidebarWidth,
          right: 0,
          height: 56,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #E8E8E8',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: 12,
          zIndex: 30,
          transition: 'left 0.2s ease',
        }}>
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1F2020', padding: 4, display: 'flex', alignItems: 'center' }}
          >
            <Menu size={20} />
          </button>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden md:flex"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1F2020', padding: 4, alignItems: 'center' }}
          >
            {sidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
          </button>

          <div style={{
            flex: 1, maxWidth: 320, display: 'flex', alignItems: 'center',
            backgroundColor: '#F7F8F9', border: '1px solid #E8E8E8',
            borderRadius: 999, padding: '6px 14px', gap: 8,
          }}>
            <Search size={16} color="#707070" />
            <input
              placeholder="Rechercher..."
              style={{ border: 'none', background: 'none', outline: 'none', fontSize: 13, color: '#1F2020', width: '100%' }}
            />
            <span style={{ fontSize: 11, color: '#707070', border: '1px solid #E8E8E8', borderRadius: 4, padding: '1px 5px' }}>⌘</span>
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <TopbarIcon icon={Maximize2} />
            <TopbarIcon icon={Moon} />
            <TopbarIcon icon={LayoutGrid} />
            <TopbarIcon icon={CircleHelp} />
            <TopbarIcon icon={Activity} />
            <div style={{ position: 'relative' }}>
              <TopbarIcon icon={MessageCircle} />
              <span style={{ position: 'absolute', top: 0, right: 0, backgroundColor: PRIMARY, color: '#fff', fontSize: 9, fontWeight: 600, borderRadius: 999, padding: '1px 4px', lineHeight: 1.4 }}>3</span>
            </div>
            <div style={{ position: 'relative' }}>
              <TopbarIcon icon={Bell} />
              <span style={{ position: 'absolute', top: 0, right: 0, backgroundColor: PRIMARY, color: '#fff', fontSize: 9, fontWeight: 600, borderRadius: 999, padding: '1px 4px', lineHeight: 1.4 }}>5</span>
            </div>
            <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#E8E8E8', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <UserCircle size={28} color="#707070" />
            </div>
          </div>
        </header>

        <main style={{ paddingTop: 56, flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
      </div>
    </div>
  )
}

function SideNavItem({
  icon: Icon, label, href, active, collapsed,
}: {
  icon: ComponentType<{ size?: number; color?: string }>
  label: string; href: string; active?: boolean; collapsed?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const highlighted = active || hovered

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={collapsed ? label : undefined}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'flex-start',
        gap: 10,
        padding: collapsed ? '9px 0' : '8px 16px',
        textDecoration: 'none',
        color: highlighted ? PRIMARY : '#707070',
        backgroundColor: active ? PRIMARY_BG : hovered ? 'rgba(86,20,150,0.04)' : 'transparent',
        transition: 'background-color 0.15s, color 0.15s',
        fontSize: 13,
        fontWeight: active ? 600 : 400,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        borderLeft: active ? `3px solid ${PRIMARY}` : '3px solid transparent',
      }}
    >
      <Icon size={17} color={highlighted ? PRIMARY : '#707070'} />
      {!collapsed && <span style={{ flex: 1 }}>{label}</span>}
    </Link>
  )
}

function TopbarIcon({ icon: Icon }: { icon: ComponentType<{ size?: number; color?: string }> }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#F7F8F9' : 'none',
        border: 'none', borderRadius: 8, cursor: 'pointer', padding: 6,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.15s',
      }}
    >
      <Icon size={18} color={hovered ? PRIMARY : '#1F2020'} />
    </button>
  )
}
