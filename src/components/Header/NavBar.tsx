import GNB_MENU from '@/constants/common';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="flex flex-1 items-center justify-center gap-10">
      {GNB_MENU.map((menu, idx) => (
        <Link href={menu.pathname}>{menu.label}</Link>
      ))}
    </div>
  );
};

export default NavBar;
