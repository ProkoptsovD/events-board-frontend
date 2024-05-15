import Image from "next/image";

import fallbackImage from "../../../../../public/assets/images/event-fallback.jpg";
import Heading from "@/components/ui/Heading";
import EventWhenTile from "@/components/EventInfo/EventWhenTile";
import EventWhereTile from "@/components/EventInfo/EventWhereTile";
import EventCostTile from "@/components/EventInfo/EventCostTile";
import ParticipantsList from "@/features/Events/ParticipantsList";

export default function Page() {
  return (
    <div className="md:container md:mx-auto py-6">
      <Image src={fallbackImage} alt="poster" className="mb-2" />

      <Heading as="h1" className="mb-2 text-alt-100">
        Event Title
      </Heading>

      <EventWhenTile date={new Date()} />
      <EventWhereTile location={"2323 Privite Drive"} />
      <EventCostTile cost={1200} />

      <div className="shadow-md py-2 px-4 rounded-lg mt-4">
        <Heading as="h2" className="mb-2 font-semibold !text-[22px] text-alt-100">
          Participants
        </Heading>

        <ParticipantsList />
      </div>
    </div>
  );
}
