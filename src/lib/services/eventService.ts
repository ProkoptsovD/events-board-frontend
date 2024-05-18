import { httpClient } from "@/lib/services/httpClient";

type EventsResponse = { events: IEventPreview[] };

const getAllEvents = async (options?: EventSearchParams) => {
  try {
    const searchParams = new URLSearchParams(options ?? {});
    const url = `/events?${searchParams.toString()}`;

    const response = await httpClient.get<EventsResponse>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      },
    });

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
const getEventRegistrationStats = async (eventId: number) => {
  try {
    const stats = await httpClient.get<EventRegistrationStatsEntry[]>(
      `/events/${eventId}/stats/registration`
    );

    if ("data" in stats) {
      return stats.data;
    }

    return [];
  } catch (err) {
    console.log(err);
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
  getEventRegistrationStats,
  getEventChanelByOptions,
  getEventSortByOptions,
  getEventParticipants,
  registerToEvent,
  getAllEvents,
  getEventById,
};
