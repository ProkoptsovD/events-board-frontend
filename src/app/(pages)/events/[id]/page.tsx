import Image from "next/image";
import cn from "classnames";

import Heading from "@/components/ui/Heading";
import EventWhenTile from "@/components/EventInfo/EventWhenTile";
import EventWhereTile from "@/components/EventInfo/EventWhereTile";
import EventCostTile from "@/components/EventInfo/EventCostTile";
import ParticipantsList from "@/features/Events/ParticipantsList";
import EventRegisterChart from "@/features/Events/EventRegisterChart";
import { eventService } from "@/lib/services/eventService";
import EventOrganizerTile from "@/components/EventInfo/EventOrganizerTile";
import { useBgPattern } from "@/lib/hooks/useBgPattern";

export const revalidate = 3600;
const fallbackImage = "/assets/images/event-fallback.jpg";

export default async function Page({ params: { id } }: PageProps<{ id: string }>) {
  const bgPattern = useBgPattern();
  const eventId = Number(id);

  const event = await eventService.getEventById(eventId);

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

      <ParticipantsList eventId={eventId} />

      <div className="shadow-md py-2 px-4 rounded-lg mt-6">
        <Heading as="h2" className="font-semibold !text-[20px] text-alt-100 mb-4">
          Event Details
        </Heading>

        <div className="grid grid-cols-2">
          <div>
            <EventWhenTile date={startingAt} className="[&_b]:text-gray-900" />
            <EventWhereTile location={venue} className="[&_b]:text-gray-900" />
            <EventCostTile cost={cost} className="[&_b]:text-gray-900" />
            <EventOrganizerTile organizer={organizer} className="[&_b]:text-gray-900" />
          </div>

          <EventRegisterChart />
        </div>
      </div>
    </div>
  );
}
