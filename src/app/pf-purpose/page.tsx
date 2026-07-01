'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const TABS = [
  { label: 'Notre stratégie', id: 'strategy' },
  { label: 'Impliquer nos communautés', id: 'communities' },
  { label: 'Inclusion & appartenance', id: 'inclusion' },
  { label: 'Gérer notre impact environnemental', id: 'environment' },
]

const PILLARS = [
  {
    image: 'https://images.ctfassets.net/473zoc40547p/yvQ8aX2Vs2K60QmmC9awd/32759a0cc17ff073c97ba517f9b0942e/32580db32dd4ffd404b2b8e91d648c7069811636__2_.jpg?fm=webp',
    alt: 'Accès | New York Gym',
    title: 'Accès',
    description: 'Nous augmentons l\'accès au fitness pour tous grâce à des abonnements abordables, des emplacements variés, un large choix d\'équipements et des dons.',
  },
  {
    image: 'https://images.ctfassets.net/473zoc40547p/5F6jPPGqKNuBvcNoctbS56/b9892b39f5382601e472f3fb026bd42c/7b2df3cbf41174a864af85db27943745e28ab175__2_.jpg?fm=webp',
    alt: 'Inclusion | New York Gym',
    title: 'Inclusion',
    description: 'Nous créons, promouvons et valorisons des clubs, des cultures et des communautés inclusifs.',
  },
  {
    image: 'https://images.ctfassets.net/473zoc40547p/1CAFyHoMX0O9VuBXn1V4in/e543b790c920141d447e2cefffdc0886/0f6162c037edd4c0bf539601e70dc54c5bad5e35__2_.jpg?fm=webp',
    alt: 'Durabilité | New York Gym',
    title: 'Durabilité',
    description: 'Nous nous efforçons de laisser un impact positif dans le monde en contribuant activement à une planète plus saine.',
  },
]

const STATS = [
  { value: '1,2 Md FCFA+', label: 'reversés à des associations de jeunesse locales depuis 2016' },
  { value: '280', label: 'bourses Génération Sans Jugement® attribuées depuis 2017' },
  { value: '45+', label: 'mini Zones Sans Jugement® installées depuis 2017' },
  { value: '800+ heures', label: 'consacrées au bénévolat local en 2024' },
  { value: '35 Md FCFA+', label: 'investis pour promouvoir le fitness et le bien-être des jeunes via notre programme Pass Été Lycéens™ depuis sa création' },
]

const ENV_ICONS = [
  { icon: 'Energy.svg', label: 'Énergie' },
  { icon: 'Globe.svg', label: 'Émissions de gaz à effet\nde serre (GES)' },
  { icon: 'Water.svg', label: 'Eau' },
  { icon: 'Trash.svg', label: 'Déchets' },
  { icon: 'Change.svg', label: 'Approvisionnement durable' },
]

const ACCORDION_ITEMS = [
  {
    id: 'Globe',
    icon: 'Globe.svg',
    title: 'Réduction des émissions opérationnelles et de la consommation d\'énergie',
    image: 'https://images.ctfassets.net/473zoc40547p/6dCtWrMJoap9Wf1ov2BhrQ/67257d8034b461b9ff4d221c7178340a/ExpandedEmissionsAssessment.jpg?fm=webp',
    alt: 'Réduction des émissions opérationnelles et de la consommation d\'énergie',
  },
  {
    id: 'Water',
    icon: 'Water.svg',
    title: 'Réduction de la consommation d\'eau opérationnelle',
    image: 'https://images.ctfassets.net/473zoc40547p/206SYq3twm5kRp3crc70jD/5c0cc825255a377c0ade4174b9248726/964e1a5a9f0995bfe750d3be6460c6d6b64e34f5.jpg?fm=webp',
    alt: 'Réduction de la consommation d\'eau opérationnelle',
  },
  {
    id: 'Equipment',
    icon: 'Equipment.svg',
    title: 'Solutions durables pour l\'équipement usagé',
    image: 'https://images.ctfassets.net/473zoc40547p/2duaRofSZG7XoO2EGw480t/109e25da9179a41a1b6901bf89441455/9fd683ffd4c2e7640250165fb2137d7d198b9810.jpg?fm=webp',
    alt: 'Solutions durables pour l\'équipement usagé',
  },
  {
    id: 'ChartProgressive',
    icon: 'ChartProgressive.svg',
    title: 'Élargissement des mesures de suivi',
    image: 'https://images.ctfassets.net/473zoc40547p/2Vg7JqLemPbeVbDLmopknW/97fc0dead497b7893dd75a1139056d06/35523dcedbd17e325e15f2ac891916f3b8bd1830.jpg?fm=webp',
    alt: 'Élargissement des mesures de suivi',
  },
]

