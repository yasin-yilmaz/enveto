"use client";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "All Events",
    href: "/events/all",
  },
];

const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex h-full gap-x-6 text-sm">
          {routes.map((route) => (
            <li
              key={route.href}
              className={cn(
                "relative flex items-center transition hover:text-white",
                {
                  "text-white": currentPath === route.href,
                  "text-white/50": currentPath !== route.href,
                },
              )}
            >
              <Link href={route.href}>{route.name}</Link>
              {currentPath === route.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 h-1 w-full bg-accent"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
