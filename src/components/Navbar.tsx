
import Container from "@/components/Container";
import Logo from "@/components/logo";
import Link from "next/link";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Assistent", href: "#assistent" },
];

export default function Navbar() {
  return (
    <header className="relative z-50 shrink-0 border-b border-slate-800 bg-black">
      <nav aria-label="Hauptnavigation">
        <Container>
          <div className="flex min-h-16 items-center justify-between gap-2 py-2">
            <Logo />

            <div className="flex min-w-0 flex-nowrap items-center gap-1 sm:gap-5 lg:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap font-(family-name:--font-barlow) text-base font-extrabold uppercase tracking-tight text-amber-500 transition-colors duration-200 hover:text-white sm:text-2xl lg:text-3xl"
                >
                  {item.label === "Assistent" ? (
                    <>
                      <span className="text-white">A</span>
                      <span>ss</span>
                      <span className="text-white">i</span>
                      <span>stent</span>
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              ))}

              <a
                href="tel:+491772215875"
                aria-label="Anrufen"
                className="hidden min-[335px]:flex shrink-0 items-center justify-center rounded-lg bg-red-600 p-2 text-white transition-colors duration-200 hover:bg-amber-500 hover:text-slate-900 sm:px-4 sm:py-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 sm:hidden"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69a2 2 0 0 1 1.74 2.04Z" />
                </svg>

                <span className="hidden font-(family-name:--font-barlow) text-base font-extrabold uppercase tracking-tight sm:inline sm:text-2xl lg:text-3xl">
                  ANRUFEN
                </span>
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
