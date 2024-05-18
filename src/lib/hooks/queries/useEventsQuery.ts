import { eventService } from "@/lib/services/eventService";
import { useInfiniteQuery } from "@tanstack/react-query";

export const getUseEventsQueryKeys = ({ page, perPage, sortBy, q }: EventSearchParams) => {
  return ["events", page, perPage, sortBy, q];
};

const placeholderData = Array.from({ length: 10 }, (_, i) => ({ id: i })) as IEventPreview[];

export const useEventsQuery = ({ page, perPage, sortBy, q }: EventSearchParams) => {
  const events = useInfiniteQuery({
    queryKey: getUseEventsQueryKeys({ page, perPage, sortBy, q }),
    initialPageParam: Number(page),
    queryFn: ({ pageParam }) => {
      return eventService.getAllEvents({ page: String(pageParam), perPage, sortBy, q });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: true,
    staleTime: 300,
    placeholderData: { pages: [placeholderData], pageParams: [1] },
  });

  return events;
};
