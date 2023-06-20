import Link from 'next/link';

const DetailAside = () => {
  return (
    <div className="flex flex-col gap-6 flex-1 border-l p-4">
      <Link href="#headingline01">headingline01</Link>
      <Link href="#headingline02">headingline02</Link>
    </div>
  );
};

export default DetailAside;
