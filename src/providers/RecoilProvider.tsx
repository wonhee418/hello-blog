'use client';

import { type FC, type PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

const RecoilProvider: FC<PropsWithChildren> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
