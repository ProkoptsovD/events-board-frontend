import { eventService } from "@/lib/services/eventService";
import { useQuery } from "@tanstack/react-query";

export const useEventParticipants = (id: number) => {
  const participants = useQuery({
    queryKey: ["events", "participants", id],
    queryFn: () => eventService.getEventParticipants(id),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,
  });

  return participants;
};
