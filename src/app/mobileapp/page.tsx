"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const chips = ["Crowd Meter", "Seamless Check-in", "Digital Workouts", "Activity Tracking"];

const features = [
  {
    title: "Get On-Demand Workouts at Your Fingertips",
    body: "Check out the FREE PF App for tons of on-demand workouts for all fitness levels and workout styles. From treadmill workouts to no-equipment strength workouts, our top trainers will keep you motivated in the gym or at home — whether you have just 5 minutes or 25 minutes. Plus, you'll find exercise and equipment tutorials to help guide you on proper form and technique. Want access to our full library of hundreds of workouts? Get the PF Black Card® membership.",
    cta: null,
  },
  {
    title: "Track Your Progress",
    body: "Whether you're setting a new personal best or taking a stroll outside, every minute matters! Use the PF App to track all your activities and watch those minutes add up!",
    cta: null,
  },
  {
    title: "Invite a PF Black Card® Guest",
    body: "PF Black Card® members can bring a friend for free to any location! Just invite your friend via the PF App and they'll be able to register online.",
    cta: null,
  },
  {
    title: "Perks: Partner Rewards & Discounts",
    body: "Explore exclusive discounts and special offers from our partners with your PF membership, right in our app.",
    cta: { label: "Explore All The Perks", href: "/gym-memberships" },
  },
  {
    title: "Refer a Friend and Get 1 Free Month When They Join",
    body: "Every friend that joins, you earn 1 FREE MONTH, up to 3 months a year, and your friend gets a great deal of joining for only $1 down. Start referring today by first downloading the PF App.",
    cta: null,
  },
  {
    title: "Scan & Learn",
    body: "Our Scan & Learn program has QR codes on our equipment in most clubs that provide quick tutorials in our app for how to use that piece of equipment.",
    cta: null,
  },
  {
    title: "Unlock Exclusive Workouts with PF+",
    body: "Exclusive workouts for all levels, motivating progressive series, experienced trainers guiding your training and much more!",
    cta: null,
  },
];

const faqs = [
  {
    q: "Where can I locate the barcode to link my club membership to the PF App?",
    a: "If you are unable to locate your barcode, please contact your home club.",
  },
  {
    q: "Can I use my planetfitness.com login credentials to log in to the app?",
    a: "Yes, you can use the same email and password you use to access your membership on our member website. If you haven't created a password yet, create an account in the mobile app using the email you used to sign up for Planet Fitness, and you will be prompted to create a password.",
  },
  {
    q: "I did not receive the verification email. What should I do?",
    a: "You should receive the verification email immediately, however, in some cases, it may take some time to send. If you didn't receive the verification email from us, check your spam/junk folder. If you never received the email, come back to the app and request another verification email by clicking Re-send Verification Email.",
  },
];

export default function MobileAppPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-purpleYellowRightGlare px-6 pt-16 pb-20">
          <div className="max-w-[57rem] mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-6">
                Bring the Judgement Free Zone® Anywhere
              </h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="bg-white/20 text-white border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#"
                  className="bg-common-black text-white rounded-xl px-5 py-3 flex items-center gap-3 min-w-[160px]"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] opacity-70 leading-tight">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="bg-common-black text-white rounded-xl px-5 py-3 flex items-center gap-3 min-w-[160px]"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.64.24.99.2l12.47-7.15-2.61-2.62zM.5 1.66C.19 2 0 2.54 0 3.26v17.49c0 .72.19 1.26.51 1.6l.08.08 9.79-9.79v-.23zM19.37 10.26l-2.62-1.5-2.91 2.91 2.91 2.91 2.63-1.51c.75-.43.75-1.13-.01-1.81zM4.17.24L16.64 7.39l-2.61 2.61z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] opacity-70 leading-tight">Get it on</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 hidden lg:block">
              <div className="w-48 h-96 bg-white/10 rounded-3xl border-2 border-white/20 flex items-center justify-center">
                <span className="font-condensed text-white/30 text-base uppercase text-center px-4">PF App</span>
              </div>
            </div>
          </div>
        </section>

        {/* It's a Gym In Your Pocket */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto text-center">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-none mb-6">
              It&apos;s a Gym In Your Pocket!
            </h2>
            <p className="text-gray-dark text-xl leading-relaxed max-w-2xl mx-auto">
              Bring the Judgement Free Zone® anywhere with seamless check-ins, digital workouts, equipment tutorials, activity tracking and more with the PF App.
            </p>
          </div>
        </section>

        {/* Helping you section */}
        <section className="bg-primary-main py-6 px-6">
          <div className="max-w-[57rem] mx-auto text-center">
            <p className="font-condensed text-2xl lg:text-3xl text-white uppercase">
              Helping You On The First Day And Beyond
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-surface-gray py-14 px-6">
          <div className="max-w-[57rem] mx-auto flex flex-col gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-border flex flex-col sm:flex-row sm:items-start gap-5"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-main text-white font-bold flex items-center justify-center text-base">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-common-black text-lg mb-2">{feature.title}</h2>
                  <p className="text-gray-dark text-sm leading-relaxed">{feature.body}</p>
                  {feature.cta && (
                    <Link
                      href={feature.cta.href}
                      className="mt-4 inline-block text-primary-main font-semibold text-sm underline underline-offset-2"
                    >
                      {feature.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get Started Today */}
        <section className="bg-primary-main py-16 px-6 text-center">
          <h2 className="font-condensed text-4xl lg:text-6xl text-white uppercase leading-none mb-4">
            Get Started Today
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/gyms"
              className="bg-secondary-main text-primary-dark rounded-full px-8 py-3.5 font-bold text-base"
            >
              Find a Club Near You
            </Link>
            <Link
              href="/gym-memberships"
              className="border-2 border-white text-white rounded-full px-8 py-3.5 font-bold text-base"
            >
              Explore Perks
            </Link>
            <a
              href="#"
              className="border-2 border-white text-white rounded-full px-8 py-3.5 font-bold text-base"
            >
              Take a Virtual Tour
            </a>
          </div>
        </section>

        {/* Mobile App FAQs */}
        <section className="bg-white py-14 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-8 leading-none">
              Mobile App FAQs
            </h2>
            <div className="divide-y divide-border border-t border-border">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-bold text-common-black text-base">{faq.q}</span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border border-border"
                      style={{ backgroundColor: openFaq === i ? "rgb(86,20,150)" : "white" }}
                    >
                      <span
                        className="text-sm font-bold leading-none"
                        style={{ color: openFaq === i ? "#fff" : "rgb(86,20,150)" }}
                      >
                        {openFaq === i ? "−" : "+"}
                      </span>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === i ? "300px" : "0px" }}
                  >
                    <p className="pb-5 text-gray-dark text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="#" className="text-primary-main font-semibold text-base underline underline-offset-2">
                Have More Questions?
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
