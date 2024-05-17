import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Link from "next/link";

import EventCostTile from "@/components/EventInfo/EventCostTile";
import EventWhenTile from "@/components/EventInfo/EventWhenTile";
import EventWhereTile from "@/components/EventInfo/EventWhereTile";
import RegisterToEventForm from "@/components/forms/RegisterToEventForm";
import Header from "@/components/ui/Header";
import Logo from "@/components/ui/Logo";

import { eventService } from "@/lib/services/eventService";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const queryClient = new QueryClient();
  const { eventID } = searchParams ?? { eventID: "" };

  const event = await queryClient.fetchQuery({
    queryKey: [eventID],
    queryFn: () => eventService.getEventById(Number(eventID)),
  });

  if (!event) {
    return <div>Opps, event does not exist</div>;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="bg-brand-300 h-screen grid grid-cols-12 grid-rows-12 gap-2">
        <Header className="col-start-1 col-end-6 row-span-1 bg-brand-300">
          <Link href="/" className="col-start-1 cursor-pointer">
            <Logo />
          </Link>
        </Header>

        <div className="col-start-1 col-end-6 row-start-4 pl-4 pr-4 text-center text-white text-[20px] max-w-[400px] mx-auto">
          <h1 className="text-center">
            Great choice, mate! You are going to register to the event
            <br />
            <i className="text-accent-200">{event.title}</i>
          </h1>
          <br />

          <EventWhenTile date={String(event.startingAt)} />
          <EventWhereTile location={event.venue} />
          <EventCostTile cost={event.cost} />
        </div>

        <RegisterToEventForm
          eventId={Number(eventID)}
          className="col-start-6 col-span-full row-span-full"
        />
      </div>
    </HydrationBoundary>
  );
}
