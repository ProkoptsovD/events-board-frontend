import { useQuery } from "@tanstack/react-query";

import { eventService } from "@/lib/services/eventService";
import { isNumber } from "@/lib/type.guards";

export const getUseEventRegistrationStatsQueryKeys = (id: number) => {
  return ["events", "registration-stats", id];
};

export const useEventRegistrationStatsQuery = (id: number) => {
  const stats = useQuery({
    queryKey: getUseEventRegistrationStatsQueryKeys(id),
    queryFn: () => eventService.getEventRegistrationStats(id),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,
    enabled: isNumber(id),
  });

  return stats;
};
