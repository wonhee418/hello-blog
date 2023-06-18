import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/utils/reactQuery';

export default function Detail() {
  return (
    <Hydrate state={dehydrate(getQueryClient())}>
      <div>게시글 상세</div>
    </Hydrate>
  );
}
