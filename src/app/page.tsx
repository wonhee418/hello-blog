import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';
import PostItem from '@/components/PostItem';
import StandardAside from '@/components/Aside/StandardAside';

export default async function Main() {
  return (
    <>
      <Hydrate state={dehydrate(getQueryClient())}>홈</Hydrate>
    </>
  );
}
