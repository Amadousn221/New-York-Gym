import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const posts = [
  { category: "Fitness Tips", title: "10 Best Exercises for Beginners at the Gym", excerpt: "Starting your fitness journey can feel overwhelming. Here are the top 10 exercises that any beginner can do safely and effectively.", date: "June 20, 2026", readTime: "5 min read" },
  { category: "Nutrition", title: "What to Eat Before and After Your Workout", excerpt: "Fueling your body correctly makes a huge difference in your performance and recovery. Learn the best pre- and post-workout nutrition strategies.", date: "June 15, 2026", readTime: "4 min read" },
  { category: "Motivation", title: "How to Stay Consistent with Your Fitness Routine", excerpt: "Motivation gets you started, but habits keep you going. Discover practical strategies to make gym time a non-negotiable part of your week.", date: "June 10, 2026", readTime: "6 min read" },
  { category: "Equipment", title: "A Beginner's Guide to Strength Training Machines", excerpt: "Strength machines can be intimidating, but they're actually one of the safest ways to build muscle. Here's your complete beginner's guide.", date: "June 5, 2026", readTime: "7 min read" },
  { category: "Wellness", title: "The Importance of Rest Days in Your Workout Plan", excerpt: "More isn't always better when it comes to exercise. Learn why rest days are essential to progress and how to make the most of them.", date: "May 28, 2026", readTime: "4 min read" },
  { category: "Fitness Tips", title: "Cardio vs. Strength Training: Which is Better for You?", excerpt: "The age-old debate: should you focus on cardio or weights? The answer depends on your goals — here's how to decide what's right for you.", date: "May 20, 2026", readTime: "5 min read" },
];

const categories = ["All", "Fitness Tips", "Nutrition", "Motivation", "Equipment", "Wellness"];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-hero-gradient-1 px-6 pt-16 pb-20 text-center">
          <p className="text-secondary-main font-semibold text-sm uppercase tracking-widest mb-3">Knowledge Hub</p>
          <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
            PF Blog
          </h1>
          <p className="text-white/80 text-xl max-w-lg mx-auto">
            Tips, guides, and inspiration to help you get the most out of every workout.
          </p>
        </section>

        {/* Category filters */}
        <section className="bg-white border-b border-border px-6 py-4">
          <div className="max-w-[57rem] mx-auto flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  cat === "All"
                    ? "bg-primary-main text-white"
                    : "bg-surface-gray text-common-black hover:bg-primary-main hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-surface-gray py-14 px-6">
          <div className="max-w-[57rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.title} className="bg-white rounded-2xl overflow-hidden border border-border flex flex-col">
                <div className="bg-gradient-330-18-84 h-40 flex items-end p-5">
                  <span className="bg-secondary-main text-primary-dark text-xs font-bold rounded px-2 py-1 uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-bold text-common-black text-lg leading-snug mb-3">{post.title}</h2>
                  <p className="text-gray-dark text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-medium text-xs">{post.date} · {post.readTime}</span>
                    <Link href="#" className="text-primary-main font-semibold text-sm underline underline-offset-2">
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="border-[1.5px] border-primary-main text-primary-main rounded-full px-8 py-3.5 font-bold text-lg">
              Load More Articles
            </button>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-primary-main py-14 px-6 text-center">
          <h2 className="font-condensed text-4xl lg:text-5xl text-white uppercase leading-none mb-3">
            Stay in the Loop
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-md mx-auto">
            Get fitness tips, workout ideas, and member perks delivered to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full text-common-black text-base outline-none focus:ring-2 focus:ring-secondary-main"
            />
            <button type="submit" className="bg-secondary-main text-primary-dark rounded-full px-8 py-3.5 font-bold text-base flex-shrink-0">
              Subscribe
            </button>
          </form>
        </section>

      </main>
      <Footer />
    </>
  );
}
