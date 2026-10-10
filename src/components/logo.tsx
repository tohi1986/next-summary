import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="PKW Transport NRW Startseite"
      className="shrink-0"
    >
      
<Image
  src="/logo11.png"
  alt="PKW Transport NRW"
  width={2170}
  height={659}
  priority
  className="h-auto w-36 sm:w-44 md:w-52 lg:w-64"
/>

    </Link>
  );
}