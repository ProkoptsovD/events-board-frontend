import cn from "classnames";

type ErrorMessageProps = {
  message: string;
} & PropsWithClassName;

export default function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <strong
      className={cn(
        "absolute -bottom-[16px] left-2 text-red-600 text-[10px] font-normal",
        className
      )}
    >
      {message}
    </strong>
  );
}
