import Hero from "@/components/Hero";
import Events from "@/features/Events";

export default function Page() {
  return (
    <>
      <div className="bg-brand-300">
        <div className="md:container md:mx-auto">
          <Hero />
        </div>
      </div>

      <Events />
    </>
  );
}
