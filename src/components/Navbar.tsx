import Container from "@/components/Container";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  return (
    <header className="border-b border-amber-700/30">
      <nav>
        <Container>
          <div className="flex min-h-16 flex-col justify-center 
                        gap-3 py-3 sm:flex-row sm:items-center 
                        sm:justify-between sm:py-0">
            <Link href="/" className="text-lg font-bold">
              Next Learning
            </Link>

            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}