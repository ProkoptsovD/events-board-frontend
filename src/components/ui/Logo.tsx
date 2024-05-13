import LogoIcon from "../../../public/assets/icons/ticket.svg";
import cn from "classnames";

type LogoProps = PropsWithClassName;

export default function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn("inline-flex items-center justify-center gap-1", className)}
    >
      <LogoIcon />
      <span className="text-accent-100 text-[32px] font-bold">Eventify</span>
    </span>
  );
}
