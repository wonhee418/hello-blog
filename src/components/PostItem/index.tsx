import { FC } from 'react';

type Post = {
  profileImg: string;
  user: string;
  createdAt: string;
  userInfo: string;
  title: string;
  desc: string;
  thumbnail: string;
};

const PostItem: FC<Post> = ({ profileImg, user, createdAt, userInfo, title, desc, thumbnail }) => {
  return (
    <div className="item flex gap-16 px-4 pb-6 items-center  border-b border-sub_n">
      <div className="flex flex-3 flex-col  gap-4">
        <div className="flex flex-col  gap-4">
          <h1 className=" text-heading overflow-hidden text-ellipsis line-clamp-1">{title}</h1>
          <div className=" text-body overflow-hidden text-ellipsis line-clamp-3 ">{desc}</div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className=" max-w-[30px] rounded-[50px]">
              <img src={profileImg} alt="userprofileImg" />
            </div>
            <div className="info flex flex-col text-detail_s">
              <div className="flex">
                <span>{user}</span>
                <span>{createdAt}</span>
              </div>
              <div>{userInfo}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="thumbnail flex-1">
        <img src={thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
};

export default PostItem;
