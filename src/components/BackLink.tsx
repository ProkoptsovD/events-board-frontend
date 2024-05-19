"use client";

import cn from "classnames";
import { useRouter } from "next/navigation";
import { MoveLeftIcon } from "lucide-react";

import IconButton from "@/components/ui/IconButton";

type BackLinkProps = PropsWithClassName;

export default function BackLink({ className }: BackLinkProps) {
  const router = useRouter();

  return (
    <IconButton
      icon={<MoveLeftIcon />}
      onClick={router.back}
      className={cn("inline-flex", className)}
    />
  );
}
