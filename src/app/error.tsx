"use client"; // Error components must be Client Components

import H1 from "@/components/H1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="py-24 text-center">
      {process.env.NODE_ENV === "development" ? (
        <H1>{error.message}</H1>
      ) : (
        <H1 className="mb-5">Something went wrong!</H1>
      )}
      <button
        className="mt-4"
        onClick={
          // Attempt to recover by trying to re-render the segment
          reset
        }
      >
        Try again
      </button>
    </main>
  );
}
