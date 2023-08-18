const WorkExperienceItem = () => {
  const experineceItem = [
    {
      company: '(주)아마고 / Amago',
      companyInfo: '마케팅 Tech 솔루션 서비스 스타트업',
      position: '프론트엔드 개발자',
      positionEng: '(FrontEnd Developer)',
      duration: '2023.05 ~ 재직중',
      project: [
        {
          service: '아싸뷰 (Assaview)',
          KeyResponsibilities: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et incidunt, autem obcaecati quam ducimus consectetur aperiam aliquam, expedita nulla iste deleniti assumenda maxime repellendus vel, ad ut illo provident optio!',
            '업무 내용2',
            '업무 내용3',
            '업무 내용4',
          ],
        },
      ],
    },
    {
      company: '이너뷰 (Innerview)',
      companyInfo: '쇼핑몰 사이트 제작, IT 기획, ERP 서비스 구축 전문 웹에이전시 스타트업',
      position: '퍼블리셔',
      positionEng: '(Publisher)',
      duration: '2020.08 ~ 2021.04',
      project: [
        {
          service: '',
          KeyResponsibilities: [
            'cafe24 플랫폼을 이용하여 쇼핑몰 런칭 및 리뉴얼, 유지 보수하는 작업을 진행하며 ajax를 사용하여 카페24 API로 서버 통신 작업 진행',
            'cafe24에서 제공하지 않는 모듈 또는 기능들을 구현하기 위해 사내 백엔드와 협업 진행',
            '사내 디자인 작업이 들어간 프로젝트의 경우 디자이너와 협업 진행',
            '각종 기업 홈페이지 리뉴얼, 관리자 페이지 제작, 이벤트 페이지 제작, 임직원몰(폐쇄몰) 제작',
            '월간 EDM (Electronic Direct Mail) 제작',
            '모든 프로젝트 PC 및 Mobile 작업 및 크로스 브라우징 (IE 10, 크롬, 사파리, 파이어폭스) 작업 진행',
          ],
        },
      ],
    },
  ];

  return (
    <div className="pt-8">
      {experineceItem.map((item) => {
        return (
          <>
            <div className="pb-4 border-b flex flex-col gap-2">
              <h2 className=" text-body02">{item.company}</h2>
              <h3>{item.companyInfo}</h3>
            </div>
            <div className="flex py-5">
              <div className="flex-1">
                <p className="text-body pb-1 font-medium">{item.position}</p>
                <p className=" text-detail_s">{item.positionEng}</p>
                <p className="pt-2">{item.duration}</p>
              </div>
              <div className="flex-2">
                {item.project.map((item) => {
                  return (
                    <>
                      <h4 className=" text-body02 pb-2">{item.service}</h4>
                      {item.KeyResponsibilities.map((item) => {
                        return <div className="list_style">{item}</div>;
                      })}
                    </>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default WorkExperienceItem;
