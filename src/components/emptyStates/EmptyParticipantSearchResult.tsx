import { SearchXIcon } from "lucide-react";

export default function EmptyParticipantSearchResult() {
  return (
    <div className="min-h-[100px] flex flex-col items-center py-[20px] text-brand-500">
      <SearchXIcon className="text-red-300 h-[40px] w-[40px]" />

      <p className="mt-4 font-medium text-[16px]">No participants found... Made a typo?</p>
    </div>
  );
}
