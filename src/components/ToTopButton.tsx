"use client";

import cn from "classnames";
import { useRef, useEffect } from "react";
import { ArrowBigUpIcon } from "lucide-react";

import IconButton from "@/components/ui/IconButton";

type ToTopButtonProps = PropsWithClassName & {
  visibleOn?: number;
};

export default function ToTopButton({ className, visibleOn = 600 }: ToTopButtonProps) {
  const toTopButtonRef = useRef<HTMLButtonElement>(null);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > visibleOn) {
          toTopButtonRef.current?.classList.remove("hidden");
        } else {
          toTopButtonRef.current?.classList.add("hidden");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [visibleOn]);

  return (
    <IconButton
      ref={toTopButtonRef}
      icon={<ArrowBigUpIcon />}
      onClick={scrollToTop}
      className={cn(
        "hidden fixed bottom-4 right-4 bg-brand-100 text-accent-100 p-2 z-50",
        className
      )}
    />
  );
}
