import { FrownIcon } from "lucide-react";

import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="pl-4 pr-4 pt-[80px] flex flex-col items-center justify-center flex-grow text-[20px] max-w-[400px] mx-auto">
      <div className="flex items-center">
        <span className="text-[60px]">4</span>
        <FrownIcon className="w-[60px] h-[60px]" />
        <span className="text-[60px]">4</span>
      </div>

      <h1 className="text-center">
        <span>Oops, event not found</span>
      </h1>
      <br />

      <Button as="a" href="/" className="w-fit mx-auto rounded-md">
        Return home
      </Button>
    </div>
  );
}
