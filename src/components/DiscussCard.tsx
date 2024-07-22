import { promises as fs } from "fs";
import Image from "next/image";
import CustomModal from "./CustomModal";

interface Category {
  id: number;
  label: string;
}

interface User {
  id: number;
  image_url: string;
  nick_name: string;
  skin_type: string;
}

interface Discussion {
  id: number;
  title: string;
  content: string;
  image_urls: string[];
  viewCount: number;
  upvoteCount: number;
  commentCount: number;
  category: Category;
  user: User;
}

export default async function DiscussCard() {
  const file = await fs.readFile(
    process.cwd() + "/data/discussion.json",
    "utf8"
  );
  const data: Discussion = JSON.parse(file);

  return (
    <div>
      <span className="text-zinc-500 text-[14px] mb-[4px] lg:text-[16px] pl-4 lg:max-w-[60%] p-4 font-semibold">
        Label: {data.category.label}
      </span>
      <div className="border-2 p-4 lg:px-4 lg:py-6 rounded-lg">
        <div className="flex gap-8">
          {/* User image */}
          <div className="rounded-full overflow-hidden w-[64px] h-[64px]">
            <Image src="/user.jpg" alt="user" width={64} height={64} />
          </div>
          {/* User details */}
          <div className="flex flex-col">
            <p className="text-[16px] font-semibold text-[#F06384]">
              {data.user.nick_name}
            </p>
            <p className="text-[12px] font-thin text-zinc-500">
              Skin Type: {data.user.skin_type}
            </p>
          </div>
        </div>

        <div className="flex flex-col pl-16 pr-4">
          {/* Discussion title */}
          <h2 className="font-bold text-zinc-700">{data.title}</h2>
          {/* Discussion content */}
          <p className=" text-zinc-600 my-3">{data.content}</p>
          {/* Discussion images */}
          <div className="flex gap-2">
            {data.image_urls.map((img, index) => (
              <CustomModal key={index} imageUrl={img}  />
            ))}
          </div>
          <div className="flex py-2 gap-4">
            {/* Upvote count */}
            <div className="flex gap-1">
              <Image
                src="/icon-upvote-14-px@3x.png"
                alt=""
                width={20}
                height={2}
                className="h-[16px]"
              />
              <span className="text-[12px] text-zinc-700">
                {data.upvoteCount}
              </span>
            </div>
            {/* Comment count */}
            <div className="flex gap-1">
              <Image
                src="/icon-comment-14-px@3x.png"
                alt=""
                width={20}
                height={2}
                className="h-[16px]"
              />
              <span className="text-[12px] text-zinc-700">
                {data.commentCount}
              </span>
            </div>
            {/* View count */}
          </div>
          <p className="text-[12px] font-thin text-zinc-500">
            Viewed: {data.viewCount}
          </p>
        </div>
      </div>
    </div>
  );
}
