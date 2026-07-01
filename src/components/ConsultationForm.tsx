"use client";

import { useState } from "react";

const GOALS = [
  "Lose weight",
  "Decrease pain",
  "Increase flexibility",
  "Look great",
  "Increase strength",
  "Increase energy",
  "Live longer",
  "Improve cardio",
];

const CLUBS = [
  { name: "NY Gym — Midtown Manhattan", address: "250 West 34th Street" },
  { name: "NY Gym — Brooklyn Heights", address: "180 Montague Street" },
  { name: "NY Gym — Queens Astoria", address: "31-15 Steinway Street" },
  { name: "NY Gym — Jersey City", address: "90 Hudson Street" },
];

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [clubIndex, setClubIndex] = useState(0);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const club = CLUBS[clubIndex];

  const toggleGoal = (goal: string) => {
    setSelectedGoals((current) =>
      current.includes(goal) ? current.filter((g) => g !== goal) : [...current, goal]
    );
  };

  if (submitted) {
    return (
      <div className="bg-white rounded p-8 lg:p-12 text-center">
        <h3 className="font-[family-name:var(--font-archivo)] text-[1.75rem] text-[#1B1C1F] font-bold mb-3">
          You&apos;re All Set!
        </h3>
        <p className="text-[#1B1C1F]/80 text-base leading-relaxed">
          Thanks for requesting a free consultation at <span className="font-semibold">{club.name}</span>.
          A Certified Personal Trainer will reach out shortly to book your session.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded p-6 lg:p-12">
      <div className="flex flex-col items-center text-center mb-8">
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#ED002E] mb-2">
          <path
            fill="currentColor"
            d="M12 2C7.6 2 4 5.6 4 10c0 5.4 6.6 11.2 7.1 11.6.3.3.8.3 1.1 0C12.7 21.2 20 15.4 20 10c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
          />
        </svg>
        <p className="text-xs font-bold uppercase tracking-wide text-[#1B1C1F]/60 mb-1">
          Your nearest club
        </p>
        <p className="font-[family-name:var(--font-archivo)] text-xl font-bold text-[#1B1C1F]">
          {club.name}
        </p>
        <p className="text-sm text-[#1B1C1F]/70 mb-2">{club.address}</p>
        <button
          type="button"
          onClick={() => setPickerOpen((v) => !v)}
          className="text-[#ED002E] text-sm font-bold uppercase tracking-wide hover:underline"
        >
          Change Club
        </button>
        {pickerOpen && (
          <div className="mt-3 flex flex-col gap-1 w-full max-w-sm">
            {CLUBS.map((c, i) => (
              <button
                type="button"
                key={c.name}
                onClick={() => {
                  setClubIndex(i);
                  setPickerOpen(false);
                }}
                className="text-sm text-left px-3 py-2 rounded border border-[#DCE0E6] hover:border-[#ED002E] transition-colors"
              >
                {c.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <label className="block">
            <span className="block text-sm font-semibold text-[#1B1C1F] mb-1">
              First name <span className="text-[#ED002E]">*</span>
            </span>
            <input
              required
              type="text"
              className="w-full rounded border border-[#DCE0E6] px-4 py-[8.5px] focus:outline-none focus:border-[#ED002E]"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-[#1B1C1F] mb-1">
              Last name <span className="text-[#ED002E]">*</span>
            </span>
            <input
              required
              type="text"
              className="w-full rounded border border-[#DCE0E6] px-4 py-[8.5px] focus:outline-none focus:border-[#ED002E]"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-[#1B1C1F] mb-1">
              Email address <span className="text-[#ED002E]">*</span>
            </span>
            <input
              required
              type="email"
              className="w-full rounded border border-[#DCE0E6] px-4 py-[8.5px] focus:outline-none focus:border-[#ED002E]"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-[#1B1C1F] mb-1">
              Phone number <span className="text-[#ED002E]">*</span>
            </span>
            <input
              required
              type="tel"
              className="w-full rounded border border-[#DCE0E6] px-4 py-[8.5px] focus:outline-none focus:border-[#ED002E]"
            />
          </label>
        </div>

        <span className="block text-sm font-semibold text-[#1B1C1F] mb-3">
          I need a Personal Trainer to help me... (optional)
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {GOALS.map((goal) => (
            <label key={goal} className="flex items-center gap-2 text-sm text-[#1B1C1F]">
              <input
                type="checkbox"
                checked={selectedGoals.includes(goal)}
                onChange={() => toggleGoal(goal)}
                className="accent-[#ED002E] size-4"
              />
              {goal}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-[#ED002E] text-white font-bold rounded px-10 py-3 hover:bg-[#c40025] transition-colors"
        >
          Start Now
        </button>

        <p className="text-[#1B1C1F]/60 text-xs leading-relaxed mt-4">
          By clicking &ldquo;Start Now&rdquo; you consent to NY Gym contacting you by phone, SMS, or
          email about your free consultation. You may opt out at any time.
        </p>
      </form>
    </div>
  );
}
