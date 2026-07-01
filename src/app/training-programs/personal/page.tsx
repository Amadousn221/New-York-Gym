import Image from "next/image";
import { Archivo, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsultationForm } from "@/components/ConsultationForm";
import { TestimonialCards } from "@/components/TestimonialCards";

const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });

const focusRows = [
  {
    heading: "A plan that's custom-made for you",
    body: "Your Certified Personal Trainer builds a plan around your goals, your schedule, and your starting point, factoring in nutrition and lifestyle so results actually stick. It's not a generic workout — it's a roadmap built for you.",
    image: "/images/goodlife/plan-custom-made.jpeg",
    imageAlt: "A trainer helping a client through a bicep curl",
    reverse: false,
  },
  {
    heading: "Focused training areas",
    body: "Every NY Gym club sets aside dedicated space for personal training, equipped with everything your trainer needs to keep you comfortable and focused, so you can give every session your full effort.",
    image: "/images/goodlife/focused-training-areas.jpeg",
    imageAlt: "A trainer directing a member through a stretch",
    reverse: true,
  },
];

const spotlights = [
  { label: "Alex R.", image: "/images/about-pf/pf-member-thumbs-up.webp", caption: "Member Spotlight — Strength Training" },
  { label: "Jordan M.", image: "/images/our-clubs/gym-hero.webp", caption: "Member Spotlight — Endurance Journey" },
  { label: "Sam K.", image: "/images/about-pf/exercise-bike.webp", caption: "Member Spotlight — Getting Started" },
  { label: "Taylor B.", image: "/images/memberships/free-fitness-training.webp", caption: "Member Spotlight — Staying Consistent" },
];

const testimonials = [
  { initials: "D.R.", quote: "My trainer met me exactly where I was and never made me feel behind. Six months in, I'm stronger than I've ever been, and I actually look forward to every session." },
  { initials: "M.T.", quote: "I'd tried working out on my own for years with no real progress. Having someone hold me accountable and adjust the plan as I improved made all the difference." },
  { initials: "P.K.", quote: "I came in wanting to lose weight and walked out with a whole new relationship with fitness. My coach taught me things I'll use for the rest of my life." },
];

const journeySteps = [
  {
    step: "1",
    title: "Choose a Personal Trainer",
    body: "After a consultation, you'll choose a Certified Personal Trainer that's right for you. Think of your trainer as your coach — here to help you achieve more than you thought possible.",
    image: "/images/goodlife/journey-step1.jpeg",
  },
  {
    step: "2",
    title: "Develop a Plan",
    body: "Your Certified Personal Trainer builds a customized plan based on proven behavioural science, so you see results fast and build fitness skills for life.",
    image: "/images/goodlife/journey-step2.jpeg",
  },
  {
    step: "3",
    title: "Stick to Your Workouts",
    body: "Put in the work and watch how quickly progress turns into results — built on exercise science, your plan pushes you toward small goals that add up to a big transformation.",
    image: "/images/goodlife/journey-step3.jpeg",
  },
];

const careerPhotos = [
  "/images/goodlife/careers-1.jpeg",
  "/images/goodlife/careers-2.jpeg",
  "/images/goodlife/careers-3.jpeg",
  "/images/goodlife/careers-4.jpeg",
];

