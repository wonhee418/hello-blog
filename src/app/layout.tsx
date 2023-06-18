import './globals.css';
import { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { ReactNode } from 'react';
import { ReactQueryProvider, RecoilProvider } from '@/providers';
import Header from '@/components/Header';

const notoSansKR = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-notoSansKR',
});

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="">
        <RecoilProvider>
          <ReactQueryProvider>
            <Header />
            <main className="max-w-screen m-auto">{children}</main>
          </ReactQueryProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
