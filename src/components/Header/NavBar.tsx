import GNB_MENU from '@/constants/common';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="flex flex-2 items-center justify-center gap-4">
      {GNB_MENU.map((menu, idx) => (
        <Link href={menu.pathname} className="w-full">
          {menu.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
