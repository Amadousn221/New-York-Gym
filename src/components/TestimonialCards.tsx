export interface Testimonial {
  initials: string;
  quote: string;
}

interface TestimonialCardsProps {
  testimonials: Testimonial[];
}

export function TestimonialCards({ testimonials }: TestimonialCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <div key={t.initials} className="rounded bg-[#DCE0E6] overflow-hidden">
          <div className="relative h-24 bg-[#DCE0E6]">
            <div className="absolute inset-x-0 bottom-0 h-16 bg-white rounded-t-[100%]" />
            <p className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-archivo)] text-4xl font-bold text-[#1B1C1F]">
              {t.initials}
            </p>
          </div>
          <div className="px-6 pb-8 pt-2">
            <svg viewBox="0 0 24 18" className="w-6 h-5 text-[#ED002E] mb-3">
              <path
                fill="currentColor"
                d="M0 18v-8C0 4.5 3.4 .8 9 0v4.1C5.6 4.9 4.1 7 4.1 9.8H9V18H0Zm13.5 0v-8c0-5.5 3.4-9.2 9-10v4.1c-3.4.8-4.9 2.9-4.9 5.7h4.9V18h-9Z"
              />
            </svg>
            <p className="text-[#1B1C1F] text-[15px] leading-relaxed">{t.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
