import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & { className?: string };

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`mx-auto flex min-h-screen max-w-7xl flex-col justify-between ${className || ""} `}
    >
      {children}
    </div>
  );
};

export default Container;
