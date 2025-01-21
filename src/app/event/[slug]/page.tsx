import H1 from "@/components/H1";
import { getEvent } from "@/lib/server-utils";
import _capitalize from "lodash/capitalize";
import { Metadata } from "next";
import Image from "next/image";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;

  const currentEvent = await getEvent(slug);

  return {
    title: `Event ${_capitalize(slug.replace(/\-/gi, " "))}`,
    description: currentEvent.description,
  };
};

export const generateStaticParams = async () => {
  return [{ slug: "dj-practice-session " }, { slug: "harmony-festival" }];
};

const EventPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const currentEvent = await getEvent(slug);

  return (
    <main>
      <section className="relative flex items-center justify-center overflow-hidden py-14 md:py-20">
        <Image
          src={currentEvent.imageUrl}
          alt={currentEvent.name}
          fill
          quality={50}
          sizes="(max-width:1280px) 100vw, 1280px"
          className="z-0 object-cover blur-3xl"
          priority
        />
        <div className="z-1 relative flex flex-col gap-6 lg:flex-row lg:gap-16">
          <Image
            src={currentEvent.imageUrl}
            alt={currentEvent.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-base text-white/75">
              {new Date(currentEvent.date).toLocaleDateString("en", {
                weekday: "long",
                month: "long",
                day: "2-digit",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {currentEvent.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by{" "}
              <span className="italic">{currentEvent.organizerName}</span>{" "}
            </p>
            <button className="--tw-state-effects mt-5 w-[95vw] rounded-md border-2 border-white/20 bg-white/20 px-4 py-2 text-lg capitalize sm:w-full lg:mt-auto">
              Get Ticket
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] space-y-16 px-5 py-16 text-center">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{currentEvent.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{currentEvent.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
};

function Section({ children }: { children: React.ReactNode }) {
  return <section className="space-y-8">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto max-w-4xl text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}

export default EventPage;
