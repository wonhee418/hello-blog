import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';
import PostItem from '@/components/PostItem';
import StandardAside from '@/components/Aside/StandardAside';
import MainBg from '@/images/mainBg_01.jpg';
import Image from 'next/image';

export default async function Main() {
  return (
    <>
      <Hydrate state={dehydrate(getQueryClient())}>
        <div className=" relative aspect-21/9 rounded-3xl overflow-hidden">
          <Image src={MainBg} alt="main_bg_img" className="h-full object-cover" />
          <div className=" absolute w-full left-0 top-0 flex justify-around">
            <div className=" text-white flex flex-col gap-5">
              <div className=" text-heading">안녕하세요 </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quo, debitis deleniti illum error
                dicta eius molestiae impedit sit quos eveniet officiis mollitia libero. Culpa, quae vel. Itaque,
                recusandae et.
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[calc(100%-200px)] ml-auto mr-auto shadow-card rounded-3xl p-8 -translate-y-1/2 bg-white">
          <div className="font-bold  pb-8">보고싶은 피드를 검색해보세요 🔍</div>
          <input
            type="search"
            placeholder="search"
            className=" w-full mr-auto ml-auto p-3 rounded-xl outline-none border"
          />
        </div>
        <div className=" text-center">
          <div className=" text-heading">헬로 블로그에 오신걸 환영해요 </div>
          <div className=" text-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa labore assumenda tempore quibusdam error?
            Suscipit harum ducimus soluta enim maxime fuga tempora tenetur deserunt impedit! Quasi tenetur maxime omnis
            quae?
          </div>
        </div>
        <div>
          <h1 className=" text-heading">Blog Info</h1>
          <div className="flex flex-wrap gap-[30px] justify-between">
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>블로그 개설일</span>
            </div>
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>오늘 방문자</span>
            </div>
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>총 방문자</span>
            </div>
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>뭐하지 ?</span>
            </div>
          </div>
        </div>

        <div>
          <h1 className=" text-heading">Blog Topics</h1>
          <div className="flex flex-wrap gap-[30px] justify-between">
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>블로그 개설일</span>
            </div>
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>오늘 방문자</span>
            </div>
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>총 방문자</span>
            </div>
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>총 포스팅</span>
            </div>
          </div>
        </div>

        <div>
          <h1 className=" text-heading">Coments</h1>
          <div className="flex flex-wrap gap-[30px] justify-between">
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>블로그 개설일</span>
            </div>
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>오늘 방문자</span>
            </div>
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>총 방문자</span>
            </div>
            <div className="border rounded-md p-4 w-[calc(25%-30px)]">
              <span>뭐하지 ?</span>
            </div>
          </div>
        </div>
      </Hydrate>
    </>
  );
}
