"use client";

import { useParams } from "next/navigation";
import { HeartCrackIcon } from "lucide-react";

import Button from "@/components/ui/Button";

export default function EmptyParticipantList() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-[200px] flex flex-col items-center py-[20px] text-brand-500">
      <HeartCrackIcon className="text-red-300 h-[60px] w-[60px]" />

      <p className="mt-4 font-semibold text-[22px]">
        No people are registered to this event yet...
      </p>
      <p className="mt-4">Wanna be the first? Hit the button below then!</p>

      <Button as="a" variant="primary" href={`/register-to-event?eventID=${id}`} className="rounded-lg px-6 mt-2">
        Register now
      </Button>
    </div>
  );
}
