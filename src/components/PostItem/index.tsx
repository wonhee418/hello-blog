import Link from 'next/link';
import { FC } from 'react';

type Post = {
  updatedAt: string;
  title: string;
  thumbnail: string;
  href: string;
};

const PostItem: FC<Post> = ({ updatedAt, title, thumbnail, href }) => {
  const year = new Date(updatedAt).getFullYear().toString();
  const month = (new Date(updatedAt).getMonth() + 1).toString();
  const date = new Date(updatedAt).getDate().toString();

  return (
    <div className=" border rounded-2xl overflow-hidden shadow-card relative top-0 transition-all hover:-top-2">
      <Link href={`/blog/detail/${href}`} className="item flex flex-col items-center cursor-pointer">
        <div className="thumbnail flex-1">
          <img
            src={
              thumbnail
                ? thumbnail
                : 'https://velog.velcdn.com/images/gene028/post/231f50d1-9a85-4068-b616-aa031597a73d/image.png'
            }
            alt="thumbnail"
            className="aspect-video object-cover"
          />
        </div>
        <div className="flex flex-2 flex-col gap-4 p-4 w-full">
          <div className="flex flex-col gap-2">
            <h1 className=" text-heading_sub overflow-hidden text-ellipsis line-clamp-1 ">{title}</h1>
          </div>
          <div className="flex gap-2">
            <div>{`${year}-${month.padStart(2, '0')}-${date}`}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
