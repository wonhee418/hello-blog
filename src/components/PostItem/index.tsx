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
    <div className="item flex gap-16 p-4 items-center  border-b border-primaryColor">
      <div className="flex flex-3 flex-col  gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className=" max-w-[40px] rounded-[50px]">
              <img src={profileImg} alt="userprofileImg" />
            </div>
            <div className="info flex flex-col">
              <div className="flex">
                <span>{user}</span>
                <span>{createdAt}</span>
              </div>
              <div>{userInfo}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-4">
          <h1 className=" text-heading">{title}</h1>
          <div className=" text-body">{desc}</div>
        </div>
      </div>
      <div className="thumbnail flex-1">
        <img src={thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
};

export default PostItem;
