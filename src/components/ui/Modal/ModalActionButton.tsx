import cn from "classnames";
import Button, { ButtonProps } from "@/components/ui/Button";

export default function ModalActionButton({ children, className, ...props }: ButtonProps) {
  return (
    <Button className={cn("rounded-md", className)} {...props}>
      {children}
    </Button>
  );
}
