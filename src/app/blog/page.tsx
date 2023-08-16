'use client';

import PostItem from '@/components/PostItem';
import Image from 'next/image';
import BannerImg from '@/images/banner_02.jpg';
import { useEffect, useState } from 'react';
import { useGetPost } from '@/hooks/queries';

export default function DevPosts() {
  const { data: posts = [], status, error } = useGetPost();

  return (
    <>
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
            {posts &&
              posts.map((item) => {
                return (
                  <PostItem
                    key={item.id}
                    updatedAt={item.updatedAt}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    href={item.id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
