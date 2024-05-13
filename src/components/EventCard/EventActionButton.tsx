import cn from "classnames";
import Button, { ButtonProps } from "@/components/ui/Button";

export default function EventActionButton({ className, ...props }: ButtonProps) {
  return <Button variant="secondary" className={cn("rounded-md", className)} {...props}></Button>;
}
