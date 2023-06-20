'use client';

import { useState } from 'react';
import DetailAside from './DetailAside';
import StandardAside from './StandardAside';

// TODO: side 영역 효율적으로 사용할 수 있는 방법 생각해서 수정하기
const Aside = () => {
  const [asideState, setAsideState] = useState<number>(0);
  return (
    <div className="flex flex-col gap-6 flex-1 border-l p-4">
      {asideState == 0 ? <StandardAside /> : <DetailAside />}
    </div>
  );
};

export default Aside;
