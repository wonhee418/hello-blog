import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';
import PostItem from '@/components/PostItem';
import StandardAside from '@/components/Aside/StandardAside';
import Image from 'next/image';
import BannerImg from '@/images/banner_02.jpg';

export default async function DevPosts() {
  return (
    <>
      <Hydrate state={dehydrate(getQueryClient())}>
        <div className="flex gap-14 py-5">
          <div className="flex flex-col items-center flex-3 gap-10">
            <div className="grid">
              <div className=" relative rounded-lg h-64 overflow-hidden">
                <Image src={BannerImg} alt="bannerImg" className=" object-cover h-full" />
                <div className=" text-heading absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Blog</div>
              </div>
            </div>
            <div className=" max-w-xl w-full">
              <input
                type="search"
                placeholder="Search"
                className="w-full py-4 px-10 bg-transparent border rounded-xl outline-none"
              />
            </div>
            <div className="flex gap-2 items-center justify-between self-start ">
              <div className=" flex rounded-2xl p-2 gap-2">
                <span className=" rounded-md border py-2 px-4 cursor-pointer bg-primary text-white">All</span>
                <span className=" rounded-md border py-2 px-4 cursor-pointer">New Feed</span>
                <span className=" rounded-md border p-2 px-4 cursor-pointer">Favorite</span>
                <span className=" rounded-md border p-2 px-4 cursor-pointer">Popular</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 4 }, (_, index) => (
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
                  href={`blog/detail/${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Hydrate>
    </>
  );
}
