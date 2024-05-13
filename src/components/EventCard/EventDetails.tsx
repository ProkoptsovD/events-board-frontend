import { PropsWithChildren } from "react";
import cn from "classnames";

type Layout = "root" | "subgrid";
type EventDetailsProps = { layout?: Layout } & PropsWithChildren & PropsWithClassName;

export default function EventDetails({ children, className, layout = "root" }: EventDetailsProps) {
  const cssLayout = getLayout(layout);

  return <div className={cn(cssLayout, className)}>{children}</div>;
}

const layouts: Record<Layout, string> = {
  root: "grid grid-cols-[70px_1fr] [&_>:nth-child(1)]:col-start-1 [&_>:nth-child(2)]:col-start-2 [&_>:nth-child(3)]:col-start-2 [&_>:nth-child(4)]:col-start-2 [&_>:nth-child(5)]:col-start-2 [&_>:nth-child(6)]:col-start-2 gap-2 p-2 bg-white",
  subgrid: "grid gap-1",
};

function getLayout(layout: Layout) {
  return layouts[layout];
}
