import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const Skeleton = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "h-4 w-[550px] animate-pulse rounded-md bg-white/5",
        className,
      )}
    />
  );
};

export default Skeleton;
