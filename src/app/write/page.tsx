'use client';

import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { getQueryClient } from '@/utils/reactQuery';
import Editor from '@toast-ui/editor';
import ToastUIEditor from '@/components/ToastUIEditor';
import { useState } from 'react';

export default function Write() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (value: string) => {
    setMarkdown(value);
  };

  return (
    <Hydrate state={dehydrate(getQueryClient())}>
      <div>
        <div>
          <input type="text" placeholder="제목을 입력하세요" />
        </div>
        <div>
          <input type="text" placeholder="태그를 입력하세요" />
        </div>
        <ToastUIEditor initialValue="" onChange={handleChange} />
      </div>
    </Hydrate>
  );
}
