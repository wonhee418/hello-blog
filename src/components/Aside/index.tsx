'use client';

import { useState } from 'react';
import DetailAside from './detailAside';
import StandardAside from './standardAside';

const Aside = () => {
  const [asideState, setAsideState] = useState<number>(0);
  return (
    <div className="flex flex-col gap-6 flex-1 border-l p-4">
      {asideState == 0 ? <StandardAside /> : <DetailAside />}
    </div>
  );
};

export default Aside;
