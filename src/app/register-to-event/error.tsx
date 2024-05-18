"use client";

import Link from "next/link";
import { CircleXIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import Header from "@/components/ui/Header";
import Logo from "@/components/ui/Logo";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-brand-300 h-screen flex flex-col gap-2">
      <Header>
        <Link href="/" className="cursor-pointer">
          <Logo />
        </Link>
      </Header>

      <div className="pl-4 pr-4 flex flex-col items-center justify-center flex-grow text-white text-[20px] max-w-[400px] mx-auto">
        <CircleXIcon className="w-[60px] h-[60px] text-red-500" />

        <h1 className="text-center mt-4">Something went wrong</h1>
        <br />

        <Button as="button" onClick={() => reset()} className="w-fit mx-auto rounded-md">
          Try again
        </Button>
      </div>
    </div>
  );
}
