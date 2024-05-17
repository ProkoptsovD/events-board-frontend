import { httpClient } from "@/lib/services/httpClient";

type EventsResponse = { events: IEventPreview[] };

const getAllEvents = async (options?: EventSearchParams) => {
  try {
    const searchParams = new URLSearchParams(options ?? {});
    const url = `/events?${searchParams.toString()}`;

    const response = await httpClient.get<EventsResponse>(url);

    if ("data" in response) {
      return response.data.events;
    }

    return [];
  } catch {
    return null;
  }
};
const getEventById = async (id: number) => {
  try {
    const url = `/events/${id}`;

    const response = await httpClient.get<IEvent>(url);

    if ("data" in response) {
      return response.data;
    }

    return;
  } catch {
    return null;
  }
};
const getEventParticipants = async (id: number) => {
  try {
    const url = `/events/${id}/participants`;

    const response = await httpClient.get<EventParticipant[]>(url);

    if ("data" in response) {
      return response.data;
    }

    return [];
  } catch {
    return null;
  }
};
const registerToEvent = async (eventId: number, participant: CreateEventParticipantDTO) => {
  try {
    const response = await httpClient.post<EventParticipant>("/events/register", {
      body: JSON.stringify({ eventId, participant }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if ("data" in response) {
      return response.data;
    }

    return;
  } catch {
    return null;
  }
};

const getEventSortByOptions = async () => {
  try {
    const response = await httpClient.get<Option[]>("/events/options/sort-by");

    if ("data" in response) {
      return {
        data: response.data,
      };
    }

    return null;
  } catch {
    return null;
  }
};

const getEventChanelByOptions = async () => {
  try {
    const response = await httpClient.get<Option[]>("/events/options/event-chanel");

    if ("data" in response) {
      return {
        data: response.data,
      };
    }

    return null;
  } catch {
    return null;
  }
};

export const eventService = {
  getEventChanelByOptions,
  getEventSortByOptions,
  getEventParticipants,
  registerToEvent,
  getAllEvents,
  getEventById,
};
