type Venue = {
  id: number;
  name: string;
  country: string;
  state: string;
  city: string;
  address: string | null;
};

type IEvent = {
  id: number;
  title: string;
  description: string;
  startingAt: Date | string;
  organizer: string;
  venue: Venue;
  cost: number;
  image: string | null;
};

type IEventPreview = Omit<IEvent, "participants"> & { participantsCount: number };

type EventParticipant = {
  id: number;
  name: string;
  email: string;
  birthDate: Date;
  eventChannel: string;
};

type CreateEventParticipantDTO = Omit<EventParticipant, "id">;

type EventRegistrationStatsEntry = { date: Date; count: number };
