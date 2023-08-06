'use client';

import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/utils/reactQuery';
import ToastUIEditor from '@/components/ToastUIEditor';
import { KeyboardEvent, useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

export default function Write() {
  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState<Array<String>>([]);
  const [userData, setUserData] = useState(null);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        console.log(data);

        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleChange = (value: string) => {
    setMarkdown(value);
  };

  const addTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTagList([...tagList, tag]);
      setTag('');
    }
  };

  const getUserHandler = () => {
    // getAllUserData();
  };

  // async function createPost() {
  //   const post = await prisma.post.create({
  //     data: {
  //       title: title,
  //       content: markdown,
  //     },
  //   });

  //   console.log(post);

  //   const allPost = await prisma.post.findMany();
  //   console.log(allPost);
  // }

  return (
    <Hydrate state={dehydrate(getQueryClient())}>
      <div>
        <div className=" ml-auto mb-3 border rounded-xl py-2 px-4 max-w-[fit-content]" onClick={() => getUserHandler()}>
          등록하기
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className=" outline-none w-full border-b p-3"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className=" mb-3 ">
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
