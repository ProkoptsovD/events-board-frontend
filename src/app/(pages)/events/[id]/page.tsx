import Image from "next/image";
import cn from "classnames";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { eventService } from "@/lib/services/eventService";
import { useBgPattern } from "@/lib/hooks/useBgPattern";
import { getUseEventParticipantsQueryKeys } from "@/lib/hooks/queries/useEventParticipantsQuery";
import { getUseEventRegistrationStatsQueryKeys } from "@/lib/hooks/queries/useEventRegistrationStatsQuery";

import Heading from "@/components/ui/Heading";
import EventWhenTile from "@/components/EventInfo/EventWhenTile";
import EventWhereTile from "@/components/EventInfo/EventWhereTile";
import EventCostTile from "@/components/EventInfo/EventCostTile";
import ParticipantsList from "@/features/Events/ParticipantsList";
import EventRegisterChart from "@/features/Events/EventRegisterChart";
import EventOrganizerTile from "@/components/EventInfo/EventOrganizerTile";

export const revalidate = 1000 * 60 * 5;

const fallbackImage = "/assets/images/event-fallback.jpg";

export default async function Page({ params: { id } }: PageProps<{ id: string }>) {
  const queryClient = new QueryClient();
  const bgPattern = useBgPattern();
  const eventId = Number(id);

  const result = await Promise.all([
    eventService.getEventById(eventId),
    queryClient.fetchQuery({
      queryKey: getUseEventRegistrationStatsQueryKeys(eventId),
      queryFn: () => eventService.getEventRegistrationStats(eventId),
    }),
    queryClient.fetchQuery({
      queryKey: getUseEventParticipantsQueryKeys(eventId),
      queryFn: () => eventService.getEventParticipants(eventId),
    }),
  ]);
  // const event = await eventService.getEventById(eventId);
  const event = result[0];
  const dehydratedState = dehydrate(queryClient);

  const { cost, image, organizer, startingAt, title, venue } = event ?? ({} as IEvent);

  return (
    <div className="md:container md:mx-auto py-6">
      <Heading as="h1" className="mb-2 text-alt-100 text-center">
        {title}
      </Heading>

      <div
        className={cn(
          "rounded-xl overflow-hidden border border-gray-500 mb-4 mx-auto max-w-[900px]",
          bgPattern
        )}
      >
        <Image
          src={image || fallbackImage}
          width={300}
          height={200}
          alt="poster"
          className="mx-auto"
        />
      </div>

      <HydrationBoundary state={dehydratedState}>
        <ParticipantsList eventId={eventId} />
      </HydrationBoundary>

      <div className="shadow-md py-2 px-4 rounded-lg mt-6">
        <Heading as="h2" className="font-semibold !text-[20px] text-alt-100 mb-4">
          Event Details
        </Heading>

        <EventWhenTile date={startingAt} className="[&_b]:text-gray-900" />
        <EventWhereTile location={venue} className="[&_b]:text-gray-900" />
        <EventCostTile cost={cost} className="[&_b]:text-gray-900" />
        <EventOrganizerTile organizer={organizer} className="[&_b]:text-gray-900 mb-4" />

        <HydrationBoundary state={dehydratedState}>
          <EventRegisterChart eventId={eventId} />
        </HydrationBoundary>
      </div>
    </div>
  );
}
