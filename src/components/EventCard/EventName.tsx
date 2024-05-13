import { PropsWithChildren } from "react";
import cn from "classnames";

export type EventNameProps = { clamp?: number } & PropsWithChildren & PropsWithClassName;

const clamps = [, "line-clamp-1", "line-clamp-2", "line-clamp-3"];

export default function EventName({ className, children, clamp = 1 }: EventNameProps) {
  return (
    <span
      className={cn(
        "block font-semibold text-brand-100 text-[20px] leading-[1.2]",
        clamps[clamp],
        className
      )}
    >
      {children}
    </span>
  );
}
