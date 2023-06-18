import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';

export default function Mypage() {
  return <Hydrate state={dehydrate(getQueryClient())}>계정 설정</Hydrate>;
}