const REPORTS = [
  { label: 'Rapport de résilience climatique 2026', href: 'https://assets.ctfassets.net/473zoc40547p/5NJNp7GA8RnEIZbje197NC/202bd2438b0695285d48e4c68cab9c91/Planet_Fitness_2025_Climate_Resilience_Report_FINAL1.20.26.pdf' },
  { label: 'Rapport ESG 2024', href: 'https://downloads.ctfassets.net/nhduxlsunsu5/0pK4R9Mc57y8nDGtRRS6c/733e2b858b66a58be5197426f014d9b4/PF-ESG_Report_full_draft-904b.pdf' },
  { label: 'Rapport ESG 2023', href: 'https://downloads.ctfassets.net/nhduxlsunsu5/Pkc9NqBd0GcmImTHuqzBy/773b3517f2fef9b5e8a860c2b8e965e8/PF-ESG_Report_2022-803_FINAL-15-.pdf' },
  { label: 'Rapport ESG 2022', href: 'https://downloads.ctfassets.net/nhduxlsunsu5/7ELlFj6U7YRBpRyVHAQIUk/60d7a6d8f0c196c826980532b954e2a8/PlanetFitness-ESG-versionB-805c.pdf' },
]

function iconMaskStyle(icon: string) {
  const url = `https://www.planetfitness.com/remix/images/icons/${icon}`
  return {
    mask: `url(${url}) no-repeat center / contain`,
    WebkitMask: `url(${url}) no-repeat center / contain`,
  } as React.CSSProperties
}

