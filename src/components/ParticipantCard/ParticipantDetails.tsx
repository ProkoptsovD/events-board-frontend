import cn from "classnames";
import { PropsWithChildren } from "react";

type ParticipantDetailsProps = PropsWithChildren & PropsWithClassName;

export default function ParticipantDetails({ className, children }: ParticipantDetailsProps) {
  return <div className={cn("flex-1 min-w-0 ms-4", className)}>{children}</div>;
}
