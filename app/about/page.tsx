import type { Metadata } from "next";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <article>
      <h1 className="font-display text-4xl font-medium tracking-tight">About</h1>

      <div className="prose prose-neutral mt-10 max-w-none">
        {site.intro && <p className="lead">{site.intro}</p>}

        <p>
          I&apos;ve been coding as a hobby for over 10 years. In that time I&apos;ve explored various computer science concepts and puzzles, building solutions and visualizations from scratch. My curiosity has led me down experimental rabbit-holes for escape-time fractals, neural networks, gradient descent, evolutionary algorithms, kaprekar routine, Collatz routine, cellular automata, Turing machines, turmites, digital logic, Markov chains, and frontend UI framework design.
        </p>

        <p>
          These explorations revealed expansive worlds of new knowledge, but more imporantly, they served as opportunities to grow as a critical thinker, question-asker, problem-solver, and engineer.
        </p>

      </div>
    </article>
  );
}
