import Hero from "@/components/Hero";
import EventsList from "@/features/Events/EventsList";
import FastFilters from "@/features/FastFilters/SortBy";

export default function Page() {
  return (
    <>
      <div className="bg-brand-300">
        <div className="md:container md:mx-auto">
          <Hero />
        </div>
      </div>
      <FastFilters />
      <EventsList />
    </>
  );
}
