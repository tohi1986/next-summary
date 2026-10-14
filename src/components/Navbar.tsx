
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
        <div className="w-full px-3 min-[390px]:px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between gap-1 py-2">
            <Logo />

            <div className="flex min-w-0 flex-nowrap items-center gap-1 min-[350px]:gap-2 min-[390px]:gap-3 sm:gap-5 lg:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap font-(family-name:--font-barlow) text-xs font-extrabold uppercase tracking-tight text-amber-500 transition-colors duration-200 hover:text-white min-[350px]:text-sm min-[390px]:text-base sm:text-2xl lg:text-3xl"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="tel:+491772215875"
                aria-label="Anrufen"
                className="flex shrink-0 items-center justify-center rounded-md bg-red-600 p-0.5 text-white transition-colors duration-200 hover:bg-amber-500 hover:text-slate-900 min-[350px]:p-1.5 min-[390px]:p-2 sm:rounded-lg sm:px-4 sm:py-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="white"
                  fill="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 min-[350px]:h-4 min-[350px]:w-4 min-[390px]:h-5 min-[390px]:w-5 sm:hidden"
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
        </div>
      </nav>
    </header>
  );
}
