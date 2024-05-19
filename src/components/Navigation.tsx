"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/events",
    name: "Events",
  },
  {
    href: "/about",
    name: "About",
  },
];

export default function Navigation({ className }: PropsWithClassName) {
  const pathname = usePathname();

  return (
    <nav className={cn(className)}>
      <ul className="flex flex-grow justify-center items-center gap-3">
        {navLinks.map((link) => {
          const isActive = link.href.endsWith(pathname);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                data-text={link.name}
                className={cn(
                  "text-white text-[18px] transition",
                  isActive &&
                    "font-semibold relative before:absolute before:bg-accent-100 before:-bottom-[6px] before:inset-x-0 before:h-[2px]"
                )}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
