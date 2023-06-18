const Aside = () => {
  return (
    <div className="flex flex-col gap-6 flex-1 border-l p-4">
      <div className="flex flex-col gap-2">
        <h1>인기 태그 Top10</h1>
        <div className="flex text-detail_s flex-wrap gap-2">
          {Array.from({ length: 10 }, (_, index) => (
            <span key={index} className="border border-sub_n rounded-full py-1 px-3 ">
              Next.js
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aside;
