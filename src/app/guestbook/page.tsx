import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';

export default function GuestBook() {
  return <Hydrate state={dehydrate(getQueryClient())}>방명록</Hydrate>;
}
