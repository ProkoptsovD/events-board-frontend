import { ComponentProps } from "react";
import cn from "classnames";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "text";
type ButtonComponentProps = ComponentProps<"button"> & { as: "button"; variant?: Variant };
type AnchorComponentProps = Omit<ComponentProps<"a">, "href"> & {
  as: "a";
  variant?: Variant;
  href: string;
};
export type ButtonProps = ButtonComponentProps | AnchorComponentProps;

export default function Button({
  as,
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const cssClasses = getVariantBasedStyles(variant);

  if (as === "button") {
    return (
      <button
        type="button"
        {...(props as ButtonComponentProps)}
        className={cn("button", cssClasses, className)}
      >
        {children}
      </button>
    );
  }

  return (
    <Link {...(props as AnchorComponentProps)} className={cn("link", cssClasses, className)}>
      {children}
    </Link>
  );
}

const sharedStyles =
  "p-2 cursor-pointer text-center transition disabled:cursor-default disabled:opacity-50";
const styles: Record<Variant, string> = {
  primary: `text-brand-400 bg-accent-100 hover:bg-accent-200 ${sharedStyles}`,
  secondary: `text-accent-100 bg-brand-500 hover:bg-brand-400 ${sharedStyles}`,
  outline: `text-brand-400 bg-white hover:bg-gray-100 border-2 border-solid border-gray-300 rounded-lg ${sharedStyles}`,
  text: `text-brand-400 bg-transparent ${sharedStyles}`,
};

function getVariantBasedStyles(variant: Variant) {
  return styles[variant];
}
