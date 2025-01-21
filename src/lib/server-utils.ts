"use server";
import prisma from "@/lib/db";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import _capitalize from "lodash/capitalize";

export const getEvents = unstable_cache(async (city: string, page: number) => {
  const pageSize = 6;
  if (page < 1 || isNaN(page)) throw new Error("Invalid page number");

  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : _capitalize(city) },
    orderBy: { date: "asc" },
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: { city: city === "all" ? undefined : _capitalize(city) },
  });

  const totalPage = Math.ceil(totalCount / pageSize);

  if (page > totalPage) {
    notFound();
  }

  return { events, totalPage };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
