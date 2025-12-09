export const siteConfig = {
  name: "이승희",
  title: "2022810055 HKNU student",
  description: "Portfolio website of 이승희",
  accentColor: "#1d4ed8",
  social: {
    email: "dltmdgml416@naver.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/dltmdgml416",
  },
  aboutMe:
    "한경대학교 컴퓨터공학과에 재학 중인 이승희라고 하고 현재 웹프로그래밍 실습을 통해 이 과제를 진행중에 있습니다.",
  skills: ["HTML", "CSS", "JavaScript", "Python", "Kakao Map API", "Bootstrap"],

  projects: [
  {
    name: "Air Pollution Inquiry Mashup",
    description: "공공 API를 활용하여 미세먼지 수치를 지도 기반으로 시각화한 웹 서비스",
    link: "https://ch23-5dust.netlify.app/",
    skills: ["JavaScript", "API", "Visualization"],
  },
  {
    name: "서울시 문화행사 알리미",
    description: "PWA 기반으로 서울시 문화행사 정보를 실시간으로 확인할 수 있는 서비스",
    link: "https://ch24-2culture.netlify.app/",
    skills: ["JavaScript", "PWA", "API"],
  },
  {
    name: "서울시 공공도서관 검색 Mashup",
    description: "Kakao Map API를 이용하여 공공도서관 위치 및 정보를 검색할 수 있는 지도 기반 서비스",
    link: "https://ch22-4lib.netlify.app/",
    skills: ["JavaScript", "Kakao Map API", "Mashup"],
  },
],

  education: [
    {
      school: "한경국립대학교",
      degree: "컴퓨터공학부 재학",
      dateRange: "2022 - 현재",
      achievements: [
        "웹 프로그래밍 및 데이터 처리 중심 학습",
        "여러 Mashup 프로젝트 수행",
      ],
    },
  ],
};