export default function PersonalTrainingPage() {
  return (
    <>
      <Header />
      <main className={`${archivo.variable} ${inter.variable} font-[family-name:var(--font-inter)]`}>

        {/* ── Hero — black split panel ─────────────────────────────── */}
        <section className="bg-[#16171A] grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 py-16 md:px-16 lg:px-20 lg:py-24 flex flex-col">
            <p className="text-[#ED002E] font-bold text-sm uppercase tracking-widest mb-5">
              Personal Training
            </p>

            <div className="mb-8">
              <p className="text-white/70 italic text-2xl mb-1">NY Gym</p>
              <p className="font-[family-name:var(--font-archivo)] text-white text-5xl lg:text-6xl font-extrabold uppercase leading-none mb-3">
                Personal
              </p>
              <div className="inline-block border-2 border-white px-4 py-1">
                <p className="font-[family-name:var(--font-archivo)] text-white text-4xl lg:text-5xl font-extrabold uppercase leading-none">
                  Training
                </p>
              </div>
            </div>

            <p className="text-white font-bold text-sm uppercase tracking-wide mb-4">
              At NY Gym — The Leader in Personal Training.
            </p>
            <p className="text-white/80 text-base leading-relaxed max-w-md mb-8">
              Get the results you want from one of our highly educated Personal Trainers. Every
              NY Gym coach is trained to inspire, educate, and help you follow through, session
              after session.
            </p>

            <a
              href="#consultation"
              className="inline-flex items-center justify-center bg-white text-[#ED002E] font-bold text-sm rounded px-8 py-3 w-fit hover:bg-[#ED002E] hover:text-white transition-colors"
            >
              Get a free consultation
            </a>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src="/images/goodlife/hero.jpeg"
              alt="An NY Gym Personal Trainer coaching a member on a sled push"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* ── Three pillars — red banner ───────────────────────────── */}
        <section className="bg-[#ED002E] py-14 px-6 lg:py-20">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="font-[family-name:var(--font-archivo)] text-white font-extrabold uppercase text-3xl lg:text-[2.75rem] leading-tight">
              <p>Work Out Efficiently</p>
              <p>See Lasting Results</p>
              <p>Build Lifelong Skills</p>
            </div>
            <p className="text-white/90 text-base leading-relaxed max-w-md">
              Our Certified Personal Trainers help you reach your goals fast. Train on your own
              schedule with a plan built around your form, your confidence, and your motivation
              to keep going.
            </p>
          </div>
        </section>

        {/* ── Stronger Together ────────────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F]">
                Stronger Together
              </h2>
              <div className="w-16 h-1 bg-[#ED002E] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28">
              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-lg -rotate-1 max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/goodlife/stronger-together.jpeg"
                  alt="An NY Gym Certified Personal Trainer coaching a member"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-archivo)] text-2xl lg:text-3xl font-extrabold text-[#1B1C1F] mb-5">
                  Professional trainers that bring out your best
                </h3>
                <p className="text-[#1B1C1F]/80 text-base leading-relaxed">
                  Every NY Gym Certified Personal Trainer is trained through the NY Gym Personal
                  Training Institute, and keeps building new certifications year after year.
                  Think of your trainer as a partner in fitness — someone who pushes you through
                  that last rep, keeps you accountable, and brings top-tier coaching to your
                  corner of the gym.
                </p>
              </div>
            </div>

            {focusRows.map((row) => (
              <div
                key={row.heading}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28 last:mb-0 ${
                  row.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] rounded overflow-hidden shadow-lg rotate-1 max-w-md mx-auto lg:mx-0">
                  <Image src={row.image} alt={row.imageAlt} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-archivo)] text-2xl lg:text-3xl font-extrabold text-[#1B1C1F] mb-5">
                    {row.heading}
                  </h3>
                  <p className="text-[#1B1C1F]/80 text-base leading-relaxed">{row.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Member Story Spotlights ──────────────────────────────── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="text-center mb-4 px-6">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F]">
              Member Story Spotlights
            </h2>
            <div className="w-16 h-1 bg-[#ED002E] mx-auto mt-4" />
          </div>

          {spotlights.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-8 lg:px-16 ${i % 2 === 1 ? "bg-[#F5F6F7]" : "bg-white"}`}
            >
              <div className="mx-auto max-w-[74.5rem] flex flex-col sm:flex-row items-center gap-6">
                <div className="sm:w-1/3 text-center sm:text-left">
                  <p className="text-[#ED002E] font-bold text-sm">Spotlight:</p>
                  <p className="font-[family-name:var(--font-archivo)] text-2xl lg:text-3xl font-extrabold text-[#1B1C1F]">
                    {s.label}
                  </p>
                </div>
                <div className="sm:w-2/3 w-full relative aspect-video rounded overflow-hidden">
                  <Image src={s.image} alt={s.caption} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="size-14 rounded-full bg-[#ED002E] flex items-center justify-center">
                      <svg viewBox="0 0 16 16" className="w-5 h-5 text-white">
                        <path d="M4 2l10 6-10 6V2z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <p className="absolute bottom-3 left-4 text-white text-sm font-semibold drop-shadow">
                    {s.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── Testimonials ──────────────────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F]">
                Testimonials
              </h2>
              <div className="w-16 h-1 bg-[#ED002E] mx-auto mt-4" />
            </div>
            <TestimonialCards testimonials={testimonials} />
          </div>
        </section>

        {/* ── Your Personal Training Journey + Consultation form ──── */}
        <section className="bg-[#F5F6F7] pt-16 pb-0 px-6 lg:pt-24">
          <div className="mx-auto max-w-[74.5rem]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-[-4rem] relative z-10">
              {journeySteps.map((step) => (
                <div key={step.step} className="bg-white rounded shadow-md overflow-hidden">
                  <div className="relative aspect-video">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-[#ED002E] font-[family-name:var(--font-archivo)] text-sm font-extrabold mb-1">
                      Step {step.step}
                    </p>
                    <h3 className="font-[family-name:var(--font-archivo)] text-lg font-extrabold text-[#1B1C1F] uppercase mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#1B1C1F]/75 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="consultation" className="mx-auto max-w-[50rem] pt-24 pb-16 lg:pb-24">
            <div className="text-center mb-4">
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] uppercase">
                I&apos;m Ready for a
              </h2>
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#ED002E] uppercase mb-3">
                Free Consultation
              </h2>
              <p className="text-[#1B1C1F]/60 text-sm">
                Free consultation is only valid once per person.*
              </p>
            </div>
            <p className="text-center text-[#1B1C1F]/80 max-w-xl mx-auto mb-10">
              Experience our complimentary 60-minute personalized consultation with a Certified
              Personal Trainer. Includes a health and fitness goal assessment, a 20-minute
              workout, and prescription workout planning.
            </p>
            <ConsultationForm />
          </div>
        </section>

        {/* ── Careers ───────────────────────────────────────────────── */}
        <section className="bg-[#F5F6F7] py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] text-center">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] mb-3">
              Become a Personal Trainer
            </h2>
            <p className="text-[#1B1C1F]/80 max-w-xl mx-auto mb-10">
              Are you health-obsessed and fitness-fuelled? Join our team and help members
              achieve the goals that matter most to them.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {careerPhotos.map((src, i) => (
                <div key={src} className="relative aspect-square rounded overflow-hidden">
                  <Image src={src} alt="NY Gym trainer coaching a member" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" priority={i === 0} />
                </div>
              ))}
            </div>
            <a
              href="/blog"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 hover:bg-[#c40025] transition-colors"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* ── Closing CTA — duotone bootcamp banner ────────────────── */}
        <section className="relative overflow-hidden py-24 px-6">
          <Image
            src="/images/goodlife/bootcamp-banner.jpeg"
            alt="Members training together in a group bootcamp class"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#ED002E] mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-archivo)] text-white text-2xl lg:text-4xl font-extrabold leading-tight mb-8">
              Try an NY Gym Bootcamp. Small-group training that&apos;s fun, supportive, and
              judgement-free.
            </h2>
            <a
              href="/blog"
              className="inline-flex items-center justify-center bg-white text-[#ED002E] font-bold text-sm rounded px-8 py-3 hover:bg-[#1B1C1F] hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
