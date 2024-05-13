import cn from "classnames";
import EventName, { EventNameProps } from "@/components/EventCard/EventName";

type EventDescriptionProps = EventNameProps;

export default function EventDescription({
  children,
  className,
  clamp = 2,
  ...props
}: EventDescriptionProps) {
  if (!children) return null;

  return (
    <EventName {...props} className={cn("text-brand-700 !text-[12px]", className)} clamp={clamp}>
      {children}
    </EventName>
  );
}
