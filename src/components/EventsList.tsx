import EventCard from "@/components/EventCard";
import PaginationControl from "@/components/PaginationControl";
import { getEvents } from "@/lib/server-utils";

type Props = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: Props) => {
  const { events, totalPage } = await getEvents(city, page);

  const prevPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath = page < totalPage ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex flex-wrap justify-center gap-10">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControl prevPath={prevPath} nextPath={nextPath} />
    </section>
  );
};

export default EventsList;
