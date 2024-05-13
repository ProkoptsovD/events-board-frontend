import { PropsWithChildren } from "react";
import cn from "classnames";

type EventCardProps = { maxWidth?: string } & PropsWithClassName & PropsWithChildren;

export default function EventCard({ className, maxWidth = "300px", children }: EventCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-lg overflow-hidden shadow hover:shadow-lg transition",
        className
      )}
      // style={{ maxWidth }}
    >
      {children}
    </article>
  );
}
