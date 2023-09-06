import Link from 'next/link';
import profile from '@/images/vercel.svg';
import Image from 'next/image';
import WorkExperienceItem from '@/components/Resume/WorkExperienceItem';

type info = {
  heading: string;
  desc: string;
  href?: string;
};

export default function Resume() {
  const info: info[] = [
    { heading: '🪪 Name', desc: '김원희 / Wonhee Kim' },
    { heading: '📬 Email', desc: 'cheeky4@naver.com' },
    { heading: '📞 Phone', desc: '010-9102-3802' },
    { heading: '😺 Github', desc: 'wonhee418', href: "'https://github.com/wonhee418" },
  ];

  const stack = {
    language: ['Javascript', 'Typescript'],
    style: ['TailwindCSS'],
    libraryAndFramework: ['React', 'Next.js', 'Recoil', 'React-query', 'jQuery'],
  };
  const edu = [
    {
      subject: '원티드 프리온보딩 챌린지 1월 - CRUD w React-Query',
      date: '2023.01 ~ 2023.01',
    },
    {
      subject: '항해 99 부트캠프 수료',
      date: '2022.03 ~ 2022.06',
      desc: '백엔드 교육과정 수료',
    },
    {
      subject: '이젠 아카데미 컴퓨터 학원',
      date: '2019.12 ~ 2020.05',
      desc: '스마트기기 UI/UX 웹디자인(웹퍼블리셔) 교육과정 수료',
    },
    {
      subject: '전곡고등학교 졸업',
      date: '2012.03 ~ 2015.02',
    },
  ];

  const certificate = [
    {
      subject: '웹디자인기능사 - 한국산업인력공단',
      date: '2020. 04',
    },
    {
      subject: '코딩지도사 - 한국사이버진흥원',
      date: '2019. 07',
    },
  ];

  return (
    <div className="flex py-12 gap-20 px-5">
      <div className="flex-1 flex self-start flex-col max-w-[260px] w-full sticky top-10">
        <div className="flex flex-col gap-10 p-8 shadow-card rounded-2xl">
          <div className=" rounded-full overflow-hidden">
            <Image src={profile} alt="#" className=" aspect-square" />
          </div>
          <div className="flex flex-col gap-3">
            {info.map((info) => {
              return (
                <div className="flex flex-col">
                  <span className=" font-bold">{info.heading}</span>
                  {info.href ? <Link href={info.href}>{info.desc}</Link> : <span>{info.desc}</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-3 shadow-card rounded-2xl p-7">
        <div className=" flex flex-col gap-14">
          <div className="flex flex-col gap-1">
            <h1 className=" text-heading font-bold">FrontEnd Developer</h1>
            <div>현재에 만족하지 않고 더 나은 버전으로 발전하는 프론트엔드 개발자입니다.</div>
          </div>
          <div>
            <h2 className="text-heading_sub border-b-2 pb-2">🤔 Who is Wonhee?</h2>
            <div className="pt-2 flex flex-col gap-5">
              <p>
                아직 배우고 싶은 것과 궁금한 것이 많으며 목표를 이루기 위해 끊임없이 성장할 프론트엔드 개발자
                김원희입니다.
              </p>
              <p>
                웹 에이전시에서 퍼블리셔로 근무하면서{' '}
                <span className="accent_text">프로젝트 리뉴얼 혹은 런칭, 유지 보수</span> 경험이 있으며{' '}
                <span className="accent_text">디자이너와 백엔드 개발자와의 소통</span>으로 의견을 조율하며 커뮤니케이션
                능력과 협업 능력을 키웠습니다.
              </p>
              <p>
                프로젝트를 진행하면서 <span className="accent_text">UI / UX의 중요성</span>을 피부로 느끼게 되었고
                프론트엔드는 <span className="accent_text">서비스의 퀄리티를 좌지우지</span>한다고 생각했습니다.
                <span className="accent_text">사용자에게 항상 안전하고 쾌적한 환경을 제공</span>하기 위해{' '}
                <span className="accent_text">반복되는 코드를 줄이며 파일과 코드를 최적화</span>하는 등 더 효율적인
                방법을 항상 고민하고 노력하는 개발자입니다.
              </p>
              <p>
                앞으로도 새로운 경험과 기술들을 익혀가며 보다 나은 사용성과 안정성을 추구하며 개발할 것이며 스스로 정한
                로드맵을 밟아가며 남들과 다르더라도 탄탄한 개발자가 되기 위해 노력할 것입니다.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-heading_sub border-b-2 pb-2">🛠️ Tech Stack - 기술 스택</h2>
            <div className="flex flex-col pt-8">
              <div className=" flex border-t items-center">
                <div className="flex-1 border-r-2 py-[16px] px-[10px] border-gray-100">Stack</div>
                <div className="flex-2 py-[16px] px-[10px]">Name</div>
              </div>
              <div className=" flex border-t items-center">
                <div className="flex-1 border-r-2 py-[16px] px-[10px] border-gray-100">Language</div>
                <div className="flex-2 flex gap-3 px-[10px]">
                  {stack.language.map((item) => {
                    return (
                      <span className="p-[8px] text-detail_s bg-primary text-white rounded-lg leading-none">
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className=" flex border-t items-center">
                <div className="flex-1 border-r-2 py-[16px] px-[10px] border-gray-100 p-2">Style</div>
                <div className="flex-2 flex gap-3 px-[10px]">
                  {stack.style.map((item) => {
                    return (
                      <span className="p-[8px] text-detail_s bg-primary text-white rounded-lg leading-none">
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className=" flex border-t items-center">
                <div className="flex-1 border-r-2 py-[16px] px-[10px] border-gray-100 p-2">Library & Framework</div>
                <div className="flex-2 flex gap-3 py-[10px] px-[10px] flex-wrap">
                  {stack.libraryAndFramework.map((item) => {
                    return (
                      <span className="p-[8px] text-detail_s bg-primary text-white rounded-lg leading-none">
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-heading_sub border-b-2 pb-2">📂 Projects - 프로젝트</h2>
          </div>
          <div>
            <h2 className="text-heading_sub border-b-2 pb-2">📋 경력 - Work Experience</h2>
            <WorkExperienceItem />
          </div>
          <div>
            <h2 className="text-heading_sub border-b-2 pb-2">🎓 교육 - Education</h2>
            <div className="pt-8">
              {edu.map((item) => {
                return (
                  <div className="pb-6 last:pb-0">
                    <h3 className="text-body02">{item.subject}</h3>
                    <p className=" text-detail_s py-1">{item.date}</p>
                    {item.desc && <div className="list_style">{item.desc}</div>}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-heading_sub border-b-2 pb-2">💳 자격증(Certificate)</h2>
            <div className="pt-8">
              {certificate.map((item) => {
                return (
                  <div className="pb-6 last-of-type:pb-0">
                    <p className=" text-body02 pb-1">{item.subject}</p>
                    <div className="list_style">{item.date}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-heading_sub border-b-2 pb-2">🪖 병역(Military)</h2>
            <div className="pt-8">
              <p className=" text-body02 pb-1 ">대한민국 육군 병장 만기 전역</p>
              <div className="list_style">2016.05 ~ 2018.02</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
