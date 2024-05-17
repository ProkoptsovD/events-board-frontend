import { eventService } from "@/lib/services/eventService";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default async function SortByPrefetchComponent({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [undefined],
    queryFn: () => eventService.getEventSortByOptions(),
  });

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
