import cn from "classnames";
import { PropsWithChildren } from "react";

type HeadingProps = PropsWithChildren &
  PropsWithClassName & { as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" };

export default function Heading({ as: Tag, children, className }: HeadingProps) {
  return (
    <Tag className={cn("font-extrabold md:text-[28px] lg:text-[32] xl:text-[48px]", className)}>
      {children}
    </Tag>
  );
}
