import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';
import Link from 'next/link';

export default function SignIn() {
  // TODO: 로그인폼에 react-hook-form 연결하기
  return (
    <Hydrate state={dehydrate(getQueryClient())}>
      <div className="flex justify-center items-center ">
        <div className="flex flex-col gap-8 max-w-sm h-96">
          <div>
            <h1 className="font-bold text-4xl pt-10 text-center">로그인</h1>
            <div className="">
              <form className="flex flex-col">
                <label>아이디</label>
                <input type="text" className="border" />
                <label>비밀번호</label>
                <input type="password" className="border" />
                <button type="submit" className="border mt-4">
                  로그인
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className=" border-t flex-3"></div>
            <div className="flex-1 text-center text-gray-500">또는</div>
            <div className=" border-t flex-3"></div>
          </div>
          <div className="flex flex-col">
            <h1 className=" font-bold text-4xl text-center">소셜 아이디로 시작하기</h1>
            <Link className=" bg-slate-600 text-white" href={'#'}>
              GitHub
            </Link>
            <Link className=" bg-yellow-200" href={'#'}>
              Kakao
            </Link>
            <Link className="border" href={'#'}>
              Google
            </Link>
          </div>
        </div>
      </div>
    </Hydrate>
  );
}
