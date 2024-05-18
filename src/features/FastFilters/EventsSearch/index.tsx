"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import SearchInput from "@/components/ui/SearchInput";
import { SearchIcon } from "lucide-react";
import { useEffect } from "react";

const inputProps = {
  placeholder: "Search Events...",
  icon: <SearchIcon />,
};

export default function EventsSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const q = searchParams.get("q") ?? "";

  const onSearch = (q: string) => {
    const normalizedQuery = q.trim();

    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!normalizedQuery) {
      current.delete("q");
    } else {
      current.set("q", normalizedQuery);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  return (
    <SearchInput
      onSearch={onSearch}
      inputProps={inputProps}
      defaultValue={q}
      className="[&_.label]:text-white max-w-[55ch] w-full"
    />
  );
}
