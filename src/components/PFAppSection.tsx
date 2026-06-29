import Link from "next/link";

export function PFAppSection() {
  return (
    <section className="relative w-full bg-primary-main bg-purpleYellowRightGlare lg:h-[44.5rem] overflow-hidden">
      <div className="relative flex flex-col h-full mx-auto max-w-[42.9rem] lg:max-w-none lg:px-12 xl:px-24 px-6 pt-16">
        <div className="lg:max-w-[42.9rem]">
          <h2 className="font-condensed text-[3rem]/none lg:text-[4rem]/none text-white mb-6">
            Bring the{" "}
            <span className="text-secondary-main">Judgement Free Zone®</span>{" "}
            anywhere
          </h2>
          <p className="text-white text-lg/6 mb-6 lg:mb-8">
            The PF App has it all – pick the best time to visit your club with the Crowd Meter, track
            your activities, access hundreds of digital on-demand workouts, and more! Ready to get
            movin&apos;?
          </p>
          <Link
            href="/mobileapp"
            className="inline-flex bg-white text-primary-main rounded-[1.75rem] px-8 h-14 items-center font-semibold text-lg/6 mb-[4.3rem]"
          >
            Download the PF App
          </Link>
        </div>

        {/* Phone image */}
        <img
          src="/images/pf-app-phone.webp"
          alt="Mobile app Main screen"
          className="ml-[50%] aspect-square w-[21rem] translate-x-[-49%] md:w-[35.6rem] md:translate-x-[-47.7%] lg:absolute lg:bottom-0 lg:right-0 lg:w-[35rem] lg:translate-x-0 lg:ml-0"
        />
      </div>
    </section>
  );
}
