import type { Locale } from "@/i18n/config";

export type ResumeRole = {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type ResumeCompany = {
  name: string;
  period: string;
  role: string;
  note?: string;
  roles: ResumeRole[];
};

export type ResumeContent = {
  lead: string;
  labels: {
    summary: string;
    strengths: string;
    experience: string;
    sideProjects: string;
    skills: string;
    education: string;
    contact: string;
  };
  summary: string[];
  strengths: { label: string; text: string }[];
  experience: ResumeCompany[];
  sideProjects: ResumeRole[];
  skills: { label: string; items: string }[];
  education: { period: string; text: string }[];
};

const ko: ResumeContent = {
  lead: "5년차 Node.js·TypeScript 백엔드 개발자입니다. 펫테크 서비스의 백엔드를 설계하고 운영해 왔습니다.",
  labels: {
    summary: "요약",
    strengths: "핵심 역량",
    experience: "경력",
    sideProjects: "사이드 프로젝트",
    skills: "기술 스택",
    education: "학력·교육",
    contact: "연락처",
  },
  summary: [
    "펄송과 온힐에서 펫테크 서비스 3개의 백엔드를 개발·운영했고, 그중 2개는 처음부터 설계해 구축했습니다.",
    "정기구독·인앱결제·정산 같은 결제 도메인, IoT 센서 데이터 처리, AI 상담 기능을 구현했습니다. 배포 파이프라인과 AWS 인프라도 직접 다루며, IT팀(7명) 리드로 AWS 월 비용을 약 24% 줄였습니다.",
    "개발자로 전향하기 전에는 GS건설에서 6년간 플랜트 기계설계 엔지니어로 일했습니다.",
  ],
  strengths: [
    {
      label: "결제·구독",
      text: "PortOne 빌링키 정기결제, Apple·Google 인앱결제 서버 검증과 웹훅, 주문 상태 머신, 월 정산",
    },
    {
      label: "인증·보안",
      text: "소셜 로그인 4종(Apple·Google·LINE·Kakao), Redis 기반 토큰 즉시 무효화, Rate Limiting",
    },
    {
      label: "데이터 처리",
      text: "IoT 센서 로그 분류, 통계 기반 건강 지표(선형회귀, 이상치 필터, k-means), 쿼리 최적화",
    },
    {
      label: "실시간·비동기",
      text: "WebSocket, SSE, Redis Pub/Sub, BullMQ, 배치 스케줄링",
    },
    {
      label: "인프라",
      text: "Docker, GitHub Actions, AWS ECS/EKS 배포, Terraform·Argo CD, AWS 비용 최적화",
    },
    {
      label: "AI 에이전트",
      text: "tool calling 기반 상담 에이전트 구현, Claude Code로 개발·클러스터 점검·장애 원인 분석",
    },
  ],
  experience: [
    {
      name: "온힐",
      period: "2024.01 – 현재",
      role: "백엔드 개발자",
      note: "펄송을 인수한 회사입니다. 온힐 서비스와 계열사 인프라를 맡으면서 펄송 서비스 운영도 계속하고 있습니다.",
      roles: [
        {
          title: "동물병원 처방 커머스 플랫폼",
          period: "2023.09 – 현재",
          summary:
            "동물병원이 처방한 제품을 보호자가 구매·구독하고, 병원·판매자에게 매출을 정산하는 B2B2C 플랫폼입니다. 펄송 재직 중 착수해 이어서 맡았습니다.",
          bullets: [
            "NestJS + Fastify API 서버를 처음부터 설계해 9개월간 혼자 구축했습니다. 엔드포인트 172개, 테이블 53개로 런칭 기반을 만들었고 현재 283개·77개로 늘었습니다.",
            "앱 사용자·병원 관리자·운영자·판매자, 4종 클라이언트별 JWT 전략과 역할 가드를 한 세트로 묶는 인증·권한 컨벤션을 설계했습니다.",
            "PortOne 빌링키 정기구독(회차 계산, 부분취소, 결제 웹훅)과 주문 취소·반품·환불 상태 머신을 구현했습니다.",
            "매월 1일 크론으로 병원·판매자 매출을 집계하는 월 정산 시스템을 설계하고, 여러 테이블 쓰기는 트랜잭션으로 원자성을 보장했습니다.",
            "Redis에 저장한 토큰 발급 시각을 비교해 로그아웃·비밀번호 변경 시 전 세션을 즉시 무효화했습니다.",
            "병원 관리자 웹과 운영 어드민 웹을 Next.js 14 App Router로 초기 설계했습니다. 쿼리 훅·공용 DataTable 컨벤션을 세워 이후 합류한 팀원들이 같은 패턴으로 확장했습니다.",
          ],
        },
        {
          title: "반려동물 소변검사 앱 백엔드 (일본)",
          period: "2024.11 – 2026.11",
          summary:
            "소변검사 스틱을 촬영하면 AI 서버가 8개 항목을 분석하는 앱입니다. 백엔드 리드로 전체 커밋의 84%를 작성했습니다.",
          bullets: [
            "BullMQ 비동기 이미지 분석 파이프라인을 만들었습니다. S3 Presigned URL로 업로드하고, 분석은 큐로 넘기며, 결과는 Redis Pub/Sub으로 응답에 연결합니다.",
            "Redis Pub/Sub과 SSE로 이메일 인증 결과를 앱에 실시간 전달하며, 다중 인스턴스에서도 폴링 없이 동작합니다.",
            "Apple·Google·LINE 소셜 로그인과 Access/Refresh JWT, Redis 기반 세션 무효화를 구현했습니다.",
            "prod는 ECS 롤링 배포, dev는 SSH 컨테이너 교체로 GitHub Actions 파이프라인을 분리했습니다.",
          ],
        },
        {
          title: "푸드나무(온힐 계열사) IT팀 팀장",
          period: "2025.09 – 2026.09",
          summary:
            "식품 이커머스를 운영하는 계열사에서 7명인 IT팀을 이끌며 서비스 인프라 운영과 IT 비용 관리를 총괄했습니다.",
          bullets: [
            "AWS 월 비용을 약 24% 줄였습니다. 중복 쿼리에 캐시를 도입한 뒤 RDS를 축소했고, 유휴 리소스 정리, RI·Savings Plan 재설계, AWS 파트너사 변경을 진행했습니다.",
            "표준 지원이 종료된 RDS(PostgreSQL·MySQL) 엔진 버전을 Blue/Green 배포로 업그레이드했습니다.",
            "국내·해외 채널의 AWS 인프라와 WAF·VPN·CDN을 운영하고, 10여 개 IT 비용 항목의 지출결의와 계약 검토를 맡았습니다.",
          ],
        },
        {
          title: "계열 서비스 EKS 인프라 운영 지원 (DevOps)",
          period: "2026.09 – 현재",
          summary:
            "AWS EKS GitOps 인프라(Terraform·Terramate, Argo CD, Karpenter)를 운영하고 있습니다.",
          bullets: [
            "운영 노드 AMI를 커널·containerd 보안 취약점 대응 버전으로 무중단 교체했습니다. NodePool별로 Disruption budget 게이트를 두어 순서대로 롤아웃했습니다.",
            "Terraform 드리프트를 환경·모듈별로 정리했습니다. EKS 애드온 버전을 명시 고정하고, 콘솔에서 바뀐 IAM 정책을 코드 기준으로 되돌렸습니다.",
            "Karpenter 노드 교체가 막히는 원인(topologySpread와 CPU limit의 상호작용)을 소스 코드에서 확인하고 대응 절차를 정리했습니다.",
            "Claude Code로 클러스터를 매일 점검하고 반복 알림의 원인을 추적합니다. 에이전트가 낸 PR은 사람이 리뷰한 뒤 머지하도록 팀 규칙을 바꿨습니다.",
          ],
        },
      ],
    },
    {
      name: "펄송",
      period: "2021.09 – 2023.12",
      role: "백엔드 개발자",
      roles: [
        {
          title: "펫테크 플랫폼 백엔드 (앱·IoT·배치·어드민 서버)",
          period: "2021.09 – 현재",
          summary:
            "스마트 고양이 화장실과 웨어러블 데이터로 건강 모니터링, 정기구독 커머스, AI 상담을 제공하는 서비스입니다. 3인 팀의 핵심 기여자로 시작해 2024년부터 서버를 혼자 운영하고 있습니다.",
          bullets: [
            "배변 분류 파이프라인: 배치에서 k-means로 기기별 소변·대변 중심점을 학습하고, IoT 서버에서 Z-score로 배변 유형을 실시간 판별하며 다묘 가정의 고양이를 식별합니다.",
            "건강 지표 배치: 가정마다 현지 자정에 도는 점수 배치에 14일 체중 선형회귀, 2σ 이상치 필터, 연령대별 가중 점수 모델을 구현했습니다.",
            "정기구독·커머스: 스토어 도메인을 구현·고도화하고, 빌링키 자동결제 배치(실패 재시도, 영업일 출고일)를 만들었습니다.",
            "인앱결제: App Store Server API와 Google Play API로 영수증을 검증하고 두 스토어의 서버 알림을 처리합니다.",
            "AI 수의사 채팅: 스트리밍 응답과 tool calling으로 건강 데이터 조회·웹 검색을 연결한 에이전트 루프, 포인트 과금을 구현했습니다.",
            "푸시 알림 V2: 알림 95종을 3개 언어·말투 모드별 템플릿으로 나누고 야간 수신 설정과 타임존을 반영했습니다.",
            "IoT 로그: 슬로우 쿼리를 개선해 로그 수신 API 지연을 해소했고, Redis 키로 펌웨어 재전송 중복을 막았습니다.",
            "사내 어드민 서버: NestJS·Prisma로 DB 3개를 통합한 어드민 API 서버의 공통 구조(세션·역할 가드, 요청 DB 로깅)를 초기 설계했습니다.",
            "규모: GraphQL Query 155·Mutation 129, 엔티티 123개, 배치 잡 19개, 어드민 REST API 128개",
          ],
        },
      ],
    },
    {
      name: "GS건설",
      period: "2011.07 – 2017.10",
      role: "플랜트 기계설계 엔지니어",
      roles: [],
    },
  ],
  sideProjects: [
    {
      title: "데이팅 앱 백엔드 (일본)",
      period: "2025.04 – 현재",
      summary:
        "일본 시장 대상 매칭 앱의 API 서버입니다. 설계, 구현, 배포, 문서화를 혼자 맡고 있습니다(엔드포인트 약 145개, Jest 테스트 파일 72개).",
      bullets: [
        "채팅과 알림을 WebSocket 연결 하나의 2개 네임스페이스로 통합했습니다. 방별 원자적 시퀀스와 Redis SET NX 클레임으로, 재전송해도 메시지가 중복되지 않고 순서가 유지됩니다.",
        "AWS Bedrock으로 자기소개에서 속성을 추출하고 임베딩을 만들어 pgvector로 추천 순위를 재정렬합니다.",
        "Apple·Google 인앱결제 검증과 포인트 원장, AWS Rekognition 얼굴 생체 감지와 신분증 대조를 구현했습니다.",
      ],
    },
    {
      title: "홈랩 GitOps 플랫폼",
      period: "2026.11 – 현재",
      summary:
        "M1 Mac mini에 Terraform·k3s·Argo CD로 단일 노드 Kubernetes 플랫폼을 코드로 구축했습니다. 이 사이트도 여기서 서빙됩니다.",
      bullets: [
        "클러스터를 삭제하고 약 8분 만에 앱 12개와 SSO 데이터를 복구하는 리허설로 검증했습니다.",
        "Authentik SSO, SOPS 시크릿 암호화, Tailscale과 Cloudflare Tunnel로 접근 경로를 분리했습니다.",
      ],
    },
  ],
  skills: [
    {
      label: "언어·프레임워크",
      items:
        "TypeScript, Node.js, NestJS, Fastify, Express, Apollo GraphQL, Socket.IO, Next.js(React)",
    },
    {
      label: "데이터",
      items:
        "MySQL, PostgreSQL(PostGIS, pgvector), Redis, Prisma, TypeORM, Knex, BullMQ",
    },
    {
      label: "인프라",
      items:
        "AWS(ECS, EKS, ECR, S3, RDS), Docker, GitHub Actions, Terraform, Argo CD, Karpenter, k3s",
    },
    {
      label: "외부 연동",
      items:
        "PortOne, App Store Server API, Google Play API, Shopify Admin API, FCM, 카카오 알림톡, OpenAI, AWS Bedrock",
    },
  ],
  education: [
    { period: "2021.03 – 2021.08", text: "구트아카데미 개발자 국비교육 수료" },
    { period: "2003 – 2011", text: "한양대학교 기계공학과 졸업" },
  ],
};

const en: ResumeContent = {
  lead: "Backend developer with five years of Node.js and TypeScript, designing and running backends for pet-tech services.",
  labels: {
    summary: "Summary",
    strengths: "Strengths",
    experience: "Experience",
    sideProjects: "Side projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
  },
  summary: [
    "At Purrsong and OnHeal I built and ran the backends of three pet-tech services, two of which I designed from the first commit.",
    "My work covers payments (subscriptions, in-app purchases, settlement), IoT sensor data, and an AI consultation feature. I also own deployment pipelines and AWS infrastructure, and as lead of a seven-person IT team I cut monthly AWS spend by about 24%.",
    "Before moving into software I spent six years at GS E&C as a plant mechanical design engineer.",
  ],
  strengths: [
    {
      label: "Payments",
      text: "PortOne billing-key subscriptions, Apple and Google in-app purchase verification and webhooks, order state machines, monthly settlement",
    },
    {
      label: "Auth and security",
      text: "Social login with Apple, Google, LINE and Kakao, instant token revocation with Redis, rate limiting",
    },
    {
      label: "Data processing",
      text: "IoT sensor log classification, statistical health metrics (linear regression, outlier filtering, k-means), query optimization",
    },
    {
      label: "Realtime and async",
      text: "WebSocket, SSE, Redis Pub/Sub, BullMQ, batch scheduling",
    },
    {
      label: "Infrastructure",
      text: "Docker, GitHub Actions, AWS ECS/EKS deployment, Terraform and Argo CD, AWS cost optimization",
    },
    {
      label: "AI agents",
      text: "A consultation agent built on tool calling; Claude Code for development, cluster checks and incident analysis",
    },
  ],
  experience: [
    {
      name: "OnHeal",
      period: "2024.01 – Present",
      role: "Backend Developer",
      note: "OnHeal acquired Purrsong. I work on OnHeal services and affiliate infrastructure while still running the Purrsong services.",
      roles: [
        {
          title: "Veterinary prescription commerce platform",
          period: "2023.09 – Present",
          summary:
            "A B2B2C platform where clinics prescribe products, pet owners buy or subscribe, and revenue is settled to clinics and sellers. I started it at Purrsong and carried it over.",
          bullets: [
            "Designed the NestJS + Fastify API server from scratch and built it alone for nine months: 172 endpoints and 53 tables at launch readiness, now 283 and 77.",
            "Designed an auth convention that pairs a JWT strategy with a role guard for each of four client types: app users, clinic admins, operators and sellers.",
            "Implemented PortOne billing-key subscriptions (round calculation, partial cancellation, payment webhooks) and an order state machine for cancellation, return and refund.",
            "Designed monthly settlement for clinics and sellers, run by a cron on the first of each month, with multi-table writes kept atomic in transactions.",
            "Revoked every session instantly on logout or password change by comparing token issue times stored in Redis.",
            "Set up the clinic console and the operations admin on the Next.js 14 App Router. Teammates who joined later extended the same query-hook and DataTable conventions.",
          ],
        },
        {
          title: "Pet urine test app backend (Japan)",
          period: "2024.11 – 2026.11",
          summary:
            "An app that photographs a urine test strip and returns eight results from an AI analysis server. I led the backend and wrote 84% of the commits.",
          bullets: [
            "Built an asynchronous image analysis pipeline on BullMQ: upload through S3 presigned URLs, analysis on a queue, results joined back to the response over Redis Pub/Sub.",
            "Delivered email verification results to the app in real time with Redis Pub/Sub and SSE, with no polling across multiple instances.",
            "Implemented Apple, Google and LINE login, access and refresh JWTs, and Redis-based session revocation.",
            "Split the GitHub Actions pipeline: ECS rolling deploys for production, container swap over SSH for dev.",
          ],
        },
        {
          title: "IT team lead, Foodnamu (OnHeal affiliate)",
          period: "2025.09 – 2026.09",
          summary:
            "Led a seven-person IT team at a food e-commerce affiliate, owning infrastructure operations and IT spend.",
          bullets: [
            "Cut monthly AWS spend by about 24%: cached duplicate queries and then downsized RDS, removed idle resources, redesigned RI and Savings Plan commitments, and changed AWS partners.",
            "Upgraded RDS engines (PostgreSQL and MySQL) that had left standard support, using Blue/Green deployments.",
            "Ran AWS infrastructure, WAF, VPN and CDN for domestic and overseas channels, and handled approvals and contract reviews for about ten IT cost items.",
          ],
        },
        {
          title: "EKS operations support for an affiliated service (DevOps)",
          period: "2026.09 – Present",
          summary:
            "Operating an AWS EKS GitOps stack: Terraform and Terramate, Argo CD, Karpenter.",
          bullets: [
            "Replaced production node AMIs with versions patched for kernel and containerd vulnerabilities without downtime, rolling out one NodePool at a time behind disruption budget gates.",
            "Cleaned up Terraform drift by environment and module: pinned EKS add-on versions and restored IAM policies changed in the console to match the code.",
            "Traced stalled Karpenter node replacement to an interaction between topologySpread and CPU limits by reading the Karpenter source, and wrote up the procedure.",
            "Run daily cluster checks and trace recurring alerts with Claude Code. Changed the team rule so that agent-authored PRs are merged only after human review.",
          ],
        },
      ],
    },
    {
      name: "Purrsong",
      period: "2021.09 – 2023.12",
      role: "Backend Developer",
      roles: [
        {
          title: "Pet-tech platform backend (app, IoT, batch and admin servers)",
          period: "2021.09 – Present",
          summary:
            "A service offering health monitoring from smart litter boxes and wearables, subscription commerce and AI consultation. I started as a core contributor on a team of three and have run the servers alone since 2024.",
          bullets: [
            "Elimination classification: a batch job learns per-device urine and feces centroids with k-means, and the IoT server classifies each event in real time with Z-scores and identifies the cat in multi-cat homes.",
            "Health score batch: runs at local midnight for each household, with a 14-day weight regression, a 2σ outlier filter and an age-weighted scoring model.",
            "Subscription commerce: built out the store domain and a billing-key auto-payment batch with failure retries and business-day shipping dates.",
            "In-app purchases: receipt verification with the App Store Server API and Google Play API, plus server notifications from both stores.",
            "AI vet chat: a streaming agent loop that uses tool calling to query health data and search the web, with point-based billing.",
            "Push notifications v2: 95 notification types split into templates by three languages and tone modes, respecting quiet hours and time zones.",
            "IoT logs: fixed slow queries that delayed the log ingestion API and blocked duplicate firmware retransmissions with Redis keys.",
            "Internal admin server: designed the shared structure (session and role guards, request logging to the database) of a NestJS and Prisma admin API over three databases.",
            "Scale: 155 GraphQL queries and 129 mutations, 123 entities, 19 batch jobs, 128 admin REST APIs",
          ],
        },
      ],
    },
    {
      name: "GS E&C",
      period: "2011.07 – 2017.10",
      role: "Plant Mechanical Design Engineer",
      roles: [],
    },
  ],
  sideProjects: [
    {
      title: "Dating app backend (Japan)",
      period: "2025.04 – Present",
      summary:
        "The API server for a matching app in Japan. I own design, implementation, deployment and documentation alone (about 145 endpoints, 72 Jest test files).",
      bullets: [
        "Merged chat and notifications into two namespaces on one WebSocket connection. Per-room atomic sequences and Redis SET NX claims keep messages ordered and deduplicated across retries.",
        "Extract attributes from self-introductions with AWS Bedrock, embed them, and re-rank recommendations with pgvector.",
        "Implemented Apple and Google in-app purchase verification, a point ledger, and face liveness and ID matching with AWS Rekognition.",
      ],
    },
    {
      title: "Homelab GitOps platform",
      period: "2026.11 – Present",
      summary:
        "A single-node Kubernetes platform on an M1 Mac mini, built as code with Terraform, k3s and Argo CD. This site is served from it.",
      bullets: [
        "Verified by rehearsal: deleted the cluster and restored 12 apps and SSO data in about 8 minutes.",
        "Authentik SSO, SOPS-encrypted secrets, and separate access paths through Tailscale and Cloudflare Tunnel.",
      ],
    },
  ],
  skills: [
    {
      label: "Languages and frameworks",
      items:
        "TypeScript, Node.js, NestJS, Fastify, Express, Apollo GraphQL, Socket.IO, Next.js (React)",
    },
    {
      label: "Data",
      items:
        "MySQL, PostgreSQL (PostGIS, pgvector), Redis, Prisma, TypeORM, Knex, BullMQ",
    },
    {
      label: "Infrastructure",
      items:
        "AWS (ECS, EKS, ECR, S3, RDS), Docker, GitHub Actions, Terraform, Argo CD, Karpenter, k3s",
    },
    {
      label: "Integrations",
      items:
        "PortOne, App Store Server API, Google Play API, Shopify Admin API, FCM, Kakao Alimtalk, OpenAI, AWS Bedrock",
    },
  ],
  education: [
    {
      period: "2021.03 – 2021.08",
      text: "Goott Academy, government-funded developer training",
    },
    {
      period: "2003 – 2011",
      text: "Hanyang University, B.S. in Mechanical Engineering",
    },
  ],
};

export const resume: Record<Locale, ResumeContent> = { ko, en };