export default function PfPurposePage() {
  const [activeTab, setActiveTab] = useState('strategy')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    TABS.forEach(({ id }) => {
      const el = sectionRefs.current[id]
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveTab(id) },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  function scrollTo(id: string) {
    const el = sectionRefs.current[id]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Hero Title */}
      <div className="flex w-full flex-col px-6 pb-12 pt-16 md:p-16 lg:mx-auto lg:max-w-[90rem] lg:px-[9.25rem] lg:pt-20">
        <h1 className="text-7xl/[4.5rem] font-bold tracking-[-0.015em] md:text-[4rem]/[4.5rem] lg:text-7xl">
          New York Gym <span className="text-secondary-main">Purpose</span>
        </h1>
        <p className="text-common-black mt-4 text-2xl">Renforcer les communautés</p>
      </div>

      {/* Hero Banner Image */}
      <div className="relative w-full">
        <div className="h-[12.5rem] w-screen overflow-hidden md:h-auto">
          <Image
            src="https://images.ctfassets.net/473zoc40547p/eR8buH7ixj0yy6LJ9HDxC/21157881f795bad054d86c7b2a52bdb0/PfPurposeHeroImage.png?fm=webp"
            alt="New York Gym Purpose"
            width={2560}
            height={597}
            className="h-full w-full object-cover object-left"
            priority
          />
        </div>
      </div>

      {/* Sticky Tab Navigation */}
      <div className="border-gray-light sticky top-16 z-20 overflow-x-auto border-b bg-white pt-4 transition-[top] duration-300 md:top-[5.5rem] lg:top-20">
        <div className="mb-4 flex min-w-fit justify-center gap-2 px-6 md:gap-6 md:px-4">
          {TABS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="whitespace-nowrap"
            >
              <div
                className={`cursor-pointer rounded-full px-4 py-2 font-semibold transition-colors duration-500 ease-in-out ${
                  activeTab === id ? 'bg-primary-main text-white' : 'bg-surface-gray text-common-black'
                }`}
              >
                {label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div>
        {/* Strategy & Pillars */}
        <section
          ref={el => { sectionRefs.current['strategy'] = el }}
          className="bg-surface-lightPurple flex flex-col items-center px-6 pb-16 pt-16 md:px-8 lg:pb-[5.5rem] lg:pt-[6rem] lg:px-[9.625rem]"
        >
          <div className="mx-auto lg:max-w-[42.75rem]">
            <h2 className="text-center text-[2rem]/10 font-bold lg:text-5xl/[3.5rem]">
              Notre stratégie et nos piliers
            </h2>
            <p className="text-gray-dark mt-4 mb-8 text-center text-lg/[1.5rem] lg:mb-16">
              Créer un monde du fitness plus connecté et sans jugement, accessible à tous.
            </p>
          </div>
          <div className="flex w-full flex-col gap-8 md:flex-row md:gap-4 lg:max-w-[71.5rem] lg:gap-[4.625rem]">
            {PILLARS.map(pillar => (
              <div key={pillar.title} className="flex flex-1 flex-col">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  width={760}
                  height={400}
                  className="h-auto max-h-[11.625rem] w-full rounded-3xl object-cover md:min-h-[11.625rem]"
                  loading="eager"
                />
                <h3 className="mt-4 text-left text-2xl/8 font-bold tracking-[-0.27px]">{pillar.title}</h3>
                <p className="text-gray-dark mt-2 text-lg/[1.5rem]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ESG Report */}
        <section className="mx-auto flex w-full flex-col gap-12 px-6 py-16 md:max-w-[52.5rem] md:gap-16 lg:max-w-[74.5rem] lg:py-20">
          <article className="flex w-full flex-col-reverse items-center justify-between md:mx-auto md:items-center lg:size-full lg:items-center lg:justify-between lg:gap-5 lg:flex-row">
            <div className="mt-6 md:mt-8 md:max-w-[638px] lg:mt-0 lg:max-w-md">
              <h2 className="text-[2rem]/10 font-bold tracking-[-0.015em] lg:text-5xl/[3.5rem]">
                Rapport Environnemental, Social &amp; de Gouvernance (ESG) 2025
              </h2>
              <p className="text-gray-dark mt-6 text-lg/[1.5rem] lg:my-8">
                En tant que réseau de clubs fitness parmi les plus dynamiques, avec plus de membres que la plupart des autres marques de fitness, nous avons la responsabilité d&apos;améliorer la santé des communautés où nous vivons, travaillons et nous entraînons. Nous croyons être idéalement positionnés pour avoir un impact sociétal en augmentant l&apos;accès au fitness, en créant des clubs, des cultures et des communautés inclusifs, et en priorisant des pratiques commerciales durables.
              </p>
              <a
                href="https://downloads.ctfassets.net/473zoc40547p/1JTpH67RjOtkA3k91KyGxr/415c46171f0f877446f14785f9c4b48e/PF_Full_ESG_Report_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-main text-common-white mx-auto mt-6 block w-full max-w-sm rounded-full px-8 py-4 text-center text-lg/6 font-semibold md:w-fit md:px-6 md:py-2 lg:mx-0 lg:px-8 lg:py-4"
              >
                Lire notre rapport ESG 2025
              </a>
            </div>
            <div className="flex max-w-[35.25rem] justify-center">
              <Image
                src="https://images.ctfassets.net/473zoc40547p/6KvjK85JrnTzsjOWyKP8n4/8a5ec8e732e7c61e20a9b7f4a23139b9/c98f46a345bfd7b248215c97950bc87cb2b1d9ad.jpg?fm=webp"
                alt="2024 ESG Report"
                width={564}
                height={423}
                className="h-[245px] w-[327px] rounded-3xl object-cover object-top md:h-[17.625rem] md:w-[377px] lg:h-[423px] lg:w-[35.25rem]"
                loading="eager"
              />
            </div>
          </article>
        </section>

        {/* Community Engagement by the Numbers */}
        <section
          ref={el => { sectionRefs.current['communities'] = el }}
          className="bg-primary-main bg-purpleYellowRightGlare w-full py-16 lg:py-20"
        >
          <div className="mx-auto max-w-[57rem] px-6 lg:px-0">
            <h2 className="text-common-white mb-12 text-center text-[2rem]/10 font-bold lg:mb-16 lg:text-5xl/[3.5rem]">
              L&apos;engagement communautaire en chiffres
            </h2>
            <div className="grid grid-cols-1 place-items-center gap-4">
              <div className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-3">
                {STATS.slice(0, 3).map(stat => (
                  <div key={stat.value} className="w-[20.4375rem] max-w-full lg:w-[17.125rem]">
                    <div className="flex h-[11.5rem] w-full flex-col justify-center rounded-3xl bg-white px-4 py-6 text-center">
                      <h3 className="font-condensed mb-2 text-5xl/[3rem] text-[#8656ED]">{stat.value}</h3>
                      <p className="text-common-black text-[1.125rem]/[1.5rem]">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 place-items-center gap-4 lg:mx-auto lg:w-fit lg:grid-cols-2">
                {STATS.slice(3).map(stat => (
                  <div key={stat.value} className="w-[20.4375rem] max-w-full lg:w-[17.125rem]">
                    <div className="flex h-[11.5rem] w-full flex-col justify-center rounded-3xl bg-white px-4 py-6 text-center">
                      <h3 className="font-condensed mb-2 text-5xl/[3rem] text-[#8656ED]">{stat.value}</h3>
                      <p className="text-common-black text-[1.125rem]/[1.5rem]">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Engaging Our Communities */}
        <section className="mx-auto flex w-full flex-col gap-12 px-6 py-16 md:max-w-[52.5rem] md:gap-16 lg:max-w-[74.5rem] lg:py-20">
          <h2 className="text-center text-[2rem]/10 font-bold lg:text-5xl/[3.5rem]">Impliquer nos communautés</h2>
          <article className="flex w-full flex-col-reverse items-center justify-between md:mx-auto md:items-center lg:size-full lg:items-center lg:justify-between lg:gap-5 lg:flex-row-reverse">
            <div className="mt-6 md:mt-8 md:max-w-[638px] lg:mt-0 lg:max-w-md">
              <h2 className="text-[1.5rem]/8 font-bold tracking-[-0.015em] lg:text-[2rem]/10">
                Génération Sans Jugement®
              </h2>
              <p className="text-gray-dark mt-6 text-lg/[1.5rem] lg:my-8">
                Nous restons engagés à étendre notre philosophie Sans Jugement® au-delà de nos clubs, jusque dans nos communautés. Cela inclut notre partenariat pluriannuel avec des associations locales de jeunesse à travers l&apos;initiative signature Génération Sans Jugement®. Soutenue par le centre de support des clubs New York Gym, les franchisés, les membres, l&apos;équipe et les partenaires, cette initiative vise à responsabiliser les jeunes à travers des bourses, un accompagnement au bien-être émotionnel tenant compte des traumatismes, et des programmes offrant un accès gratuit au sport — y compris nos mini Zones Sans Jugement®, des espaces fitness installés dans des centres de jeunesse à travers le pays.
              </p>
              <Link
                href="/jfg"
                className="bg-primary-main text-common-white mx-auto mt-6 block w-full max-w-sm rounded-full px-8 py-4 text-center text-lg/6 font-semibold md:w-fit md:px-6 md:py-2 lg:mx-0 lg:px-8 lg:py-4"
              >
                En savoir plus
              </Link>
            </div>
            <div className="flex max-w-[35.25rem] justify-center">
              <Image
                src="https://images.ctfassets.net/473zoc40547p/2VpeA6Zrn1JV48Ni3aIUIl/a41cb4ac9350413ca3f6c4989910d102/b3cf9c01bdd4e2300d9e13894da7f946636dc07d.jpg?fm=webp"
                alt="Génération Sans Jugement"
                width={564}
                height={423}
                className="h-[245px] w-[327px] rounded-3xl object-cover object-top md:h-[17.625rem] md:w-[377px] lg:h-[423px] lg:w-[35.25rem]"
              />
            </div>
          </article>
        </section>

        {/* Inclusion & Belonging */}
        <section
          ref={el => { sectionRefs.current['inclusion'] = el }}
          className="bg-lightPinkLeftGlare px-6 py-16 md:px-8 lg:py-20"
        >
          <div className="mx-auto lg:max-w-[46.5rem]">
            <h2 className="mb-6 text-center text-[2rem]/10 font-bold lg:mb-8 lg:text-5xl/[3.5rem]">
              Faire avancer notre engagement en faveur de l&apos;inclusion et de l&apos;appartenance
            </h2>
            <div className="text-common-black mx-auto mt-4 flex flex-col text-center text-lg/[1.5rem] lg:max-w-[46.5rem]">
              <p className="px-3">
                Chez New York Gym, nous sommes bien plus qu&apos;un club de fitness de quartier — nous sommes la Zone Sans Jugement®.
              </p>
              <h3 className="py-4 text-2xl font-bold">Notre vision</h3>
              <p className="mb-8">
                Augmenter l&apos;accès au fitness et au bien-être. Offrir un environnement où chacun se sent à sa place. Notre Zone Sans Jugement® incarne notre engagement envers l&apos;inclusion et l&apos;appartenance, et guide nos actions — pas seulement dans nos clubs, mais aussi envers notre équipe, nos franchisés et les communautés que nous servons.
              </p>
              <p>
                En tant qu&apos;organisation construite sur la promesse de nos valeurs Sans Jugement™, nous sommes engagés à cultiver une culture et un environnement internes où chacun peut s&apos;épanouir.
              </p>
            </div>
          </div>
        </section>

        {/* Reducing Our Environmental Footprint */}
        <section
          ref={el => { sectionRefs.current['environment'] = el }}
          className="w-full px-6 py-16 md:px-[9.25rem] lg:px-8 lg:py-20"
        >
          <h2 className="mx-auto mb-12 text-center text-[2rem]/10 font-bold md:mb-8 lg:max-w-[42.5rem] lg:text-5xl/[3.5rem]">
            Réduire notre empreinte environnementale
          </h2>
          <div className="text-common-black mx-auto mb-12 mt-4 flex flex-col gap-6 text-center text-lg/[1.5rem] lg:mb-16 lg:max-w-[42.5rem]">
            <p>
              Notre engagement envers la gestion environnementale repose sur la conviction qu&apos;atténuer l&apos;impact de notre activité sur la planète est essentiel pour soutenir la croissance à long terme et la résilience de nos clubs, de notre équipe, de nos franchisés et de nos communautés. Notre approche de gestion environnementale se concentre sur des pratiques durables qui améliorent l&apos;efficacité opérationnelle, réduisent notre empreinte et font progresser l&apos;ensemble de notre chaîne de valeur.
            </p>
          </div>

          {/* Icon row */}
          <div className="mx-auto mb-20 grid grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-5 md:gap-x-4 md:gap-y-0 lg:max-w-[71.5rem]">
            {ENV_ICONS.map(({ icon, label }) => (
              <div
                key={icon}
                className={`flex flex-col items-center${icon === 'Change.svg' ? ' col-span-full md:col-start-auto' : ''}`}
              >
                <i
                  className="bg-accent-purple mb-4 inline-block size-16 lg:size-[57px]"
                  style={iconMaskStyle(icon)}
                />
                <p className="whitespace-pre-line text-center text-base/6 font-semibold lg:text-2xl/8">{label}</p>
              </div>
            ))}
          </div>

          {/* 2024 Highlights accordion */}
          <div className="relative flex flex-col lg:m-auto lg:max-w-[71.5rem] lg:min-h-[42.5rem] lg:flex-row lg:justify-between lg:gap-10">
            <div className="flex shrink-0 flex-col items-center md:items-start lg:max-w-[28rem]">
              <h3 className="self-start text-2xl font-bold tracking-[-0.36px] md:mb-6 lg:mb-8 lg:text-[2rem]/10 lg:tracking-[-0.48px]">
                Faits marquants 2025
              </h3>
              <fieldset className="flex flex-col md:gap-6 lg:gap-8">
                {ACCORDION_ITEMS.map((item, i) => (
                  <div key={item.id} className="border-b md:border-none">
                    <input
                      type="radio"
                      id={`highlights-${item.id}-${i}`}
                      className="peer hidden"
                      name="highlights-accordion"
                      defaultChecked={i === 0}
                    />
                    <label
                      htmlFor={`highlights-${item.id}-${i}`}
                      className="flex cursor-pointer items-center justify-between py-6 transition-all duration-300 md:py-0 peer-checked:[&_.show-more]:-rotate-90"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="flex items-center">
                        <i
                          className="bg-accent-purple mr-4 inline-block size-8 shrink-0"
                          style={iconMaskStyle(item.icon)}
                          aria-hidden="true"
                        />
                        <p className="text-lg/6 font-semibold">{item.title}</p>
                      </div>
                      <div className="show-more ml-4 flex size-6 rotate-90 items-center justify-center transition-transform duration-300 lg:mt-2">
                        <i
                          className="bg-primary-main inline-block h-2.5 w-[7px]"
                          style={iconMaskStyle('Chevron.svg')}
                          aria-hidden="true"
                        />
                      </div>
                    </label>
                    <div className="mx-auto max-w-md overflow-hidden opacity-0 transition-all duration-[400ms] peer-checked:mb-6 max-md:max-h-0 peer-checked:max-md:max-h-[28rem] peer-checked:max-md:w-full md:mx-0 md:w-[327px] md:max-lg:h-0 md:max-lg:peer-checked:my-4 peer-checked:md:max-lg:size-[327px] lg:absolute lg:right-0 lg:top-0 lg:h-[42.5rem] lg:w-1/2 lg:max-w-full lg:opacity-100 lg:transition-opacity lg:duration-300 peer-checked:opacity-100">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={680}
                        height={680}
                        className="aspect-square size-full rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                ))}
              </fieldset>
              <a
                href="https://downloads.ctfassets.net/473zoc40547p/1JTpH67RjOtkA3k91KyGxr/415c46171f0f877446f14785f9c4b48e/PF_Full_ESG_Report_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-main text-common-white mx-auto mt-8 block w-full max-w-sm rounded-full px-8 py-4 text-center text-lg/6 font-semibold md:w-fit md:px-6 md:py-2 lg:mx-0 lg:mt-12 lg:px-8 lg:py-4"
              >
                Lire notre rapport ESG 2025
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Additional Reporting */}
      <section className="bg-surface-gray">
        <div className="flex w-full flex-col px-6 py-16 lg:mx-auto lg:max-w-[90rem] lg:p-20 lg:px-[9.25rem] lg:pt-20">
          <h2 className="mb-6 text-center text-[2rem]/10 font-bold md:mb-8 lg:text-5xl/[3.5rem]">
            Rapports complémentaires
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REPORTS.map(report => (
              <a
                key={report.label}
                href={report.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center justify-center rounded-3xl bg-white px-4 py-6 shadow-[0_16px_32px_0px_rgba(4,16,35,0.08)]"
              >
                <span className="text-primary-main text-center text-[1rem]/[1.5rem] font-semibold underline">
                  {report.label}
                </span>
              </a>
            ))}
          </div>
          <div className="text-center">
            <button className="text-primary-main mt-6 font-semibold underline lg:mt-8">Afficher plus</button>
          </div>
          <p className="text-gray-dark mt-12 text-left text-sm/[1.125rem] lg:mt-16">
            Pour toute question ou retour, écris-nous à :{' '}
            <a href="mailto:contact-esg@newyorkgym.com" className="text-primary-main font-semibold underline">
              contact-esg@newyorkgym.com
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
