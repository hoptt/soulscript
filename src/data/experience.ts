export interface Achievement {
  title: string;
  problem: string;
  analyze: string;
  action: string;
  result: string;
}

export interface ExperienceData {
  companyName: string;
  role: string;
  description: string;
  duration: string;
  additionalInfo?: string;
  team?: string[];
  partners?: string[];
  contributions: { title: string; items: string[] }[];
  achievements?: Achievement[];
  tools: { name: string; description: string }[];
}

export const EXPERIENCE_DATA: ExperienceData[] = [
  {
    companyName: "마이크로프로텍트",
    role: "Frontend Developer",
    description: "보험비교 및 환급 서비스",
    duration: "2024.11 ~ 2025.11 (1년 1개월)",
    additionalInfo:
      "프로젝트들은 다국어(i18n)를 적용하여 다양한 언어에 대비해 개발했습니다.",
    team: ["총 인원 100명", "개발자 10명"],
    partners: ["KB국민은행", "하나은행", "삼성화재", "카카오페이", "삼쩜삼"],
    contributions: [
      {
        title: "B2B 솔루션",
        items: [
          "각 기업이 자사의 환급 서비스 운영 성과를 손쉽게 파악할 수 있도록 B2B 게스트 페이지를 개발하였습니다.",
          "수동으로 제공되던 데이터를 시스템화하여 고객사의 데이터 분석 효율을 높였습니다.",
        ],
      },
      {
        title: "B2C 플랫폼",
        items: [
          "디자인팀과 소통하며 사용자 중심의 UI/UX 설계를 기반으로 회사 및 환급 서비스 랜딩 페이지를 구축하였습니다.",
        ],
      },
      {
        title: "백오피스",
        items: [
          "환급 서비스의 전반적인 운영 및 데이터 관리를 위한 백오피스를 개발하였습니다.",
          "분산된 고객 데이터와 서비스 처리 현황을 중앙에서 관리하도록 시스템화하여, 내부 운영팀의 업무 생산성을 높이고 신속한 고객 응대를 가능하게 하였습니다.",
        ],
      },
      {
        title: "기술 경험 및 성능 개선",
        items: [
          "Nx 모노레포 환경에서 다수의 프로젝트가 공통 모듈을 공유하는 구조로 작업하며, 중복 코드 제거와 버전 일관성 유지 측면에서 폴리레포 대비 유지보수성이 크게 향상됨을 경험했습니다.",
          "사용자에게 일관된 인터페이스를 제공하기 위해 디자인 시스템 기반 공통 컴포넌트를 구축하고, Storybook을 지속 유지보수하며 디자인팀과의 협업을 개선했습니다.",
          "React 렌더링 최적화, Next.js 캐싱 전략, 이미지/폰트 로딩 개선 등 다양한 성능 향상 작업을 진행했습니다.",
        ],
      },
    ],
    achievements: [
      {
        title: "초기 로드 성능 최적화",
        problem:
          "랜딩 페이지에서 카카오맵 SDK가 초기 번들에 포함되어 FCP가 지연되고, 첫 화면 진입 시 체감 로딩이 느린 문제",
        analyze:
          "번들 구성과 렌더링 전략을 분석한 결과<br/>(1) 카카오맵 SDK가 초기 시점에 필요하지 않음에도 함께 로드되고 있었고<br/>(2) 정적 콘텐츠 위주의 랜딩이 SSR로 매 요청 렌더되어 TTFB가 불필요하게 커지고 있음을 확인",
        action:
          "카카오맵은 필요한 시점에 동적으로 헤더에 스크립트를 주입하는 lazy load 방식으로 전환해 초기 번들에서 제외하고, 랜딩 페이지는 SSR에서 SSG로 변경해 정적 HTML을 사전 생성하도록 개선",
        result:
          "초기 번들 크기가 감소하고 FCP 구간이 단축되어 페이지 진입 시 체감 로드 속도가 개선되었습니다.",
      },
      {
        title: "계층형 테이블 가상 스크롤 도입",
        problem:
          "CS/CX팀으로부터 특정 테이블의 기본 노출 건수를 30개에서 100개로 확대해 달라는 요청이 있었으나, 해당 테이블은 row 단위 상태 관리와 계층형(펼침/축소) 구조가 얽혀 있어 단순히 페이지 크기만 늘릴 경우 스크롤과 사용자 액션 과정에서 프레임 드롭과 딜레이가 발생",
        analyze:
          "원인을 분석한 결과<br/>(1) 100개 row에 펼쳐진 하위 row까지 합쳐 실제로 수백 개의 DOM이 동시에 렌더<br/>(2) row 상태가 상위 컴포넌트에 집중되어 있어 하나의 row 인터랙션이 전체 리렌더로 이어지는 구조임을 확인",
        action:
          "TanStack Table로 정렬.필터.확장.선택 등 테이블 로직을 분리<br/>TanStack Virtual을 적용해 뷰포트 내에 보이는 row만 렌더링되도록 가상 스크롤을 구현<br/> 계층형 데이터는 펼침 상태를 포함해 flat 구조로 정규화한 뒤 가상화 대상에 포함시켜 불필요한 리렌더를 차단",
        result:
          "기본 노출 건수를 100개로 확대한 이후에도 스크롤과 펼침/클릭 인터랙션이 끊김 없이 동작하게 되었으며, CS/CX팀이 요청한 다건 동시 확인 워크플로우를 기존 업무 속도로 지원할 수 있게 되었습니다.",
      },
    ],
    tools: [
      { name: "Figma", description: "디자인" },
      { name: "Slack", description: "팀원 간 의사소통" },
      { name: "Notion", description: "문서 관리" },
      { name: "Jira", description: "이슈 관리" },
      { name: "Github", description: "형상 관리" },
      { name: "Storybook", description: "컴포넌트 관리" },
    ],
  },
  {
    companyName: "주식회사 멋들어진",
    role: "Frontend Developer",
    description: "온라인 패션 플랫폼",
    duration: "2021.12 ~ 2024.01 (2년 2개월)",
    additionalInfo:
      "폴리레포 환경에서 웹 및 앱 웹뷰 형태로 서비스를 제공하고, Storybook을 활용하여 효율적으로 컴포넌트를 관리했습니다.",
    team: ["총 인원 10명", "개발자 3명"],
    partners: [],
    contributions: [
      {
        title: "B2B 솔루션",
        items: [
          "기업 고객을 대상으로 원단 및 부자재의 통합 관리가 가능한 B2B 게스트 페이지를 구축하였습니다.",
          "이를 통해 고객사가 핵심 자재를 실시간으로 파악하고 관리할 수 있는 시스템을 제공하였습니다.",
        ],
      },
      {
        title: "B2C 플랫폼",
        items: [
          "사용자가 선택한 원단/부자재 조합을 AI 이미지로 시각화하고, 이를 즉시 주문으로 연결하는 B2C 커머스 시스템을 개발하였습니다.",
          "주문, 결제, 배송 정보 연동까지의 전 과정을 개발하였습니다.",
        ],
      },
      {
        title: "백오피스",
        items: [
          "체계적인 데이터 관리를 위해 직관적인 UI/UX를 적용한 백오피스를 구축하였습니다.",
          "다양한 데이터 관리 기능을 통합 제공함으로써, 복잡한 데이터를 손쉽게 추적하고 분석할 수 있는 환경을 마련하였습니다.",
        ],
      },
      {
        title: "기술 경험 및 성능 개선",
        items: [
          "B2C 커머스에서 좋아요처럼 사용자가 반복적으로 수행하는 액션은 네트워크 응답을 기다리는 순간 체감 반응성이 떨어져 이탈로 이어질 수 있다고 생각하였고, 이를 개선하기 위해 TanStack Query의 onMutate에서 쿼리 캐시를 선반영하고, onError에서 이전 스냅샷으로 롤백, onSettled에서 invalidateQueries로 서버 상태와 재동기화하는 낙관적 업데이트 패턴을 도입하여 UX 개선을 하였습니다.",
        ],
      },
    ],
    tools: [
      { name: "Miro", description: "와이어프레임 및 아이디어 공유" },
      { name: "Microsoft Teams", description: "팀원 간 의사소통" },
      { name: "Github", description: "형상 관리" },
      { name: "Storybook", description: "컴포넌트 관리" },
    ],
  },
];
