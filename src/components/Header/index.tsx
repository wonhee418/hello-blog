const Header = () => {
  return (
    <div className=" border-b border-b-primaryColor flex justify-between py-6  px-6 bg-white">
      <div className="flex-1">FBB</div>
      <div className="flex flex-1 items-center justify-center gap-10">
        <span>Feed</span>
        <span>favorite</span>
        <span>Popular</span>
      </div>
      <div className="flex gap-4 flex-1 justify-end">
        <div>알림</div>
        <div>프로필</div>
        <button>write</button>
      </div>
    </div>
  );
};

export default Header;
