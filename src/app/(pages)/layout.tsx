import { PropsWithChildren } from "react";

import Header from "@/components/ui/Header";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header>
        <Link href="/" className="col-start-1 cursor-pointer hidden md:block">
          <Logo />
        </Link>

        <Navigation className="col-start-6 col-span-2" />
      </Header>

      {children}
    </>
  );
}
