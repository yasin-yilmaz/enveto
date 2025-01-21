"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SearchForm = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText.trim()}`);
  };

  return (
    <form onSubmit={submitHandler} className="w-full sm:w-[580px]">
      <input
        className="h-16 w-full rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:bg-white/10 focus:ring-2"
        type="search"
        placeholder="Search any events in any city..."
        spellCheck={false}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
