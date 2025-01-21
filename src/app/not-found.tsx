import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="mt-24 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-black/75 px-6 py-3 text-white hover:bg-gray-800"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
