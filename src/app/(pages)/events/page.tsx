import { Suspense } from "react";

import Hero from "@/components/Hero";
import Heading from "@/components/ui/Heading";
import EventsList from "@/features/Events/EventsList";

import { SortBy } from "@/features/FastFilters";

export const revalidate = 300;

export default async function Page() {
  return (
    <>
      <div className="bg-brand-300">
        <div className="md:container md:mx-auto px-4">
          <Hero />
        </div>
      </div>

      <div className="md:container mx-auto py-4 px-4">
        <div className="flex flex-col gap-2 border-b-2 border-gray-200 pb-2">
          <Heading as="h2" className="font-semibold text-alt-100">
            Trending Events around the World
          </Heading>

          <SortBy className="ml-auto [&_label]:font-medium" />
        </div>

        <Suspense>
          <EventsList />
        </Suspense>
      </div>
    </>
  );
}
