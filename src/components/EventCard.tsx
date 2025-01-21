"use client";
import { EventoEvent as TEventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  event: TEventoEvent;
};

const MotionLink = motion.create(Link);

const EventCard = ({ event }: Props) => {
  const linkRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: linkRef,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={linkRef}
      href="/event/[slug]"
      as={`/event/${event.slug}`}
      className="h-[380px] max-w-[500px] flex-1 basis-80"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
    >
      <section className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-xl bg-white/[3%] transition duration-300 hover:scale-105 active:scale-[1.02]">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
          priority
        />
        <div className="flex flex-1 flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="mt-4 text-sm text-white/50">{event.location}</p>
        </div>
        <section className="absolute left-3 top-3 flex size-12 flex-col items-center rounded-md bg-black/30 text-center">
          <p className="text-xl font-bold">
            {new Date(event.date).toLocaleDateString("en", { day: "2-digit" })}
          </p>
          <p className="-translate-y-1 text-xs uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en", { month: "short" })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
};

export default EventCard;
