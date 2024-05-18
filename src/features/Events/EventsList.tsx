"use client";

import cn from "classnames";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useMemo, useRef } from "react";

import { useEventsQuery } from "@/lib/hooks/queries/useEventsQuery";

import EventActionButton from "@/components/EventCard/EventActionButton";
import EventCard from "@/components/EventCard/EventCard";
import EventCost from "@/components/EventCard/EventCost";
import EventDate from "@/components/EventCard/EventDate";
import EventDescription from "@/components/EventCard/EventDescription";
import EventDetails from "@/components/EventCard/EventDetails";
import EventFooter from "@/components/EventCard/EventFooter";
import EventName from "@/components/EventCard/EventName";
import EventParticipants from "@/components/EventCard/EventParticipants";
import EventPoster from "@/components/EventCard/EventPoster";
import EventTime from "@/components/EventCard/EventTime";
import EventOrganizer from "@/components/EventCard/EventOrganizer";
import LoadingMoreSpinner from "@/components/ui/LoadingMoreSpinner";
import ToTopButton from "@/components/ToTopButton";
import EventCardSkeleton from "@/components/EventCard/EventCardSkeleton";

const EmptyEventsList = dynamic(() => import("@/components/emptyStates/EmptyEventsList"));

export default function EventsList({ className }: PropsWithClassName) {
  const observer = useRef<IntersectionObserver>();

  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("perPage") ?? "10";
  const sortBy = searchParams.get("sortBy") ?? "title";
  const queryText = searchParams.get("q") ?? "";

  const { data, isSuccess, fetchNextPage, hasNextPage, isFetching, isLoading } = useEventsQuery({
    page,
    perPage,
    sortBy,
    q: queryText,
  });

  const lastElementRef = useCallback(
    (node: HTMLLIElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading]
  );

  const events = useMemo(() => {
    return data?.pages.reduce((acc, page) => [...(acc || []), ...(page || [])], []);
  }, [data]);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isEmptyList = events?.length === 0 && isSuccess;
  const isLoadingMore = !!data && isFetching;

  if (isEmptyList) {
    return (
      <Suspense>
        <EmptyEventsList />
      </Suspense>
    );
  }

  return (
    <>
      <ToTopButton />

      <ul
        className={cn(
          "grid grid-cols-1 sm:[&>*]:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4 py-4",
          className
        )}
      >
        {events?.map((event) => {
          return <EventCardSkeleton key={event.id} />;
          return (
            <li key={event.id} ref={lastElementRef}>
              <EventCard>
                <EventPoster src={event.image} width={600} height={500} />

                <EventDetails layout="root">
                  <EventDate date={event.startingAt} />
                  <EventName className="mb-2">{event.title}</EventName>

                  <EventDetails layout="subgrid">
                    <EventDescription>{event.description}</EventDescription>
                    <EventTime date={event.startingAt} />

                    <EventCost cost={event.cost} />
                    <EventParticipants participantsCount={event.participantsCount} />
                    <EventOrganizer name={event.organizer} />
                  </EventDetails>
                </EventDetails>

                <EventFooter>
                  <EventActionButton
                    as="a"
                    href={`/register-to-event?eventID=${event.id}`}
                    variant="primary"
                  >
                    Register now
                  </EventActionButton>

                  <EventActionButton as="a" href={`/events/${event.id}`}>
                    View
                  </EventActionButton>
                </EventFooter>
              </EventCard>
            </li>
          );
        })}
      </ul>
      {isLoadingMore && <LoadingMoreSpinner />}
    </>
  );
}
