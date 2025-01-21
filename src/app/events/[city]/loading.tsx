import SkeletonCard from "@/components/SkeletonCard";

const Loading = () => {
  return (
    <div className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-20 px-[20px] py-24">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default Loading;
