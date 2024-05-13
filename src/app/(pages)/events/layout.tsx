import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <section>{children}</section>;
}
