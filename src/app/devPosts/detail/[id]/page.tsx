import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';
import DetailAside from '@/components/Aside/DetailAside';

export default function Detail() {
  return (
    <Hydrate state={dehydrate(getQueryClient())}>
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2">
        <div className="w-full h-[60vh] absolute bg-black opacity-60"> </div>
        <div className="w-full h-[60vh] bg-[url(https://velog.velcdn.com/images/seungchan__y/post/631e4691-1dcf-4e1f-9f50-3611ac4b9441/image.png)] bg-no-repeat bg-cover bg-center"></div>
        {/* <img src="" alt="thumbnail" className="w-full h-[60vh] object-cover" /> */}
      </div>
      <div className="flex max-w-screen m-auto">
        <div className="flex flex-3 flex-col gap-6 pt-6">
          <div className="">
            <h1 className=" text-heading pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className=" max-w-[30px] rounded-[50px]">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                    alt="userprofileImg"
                  />
                </div>
                <div className="info flex flex-col text-detail_s">
                  <div className="flex">
                    <span>name</span>
                    <span>2023/06/18</span>
                  </div>
                  <div>userinfo</div>
                </div>
              </div>
            </div>
          </div>

          <div id="section01">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum repellat enim fugit officia et esse,
            provident molestiae cum ducimus nemo illo, ratione facilis doloribus voluptatum error obcaecati dignissimos
            maiores natus!
          </div>
        </div>
        <DetailAside />
      </div>
    </Hydrate>
  );
}
