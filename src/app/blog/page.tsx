"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const featuredPost = {
  category: "Mental Health",
  title: "CELEBRATE MENTAL HEALTH AWARENESS MONTH WITH PLANET FITNESS",
  excerpt:
    "When you think about the gym, your brain probably immediately pictures lifting weights or jogging on a treadmill. But what if one of the best reasons to work out has nothing to do with the reps you put in, and everything to do with how it makes you feel? May is Mental Health Awareness Month, and turns out, a gym session can work out both your body and your brain.",
};

const posts = [
  {
    category: "Fitness Tips",
    title: "Time-Friendly Fitness: The Advantages of Gyms with Flexible Hours",
    excerpt:
      "The freedom to choose your schedule is one of the biggest advantages of flexible gym hours. Whether you're an early bird or a night owl, finding time to work out is easier than ever.",
    date: "May 2026",
    readTime: "6 min read",
  },
  {
    category: "Training",
    title: "Soccer Workouts: A Gym Guide to Up Your Game in High School",
    excerpt:
      "Soccer players who hit the gym gain a serious edge. Discover the best strength and endurance exercises to improve your game on and off the field.",
    date: "May 2026",
    readTime: "8 min read",
  },
  {
    category: "Strength",
    title: "Embracing Functional Fitness Training: Unlocking 12 Functional Fitness Exercises to Build Strength",
    excerpt:
      "Functional fitness training is all about exercises that mimic everyday movements. Learn 12 key exercises to improve your strength, mobility, and overall health.",
    date: "April 2026",
    readTime: "7 min read",
  },
  {
    category: "Mental Health",
    title: "How Exercise Supports Mental Wellness",
    excerpt:
      "Ever notice how the sun seems brighter and you feel more energized after a nice walk? Any kind of physical activity is a natural vent for stress. When you're able to just focus on moving, you get a break from the noise.",
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    category: "Wellness",
    title: "How to Stay Consistent with Your Fitness Routine",
    excerpt:
      "Motivation gets you started, but habits keep you going. Discover practical strategies to make gym time a non-negotiable part of your week.",
    date: "March 2026",
    readTime: "5 min read",
  },
  {
    category: "Nutrition",
    title: "What to Eat Before and After Your Workout",
    excerpt:
      "Fueling your body correctly makes a huge difference in your performance and recovery. Learn the best pre- and post-workout nutrition strategies.",
    date: "March 2026",
    readTime: "4 min read",
  },
];

const categories = [
  "All",
  "Fitness Tips",
  "Mental Health",
  "Training",
  "Strength",
  "Wellness",
  "Nutrition",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-hero-gradient-1 px-6 pt-16 pb-20 text-center">
          <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
            Planet Fitness Blog
          </h1>
          <p className="text-white/80 text-xl max-w-lg mx-auto">
            Expert tips, workout guides, and inspiration to fuel your fitness journey.
          </p>
        </section>

        {/* Featured Post */}
        <section className="bg-white px-6 py-12">
          <div className="max-w-[57rem] mx-auto">
            <div className="bg-gradient-330-18-84 rounded-3xl overflow-hidden">
              <div className="p-8 md:p-12">
                <span className="bg-secondary-main text-primary-dark text-xs font-bold rounded px-3 py-1 uppercase tracking-wide mb-5 inline-block">
                  {featuredPost.category}
                </span>
                <h2 className="font-condensed text-2xl md:text-4xl text-white uppercase leading-tight mb-5 max-w-2xl">
                  {featuredPost.title}
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-7 max-w-xl">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href="#"
                  className="bg-secondary-main text-primary-dark rounded-full px-7 py-2.5 font-bold text-sm inline-block"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest */}
        <section className="bg-surface-gray px-6 pb-14">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-3xl text-common-black uppercase mb-5 leading-none pt-2">
              Latest
            </h2>

            {/* Category filters */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    activeCategory === cat
                      ? "bg-primary-main text-white"
                      : "bg-white text-common-black border border-border hover:bg-primary-main hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <article
                  key={post.title}
                  className="bg-white rounded-2xl overflow-hidden border border-border flex flex-col"
                >
                  <div className="bg-gradient-330-18-84 h-36 flex items-end p-4">
                    <span className="bg-secondary-main text-primary-dark text-xs font-bold rounded px-2 py-1 uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-common-black text-base leading-snug mb-3 line-clamp-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-dark text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-medium text-xs">
                        {post.date} · {post.readTime}
                      </span>
                      <Link
                        href="#"
                        className="text-primary-main font-semibold text-sm underline underline-offset-2"
                      >
                        Read
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-gray-medium py-10">
                No posts in this category yet.
              </p>
            )}

            <div className="text-center mt-10">
              <button className="border-[1.5px] border-primary-main text-primary-main rounded-full px-8 py-3.5 font-bold text-lg hover:bg-primary-main hover:text-white transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Jump In / Get Started CTA */}
        <section className="bg-primary-main py-14 px-6 text-center">
          <h2 className="font-condensed text-4xl lg:text-5xl text-white uppercase leading-none mb-3">
            Get Started Today
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-md mx-auto">
            Put what you&apos;ve learned into action. Find a club near you and start your fitness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gyms"
              className="bg-secondary-main text-primary-dark rounded-full px-8 py-3.5 font-bold text-lg"
            >
              Find a Club Near You
            </Link>
            <Link
              href="/gym-memberships"
              className="border-2 border-white text-white rounded-full px-8 py-3.5 font-bold text-lg"
            >
              Explore Memberships
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
