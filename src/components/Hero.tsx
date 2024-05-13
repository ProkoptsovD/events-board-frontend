import cn from "classnames";
import { SearchIcon } from "lucide-react";
import SearchInput from "@/components/ui/SearchInput";

export default function Hero({ className }: PropsWithClassName) {
  return (
    <div
      className={cn(
        "sm:pt-[40px] sm:pb-[20px] lg:pt-[60px] lg:pb-[60px] flex flex-col sm:gap[20px] lg:gap-[20px] items-center",
        className
      )}
    >
      <h1 className="text-white font-semibold text-[28px] max-w-[65ch]">
        Explore a world of events. Find what excites you!
      </h1>

      <SearchInput
        placeholder="Search Events..."
        icon={<SearchIcon />}
        className="[&_.label]:text-white max-w-[55ch] w-full"
      />
    </div>
  );
}
