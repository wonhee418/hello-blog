import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';
import PostItem from '@/components/PostItem';
import Aside from '@/components/Aside';

export default async function Main() {
  return (
    <>
      <Hydrate state={dehydrate(getQueryClient())}>
        <div className="border p-5">
          <input type="search" placeholder="Search" />
        </div>
        <div className="flex gap-14">
          <div className="flex flex-col flex-3 gap-6">
            {Array.from({ length: 5 }, (_, index) => (
              <PostItem
                key={index}
                profileImg={
                  'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'
                }
                user={'name'}
                createdAt={'2023/06/18'}
                userInfo={'userinfo'}
                title={'title'}
                desc={
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id maxime explicabo similique obcaecati soluta iure nihil voluptatem quo in, facilis laudantium at nulla quis tenetur omnis. Architecto, ipsam. Eum?'
                }
                thumbnail={'https://blog.kakaocdn.net/dn/bLQ4LU/btqMr5tAGng/p2c9xyckCA0AnVRM9GqzF1/img.jpg'}
              />
            ))}
          </div>
          <Aside />
        </div>
      </Hydrate>
    </>
  );
}
