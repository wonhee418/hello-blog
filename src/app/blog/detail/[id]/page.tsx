'use client';

import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import { useGetDetailPost } from '@/hooks/queries';

export default function Detail({ params: { id } }: { params: { id: string } }) {
  const { data: post, status, error } = useGetDetailPost(id);
  return (
    <Hydrate state={dehydrate(getQueryClient())}>
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2">
        <div className="w-full h-[50vh] absolute bg-black opacity-60"> </div>
        <div className="w-full h-[50vh]">
          <img
            src={
              post?.thumbnail
                ? post.thumbnail
                : 'https://velog.velcdn.com/images/gene028/post/231f50d1-9a85-4068-b616-aa031597a73d/image.png'
            }
            alt="thumbnail"
            className=" object-cover w-full h-[50vh]"
          />
        </div>
        <h1 className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-heading pb-4 text-white">
          {post?.title}
        </h1>
      </div>
      <div className="flex max-w-screen m-auto h-[2000px]">
        <div className="flex flex-3 flex-col gap-6 pt-6">{post && <Viewer initialValue={post.content} />}</div>
      </div>
    </Hydrate>
  );
}
