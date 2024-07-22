import { promises as fs } from "fs";
import Image from "next/image";
import CustomModal from "./CustomModal";

interface User {
  id: number;
  image_url: string;
  nick_name: string;
  skin_type: string;
}

interface Category {
  id: number;
  label: string;
}

interface Reply {
  id: number;
  content: string;
  image_urls: string[];
  viewCount: number;
  upvoteCount: number;
  commentCount: number;
  category: Category;
  user: User;
  createdAt: string;
}

interface Comment {
  id: number;
  content: string;
  image_urls: string[];
  viewCount: number;
  upvoteCount: number;
  commentCount: number;
  category: Category;
  user: User;
  createdAt: string;
  replies: Reply[];
}

export default async function Comments() {
  const file = await fs.readFile(process.cwd() + "/data/comments.json", "utf8");
  const data: Comment[] = JSON.parse(file);

  return (
    <div>
      {data.map((comment) => (
        <div key={comment.id} className="border-b-2 p-4 lg:px-4 lg:py-6">
          <div className="flex gap-8">
            {/* User image */}
            <div className="rounded-full overflow-hidden w-[64px] h-[64px]">
              <Image
                src={comment.user.image_url}
                alt="user"
                width={64}
                height={64}
              />
            </div>
            {/* User details */}
            <div className="flex flex-col">
              <p className="text-[16px] font-semibold text-[#F06384]">
                {comment.user.nick_name}
              </p>
              <p className="text-[12px] font-thin text-zinc-500">
                Skin Type: {comment.user.skin_type}
              </p>
            </div>
          </div>

          <div className="flex flex-col pl-16 pr-4">
            {/* Comment content */}
            <p className="text-zinc-600 my-3">{comment.content}</p>
            {/* Comment images */}
            <div className="flex gap-2">
              {comment.image_urls.map((img, index) => (
                <CustomModal key={index} imageUrl={img} />
              ))}
            </div>
            {/* Upvote and comment counts */}
            <div className="flex py-2 gap-4">
              <div className="flex gap-1">
                <Image
                  src="/icon-upvote-14-px@3x.png"
                  alt=""
                  width={20}
                  height={2}
                  className="h-[16px]"
                />
                <span className="text-[12px] text-zinc-700">
                  {comment.upvoteCount}
                </span>
              </div>
              <div className="flex gap-1">
                <Image
                  src="/icon-comment-14-px@3x.png"
                  alt=""
                  width={20}
                  height={2}
                  className="h-[16px]"
                />
                <span className="text-[12px] text-zinc-700">
                  {comment.commentCount}
                </span>
              </div>
            </div>
            {/* View count */}
            <p className="text-[12px] font-thin text-zinc-500">
              Viewed: {comment.viewCount}
            </p>

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="pl-2 border-l-2 mt-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className=" mb-4 pb-4">
                    <div className="flex gap-4">
                      {/* Reply user image */}
                      <div className="rounded-full overflow-hidden w-[32px] h-[32px]">
                        <Image
                          src={reply.user.image_url}
                          alt="user"
                          width={32}
                          height={32}
                        />
                      </div>
                      {/* Reply user details */}
                      <div className="flex flex-col">
                        <p className="text-[14px] font-semibold text-[#F06384]">
                          {reply.user.nick_name}
                        </p>
                        <p className="text-[10px] font-thin text-zinc-500">
                          Skin Type: {reply.user.skin_type}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col pl-8 pr-4">
                      {/* Reply content */}

                      <p className="text-zinc-600 my-2">{reply.content}</p>
                      {/* Reply images */}
                      {reply.image_urls.length > 0 && (
                        <div className="flex gap-2">
                          {reply.image_urls.map((img, index) => (
                            <CustomModal key={index} imageUrl={img} />
                          ))}
                        </div>
                      )}
                      {/* Reply upvote and comment counts */}
                      <div className="flex py-1 gap-4">
                        <div className="flex gap-1">
                          <Image
                            src="/icon-upvote-14-px@3x.png"
                            alt=""
                            width={20}
                            height={2}
                            className="h-[12px]"
                          />
                          <span className="text-[10px] text-zinc-700">
                            {reply.upvoteCount}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <Image
                            src="/icon-comment-14-px@3x.png"
                            alt=""
                            width={20}
                            height={2}
                            className="h-[12px]"
                          />
                          <span className="text-[10px] text-zinc-700">
                            {reply.commentCount}
                          </span>
                        </div>
                      </div>
                      {/* Reply view count */}
                      <p className="text-[10px] font-thin text-zinc-500">
                        Viewed: {reply.viewCount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
