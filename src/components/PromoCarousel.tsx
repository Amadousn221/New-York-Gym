"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CarouselSlide {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

interface PromoCarouselProps {
  slides: CarouselSlide[];
}

export function PromoCarousel({ slides }: PromoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(slides.length - 1, i + 1));

  if (slides.length === 0) return null;

  const slide = slides[currentIndex];

  return (
    <section className="mx-auto flex w-full max-w-full justify-center pb-4 overflow-hidden">
      <div className="w-full">
        {/* Slide content */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6 md:px-12 py-12">
          {/* Text content */}
          <div className="flex flex-col flex-1 md:max-w-[45%]">
            <h2
              className={cn(
                "font-condensed text-[2rem]/none lg:text-5xl font-bold uppercase text-common-black mb-4"
              )}
            >
              {slide.title}
            </h2>
            <p className="text-gray-dark text-lg/6 grow mb-0">
              {slide.description}
            </p>
            <Link
              href={slide.ctaHref}
              className="bg-primary-main text-white mt-4 w-full rounded-full px-8 py-4 text-center font-semibold text-lg/6 md:w-auto md:self-start"
            >
              {slide.ctaLabel}
            </Link>
          </div>

          {/* Square image */}
          <div className="w-full md:w-[45%] md:flex-shrink-0 aspect-square rounded-3xl overflow-hidden">
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-end px-6 md:px-12 mt-4">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="size-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 8 14" className="w-2 h-3">
              <path
                d="M7 1L1 7l6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <span className="mx-2 min-w-6 text-center text-base/6 font-normal lg:min-w-7 lg:text-lg/6">
            {currentIndex + 1}/{slides.length}
          </span>

          <button
            onClick={next}
            disabled={currentIndex === slides.length - 1}
            className="size-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-gray-100"
            aria-label="Next slide"
          >
            <svg viewBox="0 0 8 14" className="w-2 h-3">
              <path
                d="M1 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
