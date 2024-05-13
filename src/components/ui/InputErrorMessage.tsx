import cn from "classnames";

type ErrorMessageProps = {
  message: string;
} & PropsWithClassName;

export default function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <strong className={cn("absolute -bottom-[20px] left-0 text-red-600", className)}>
      {message}
    </strong>
  );
}
