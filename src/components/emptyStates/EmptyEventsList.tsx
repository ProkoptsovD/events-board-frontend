"use client";

import { useSearchParams } from "next/navigation";
import { FrownIcon } from "lucide-react";

export default function EmptyEventsList() {
  const searchParams = useSearchParams();

  const hasInputQuery = searchParams.has("q");

  return (
    <div className="min-h-[200px] flex flex-col items-center py-[20px] text-brand-500">
      <FrownIcon className="text-red-300 h-[60px] w-[60px]" />

      <p className="mt-4 font-semibold text-[22px]">No events found...</p>
      {hasInputQuery && (
        <p className="mt-4">Please, try type in different event name or try again later</p>
      )}
      {!hasInputQuery && (
        <p className="mt-4">
          Ooops, either we do not have any events or something bad happened to our server. Please,
          try again later
        </p>
      )}
    </div>
  );
}
