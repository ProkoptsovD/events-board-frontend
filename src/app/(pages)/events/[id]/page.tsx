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
import { notFound } from "next/navigation";
import { isNumber } from "@/lib/type.guards";

export const revalidate = 300;

export async function generateStaticParams() {
  const events = await eventService.getAllEvents({ perPage: "50" });

  if (!events) return [];

  return events.map((event) => ({
    id: String(event.id),
  }));
}

const fallbackImage = "/assets/images/event-fallback.jpg";

export default async function Page({ params: { id } }: PageProps<{ id: string }>) {
  const queryClient = new QueryClient();
  const bgPattern = useBgPattern();
  const eventId = Number(id);

  if (!eventId && !isNumber(eventId)) {
    notFound();
  }

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

  const dehydratedState = dehydrate(queryClient);

  const event = result[0];

  if (!event) {
    notFound();
  }

  const { cost, image, organizer, startingAt, title, venue } = event ?? ({} as IEvent);

  return (
    <div className="md:container md:mx-auto py-6">
      <Heading as="h1" className="mb-2 text-alt-100 text-center">
        {title}
      </Heading>

      <div
        className={cn(
          "rounded-xl overflow-hidden border border-gray-500 mb-4 mx-auto w-fit",
          bgPattern
        )}
      >
        <Image
          src={image || fallbackImage}
          width={320}
          height={200}
          alt="poster"
          priority
          className="mx-auto"
          style={{
            width: "320px",
            height: "200px",
          }}
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
