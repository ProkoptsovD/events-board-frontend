import Logo from "@/components/ui/Logo";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="grid grid-cols-12 items-center py-2 px-4 bg-brand-100">
      <Link href="/" className="col-start-1 cursor-pointer">
        <Logo />
      </Link>

      <Navigation className="col-start-6 col-span-2" />
    </header>
  );
}
