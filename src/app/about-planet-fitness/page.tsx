import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPlanetFitnessPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── H1 ───────────────────────────────────────────────────── */}
        <div className="px-6 pb-12 pt-16 md:px-16 md:py-16 lg:mx-auto lg:px-8 lg:pt-20">
          <h1 className="text-[4.5rem] font-bold leading-[4.5rem] tracking-[-1.08px] text-common-black">
            <span
              style={{
                background:
                  "linear-gradient(145deg, rgb(136, 68, 200) 0%, rgb(136, 69, 200) 40%, rgb(89, 31, 145) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              About
            </span>{" "}
            Planet Fitness
          </h1>
        </div>

        {/* ── Hero image ───────────────────────────────────────────── */}
        <section className="relative flex h-[41.5rem] md:h-[29.3rem] lg:h-[50.625rem] lg:justify-center 2xl:h-[70rem]">
          <Image
            src="/images/about-pf/exercise-bike.webp"
            alt="Affordability and quality for everyone"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-0 w-full px-6 pb-20 md:px-24 lg:max-w-[71.5rem] lg:px-8 lg:pb-24 min-[1200px]:px-0">
            <h2 className="max-w-[35.25rem] text-[3rem]/[3.5rem] font-bold tracking-[-0.72px] text-white">
              Affordability and quality for everyone
            </h2>
          </div>
        </section>

        {/* ── Founded in 1992 ──────────────────────────────────────── */}
        <section className="text-gray-dark px-6 py-16 md:px-[6.125rem] lg:mx-auto lg:max-w-[90rem] lg:px-8 lg:py-20">
          <div className="group flex flex-col text-lg/6 md:max-lg:text-base lg:mx-auto lg:max-w-[71.5rem] lg:flex-row lg:gap-x-20">
            <div className="lg:w-1/2 lg:max-w-[35rem]">
              <h2 className="text-common-black mb-4 text-[2rem]/10 font-bold tracking-[-0.015em] md:max-w-[38rem] md:text-5xl/[3.5rem]">
                Founded in 1992, in Dover, New Hampshire
              </h2>
              <p className="mb-6">
                Planet Fitness was founded in 1992, in Dover, NH. In the
                beginning, it operated much like every other gym in its small
                hometown and catered to the same small percentage of the
                population in the U.S. who worked out and belonged to a health
                club.{" "}
                <br />
                <br />{" "}
                PF&rsquo;s owners quickly recognized that there was a greater
                opportunity to serve a much larger segment of the population.
                They asked themselves, &ldquo;Why does 80-85% of the population
                not belong to a gym?&rdquo; The answer? First-time and casual
                gym users didn&rsquo;t like the &ldquo;look at me&rdquo;
                attitudes and behaviors found in typical gyms, and they
                didn&rsquo;t want to have to pay a lot of money to give fitness
                a try.
              </p>
            </div>
            <p className="max-h-0 opacity-0 transition-all duration-300 group-has-[input:checked]:visible group-has-[input:checked]:mb-6 group-has-[input:checked]:max-h-[41rem] group-has-[input:checked]:opacity-100 max-md:invisible md:mb-0 md:max-h-none md:opacity-100 lg:w-1/2 lg:max-w-[31.25rem]">
              So they completely changed the gym environment, both in attitude
              and format, creating the non-intimidating, low-cost model that has
              revolutionized the gym industry. Planet Fitness became known as
              the &ldquo;Judgement Free Zone&reg;&rdquo; &ndash; a welcoming
              and friendly community where people could feel comfortable
              regardless of their fitness level.{" "}
              <br />
              <br />{" "}
              Today, Planet Fitness has become one of the largest and
              fastest-growing franchisors and operators of fitness centers in
              the United States by number of members and locations. With more
              than 2,700 locations in 50 states, the District of Columbia,
              Puerto Rico, Canada, Panama, Mexico and Australia, Planet Fitness
              has continued to spread its unique mission of enhancing
              people&rsquo;s lives by providing an affordable, high-quality
              fitness experience in a welcoming, non-intimidating environment.
            </p>
            <input type="checkbox" className="hidden" />
            <label className="text-primary-main cursor-pointer md:hidden">
              <span className="flex group-has-[input:checked]:hidden">
                Read more
              </span>
              <span className="hidden group-has-[input:checked]:flex">
                Read less
              </span>
            </label>
          </div>
        </section>

        {/* ── Planet Fitness Today ─────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "rgb(231, 223, 247)",
            backgroundImage: [
              'url("/images/grainy-background.png")',
              "radial-gradient(101.01% 61.86% at -1.68% 2.82%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)",
              "radial-gradient(95.46% 50.87% at 95.59% 101.92%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)",
              "radial-gradient(59.84% 106.36% at 106.37% -28.25%, rgba(94,41,205,0.6) 0%, rgba(255,255,255,0) 100%)",
            ].join(", "),
          }}
        >
          <div className="flex flex-col items-center gap-y-8 pt-16 md:gap-0 md:px-[6.125rem] lg:mx-auto lg:max-w-[90rem] lg:flex-row lg:justify-between lg:p-0">
            <div className="px-6 md:px-0 lg:w-1/2 lg:pl-8">
              <div className="lg:mx-auto lg:max-w-md">
                <h2
                  className="mb-4 text-5xl/none font-bold uppercase text-common-black md:max-w-[25rem] lg:mb-4 lg:max-w-none lg:text-[5rem]/[4.5rem] lg:tracking-[-1.2px]"
                  style={{
                    fontFamily:
                      'var(--font-barlow-condensed), "Barlow Condensed", sans-serif',
                  }}
                >
                  Planet Fitness{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(160deg, rgb(77, 15, 137) 0%, rgb(112, 27, 196) 80%, rgb(117, 28, 204) 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                    }}
                  >
                    Today
                  </span>
                </h2>
                <p className="mb-8 text-lg/6 text-gray-dark">
                  Visit our Newsroom today and stay up to date on current events
                  happening at Planet Fitness!
                </p>
                <Link
                  href="/newsroom"
                  className="inline-flex items-center justify-center rounded-full bg-primary-main px-8 py-4 text-lg/6 font-semibold text-common-white"
                >
                  Visit Our Newsroom
                </Link>
              </div>
            </div>
            <div className="flex aspect-square w-full md:max-lg:-mt-16 lg:w-1/2 lg:items-end lg:pl-2">
              <Image
                src="/images/about-pf/pf-member-thumbs-up.webp"
                alt="Planet Fitness member shows thumbs up"
                width={640}
                height={640}
                className="size-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── Healthier communities ────────────────────────────────── */}
        <section className="mx-auto flex w-full flex-col gap-12 px-6 py-16 md:max-w-[52.5rem] md:gap-16 lg:max-w-[74.5rem] lg:py-20">
          <article className="flex w-full flex-col-reverse items-center justify-between md:mx-auto md:items-center lg:size-full lg:items-center lg:justify-between lg:gap-5 lg:flex-row-reverse">
            <div className="mt-6 md:mt-8 md:max-w-[638px] lg:mt-0 lg:max-w-md">
              <h2 className="text-[2rem]/10 font-bold tracking-[-0.24px] md:text-5xl/[3.5rem]">
                A healthier world starts with healthier communities
              </h2>
              <p className="my-8 text-lg/6 text-gray-dark">
                We believe we have a responsibility to enhance the health of the
                communities where we live, work and work out. And drive societal
                impact by increasing access to fitness, creating inclusive
                clubs, cultures and communities, and prioritizing sustainable
                business practices.
              </p>
              <Link
                href="/pf-purpose"
                className="bg-primary-main text-common-white mx-auto mt-6 block w-full max-w-sm rounded-full px-8 py-4 text-center text-lg/6 font-semibold md:w-fit md:px-6 md:py-2 lg:mx-0 lg:px-8 lg:py-4"
              >
                Learn More
              </Link>
            </div>
            <Image
              src="/images/about-pf/pf-member-on-treadmill.webp"
              alt=""
              width={564}
              height={423}
              className="h-[245px] w-[327px] rounded-3xl object-cover object-top md:h-[17.625rem] md:w-[377px] lg:h-[423px] lg:w-[35.25rem]"
            />
          </article>
        </section>

        {/* ── Your Fitness Journey CTA ─────────────────────────────── */}
        <section className="w-full px-6 pb-8 md:px-[35px] md:pb-16 lg:px-6 lg:pb-20">
          <div
            className="bg-purpleVioletLefSandRightGlare flex flex-col items-center gap-6 rounded-3xl bg-cover bg-center bg-no-repeat px-6 py-9 shadow-[0_16px_32px_0px_rgba(4,16,35,0.08)] md:gap-8 md:rounded-[3rem] lg:mx-auto lg:max-w-[71.5rem] lg:py-14"
            style={{
              backgroundImage:
                "url('/images/about-pf/start-fitness-journey.webp')",
            }}
          >
            <div className="font-condensed flex size-full flex-col items-center justify-center text-center font-extrabold uppercase italic">
              <span className="text-2xl/6 text-common-white md:text-5xl">
                Your fitness journey
              </span>
              <span className="text-[2rem]/none text-secondary-main md:text-[4rem] lg:text-[5rem]/[4.5rem]">
                Starts here
              </span>
            </div>
            <Link
              href="/gym-memberships"
              className="w-full max-w-sm rounded-[1.75rem] bg-common-white px-6 py-2 text-center font-semibold text-primary-main md:w-auto lg:px-8 lg:py-4 lg:text-lg/6"
            >
              Explore Our Memberships
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
