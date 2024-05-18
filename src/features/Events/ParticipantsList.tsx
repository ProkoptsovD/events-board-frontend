"use client";

import cn from "classnames";
import dynamic from "next/dynamic";
import { Suspense, useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";

import { useEventParticipantsQuery } from "@/lib/hooks/queries/useEventParticipantsQuery";

import Heading from "@/components/ui/Heading";
import SearchInput from "@/components/ui/SearchInput";

import ParticipantAvatar from "@/components/ParticipantCard/ParticipantAvatar";
import ParticipantCardBody from "@/components/ParticipantCard/ParticipantCardBody";
import ParticipantDetails from "@/components/ParticipantCard/ParticipantDetails";
import ParticipantEmail from "@/components/ParticipantCard/ParticipantEmail";
import ParticipantName from "@/components/ParticipantCard/ParticipantName";
import EmptyParticipantSearchResult from "@/components/emptyStates/EmptyParticipantSearchResult";

const EmptyParticipantList = dynamic(() => import("@/components/emptyStates/EmptyParticipantList"));
const emptyList = [] as EventParticipant[];

type ParticipantsListProps = PropsWithClassName & { eventId: number };

export default function ParticipantsList({ className, eventId }: ParticipantsListProps) {
  const [inMemoryFilter, setInMemoryFilter] = useState<string>("");

  const {
    data: participants = emptyList,
    isSuccess,
    isLoading,
  } = useEventParticipantsQuery(eventId);

  const onParticipantSearch = (query: string) => {
    setInMemoryFilter(query);
  };

  const resolvedParticipants = useMemo(() => {
    if (!inMemoryFilter) return participants;

    return participants?.filter(
      (participant) =>
        participant.email.toLowerCase().includes(inMemoryFilter.toLowerCase()) ||
        participant.name.toLowerCase().includes(inMemoryFilter.toLowerCase())
    );
  }, [inMemoryFilter, participants]);

  const isEmptyList = participants?.length === 0 && isSuccess;
  const isEmptyFiltering = resolvedParticipants?.length === 0 && !isEmptyList;

  if (isLoading) return null;

  if (isEmptyList) {
    return (
      <Suspense>
        <EmptyParticipantList />
      </Suspense>
    );
  }

  return (
    <div className="shadow-md py-2 px-4 rounded-lg mt-4">
      <div className="flex flex-wrap items-center gap-6 mb-4">
        <Heading as="h2" className="font-semibold !text-[24px] text-alt-100">
          Participants
        </Heading>

        <SearchInput
          onSearch={onParticipantSearch}
          inputProps={{
            icon: <SearchIcon className="text-gray-400" />,
            placeholder: "John or my@mail.com",
          }}
          className="[&_button]:text-white"
          searchButtonText="Filter"
        />
      </div>

      {isEmptyFiltering && <EmptyParticipantSearchResult />}

      {!isEmptyFiltering && (
        <ul
          className={cn(
            "grid grid-cols-1 sm:[&>*]:mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4 max-h-[400px] overflow-auto overscroll-y-contain",
            className
          )}
        >
          {resolvedParticipants?.map((participant) => (
            <li key={participant.id} className="w-full">
              <ParticipantCardBody>
                <ParticipantAvatar />

                <ParticipantDetails>
                  <ParticipantName>{participant.name}</ParticipantName>
                  <ParticipantEmail>{participant.email}</ParticipantEmail>
                </ParticipantDetails>
              </ParticipantCardBody>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
