import _capitalize from "lodash/capitalize";

import H1 from "@/components/H1";
import EventsList from "@/components/EventsList";
import { Suspense } from "react";
import Loading from "./loading";
import { z } from "zod";

type Props = {
  params: Promise<{ city: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { city } = await params;
  return {
    title: city === "all" ? "All Events" : `Events in ${_capitalize(city)}`,
  };
};

const pageNumberSchema = z.coerce.number().int().min(1).optional();

const EventsPage = async ({ params, searchParams }: Props) => {
  const { city } = await params;
  const { page } = await searchParams;
  const parsedPage = pageNumberSchema.safeParse(page || "1");

  if (!parsedPage.success) throw new Error("invalid page number");

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-24">
        {city === "all" ? "All Events" : `Events in ${_capitalize(city)}`}
      </H1>

      <Suspense key={`${city}-${parsedPage.data!}`} fallback={<Loading />}>
        <EventsList city={city} page={+parsedPage.data!} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
