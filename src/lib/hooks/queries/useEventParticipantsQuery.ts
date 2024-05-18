import { useQuery } from "@tanstack/react-query";

import { eventService } from "@/lib/services/eventService";
import { isNumber } from "@/lib/type.guards";

export const getUseEventParticipantsQueryKeys = (id: number) => {
  return ["events", "participants", id];
};

export const useEventParticipantsQuery = (id: number) => {
  const participants = useQuery({
    queryKey: getUseEventParticipantsQueryKeys(id),
    queryFn: () => eventService.getEventParticipants(id),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,
    enabled: isNumber(id),
  });

  return participants;
};
