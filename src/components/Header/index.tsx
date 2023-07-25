'use client';

import NavBar from './NavBar';
import UserMenu from './UserMenu';
import GuestMenu from './GuestMenu';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/images/logo.png';

const Header = () => {
  const [authState, setAuthState] = useState(false);

  return (
    <nav className="flex justify-between py-8 max-w-screen mr-auto ml-auto">
      <div className="flex-1">
        <Image src={Logo} alt="logo_img" width={96} />
      </div>
      <NavBar />
      <div className="flex gap-4 flex-1 justify-end">{authState ? <UserMenu /> : <GuestMenu />}</div>
    </nav>
  );
};

export default Header;
