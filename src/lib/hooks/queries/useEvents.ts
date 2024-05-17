import { eventService } from "@/lib/services/eventService";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useEvents = ({ page, perPage, sortBy, q }: EventSearchParams) => {
  const events = useInfiniteQuery({
    queryKey: ["events", page, perPage, sortBy, q],
    initialPageParam: Number(page),
    queryFn: ({ pageParam }) => {
      return eventService.getAllEvents({ page: String(pageParam), perPage, sortBy, q });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,
  });

  return events;
};
