"use client";

import cn from "classnames";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Select from "@/components/ui/Select";
import { MouseEvent, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { eventService } from "@/lib/services/eventService";

const isValidSearchBy = (value: unknown, options: Option[]) => {
  return !!value && options.find((option) => option.value === value);
};

const sortByKey = "sortBy";

export default function SortByClientComponent({ className }: PropsWithClassName) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const { data } = useQuery({
    queryKey: [undefined],
    queryFn: eventService.getEventSortByOptions,
  });

  const { data: options = [] } = data ?? {};

  const sortByInUrlQuery = decodeURIComponent(String(searchParams.get(sortByKey)));
  const resolvedSortBy = useMemo(() => {
    const [defaultSortBy] = options;

    return isValidSearchBy(sortByInUrlQuery, options)
      ? options.find((option) => option.value === sortByInUrlQuery)
      : defaultSortBy;
  }, [sortByInUrlQuery, options]);

  const updateSearchParams = (params: string) => {
    push(params);
  };

  const handleSortByChange = (_: MouseEvent<HTMLElement>, option: Option) => {
    const params = new URLSearchParams(searchParams);
    params.set(sortByKey, encodeURIComponent(option.value));

    updateSearchParams(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <label>Sort by</label>

      <Select
        className="py-1.5 capitalize text-[14px] text-gray-600"
        value={resolvedSortBy}
        onChange={handleSortByChange}
        options={options}
      />
    </div>
  );
}
