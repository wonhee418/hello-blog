import Link from 'next/link';

const GuestMenu = () => {
  return (
    <>
      <Link href={'/signIn'}>Sign in</Link>
      <Link href={'/signUp'}>Sign up</Link>
    </>
  );
};

export default GuestMenu;
