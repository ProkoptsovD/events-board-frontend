import Input, { InputProps } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import cn from "classnames";

type SearchInputProps = InputProps;

export default function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className={cn("flex flex-row", className)}>
      <Input className="w-full [&_.input]:h-full" {...props} />

      <Button as="button" variant="secondary" className="relative -left-[4px] rounded-r-md">
        Search
      </Button>
    </div>
  );
}
