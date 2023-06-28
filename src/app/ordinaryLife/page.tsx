import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';

export default function OrdinaryLife() {
  return <Hydrate state={dehydrate(getQueryClient())}>일상 게시물</Hydrate>;
}
