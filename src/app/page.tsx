import H1 from "@/components/H1";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex h-full flex-col items-center px-3 pt-36">
      <H1>Finds Events Around you</H1>
      <p className="mb-12 mt-7 text-2xl opacity-75 lg:text-3xl">
        Lorem ipsum dolor{" "}
        <span className="font-bold italic text-accent underline">sit amet</span>{" "}
        consectetur adipisicing elit.
      </p>
      <SearchForm />
      <section className="mt-4 flex items-center gap-x-4 text-sm text-white/50">
        <p>Popular: </p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
