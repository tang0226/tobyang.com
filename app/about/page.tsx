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
          I&apos;ve been coding as a hobby for around 9 years. In that time I&apos;ve explored various computer science concepts and puzzles, building solutions and visualizations from scratch, most often in JavaScript. My curiosity has led me down experimental rabbit-holes in escape-time fractals, discrete math and DSA (Project Euler), neural networks, gradient descent, evolutionary algorithms, kaprekar routine, Collatz routine, cellular automata, Turing machines, turmites, digital logic, Markov chains, and frontend UI framework design.
        </p>

        <p>
          Not only did these explorations reveal expansive worlds of new knowledge, but more imporantly, they served as opportunities to grow as a critical thinker, question-asker, problem-solver, and engineer.
        </p>

        <h2>Education</h2>
        <p>
          In November 2026, I graduated from WGU with a bachelor&apos;s degree in computer science. Studying at WGU gave me valuable hands-on experience beyond my casual hobby projects. The structure of class assignments provided guidance for learning and applying new languages, concepts, and frameworks. Many classes helped fill significant gaps in my expertise, giving me a firmer grasp on backend programming, machine learning, and software design.
        </p>

        <h2>Skills</h2>
        <ul>
          <li>Frontend design
            <ul>
              <li>HTML, CSS, JS</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>Linux</li>
          <li>Git</li>
        </ul>
      </div>
    </article>
  );
}
