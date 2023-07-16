import GNB_MENU from '@/constants/common';
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const getPathName = (item: string) => {
  switch (item) {
    case 'Home':
      return '/';
    case 'Blog':
      return '/blog';
    case 'Dev Posts':
      return '/devPosts';
    case 'Ordinary Life':
      return '/ordinaryLife';
    case 'Resume':
      return '/resume';
    case 'GuestBook':
      return '/guestbook';
    default:
      return '/';
  }
};

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex flex-1 items-center justify-center gap-2 text-center">
      {GNB_MENU.map((menu, idx) => (
        <Link
          href={menu.pathname}
          className={classNames('w-full', pathname == getPathName(menu.label) ? 'accent_text_b' : '')}
        >
          {menu.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
