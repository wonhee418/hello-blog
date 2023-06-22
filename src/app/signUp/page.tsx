import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';

export default function SignUp() {
  return (
    <Hydrate state={dehydrate(getQueryClient())}>
      <div className="flex justify-center ">
        <div className="max-w-sm w-full">
          <h1 className="font-bold text-4xl text-center pt-10">회원가입</h1>
          <div className="">
            <form className="flex flex-col">
              <label>아이디</label>
              <input type="text" className="border" />
              <label>비밀번호</label>
              <input type="password" className="border" />
              <button type="submit" className="border mt-4">
                가입하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </Hydrate>
  );
}
