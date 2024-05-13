import cn from "classnames";
import { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren & PropsWithClassName;

export default function Header({ children, className }: HeaderProps) {
  return (
    <header className={cn("grid grid-cols-12 items-center py-2 px-4 bg-brand-100", className)}>
      {children}
    </header>
  );
}
