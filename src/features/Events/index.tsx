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

export default function Events() {
  return (
    <div className="md:container mx-auto grid grid-cols-1 sm:[&>*]:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      <EventCard>
        <EventPoster />

        <EventDetails layout="root">
          <EventDate date={new Date()} />

          <EventDetails layout="subgrid">
            <EventName>Fancy event</EventName>
            <EventDescription>Super duper cool event in New York</EventDescription>
            <EventTime date={new Date()} />

            <EventCost cost={null} />
            <EventParticipants participantsCount={0} />
          </EventDetails>
        </EventDetails>

        <EventFooter>
          <EventActionButton as="a" href="/" variant="primary">
            Register now
          </EventActionButton>
          <EventActionButton as="a" href="/">
            View
          </EventActionButton>
        </EventFooter>
      </EventCard>

      <EventCard>
        <EventPoster />

        <EventDetails layout="root">
          <EventDate date={new Date()} />

          <EventDetails layout="subgrid">
            <EventName>Fancy event</EventName>
            <EventDescription>Super duper cool event in New York</EventDescription>
            <EventTime date={new Date()} />

            <EventCost cost={1200} />
            <EventParticipants participantsCount={12} />
          </EventDetails>
        </EventDetails>

        <EventFooter>
          <EventActionButton as="a" href="/" variant="primary">
            Register now
          </EventActionButton>
          <EventActionButton as="a" href="/">
            View
          </EventActionButton>
        </EventFooter>
      </EventCard>

      <EventCard>
        <EventPoster />

        <EventDetails layout="root">
          <EventDate date={new Date()} />

          <EventDetails layout="subgrid">
            <EventName>Fancy event</EventName>
            <EventDescription>Super duper cool event in New York</EventDescription>
            <EventTime date={new Date()} />

            <EventCost cost={1200} />
            <EventParticipants participantsCount={12} />
          </EventDetails>
        </EventDetails>

        <EventFooter>
          <EventActionButton as="a" href="/" variant="primary">
            Register now
          </EventActionButton>
          <EventActionButton as="a" href="/">
            View
          </EventActionButton>
        </EventFooter>
      </EventCard>

      <EventCard>
        <EventPoster />

        <EventDetails layout="root">
          <EventDate date={new Date()} />

          <EventDetails layout="subgrid">
            <EventName>Fancy event</EventName>
            <EventDescription>Super duper cool event in New York</EventDescription>
            <EventTime date={new Date()} />

            <EventCost cost={1200} />
            <EventParticipants participantsCount={12} />
          </EventDetails>
        </EventDetails>

        <EventFooter>
          <EventActionButton as="a" href="/" variant="primary">
            Register now
          </EventActionButton>
          <EventActionButton as="a" href="/">
            View
          </EventActionButton>
        </EventFooter>
      </EventCard>

      <EventCard>
        <EventPoster />

        <EventDetails layout="root">
          <EventDate date={new Date()} />

          <EventDetails layout="subgrid">
            <EventName>Fancy event</EventName>
            <EventDescription>Super duper cool event in New York</EventDescription>
            <EventTime date={new Date()} />

            <EventCost cost={1200} />
            <EventParticipants participantsCount={12} />
          </EventDetails>
        </EventDetails>

        <EventFooter>
          <EventActionButton as="a" href="/" variant="primary">
            Register now
          </EventActionButton>
          <EventActionButton as="a" href="/">
            View
          </EventActionButton>
        </EventFooter>
      </EventCard>

      <EventCard>
        <EventPoster />

        <EventDetails layout="root">
          <EventDate date={new Date()} />

          <EventDetails layout="subgrid">
            <EventName>Fancy event</EventName>
            <EventDescription>Super duper cool event in New York</EventDescription>
            <EventTime date={new Date()} />

            <EventCost cost={1200} />
            <EventParticipants participantsCount={12} />
          </EventDetails>
        </EventDetails>

        <EventFooter>
          <EventActionButton as="a" href="/" variant="primary">
            Register now
          </EventActionButton>
          <EventActionButton as="a" href="/">
            View
          </EventActionButton>
        </EventFooter>
      </EventCard>
    </div>
  );
}
