"use client";

import { CircleXIcon } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="pl-4 pr-4 pt-[80px] flex flex-col items-center justify-center flex-grow text-[20px] max-w-[400px] mx-auto">
      <CircleXIcon className="w-[60px] h-[60px] text-red-500" />

      <h1 className="text-center mt-4">Something went wrong</h1>
      <br />

      <Button as="button" onClick={() => reset()} className="w-fit mx-auto rounded-md">
        Try again
      </Button>
    </div>
  );
}
