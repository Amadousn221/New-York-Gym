"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
  initialIndex?: number;
  autoPlayInterval?: number;
}

const SLIDE_VW = 80;
const DRAG_THRESHOLD = 50;

export function PromoCarousel({ slides, initialIndex = 0, autoPlayInterval = 5000 }: PromoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const isDraggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragOffsetRef = useRef(0);
  const hasDragged = useRef(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = () => setCurrentIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = useCallback(() => setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1)), [slides.length]);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, autoPlayInterval);
  }, [next, autoPlayInterval]);

  useEffect(() => {
    resetAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [resetAutoPlay]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    hasDragged.current = false;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragOffsetRef.current = 0;
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 5) hasDragged.current = true;
    dragOffsetRef.current = delta;
    setDragOffset(delta);
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    const delta = dragOffsetRef.current;
    dragOffsetRef.current = 0;
    setDragOffset(0);
    if (delta < -DRAG_THRESHOLD) next();
    else if (delta > DRAG_THRESHOLD) prev();
  };

  if (slides.length === 0) return null;

  return (
    <section className="w-full overflow-hidden pb-4">
      {/* Sliding track */}
      <div
        className={cn("flex select-none", isDragging ? "cursor-grabbing" : "cursor-grab")}
        style={{
          transform: `translateX(calc(-${currentIndex * SLIDE_VW}vw + ${dragOffset}px))`,
          transition: isDragging ? "none" : "transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ width: `${SLIDE_VW}vw`, flexShrink: 0 }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 md:pl-36 md:pr-8 py-[62px] md:py-[70px]"
          >
            {/* Square image — LEFT */}
            <div
              className="flex-shrink-0 aspect-square rounded-3xl shadow-[0_0_0_5px_rgb(86,20,150)] w-[85%] md:w-[48%]"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>

            {/* Text content — RIGHT */}
            <div className="flex flex-col flex-1 max-w-full md:max-w-[52%]">
              <h2
                className={cn(
                  "font-condensed text-[2rem]/none lg:text-5xl font-bold uppercase text-common-black mb-4"
                )}
              >
                {slide.title}
              </h2>
              <p className="text-gray-dark text-lg/6 grow mb-0">{slide.description}</p>
              <Link
                href={slide.ctaHref}
                className="bg-primary-main text-white mt-4 w-full rounded-full px-8 py-4 text-center font-semibold text-lg/6 md:w-auto md:self-start"
                draggable={false}
                onClick={(e) => { if (hasDragged.current) e.preventDefault(); }}
              >
                {slide.ctaLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-end pl-12 md:pl-36 pr-6 md:pr-8 mt-4">
        <button
          onClick={() => { prev(); resetAutoPlay(); }}
          className="size-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 8 14" className="w-2 h-3">
            <path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </button>

        <span className="mx-2 min-w-6 text-center text-base/6 font-normal lg:min-w-7 lg:text-lg/6">
          {currentIndex + 1}/{slides.length}
        </span>

        <button
          onClick={() => { next(); resetAutoPlay(); }}
          className="size-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
          aria-label="Next slide"
        >
          <svg viewBox="0 0 8 14" className="w-2 h-3">
            <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
