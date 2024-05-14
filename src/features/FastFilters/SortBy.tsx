"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Select from "@/components/ui/Select";
import { SORT_BY_EVENTS_OPTIONS } from "@/lib/const";
import { MouseEvent } from "react";

const isValidSearchBy = (value: unknown) => {
  return !!value && SORT_BY_EVENTS_OPTIONS.find((option) => option.value === value);
};

export default function SortBy() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [defaultSortBy] = SORT_BY_EVENTS_OPTIONS;
  const sortByInUrlQuery = decodeURIComponent(String(searchParams.get("sort-by")));
  const resolvedSortBy = isValidSearchBy(sortByInUrlQuery) ? sortByInUrlQuery : defaultSortBy.value;

  const handleSortByChange = (_: MouseEvent<HTMLElement>, option: Option) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort-by", encodeURIComponent(option.value));

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <label>Sort by</label>

      <Select
        className="py-1.5 capitalize text-[14px] text-gray-600"
        value={resolvedSortBy}
        onChange={handleSortByChange}
        options={SORT_BY_EVENTS_OPTIONS}
      />
    </div>
  );
}
