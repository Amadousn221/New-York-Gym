'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'
import {
  Search, Plus, CheckCircle2, XCircle,
  RefreshCw, Upload, ChevronDown, Settings,
} from 'lucide-react'

const ACCENT = '#E41F07'
const BORDER = '#E8E8E8'
const TEXT_DARK = '#1F2020'
const TEXT_MID = '#707070'
const BG = '#F7F8F9'

interface Feature {
  text: string
  included: boolean
}

interface Plan {
  name: string
  monthlyPrice: number
  yearlyPrice: number
  features: Feature[]
}

const plans: Plan[] = [
  {
    name: 'Basique',
    monthlyPrice: 50,
    yearlyPrice: 42,
    features: [
      { text: '10 Contacts', included: true },
      { text: '10 Leads', included: true },
      { text: '20 Entreprises', included: true },
      { text: '50 Campagnes', included: true },
      { text: '100 Projets', included: true },
      { text: 'Affaires', included: false },
      { text: 'Tâches', included: false },
      { text: 'Pipelines', included: false },
    ],
  },
  {
    name: 'Business',
    monthlyPrice: 200,
    yearlyPrice: 167,
    features: [
      { text: '20 Contacts', included: true },
      { text: '20 Leads', included: true },
      { text: '50 Entreprises', included: true },
      { text: 'Campagnes illimitées', included: true },
      { text: 'Projets illimités', included: true },
      { text: 'Affaires', included: false },
      { text: 'Tâches', included: false },
      { text: 'Pipelines', included: false },
    ],
  },
  {
    name: 'Entreprise',
    monthlyPrice: 400,
    yearlyPrice: 333,
    features: [
      { text: 'Contacts illimités', included: true },
      { text: 'Leads illimités', included: true },
      { text: 'Entreprises illimitées', included: true },
      { text: 'Campagnes illimitées', included: true },
      { text: 'Projets illimités', included: true },
      { text: 'Affaires', included: true },
      { text: 'Tâches', included: true },
      { text: 'Pipelines', included: true },
    ],
  },
]

const card: CSSProperties = {
  backgroundColor: '#fff',
  border: '0.667px solid rgb(226, 232, 240)',
  borderRadius: 5,
  boxShadow: 'rgba(219, 219, 219, 0.25) 0px 4px 4px 0px',
}

const toolbarCard: CSSProperties = {
  ...card,
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  marginBottom: 16,
}

