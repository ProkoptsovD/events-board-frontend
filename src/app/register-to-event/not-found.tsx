import Link from "next/link";
import { FrownIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import Header from "@/components/ui/Header";
import Logo from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div className="bg-brand-300 h-screen flex flex-col gap-2">
      <Header>
        <Link href="/" className="cursor-pointer">
          <Logo />
        </Link>
      </Header>

      <div className="pl-4 pr-4 flex flex-col items-center justify-center flex-grow text-white text-[20px] max-w-[400px] mx-auto">
        <div className="flex items-center">
          <span className="text-[60px]">4</span>
          <FrownIcon className="w-[60px] h-[60px]" />
          <span className="text-[60px]">4</span>
        </div>

        <h1 className="text-center">
          <span> The event you want to register to</span>
          <br />
          <span>is not found</span>
          <br />
        </h1>
        <br />

        <Button as="a" href="/" className="w-fit mx-auto rounded-md">
          Return home
        </Button>
      </div>
    </div>
  );
}
