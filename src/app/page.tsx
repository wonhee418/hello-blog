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
        <div className="w-[calc(100vw-40px)] h-[calc(100vh-84px-280px)] relative left-[50%] -translate-x-[calc(50%-20px)]">
          <Image src={MainBg} alt="main_bg_img" className="h-full object-cover" />
          <div className=" absolute w-full left-0 top-1/4 -translate-y-1/4 flex justify-around">
            <div className=" text-white flex flex-col gap-5">
              <div className=" text-heading">안녕하세요 </div>
              <div>이 블로그는 누구나 정보를 주고받을 수 있는 블로그입니다.</div>
            </div>
            <div></div>
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
