import cn from "classnames";
import { EventsSearch } from "@/features/FastFilters";

export default function Hero({ className }: PropsWithClassName) {
  return (
    <div
      className={cn(
        "pt-[40px] pb-[20px] lg:pt-[60px] lg:pb-[60px] flex flex-col gap-[20px] lg:gap-[20px] items-center px-4",
        className
      )}
    >
      <h1 className="text-white font-semibold text-[28px] text-center sm:max-w-[35ch] md:max-w-[65ch]">
        Explore a world of events. Find what excites you!
      </h1>

      <EventsSearch />
    </div>
  );
}
