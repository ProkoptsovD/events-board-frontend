import cn from "classnames";

type DelimiterProps = { value?: string } & PropsWithClassName;

export default function Delimiter({ className, value = "|" }: DelimiterProps) {
  return (
    <span
      className={cn(
        "flex items-center justify-center font-bold text-[24px] ml-1 mr-1 text-amber-600",
        className
      )}
    >
      {value}
    </span>
  );
}
