'use client'

import { useState } from 'react'
import type { CSSProperties, ChangeEvent } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const ACCENT = '#E41F07'
const BORDER = 'rgb(226, 232, 240)'
const TEXT_DARK = '#1F2020'
const TEXT_MID = '#707070'
const BG = '#F7F8F9'

interface FieldState {
  value: string
  switchOn: boolean
  unlimited: boolean
}

const fieldKeys = [
  'contacts', 'leads', 'companies', 'compaigns',
  'projects', 'deals', 'tasks', 'pipelines',
] as const
type FieldKey = typeof fieldKeys[number]

const fieldLabels: Record<FieldKey, string> = {
  contacts: 'Contacts',
  leads: 'Leads',
  companies: 'Companies',
  compaigns: 'Compaigns',
  projects: 'Projects',
  deals: 'Deals',
  tasks: 'Tasks',
  pipelines: 'Pipelines',
}

type FormState = Record<FieldKey, FieldState>

function initState(): FormState {
  return Object.fromEntries(
    fieldKeys.map(k => [k, { value: '0-100', switchOn: false, unlimited: false }])
  ) as FormState
}

export default function MembershipAddonsPage() {
  const [form, setForm] = useState<FormState>(initState)

  function updateField(key: FieldKey, patch: Partial<FieldState>) {
    setForm(prev => ({
      ...prev,
      [key]: { ...prev[key], ...patch },
    }))
  }

  function handleUnlimited(key: FieldKey, checked: boolean) {
    updateField(key, {
      unlimited: checked,
      value: checked ? 'Unlimited' : '0-100',
      switchOn: checked,
    })
  }

  function handleSwitch(key: FieldKey, checked: boolean) {
    updateField(key, {
      switchOn: checked,
      unlimited: checked,
      value: checked ? 'Unlimited' : '0-100',
    })
  }

  const leftFields: FieldKey[] = ['contacts', 'companies', 'projects', 'tasks']
  const rightFields: FieldKey[] = ['leads', 'compaigns', 'deals', 'pipelines']

  const cardStyle: CSSProperties = {
    backgroundColor: '#fff',
    border: `0.667px solid ${BORDER}`,
    borderRadius: 5,
    overflow: 'hidden',
  }

  return (
    <div style={{ padding: 24, backgroundColor: BG, flex: 1, fontFamily: '"Golos Text", sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={cardStyle}>

          {/* Card header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 20px', borderBottom: `0.667px solid ${BORDER}`,
          }}>
            <h6 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: TEXT_DARK }}>
              Membership Addons
            </h6>
            <Link
              href="/dashboard/membership-plans"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                backgroundColor: ACCENT, color: '#fff',
                padding: '5px 12px', borderRadius: 5,
                fontSize: 13, fontWeight: 500, textDecoration: 'none',
              }}
            >
              Back
              <ChevronRight size={14} color="#fff" />
            </Link>
          </div>

          {/* Card body */}
          <div style={{ padding: '20px 20px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
              {/* Left column */}
              <div>
                {leftFields.map(key => (
                  <FormField
                    key={key}
                    label={fieldLabels[key]}
                    fieldKey={key}
                    state={form[key]}
                    onValueChange={v => updateField(key, { value: v })}
                    onSwitchChange={c => handleSwitch(key, c)}
                    onUnlimitedChange={c => handleUnlimited(key, c)}
                  />
                ))}
              </div>
              {/* Right column */}
              <div>
                {rightFields.map(key => (
                  <FormField
                    key={key}
                    label={fieldLabels[key]}
                    fieldKey={key}
                    state={form[key]}
                    onValueChange={v => updateField(key, { value: v })}
                    onSwitchChange={c => handleSwitch(key, c)}
                    onUnlimitedChange={c => handleUnlimited(key, c)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card footer */}
          <div style={{
            display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
            gap: 8, padding: '16px 20px',
            borderTop: `0.667px solid ${BORDER}`, marginTop: 8,
          }}>
            <button
              style={{
                padding: '6px 16px', borderRadius: 5, fontSize: 13, cursor: 'pointer',
                backgroundColor: 'rgb(247, 248, 249)',
                color: TEXT_DARK, border: '0.667px solid rgb(226, 232, 240)',
                fontFamily: '"Golos Text", sans-serif',
              }}
            >
              Cancel
            </button>
            <button
              style={{
                padding: '6px 16px', borderRadius: 5, fontSize: 13, cursor: 'pointer',
                backgroundColor: ACCENT, color: '#fff', border: 'none', fontWeight: 500,
                fontFamily: '"Golos Text", sans-serif',
              }}
            >
              Create New
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FormFieldProps {
  label: string
  fieldKey: string
  state: FieldState
  onValueChange: (v: string) => void
  onSwitchChange: (c: boolean) => void
  onUnlimitedChange: (c: boolean) => void
}

function FormField({ label, fieldKey, state, onValueChange, onSwitchChange, onUnlimitedChange }: FormFieldProps) {
  const switchId = `switch-${fieldKey}`
  const checkId = `check-${fieldKey}`

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: 'block', fontSize: 14, color: TEXT_MID, marginBottom: 6 }}>
        {label} <span style={{ color: ACCENT }}>*</span>
      </label>

      {/* Input row with toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input
          type="text"
          value={state.value}
          disabled={state.unlimited}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onValueChange(e.target.value)}
          style={{
            flex: 1, padding: '7px 12px', fontSize: 14,
            border: `0.667px solid ${BORDER}`, borderRadius: 5,
            color: TEXT_DARK, backgroundColor: state.unlimited ? 'rgb(247,248,249)' : '#fff',
            outline: 'none', fontFamily: '"Golos Text", sans-serif',
          }}
        />
        {/* Toggle switch */}
        <label htmlFor={switchId} style={{ cursor: 'pointer', flexShrink: 0 }}>
          <input
            id={switchId}
            type="checkbox"
            checked={state.switchOn}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onSwitchChange(e.target.checked)}
            style={{ display: 'none' }}
          />
          <span style={{
            display: 'inline-block', position: 'relative',
            width: 36, height: 20, borderRadius: 999,
            backgroundColor: state.switchOn ? ACCENT : 'rgb(206,212,218)',
            transition: 'background 0.2s', verticalAlign: 'middle',
          }}>
            <span style={{
              position: 'absolute', top: 2,
              left: state.switchOn ? 'calc(100% - 18px)' : 2,
              width: 16, height: 16, borderRadius: '50%',
              backgroundColor: '#fff', transition: 'left 0.2s',
              boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }} />
          </span>
        </label>
      </div>

      {/* Unlimited checkbox */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
        <input
          id={checkId}
          type="checkbox"
          checked={state.unlimited}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onUnlimitedChange(e.target.checked)}
          style={{
            width: 14, height: 14, cursor: 'pointer',
            accentColor: ACCENT,
          }}
        />
        <label htmlFor={checkId} style={{ fontSize: 13, color: TEXT_MID, cursor: 'pointer' }}>
          Unlimited
        </label>
      </div>
    </div>
  )
}
