import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const pillars = [
  {
    title: "Access",
    desc: "We increase access to fitness for all through our affordable memberships, diverse locations, equipment variety and donations.",
  },
  {
    title: "Inclusion",
    desc: "We create, promote and reward inclusive clubs, cultures and communities.",
  },
  {
    title: "Sustainability",
    desc: "We strive to leave a positive impact on the world by actively contributing to a healthier planet.",
  },
];

const stats = [
  { number: "$10.7M+", label: "contributed to Boys & Girls Clubs of America (BGCA) since 2016" },
  { number: "280", label: "Judgement Free Generation® scholarships awarded since 2017" },
  { number: "45+", label: "mini Judgement Free Zones® built since 2017" },
  { number: "800+", label: "hours devoted to local volunteering in 2024" },
  { number: "$300M+", label: "invested to promote youth fitness and wellbeing through our High School Summer Pass™ program since inception" },
];

const highlights = [
  {
    title: "Decreased Operational Emissions and Energy Use",
    desc: "Observed a 19% decrease in total operational energy use and 15% decrease in total operational GHG emissions when normalized by kBtu per square foot (from 2019 baseline).",
  },
  {
    title: "Decreased Operational Water Use",
    desc: "Observed a 15% decrease in total normalized operational water use from our 2019 baseline.",
  },
  {
    title: "Sustainable Solutions for Used Equipment",
    desc: "Recycled, resold, or donated 100% of equipment at end-of-life.",
  },
  {
    title: "Expanded Measurement",
    desc: "We expanded our assessment of Scope 3 emissions to include additional categories as defined by the Greenhouse Gas Protocol.",
  },
];

const navTabs = [
  "Our Strategy",
  "Engaging Our Communities",
  "Inclusion & Belonging",
  "Managing Our Environmental Impact",
];

const reports = [
  "2025 Climate Resilience Report",
  "2023 ESG Report",
  "2022 ESG Report",
  "2021 ESG Report",
];

const envCategories = ["Energy", "Greenhouse Gas (GHG) Emissions", "Water", "Waste", "Sustainable Sourcing"];

