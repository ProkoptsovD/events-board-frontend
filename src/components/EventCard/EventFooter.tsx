import { PropsWithChildren } from "react";
import cn from "classnames";

type EventFooterProps = PropsWithClassName & PropsWithChildren;

export default function EventFooter({ className, children }: EventFooterProps) {
  return (
    <div className={cn("flex [&>*]:flex-1 gap-2 px-2 pt-1 pb-3 bg-white", className)}>
      {children}
    </div>
  );
}
