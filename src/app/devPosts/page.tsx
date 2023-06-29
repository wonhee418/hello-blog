import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';
import PostItem from '@/components/PostItem';
import StandardAside from '@/components/Aside/StandardAside';

export default async function DevPosts() {
  return (
    <>
      <Hydrate state={dehydrate(getQueryClient())}>
        <div className="flex gap-14 py-5">
          <div className="flex flex-col flex-3 gap-10">
            <div className="py-4 flex gap-2 items-center justify-between">
              <div className=" flex rounded-2xl p-2 gap-2 shadow-card">
                <span className=" rounded-full py-2 px-4 shadow-card_inset cursor-pointer accent_text">New Feed</span>
                <span className=" rounded-full p-2 px-4 cursor-pointer">Favorite</span>
                <span className=" rounded-full p-2 px-4 cursor-pointer">Popular</span>
              </div>
              <div className="">
                <input
                  type="search"
                  placeholder="Search"
                  className="py-2 px-4 shadow-card_inset bg-transparent rounded-full"
                />
              </div>
            </div>
            {Array.from({ length: 5 }, (_, index) => (
              <PostItem
                key={index}
                profileImg={
                  'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'
                }
                user={'name'}
                createdAt={'2023/06/18'}
                userInfo={'userinfo'}
                title={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                desc={
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id maxime explicabo similique obcaecati soluta iure nihil voluptatem quo in, facilis laudantium at nulla quis tenetur omnis. Architecto, ipsam. Eum?'
                }
                thumbnail={
                  'https://velog.velcdn.com/images/1106laura/post/e2db6999-4b1d-4ee8-ab18-31a2f8ca42fe/image.png'
                }
                href={`devPosts/detail/${index}`}
              />
            ))}
          </div>
          <StandardAside />
        </div>
      </Hydrate>
    </>
  );
}