export default function PFPurposePage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-hero-gradient-1 px-6 pt-16 pb-20 text-center">
          <p className="text-secondary-main font-semibold text-sm uppercase tracking-widest mb-3">
            Strengthening Communities
          </p>
          <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-6">
            PF Purpose
          </h1>

          {/* Nav pills */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {navTabs.map((tab, i) => (
              <a
                key={tab}
                href={`#${tab.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className={`rounded-full px-5 py-2 text-sm font-semibold border transition-colors ${
                  i === 0
                    ? "bg-white text-primary-main border-white"
                    : "bg-transparent text-white border-white/40 hover:border-white"
                }`}
              >
                {tab}
              </a>
            ))}
          </div>
        </section>

        {/* Strategy & Pillars */}
        <section id="our-strategy" className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-tight mb-4">
              Our Purpose Strategy &amp; Pillars
            </h2>
            <p className="text-gray-dark text-lg leading-relaxed mb-10 max-w-2xl">
              To create a more connected and Judgement Free™ planet where fitness and wellbeing are within reach for all.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-surface-gray rounded-2xl p-8 border border-border">
                  <h3 className="font-condensed text-2xl text-primary-main uppercase mb-3">{pillar.title}</h3>
                  <p className="text-gray-dark text-base leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESG Report */}
        <section className="bg-primary-main py-14 px-6">
          <div className="max-w-[57rem] mx-auto flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="font-condensed text-3xl lg:text-4xl text-white uppercase leading-tight mb-4">
                2024 Environmental, Social &amp; Governance (ESG) Report
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                As one of the largest and fastest-growing franchisors and operators of fitness centers with more members than any other fitness brand, we have the responsibility to enhance the health of the communities where we live, work, and workout. We believe we are best positioned to make a societal impact by increasing access to fitness, creating inclusive clubs, cultures and communities and prioritizing sustainable business practices.
              </p>
              <Link
                href="#"
                className="bg-secondary-main text-primary-dark rounded-full px-8 py-3.5 font-bold text-base inline-block"
              >
                Read our 2024 ESG Report
              </Link>
            </div>
          </div>
        </section>

        {/* Community Engagement Numbers */}
        <section className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-none mb-12 text-center">
              Community Engagement by the Numbers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.number} className="bg-white rounded-2xl p-6 border border-border">
                  <p className="font-condensed text-5xl text-primary-main leading-none mb-3">{stat.number}</p>
                  <p className="text-gray-dark text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engaging Our Communities */}
        <section id="engaging-our-communities" className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <p className="text-primary-main font-semibold text-sm uppercase tracking-widest mb-3">
              Engaging Our Communities
            </p>
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-tight mb-6">
              Judgement Free Generation®
            </h2>
            <p className="text-gray-dark text-lg leading-relaxed mb-8 max-w-3xl">
              We remain committed to extending our philosophy of the Judgement Free Zone® beyond our clubs and into our communities. This includes our multi-year partnership with Boys &amp; Girls Clubs of America (BGCA) through our signature initiative – the Judgement Free Generation®. Supported by the Planet Fitness Club Support Center, franchisees, members, team members, and vendors, the initiative focuses on empowering youth through scholarships, community grants, supporting trauma-informed, emotional wellbeing training, and delivering programs that offer access to fitness, including our mini Judgement Free Zones®, fitness spaces installed in BGCs across the country.
            </p>
            <Link
              href="#"
              className="bg-primary-main text-white rounded-full px-8 py-3.5 font-bold text-base inline-block"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Inclusion & Belonging */}
        <section id="inclusion-belonging" className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <p className="text-primary-main font-semibold text-sm uppercase tracking-widest mb-3">
              Inclusion &amp; Belonging
            </p>
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-tight mb-4">
              Advancing Our Commitment to Inclusion &amp; Belonging
            </h2>
            <p className="text-gray-dark text-lg leading-relaxed mb-8">
              At Planet Fitness, we are more than your neighborhood fitness center – we are the Judgement Free Zone®.
            </p>
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-common-black text-xl mb-4">Our Vision</h3>
              <p className="text-gray-dark text-base leading-relaxed">
                Increasing access to fitness and wellbeing. Providing an environment where everyone feels like they belong. Our Judgement Free Zone® embodies our commitment to Inclusion &amp; Belonging and fuels our actions not only within our clubs, but also for our employees, franchisees and the communities we serve.
              </p>
              <p className="text-gray-dark text-base leading-relaxed mt-4">
                As an organization built on the promise of Judgement Free™ values, we are committed to fostering an internal culture and environment where everyone can thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Footprint */}
        <section id="managing-our-environmental-impact" className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <p className="text-primary-main font-semibold text-sm uppercase tracking-widest mb-3">
              Environmental Stewardship
            </p>
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-tight mb-4">
              Reducing Our Environmental Footprint
            </h2>
            <p className="text-gray-dark text-lg leading-relaxed mb-8 max-w-3xl">
              Our commitment to environmental stewardship is founded on the belief that mitigating the impacts of our business on the planet is crucial for sustaining both our long-term growth and the resilience and wellbeing of our members, team members, franchisees, and communities.
            </p>

            {/* Environment categories */}
            <div className="flex flex-wrap gap-2 mb-10">
              {envCategories.map((cat) => (
                <span
                  key={cat}
                  className="bg-surface-gray text-common-black border border-border rounded-full px-4 py-1.5 text-sm font-semibold"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h3 className="font-condensed text-2xl lg:text-3xl text-common-black uppercase mb-6">
              2024 Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {highlights.map((h) => (
                <div key={h.title} className="bg-surface-gray rounded-2xl p-6 border border-border">
                  <h4 className="font-bold text-common-black text-base mb-2">{h.title}</h4>
                  <p className="text-gray-dark text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="bg-primary-main text-white rounded-full px-8 py-3.5 font-bold text-base inline-block"
            >
              Read our 2024 ESG Report
            </Link>
          </div>
        </section>

        {/* Additional Reporting */}
        <section className="bg-surface-gray py-14 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-3xl text-common-black uppercase mb-6">
              Additional Reporting
            </h2>
            <ul className="flex flex-col gap-3 mb-8">
              {reports.map((report) => (
                <li key={report}>
                  <Link
                    href="#"
                    className="text-primary-main font-semibold text-base underline underline-offset-2 hover:text-primary-dark transition-colors"
                  >
                    {report}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-gray-dark text-sm">
              Please email{" "}
              <a href="mailto:ESG@planetcsc.com" className="text-primary-main underline">
                ESG@planetcsc.com
              </a>{" "}
              with any questions or feedback.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
