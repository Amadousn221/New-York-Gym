import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const features = [
  { icon: "📊", title: "Crowd Meter", desc: "See how busy your club is in real time so you can plan your visit when it suits you best." },
  { icon: "🎥", title: "On-Demand Workouts", desc: "Stream 1,000+ workouts from our library — cardio, strength, yoga, stretching, and more." },
  { icon: "📖", title: "Workout Guides", desc: "Follow step-by-step workout plans with video tutorials for every exercise, at any level." },
  { icon: "📈", title: "Activity Tracking", desc: "Log your workouts, track progress, and celebrate milestones on your fitness journey." },
  { icon: "✨", title: "PerkConnect®", desc: "Exclusive discounts and deals from your favorite brands — just for being a PF member." },
  { icon: "🗺️", title: "Club Finder", desc: "Find the nearest Planet Fitness, check hours, and get directions right from the app." },
];

export default function MobileAppPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-purpleYellowRightGlare px-6 pt-16 pb-24">
          <div className="max-w-[57rem] mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-secondary-main font-semibold text-sm uppercase tracking-widest mb-3">Available on iOS & Android</p>
              <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
                The PF App
              </h1>
              <p className="text-white/80 text-xl mb-8 max-w-lg">
                Bring the Judgement Free Zone® anywhere. Workouts, crowd meter, perks, and more — all in the palm of your hand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#" className="bg-common-black text-white rounded-xl px-6 py-3 font-bold text-base flex items-center gap-3">
                  <span className="text-2xl">🍎</span>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Download on the</div>
                    <div className="text-base font-bold">App Store</div>
                  </div>
                </a>
                <a href="#" className="bg-common-black text-white rounded-xl px-6 py-3 font-bold text-base flex items-center gap-3">
                  <span className="text-2xl">▶</span>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Get it on</div>
                    <div className="text-base font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-48 h-96 bg-white/10 rounded-3xl border-2 border-white/20 flex items-center justify-center">
                <span className="font-condensed text-white/30 text-lg uppercase text-center px-4">PF App Preview</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-12 leading-none">
              Everything in One Place
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl p-7 border border-border">
                  <span className="text-3xl block mb-4">{f.icon}</span>
                  <h3 className="font-bold text-common-black text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* On-demand highlight */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto text-center">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-none mb-4">
              On-Demand Workouts{" "}
              <span className="text-primary-main">For All Levels</span>
            </h2>
            <p className="text-gray-dark text-xl max-w-xl mx-auto mb-10">
              Whether you're just starting out or a seasoned athlete, we have workouts tailored for every fitness level — accessible anytime, anywhere.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
              {["Cardio", "Strength", "Yoga", "Stretching"].map((cat) => (
                <div key={cat} className="bg-surface-gray rounded-2xl py-6 border border-border">
                  <p className="font-bold text-common-black text-base">{cat}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="bg-primary-main text-white rounded-full px-8 py-3.5 font-bold text-lg">
                Download Free
              </a>
              <Link href="/gym-memberships" className="border-[1.5px] border-primary-main text-primary-main rounded-full px-8 py-3.5 font-bold text-lg">
                Become a Member
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
