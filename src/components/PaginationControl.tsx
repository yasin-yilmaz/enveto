import Link from "next/link";
import React from "react";

const btnStyles =
  "rounded-md bg-white/5 px-5 py-3 text-sm text-white opacity-75 transition hover:opacity-100";

type Props = {
  prevPath: string;
  nextPath: string;
};

const PaginationControl = ({ prevPath, nextPath }: Props) => {
  return (
    <section className="flex w-full justify-between">
      {prevPath ? (
        <Link href={prevPath} className={btnStyles}>
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath ? (
        <Link href={nextPath} className={btnStyles}>
          Next
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
};

export default PaginationControl;
