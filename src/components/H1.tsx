import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};
const H1 = ({ children, className }: Props) => {
  return (
    <h1
      className={cn("text-3xl font-bold tracking-tight lg:text-6xl", className)}
    >
      {children}
    </h1>
  );
};

export default H1;
