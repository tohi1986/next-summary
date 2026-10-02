import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <main className="py-8">
        <section>
          <p className="text-sm font-medium uppercase tracking-wider">
            Next.js Starter
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-5xl">
            Next Learning Template
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 md:text-lg">
            A clean and simple Next.js starter template for learning,
            experimenting, and building new projects.
          </p>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="border border-amber-700/30 p-6">
            <h2 className="text-xl font-semibold">Next.js</h2>
            <p className="mt-2 text-sm leading-6">
              App Router, layouts, pages, and modern React patterns.
            </p>
          </article>

          <article className="border border-amber-700/30 p-6">
            <h2 className="text-xl font-semibold">Tailwind CSS</h2>
            <p className="mt-2 text-sm leading-6">
              Mobile-first responsive styling with utility classes.
            </p>
          </article>

          <article className="border border-amber-700/30 p-6">
            <h2 className="text-xl font-semibold">TypeScript</h2>
            <p className="mt-2 text-sm leading-6">
              Type-safe code for components, utilities, and application logic.
            </p>
          </article>
        </section>
      </main>
    </Container>
  );
}