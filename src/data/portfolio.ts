export interface DetailSection {
  title: string;
  content: string;
  image?: string;
}

export interface PortfolioItem {
  type: string;
  title: string;
  description: string;
  techStack: string;
  websiteLink: string;
  githubLink: string;
  images: string[];
  sliderColor: string;
  diagramImage?: string;
  detail?: {
    sections: DetailSection[];
  };
}

export const portfolioData: PortfolioItem[] = [
  {
    type: "3D SNS 플랫폼",
    title: "Chicks Fly",
    description: `개인 프로젝트로 제작한 3D 멀티플레이 SNS 플랫폼입니다.\nReact 와 Vite 를 사용하여 빠른 테스트 및 개발을 진행했으며,\nThree.js 와 React-three-fiber 를 사용하여 3D 그래픽을 구현했습니다.\nSocket.io 를 사용하여 실시간 동기화를 구현했으며,\nPrisma와 Supabase를 통해 데이터를 관리했습니다.`,
    techStack:
      "React, Vite, TypeScript, Three.js, R3F, Socket.io, Prisma, Supabase..",
    websiteLink: "https://chicksfly.com",
    githubLink: "https://github.com/hoptt/chicks",
    images: [
      "/assets/images/picture1.webp",
      "/assets/images/picture2.webp",
      "/assets/images/picture3.webp",
    ],
    sliderColor: "#97cfe8",
  },
  {
    type: "숙박 예약 플랫폼",
    title: "Resort BnB",
    description: `개인 프로젝트로 제작한 간단한 숙소 등록 및 예약 플랫폼입니다.\nReact와 Next.js를 사용하여 동적이고 반응성 높은 UI를 구현했으며,\nPrisma와 Supabase를 통해 데이터를 관리했습니다.`,
    techStack: "React, Next.js, TypeScript, TailwindCSS, Prisma, Supabase..",
    websiteLink: "https://resortbnb.vercel.app",
    githubLink: "https://github.com/hoptt/resortbnb",
    images: [
      "/assets/images/resortbnb3.webp",
      "/assets/images/resortbnb4.webp",
      "/assets/images/resortbnb5.webp",
    ],
    sliderColor: "#fda4af",
  },
  {
    type: "아이폰 PRO 클론코딩",
    title: "iPhone 15 Pro MAX",
    description: `iPhone 15 Pro Max 를 클론코딩한 프로젝트입니다.\niPhone Pro 15 사이트의 디자인적 요소와 인터랙티브한 요소들을 배워보고자 클론 코딩을 진행하였습니다.`,
    techStack:
      "React, Next.js, TypeScript, TailwindCSS, Three.js, gsap, Framer-motion..",
    websiteLink: "https://i-phone-15pro-clone.vercel.app/",
    githubLink: "https://github.com/hoptt/iPhone-15pro-clone",
    images: [
      "/assets/images/iphone1.webp",
      "/assets/images/iphone2.webp",
      "/assets/images/iphone3.webp",
    ],
    sliderColor: "#6b7280",
  },
  {
    type: "날씨 플랫폼",
    title: "DueCast",
    description: `AI 를 활용하여 제작한 날씨 플랫폼입니다.\nClaude Code로 PRD를 수립하고 MVP를 신속히 개발했으며\n로드맵 기반으로 작업을 단계화한 뒤\nShrimp Task Manager 를 활용해 체계적으로 실행하여 AI 의 코드 완성도를 향상시켰습니다.`,
    techStack:
      "Claude Code, React, Nextjs, TypeScript, TailwindCSS, Framer-motion, OpenWeatherMap API..",
    websiteLink: "https://www.duecast.com",
    githubLink: "https://github.com/hoptt/duecast_v2",
    images: ["/assets/images/duecast1.webp","/assets/images/duecast1_flutter.webp","/assets/images/duecast2.webp","/assets/images/duecast2_flutter.webp"],
    sliderColor: "#14b8a6",
    diagramImage: "/assets/images/duecast_diagram.webp",
    detail: {
      sections: [
        {
          title: "프로젝트 개요",
          content: `DueCast는 OpenWeatherMap API를 기반으로 한 AI 활용 날씨 플랫폼입니다.\nClaude Code를 통해 PRD를 작성하고, Shrimp Task Manager로 작업을 체계적으로 분류하여 개발 효율을 극대화했습니다.`,
        },
        {
          title: "개발 프로세스",
          content: `1. PRD 작성 → Claude Code로 요구사항 정의 및 기능 명세\n2. 로드맵 수립 → 기능별 우선순위 및 단계 구성\n3. Task 분류 → Shrimp Task Manager로 세부 작업 체계화\n4. 반복 개발 → AI 코드 생성 → 검토(Playwright MCP) → 수정 사이클`,
          // image: "/assets/images/duecast-flow.webp",  // 실제 이미지 경로로 교체
        },
        {
          title: "아키텍처",
          content: `클라이언트: Next.js 14 App Router + React 18\n스타일링: Tailwind CSS + Framer Motion\nAPI: OpenWeatherMap API (현재 날씨, 예보)\n배포: Vercel (자동 CI/CD)`,
          // image: "/assets/images/duecast-architecture.webp",  // 실제 이미지 경로로 교체
        },
        {
          title: "주요 기능",
          content: `• 현재 위치 기반 실시간 날씨 조회\n• 시간별 / 주간 날씨 예보\n• 도시 검색 기능\n• 날씨에 따른 동적 UI 변화\n• 반응형 디자인 (모바일 / 데스크탑)`,
        },
      ],
    },
  },
];
