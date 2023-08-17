'use client';

import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/utils/reactQuery';
import ToastUIEditor from '@/components/ToastUIEditor';
import { KeyboardEvent, useEffect, useState } from 'react';

export default function Write() {
  const [markdown, setMarkdown] = useState('');
  const [contentTitle, setContentTitle] = useState('');
  const [contentThumbnail, setContentThumbnail] = useState('');
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState<Array<String>>([]);

  const handleChange = (value: string) => {
    setMarkdown(value);
  };

  const createPostHandler = async () => {
    const title = contentTitle;
    const content = markdown;
    const thumbnail = contentThumbnail;
    const contentData = {
      title,
      content,
      thumbnail,
    };
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contentData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Hydrate state={dehydrate(getQueryClient())}>
      <div>
        <div
          className=" ml-auto mb-3 border rounded-xl py-2 px-4 max-w-[fit-content]"
          onClick={() => createPostHandler()}
        >
          등록하기
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className=" outline-none w-full border-b p-3"
            value={contentTitle}
            onChange={(e) => {
              setContentTitle(e.target.value);
            }}
          />
        </div>
        {/* <div className=" mb-3 ">
          <input
            type="text"
            placeholder="태그를 입력하세요"
            className=" outline-none w-full border-b p-3"
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
            onKeyDown={(e) => {
              addTag(e);
            }}
          />
        </div> */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="사용할 썸네일 링크를 입력하세요"
            className=" outline-none w-full border-b p-3"
            value={contentThumbnail}
            onChange={(e) => {
              setContentThumbnail(e.target.value);
            }}
          />
        </div>
        <div className="flex mb-3 gap-3">
          {tagList.map((item) => {
            return <span className="border rounded-xl p-2">{item}</span>;
          })}
        </div>
        <ToastUIEditor initialValue="" onChange={handleChange} />
      </div>
    </Hydrate>
  );
}