export default function MembershipPlansPage() {
  const [isYearly, setIsYearly] = useState(true)
  const [search, setSearch] = useState('')

  const filtered = plans.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ padding: 24, backgroundColor: BG, flex: 1, fontFamily: '"Golos Text", sans-serif' }}>

      {/* Page header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h4 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: TEXT_DARK }}>
              Plans d&apos;adhésion
            </h4>
            <span style={{
              backgroundColor: ACCENT, color: '#fff',
              fontSize: 11, fontWeight: 600, borderRadius: 4,
              padding: '1px 8px', lineHeight: '18px',
            }}>152</span>
          </div>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: TEXT_MID }}>
            <span style={{ color: TEXT_MID, cursor: 'pointer' }}>Accueil</span>
            <span style={{ margin: '0 6px', color: TEXT_MID }}>›</span>
            <span style={{ color: TEXT_DARK, fontWeight: 500 }}>Plans d&apos;adhésion</span>
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 6,
            border: '0.667px solid rgb(226, 232, 240)', borderRadius: 5,
            backgroundColor: '#fff', padding: '7px 14px',
            fontSize: 13, color: TEXT_DARK, cursor: 'pointer',
            boxShadow: 'rgba(219,219,219,0.25) 0px 4px 4px',
          }}>
            <Upload size={14} color={TEXT_MID} />
            Exporter
            <ChevronDown size={13} color={TEXT_MID} />
          </button>
          <button style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 34, height: 34, borderRadius: 5,
            border: '0.667px solid rgb(226, 232, 240)',
            backgroundColor: '#fff', cursor: 'pointer',
            boxShadow: 'rgba(219,219,219,0.25) 0px 4px 4px',
          }}>
            <RefreshCw size={15} color={TEXT_MID} />
          </button>
          <button style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 34, height: 34, borderRadius: 5,
            border: '0.667px solid rgb(226, 232, 240)',
            backgroundColor: '#fff', cursor: 'pointer',
            boxShadow: 'rgba(219,219,219,0.25) 0px 4px 4px',
          }}>
            <Settings size={15} color={TEXT_MID} />
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div style={toolbarCard}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          border: `1px solid ${BORDER}`, borderRadius: 5,
          padding: '7px 12px', width: 220,
        }}>
          <Search size={14} color={TEXT_MID} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher"
            style={{ border: 'none', background: 'none', outline: 'none', fontSize: 13, color: TEXT_DARK, width: '100%' }}
          />
        </div>

        <button style={{
          display: 'flex', alignItems: 'center', gap: 6,
          backgroundColor: ACCENT, color: '#fff',
          border: 'none', borderRadius: 5,
          padding: '8px 14px', fontSize: 13, fontWeight: 500, cursor: 'pointer',
        }}>
          <Plus size={15} color="#fff" />
          Ajouter un plan
        </button>
      </div>

      {/* Yearly / Monthly toggle */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: TEXT_DARK }}>Annuel</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          style={{
            position: 'relative', width: 44, height: 24,
            borderRadius: 999, border: 'none', cursor: 'pointer',
            backgroundColor: ACCENT, padding: 0,
            transition: 'background 0.2s',
          }}
          aria-label="Toggle billing period"
        >
          <span style={{
            position: 'absolute', top: 3,
            left: isYearly ? 3 : 'calc(100% - 21px)',
            width: 18, height: 18, borderRadius: '50%',
            backgroundColor: '#fff',
            transition: 'left 0.2s',
            display: 'block',
          }} />
        </button>
        <span style={{ fontSize: 14, fontWeight: 500, color: TEXT_DARK }}>Mensuel</span>
      </div>

      {/* Plan cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {filtered.map(plan => (
          <PlanCard key={plan.name} plan={plan} isYearly={isYearly} />
        ))}
      </div>
    </div>
  )
}

function PlanCard({ plan, isYearly }: { plan: Plan; isYearly: boolean }) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice

  return (
    <div style={{
      backgroundColor: '#fff',
      border: '0.667px solid rgb(226, 232, 240)',
      borderRadius: 5,
      boxShadow: 'rgba(219, 219, 219, 0.25) 0px 4px 4px 0px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Card header */}
      <div style={{ padding: '24px 24px 20px', textAlign: 'center', borderBottom: `1px solid ${BORDER}` }}>
        <p style={{ margin: '0 0 8px', fontSize: 13, color: TEXT_MID }}>{plan.name}</p>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
          <span style={{ fontSize: 30, fontWeight: 700, color: TEXT_DARK }}>${price}</span>
          <span style={{ fontSize: 14, color: TEXT_MID }}>/ mois</span>
        </div>
      </div>

      {/* Features */}
      <div style={{ padding: '20px 24px', flex: 1 }}>
        {plan.features.map((f, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: i < plan.features.length - 1 ? 12 : 0,
          }}>
            {f.included ? (
              <CheckCircle2 size={18} color="#27AC62" style={{ flexShrink: 0 }} />
            ) : (
              <XCircle size={18} color={TEXT_MID} style={{ flexShrink: 0 }} />
            )}
            <span style={{
              fontSize: 14,
              color: f.included ? TEXT_DARK : TEXT_MID,
              textDecoration: f.included ? 'none' : 'line-through',
            }}>
              {f.text}
            </span>
          </div>
        ))}
      </div>

      {/* Choose button */}
      <div style={{ padding: '0 24px 24px' }}>
        <button style={{
          width: '100%', padding: '10px 0',
          backgroundColor: ACCENT, color: '#fff',
          border: 'none', borderRadius: 5,
          fontSize: 14, fontWeight: 500, cursor: 'pointer',
        }}>
          Choisir
        </button>
      </div>
    </div>
  )
}
