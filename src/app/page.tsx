
import Comment from "@/components/Comment";
import DiscussCard from "@/components/DiscussCard";
import ResponsiveSide from "@/components/ResponsiveSide";


export default function Home() {
  return (
    <main className="flex flex-col px-[16px] lg:px-0 lg:flex-row max-w-6xl mx-auto gap-4  ">
      <div>
        <ResponsiveSide />
      </div>
      <div className="">
        <DiscussCard/>
        <Comment />
      </div>
    </main>
  );
}
