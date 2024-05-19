import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Link from "next/link";

import EventCostTile from "@/components/EventInfo/EventCostTile";
import EventWhenTile from "@/components/EventInfo/EventWhenTile";
import EventWhereTile from "@/components/EventInfo/EventWhereTile";
import RegisterToEventForm from "@/components/forms/RegisterToEventForm";
import Header from "@/components/ui/Header";
import Logo from "@/components/ui/Logo";

import { eventService } from "@/lib/services/eventService";
import { notFound } from "next/navigation";
import { isNumber } from "chart.js/helpers";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const queryClient = new QueryClient();
  const { eventID } = searchParams ?? { eventID: "" };

  if (!eventID && !isNumber(Number(eventID))) {
    notFound();
  }

  const event = await queryClient.fetchQuery({
    queryKey: [eventID],
    queryFn: () => eventService.getEventById(Number(eventID)),
  });

  if (!event) {
    notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="bg-brand-300 h-screen md:grid md:grid-cols-12 md:grid-rows-12 md:gap-2">
        <Header className="md:col-start-1 md:col-end-6 md:row-span-1 bg-brand-300">
          <Link href="/" className="md:col-start-1 cursor-pointer">
            <Logo />
          </Link>
        </Header>

        <div className="flex flex-col pt-[100px] pb-[80px] md:col-start-1 md:col-end-6 md:row-start-4 md:pl-4 md:pr-4 text-center text-white text-[20px] max-w-[400px] mx-auto">
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

        <Suspense>
          <RegisterToEventForm
            eventId={Number(eventID)}
            className="md:col-start-6 md:col-span-full md:row-span-full mx-4 md:mx-0"
          />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
