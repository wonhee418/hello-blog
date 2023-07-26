import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/utils/reactQuery';
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
              <div className=" text-heading"></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className=" w-[calc(100%-200px)] ml-auto mr-auto text-center shadow-card rounded-3xl p-8 -translate-y-1/2 bg-white">
          <div className="font-bold  pb-8">보고싶은 피드를 검색해보세요 🔍</div>
          <input
            type="search"
            placeholder="search"
            className=" w-full mr-auto ml-auto p-3 rounded-xl outline-none border"
          />
        </div>
        <div className="flex gap-10 pb-[80px]">
          <div className="flex-1 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1669907827996-f4bd504dfc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
              alt="asdasd"
            />
          </div>
          <div className="flex-1">
            <div className=" text-heading pb-5">헬로 블로그에 오신걸 환영해요 </div>
            <div className=" text-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa labore assumenda tempore quibusdam error?
              Suscipit harum ducimus soluta enim maxime fuga tempora tenetur deserunt impedit! Quasi tenetur maxime
              omnis quae?
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pb-8">
          <h1 className=" text-heading">Blog Info</h1>
          <div className="flex flex-wrap gap-[30px] justify-between">
            <div className="border rounded-md p-6 w-[calc(25%-30px)] flex flex-col justify-center items-center gap-3">
              <span className=" text-heading_sub font-medium">블로그 개설일</span>
              <span className=" text-body02 font-bold">2일</span>
            </div>
            <div className="border rounded-md p-6 w-[calc(25%-30px)] flex flex-col justify-center items-center gap-3">
              <span className=" text-heading_sub font-medium">오늘 방문자</span>
              <span className=" text-body02 font-bold">2일</span>
            </div>
            <div className="border rounded-md p-6 w-[calc(25%-30px)] flex flex-col justify-center items-center gap-3">
              <span className=" text-heading_sub font-medium">총 방문자</span>
              <span className=" text-body02 font-bold">2일</span>
            </div>
            <div className="border rounded-md p-6 w-[calc(25%-30px)] flex flex-col justify-center items-center gap-3">
              <span className=" text-heading_sub font-medium">뭐하지 ?</span>
              <span className=" text-body02 font-bold">2일</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-6">
          <h1 className=" text-heading">Blog Topics</h1>
          <div className="container_Gird">
            <div className="border rounded-xl overflow-hidden relative aspect-[6/9] topics_Top01">
              <img
                src="https://images.unsplash.com/photo-1565312559326-5994b95797c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                alt="adads"
              />
              <div className=" absolute bottom-0 text-white bg-[rgba(0,0,0,0.4)] p-3 w-full flex flex-col topics_Top02">
                <span className=" text-body02 font-bold line-clamp-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </span>
                <span className="pt-2">2023/05/20</span>
              </div>
            </div>
            <div className="border rounded-xl overflow-hidden relative aspect-[6/9] topics_Top02">
              <img
                src="https://images.unsplash.com/photo-1565312559326-5994b95797c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                alt="adads"
                className=" object-cover"
              />
              <div className=" absolute bottom-0 text-white bg-[rgba(0,0,0,0.4)] p-3 w-full flex flex-col topics_Top04">
                <span className=" text-body02 font-bold line-clamp-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </span>
                <span className="pt-2">2023/05/20</span>
              </div>
            </div>
            <div className="border rounded-xl overflow-hidden relative aspect-[6/9] topics_Top03">
              <img
                src="https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="adads"
                className=" object-cover"
              />
              <div className=" absolute bottom-0 text-white bg-[rgba(0,0,0,0.4)] p-3 w-full flex flex-col">
                <span className=" text-body02 font-bold line-clamp-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </span>
                <span className="pt-2">2023/05/20</span>
              </div>
            </div>
            <div className="border rounded-xl overflow-hidden relative aspect-[6/9] topics_Top04">
              <img
                src="https://images.unsplash.com/photo-1565312559326-5994b95797c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                alt="adads"
              />
              <div className=" absolute bottom-0 text-white bg-[rgba(0,0,0,0.4)] p-3 w-full flex flex-col">
                <span className=" text-body02 font-bold line-clamp-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </span>
                <span className="pt-2">2023/05/20</span>
              </div>
            </div>
            <div className="border rounded-xl overflow-hidden relative aspect-[6/9] topics_Top05">
              <img
                src="https://images.unsplash.com/photo-1565312559326-5994b95797c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                alt="adads"
              />
              <div className=" absolute bottom-0 text-white bg-[rgba(0,0,0,0.4)] p-3 w-full flex flex-col">
                <span className=" text-body02 font-bold line-clamp-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </span>
                <span className="pt-2">2023/05/20</span>
              </div>
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
