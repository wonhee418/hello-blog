import Link from 'next/link';
import { FC } from 'react';

type Post = {
  profileImg: string;
  user: string;
  createdAt: string;
  userInfo: string;
  title: string;
  desc: string;
  thumbnail: string;
  href: string;
};

const PostItem: FC<Post> = ({ profileImg, user, createdAt, userInfo, title, desc, thumbnail, href }) => {
  return (
    <div className=" border rounded-2xl overflow-hidden shadow-card relative top-0 transition-all hover:-top-2">
      <Link href={href} className="item flex flex-col items-center cursor-pointer">
        <div className="thumbnail flex-1">
          <img src={thumbnail} alt="thumbnail" className="aspect-video object-cover" />
        </div>
        <div className="flex flex-2 flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <h1 className=" text-heading_sub overflow-hidden text-ellipsis line-clamp-1 ">{title}</h1>
            <div className=" text-body overflow-hidden text-ellipsis line-clamp-2 ">{desc}</div>
          </div>
          <div className="flex flex-col">
            <div className="info flex gap-2 text-detail_s">
              <div>tag1</div>
              <div>tag2</div>
              <div>tag3</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>2023/07/21</div>
            <div>View : 302</div>
            <div>Like : 32</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
