'use client';

import NavBar from './NavBar';
import UserMenu from './UserMenu';
import GuestMenu from './GuestMenu';
import { useState } from 'react';

const Header = () => {
  const [authState, setAuthState] = useState(false);

  return (
    <nav className="flex justify-between py-6  px-6 shadow-card">
      <div className="flex-1">Hello</div>
      <NavBar />
      <div className="flex gap-4 flex-1 justify-end">{authState ? <UserMenu /> : <GuestMenu />}</div>
    </nav>
  );
};

export default Header;
