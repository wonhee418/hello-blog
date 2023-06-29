const StandardAside = () => {
  return (
    <div className="flex flex-col gap-6 flex-1 border-l p-4">
      <div className="flex flex-col gap-2">
        <h1>인기 게시물 Top5</h1>
        <div className="flex text-detail_s flex-wrap gap-4">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className="shadow-card rounded-full py-1 px-3 ">
              가나다라
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandardAside;
