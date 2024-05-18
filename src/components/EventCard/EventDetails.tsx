import { PropsWithChildren } from "react";
import cn from "classnames";

type Layout = "root" | "subgrid" | "custom";
type EventDetailsProps = { layout?: Layout } & PropsWithChildren & PropsWithClassName;

export default function EventDetails({ children, className, layout = "root" }: EventDetailsProps) {
  const cssLayout = getLayout(layout);

  return <div className={cn(cssLayout, className)}>{children}</div>;
}

const layouts: Record<Layout, string> = {
  root: "p-2 bg-white",
  subgrid: "grid gap-1",
  custom: "",
};

function getLayout(layout: Layout) {
  return layouts[layout];
}
