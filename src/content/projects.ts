import type { Locale } from "@/i18n/config";

export type ProjectSection = {
  title: string;
  /** Optional problem statement shown before the body. */
  problem?: string;
  body?: string;
  bullets?: string[];
};

export type Project = {
  /** Anchor id, shared across locales. */
  id: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  stack: string[];
  stats: { label: string; value: string }[];
  sections: ProjectSection[];
};

export type ProjectsContent = {
  lead: string;
  problemLabel: string;
  projects: Project[];
};

const ko: ProjectsContent = {
  lead: "5년간 설계하고 운영한 프로젝트를 문제와 설계 중심으로 정리했습니다. 수치는 모두 git 이력과 코드 기준입니다.",
  problemLabel: "문제",
  projects: [
    {
      id: "pet-tech",
      title: "펫테크 플랫폼 백엔드",
      period: "2021.09 – 현재",
      role: "펄송 → 온힐 · 백엔드, 2024년부터 단독 운영",
      summary:
        "스마트 고양이 화장실과 웨어러블 데이터로 반려묘 건강을 모니터링하고, 정기구독 커머스와 AI 수의사 상담을 제공하는 서비스입니다. 앱 API, IoT 디바이스 API, 배치 서버, 사내 어드민 4개 서버를 맡았습니다.",
      stack: [
        "TypeScript",
        "Express",
        "Apollo GraphQL",
        "TypeORM",
        "MySQL",
        "Redis",
        "AWS ECS",
      ],
      stats: [
        { label: "GraphQL API", value: "Query 155 · Mutation 129" },
        { label: "엔티티", value: "123개" },
        { label: "배치 잡", value: "19개" },
        { label: "앱 서버 커밋", value: "1,003건" },
      ],
      sections: [
        {
          title: "배변 분류 파이프라인",
          problem:
            "화장실 로드셀은 무게 변화와 체류 시간만 보냅니다. 이 값으로 대변·소변·단순 방문을 가르고, 다묘 가정에서는 어느 고양이인지도 알아내야 했습니다.",
          bullets: [
            "배치 서버가 기기별 센서 로그를 k-means(k=2)로 묶어 소변·대변 중심점을 학습합니다. 1.5σ 이상치를 빼고 최소 샘플 수를 채운 기기만 학습 완료로 봅니다.",
            "IoT 서버가 새 로그를 받으면 두 중심점과의 유클리드 거리, Z-score 임계값으로 실시간 분류합니다.",
            "측정 체중과 등록 체중의 편차, 웨어러블 태그 매칭 여부를 조합해 배변 주체를 정합니다.",
          ],
        },
        {
          title: "타임존 인식 건강 점수 배치",
          problem: "사용자가 여러 나라에 있어 하루의 경계가 가정마다 다릅니다.",
          body: "잡은 매시 정각에 돌고, 현지 시각이 자정인 타임존의 가정만 골라 처리합니다. 14일 체중 선형회귀로 추세를 내고, 평균±2σ 필터로 이상치를 걸러내며, 연령대별 배변 횟수 점수에 가중치를 적용합니다. 결측, 기기 신호 유실, 구독 비활성을 상태값으로 분리해 앱이 원인별로 안내할 수 있습니다.",
        },
        {
          title: "정기구독·결제",
          bullets: [
            "상품·주문·취소/반품/교환·정기구독·멤버십·쿠폰·포인트로 이어지는 커머스 도메인을 구현·고도화했습니다.",
            "빌링키 자동결제 배치는 쿠폰·포인트를 반영해 금액을 계산하고, 실패 이력으로 재시도하며, 영업일 기준으로 출고 예정일을 냅니다.",
            "Apple·Google 인앱결제 영수증 검증과 서버 간 알림 처리를 단독 구현했습니다.",
          ],
        },
        {
          title: "AI 수의사 채팅",
          body: "Vercel AI SDK와 OpenAI로 스트리밍 챗 API를 만들었습니다. 반려동물 건강 데이터 조회 툴과 웹 검색 툴을 tool calling으로 연결해 최대 5단계 에이전트 루프를 구성했고, 한·영·일 응답과 포인트 과금을 붙였습니다.",
        },
        {
          title: "IoT 로그 무결성과 성능",
          bullets: [
            "펌웨어가 같은 로그를 다시 보내는 경우를 request-id + 15초 TTL Redis 키로 막았습니다.",
            "기기 시계 오류로 미래 시각 로그가 저장되면 이후 정상 로그가 유실되던 문제를 고쳤습니다.",
            "ORDER BY + LIMIT 방식의 최근 로그 조회를 MAX(id) 서브쿼리로 바꿔 로그 수신 API의 지연을 해소했습니다.",
          ],
        },
      ],
    },
    {
      id: "prescription-commerce",
      title: "동물병원 처방 커머스 플랫폼",
      period: "2023.09 – 현재",
      role: "펄송 → 온힐 · 백엔드 초기 단독 개발, 어드민 웹 초기 설계",
      summary:
        "동물병원이 처방식을 처방하면 보호자가 앱에서 구매·구독하고, 병원과 판매자에게 매출을 정산하는 B2B2C 플랫폼입니다. 첫 커밋부터 9개월간 백엔드를 혼자 만들었습니다.",
      stack: [
        "NestJS",
        "Fastify",
        "Prisma",
        "MySQL",
        "Redis",
        "Next.js 14",
        "TanStack Query",
      ],
      stats: [
        { label: "엔드포인트", value: "172개 → 현재 283개" },
        { label: "테이블", value: "53개 → 현재 77개" },
        { label: "모듈", value: "15개" },
      ],
      sections: [
        {
          title: "4종 클라이언트 인증 체계",
          problem:
            "앱 사용자, 병원 관리자, 플랫폼 운영자, 판매자가 서버 하나를 씁니다. 모듈이 늘어도 권한 경계가 흐트러지지 않아야 했습니다.",
          body: "클라이언트별로 라우트 prefix, JWT Passport 전략, DB 기반 RoleGuard를 한 세트로 묶는 컨벤션을 세웠습니다. Redis에 저장한 발급 시각과 비교해 로그아웃이나 비밀번호 변경 시 전 세션을 즉시 무효화합니다.",
        },
        {
          title: "결제·정산",
          bullets: [
            "PortOne 빌링키 재결제, 부분취소, 결제 웹훅을 연동하고 구독 회차·다음 결제일·배송비 로직을 구현했습니다.",
            "매월 1일 크론이 병원별 매출을 집계해 정산 내역을 만듭니다. 다중 테이블 쓰기는 Prisma interactive transaction으로 묶었습니다.",
            "크론 잡마다 실행 로그 테이블과 수동 실행 경로를 두어 운영 중 추적과 재실행이 가능합니다.",
          ],
        },
        {
          title: "어드민 프론트엔드",
          bullets: [
            "MUI 프로토타입을 Next.js 14 App Router 구조로 전면 재설계했습니다. 라우트 그룹으로 인증 레이아웃을 나누고 60여 개 쿼리 훅 체계를 세웠습니다.",
            "반려동물 선택 → 처방 제품 선택 → 미리보기 → 발행으로 이어지는 처방전 작성 플로우를 구현했습니다.",
            "운영 어드민은 초기 설계와 핵심 페이지를 맡고, OIDC 인증 → ECR → SSH 배포 CI/CD를 구축했습니다.",
          ],
        },
      ],
    },
    {
      id: "urine-test",
      title: "반려동물 소변검사 앱 백엔드",
      period: "2024.11 – 2026.11",
      role: "온힐 · 백엔드 리드",
      summary:
        "소변검사 스틱을 촬영하면 AI 이미지 분석 서버가 8개 항목 결과를 돌려주는 일본 시장 대상 앱입니다. 아키텍처 초기 구축부터 운영까지 주도했습니다.",
      stack: ["NestJS", "Fastify", "Prisma", "MySQL", "Redis", "BullMQ", "AWS ECS"],
      stats: [
        { label: "엔드포인트", value: "약 45개" },
        { label: "커밋", value: "77건 중 65건" },
      ],
      sections: [
        {
          title: "비동기 이미지 분석 파이프라인",
          problem:
            "외부 AI 서버 호출은 느리고 실패할 수 있는데, 앱은 요청 하나로 결과를 받고 싶어 합니다.",
          bullets: [
            "클라이언트가 S3 Presigned URL로 이미지를 직접 올립니다.",
            "API는 분석 요청을 BullMQ 큐에 넣고, 결과는 Redis Pub/Sub으로 대기 중인 응답에 연결됩니다.",
            "10초 타임아웃을 두고, 분석 서버 에러 15종을 클라이언트용 에러 코드로 매핑했습니다.",
            "분석에 성공했을 때만 트랜잭션 안에서 QR 키트 사용권을 차감합니다.",
          ],
        },
        {
          title: "SSE 이메일 인증",
          body: "사용자가 메일 링크를 누르면 Redis Pub/Sub → SSE 스트림으로 앱에 즉시 알립니다. 링크를 받은 인스턴스와 SSE를 잡고 있는 인스턴스가 달라도 폴링 없이 동작합니다.",
        },
      ],
    },
    {
      id: "dating-app",
      title: "데이팅 앱 백엔드",
      period: "2025.04 – 현재",
      role: "사이드 프로젝트 · 단독 백엔드",
      summary:
        "일본 시장 대상 매칭 앱의 API 서버를 설계, 구현, 배포, 문서화까지 혼자 맡고 있습니다.",
      stack: [
        "NestJS 11",
        "Fastify 5",
        "Prisma 7",
        "PostgreSQL 17",
        "pgvector",
        "Socket.IO",
        "AWS Bedrock",
      ],
      stats: [
        { label: "엔드포인트", value: "약 145개" },
        { label: "Prisma 모델", value: "51개" },
        { label: "테스트 파일", value: "72개" },
        { label: "커밋", value: "484건 중 481건" },
      ],
      sections: [
        {
          title: "실시간 채팅: 순서와 멱등성",
          problem:
            "모바일 네트워크에서는 클라이언트가 같은 메시지를 다시 보내고, 서버는 여러 인스턴스로 돕니다. 그래도 메시지는 한 번만, 순서대로 저장돼야 합니다.",
          bullets: [
            "채팅과 알림을 단일 연결의 2개 네임스페이스로 통합하고, room 멤버십을 서버가 소유하게 했습니다.",
            "방별 시퀀스를 원자적으로 증가시키고, Redis SET NX 30초 클레임으로 재전송을 멱등 처리합니다.",
            "Redis adapter로 다중 인스턴스 전달을 보장하고, 사용자당 단일 활성 세션을 펜싱합니다.",
          ],
        },
        {
          title: "AI 벡터 매칭",
          bullets: [
            "AWS Bedrock으로 자기소개에서 속성을 추출하고 Cohere 임베딩으로 5개 벡터를 만듭니다.",
            "pgvector HNSW 인덱스로 후보를 재랭킹하고, 방향성 상호 적합도 기반 tier 랭킹으로 고도화했습니다.",
            "프로필이 바뀌면 stale 플래그를 세우고 30분 배치 워커가 벡터를 다시 만듭니다.",
          ],
        },
        {
          title: "그 밖의 구현",
          bullets: [
            "AWS Rekognition Face Liveness와 신분증 대조로 본인확인을 처리합니다.",
            "Apple·Google 인앱결제 검증과 lot/transaction 기반 포인트 원장을 구축했습니다.",
            "온보딩 문서 10편과 OpenAPI 패치로 앱 팀과 API 계약을 맞춥니다.",
          ],
        },
      ],
    },
    {
      id: "homelab",
      title: "홈랩 GitOps 플랫폼",
      period: "2026.11 – 현재",
      role: "개인 프로젝트",
      summary:
        "M1 Mac mini 한 대에 Lima와 k3s로 단일 노드 Kubernetes 플랫폼을 올리고, 호스트 설정부터 앱 배포까지 코드로 관리합니다. 원칙은 \"레포에 없는 설정은 존재하지 않는다\"입니다. 이 사이트도 이 클러스터에서 서빙됩니다.",
      stack: [
        "k3s",
        "Terraform",
        "Argo CD",
        "Authentik",
        "SOPS",
        "Prometheus",
        "Loki",
        "Velero",
        "Cloudflare",
        "Tailscale",
      ],
      stats: [
        { label: "전체 재구축", value: "약 8분" },
        { label: "앱", value: "12개" },
        { label: "ADR", value: "12건" },
      ],
      sections: [
        {
          title: "재현 가능한 인프라",
          bullets: [
            "멱등 부트스트랩 스크립트, Terraform 3개 계층, Argo CD ApplicationSet으로 구성했습니다.",
            "디렉터리 하나를 추가하면 앱으로 자동 등록되고, PR 하나로 TLS·DNS·로그인·대시보드 등록까지 끝납니다.",
            "자격 증명은 SOPS(age)로 암호화해 Git에 두고, 내부 서비스는 Tailscale, 공개 사이트만 Cloudflare Tunnel로 노출합니다.",
            "Velero로 Cloudflare R2에 매일 백업하고 복구 리허설로 검증합니다.",
          ],
        },
        {
          title: "트러블슈팅",
          bullets: [
            "OOM kill 없이 503을 내던 Grafana를 cgroup memory.events와 refault 지표로 추적했습니다. 메모리 제한에서의 페이지 캐시 스래싱이 원인이었습니다.",
            "amd64 전용 이미지로 생긴 arm64 호환성 문제는 버전을 고정하고 CI 검사로 미리 잡게 했습니다.",
            "external-dns가 존 apex 레코드를 갱신하지 못하는 문제를 찾아 해당 레코드만 Terraform 관리로 분리했습니다.",
          ],
        },
      ],
    },
  ],
};

const en: ProjectsContent = {
  lead: "Projects I designed and ran over five years, told through the problem and the design. All figures come from git history and code.",
  problemLabel: "Problem",
  projects: [
    {
      id: "pet-tech",
      title: "Pet-tech platform backend",
      period: "2021.09 – Present",
      role: "Purrsong → OnHeal · Backend, sole operator since 2024",
      summary:
        "A service that monitors cat health from smart litter boxes and wearables, with subscription commerce and AI vet consultation. I worked on four servers: the app API, the IoT device API, the batch server and the internal admin.",
      stack: [
        "TypeScript",
        "Express",
        "Apollo GraphQL",
        "TypeORM",
        "MySQL",
        "Redis",
        "AWS ECS",
      ],
      stats: [
        { label: "GraphQL API", value: "155 queries · 129 mutations" },
        { label: "Entities", value: "123" },
        { label: "Batch jobs", value: "19" },
        { label: "App server commits", value: "1,003" },
      ],
      sections: [
        {
          title: "Elimination classification pipeline",
          problem:
            "The litter box load cell only reports weight change and dwell time. From that we had to tell feces, urine and plain visits apart, and in multi-cat homes work out which cat it was.",
          bullets: [
            "The batch server clusters each device's sensor logs with k-means (k=2) to learn urine and feces centroids, dropping 1.5σ outliers and requiring a minimum sample count.",
            "The IoT server classifies each new log in real time by Euclidean distance to the centroids and Z-score thresholds.",
            "The cat is identified from the gap between measured and registered weight, combined with wearable tag matching.",
          ],
        },
        {
          title: "Time-zone-aware health score batch",
          problem:
            "Users live in many countries, so the day boundary differs per household.",
          body: "The job runs every hour and processes only households whose local time is midnight. It fits a 14-day weight regression, filters outliers beyond mean ± 2σ, and weights elimination counts by age group. Missing data, lost device signal and inactive subscriptions are separate states, so the app can explain each cause.",
        },
        {
          title: "Subscriptions and payments",
          bullets: [
            "Built out the commerce domain: products, orders, cancellation, return and exchange, subscriptions, membership, coupons and points.",
            "The billing-key batch applies coupons and points, retries from failure history, and computes shipping dates in business days.",
            "Implemented Apple and Google in-app purchase verification and server-to-server notifications on my own.",
          ],
        },
        {
          title: "AI vet chat",
          body: "A streaming chat API on the Vercel AI SDK and OpenAI. Tool calling connects a pet health data tool and a web search tool in an agent loop of up to five steps, with Korean, English and Japanese replies and point-based billing.",
        },
        {
          title: "IoT log integrity and performance",
          bullets: [
            "Blocked duplicate firmware retransmissions with a request-id Redis key and a 15-second TTL.",
            "Fixed a bug where a log stamped in the future by a faulty device clock caused later valid logs to be lost.",
            "Replaced ORDER BY + LIMIT lookups of the latest log with MAX(id) subqueries, removing the delay in the log ingestion API.",
          ],
        },
      ],
    },
    {
      id: "prescription-commerce",
      title: "Veterinary prescription commerce platform",
      period: "2023.09 – Present",
      role: "Purrsong → OnHeal · Sole early backend developer, initial admin web design",
      summary:
        "A B2B2C platform where clinics prescribe therapeutic diets, pet owners buy or subscribe in the app, and revenue is settled to clinics and sellers. I built the backend alone for the first nine months.",
      stack: [
        "NestJS",
        "Fastify",
        "Prisma",
        "MySQL",
        "Redis",
        "Next.js 14",
        "TanStack Query",
      ],
      stats: [
        { label: "Endpoints", value: "172 → 283 today" },
        { label: "Tables", value: "53 → 77 today" },
        { label: "Modules", value: "15" },
      ],
      sections: [
        {
          title: "Auth for four client types",
          problem:
            "App users, clinic admins, platform operators and sellers share one server. Permission boundaries had to hold as modules were added.",
          body: "Each client type gets a route prefix, a JWT Passport strategy and a database-backed RoleGuard as one set. Token issue times stored in Redis let logout or a password change revoke every session at once.",
        },
        {
          title: "Payments and settlement",
          bullets: [
            "Integrated PortOne billing-key charges, partial cancellation and payment webhooks, with subscription rounds, next payment dates and shipping fees.",
            "A cron on the first of each month aggregates revenue per clinic into settlements. Multi-table writes run in Prisma interactive transactions.",
            "Every cron job has an execution log table and a manual trigger, so runs can be traced and repeated in production.",
          ],
        },
        {
          title: "Admin frontends",
          bullets: [
            "Rebuilt an MUI prototype on the Next.js 14 App Router, with route groups for auth layouts and a system of about 60 query hooks.",
            "Implemented the prescription flow: choose a pet, choose products, preview, issue.",
            "Set up the operations admin and its core pages, plus CI/CD from OIDC auth to ECR to SSH deploy.",
          ],
        },
      ],
    },
    {
      id: "urine-test",
      title: "Pet urine test app backend",
      period: "2024.11 – 2026.11",
      role: "OnHeal · Backend lead",
      summary:
        "An app for the Japanese market that photographs a urine test strip and returns eight results from an AI image analysis server. I led it from the initial architecture through operations.",
      stack: ["NestJS", "Fastify", "Prisma", "MySQL", "Redis", "BullMQ", "AWS ECS"],
      stats: [
        { label: "Endpoints", value: "about 45" },
        { label: "Commits", value: "65 of 77" },
      ],
      sections: [
        {
          title: "Asynchronous image analysis pipeline",
          problem:
            "Calls to the external AI server are slow and can fail, but the app wants a result from a single request.",
          bullets: [
            "The client uploads the image directly through an S3 presigned URL.",
            "The API puts the analysis on a BullMQ queue, and the result is joined to the waiting response over Redis Pub/Sub.",
            "A 10-second timeout applies, and 15 analysis server errors map to client error codes.",
            "A test kit credit is deducted inside a transaction only when the analysis succeeds.",
          ],
        },
        {
          title: "Email verification over SSE",
          body: "When the user clicks the email link, the app is told at once through Redis Pub/Sub and an SSE stream. It works without polling even when the instance that receives the click is not the one holding the stream.",
        },
      ],
    },
    {
      id: "dating-app",
      title: "Dating app backend",
      period: "2025.04 – Present",
      role: "Side project · Sole backend developer",
      summary:
        "The API server for a matching app in Japan. I handle design, implementation, deployment and documentation alone.",
      stack: [
        "NestJS 11",
        "Fastify 5",
        "Prisma 7",
        "PostgreSQL 17",
        "pgvector",
        "Socket.IO",
        "AWS Bedrock",
      ],
      stats: [
        { label: "Endpoints", value: "about 145" },
        { label: "Prisma models", value: "51" },
        { label: "Test files", value: "72" },
        { label: "Commits", value: "481 of 484" },
      ],
      sections: [
        {
          title: "Realtime chat: ordering and idempotency",
          problem:
            "On mobile networks clients resend the same message, and the server runs on several instances. Each message must still be stored once and in order.",
          bullets: [
            "Chat and notifications share one connection as two namespaces, and the server owns room membership.",
            "Per-room sequences increment atomically, and a 30-second Redis SET NX claim makes retries idempotent.",
            "A Redis adapter delivers across instances, and each user's single active session is fenced.",
          ],
        },
        {
          title: "AI vector matching",
          bullets: [
            "AWS Bedrock extracts attributes from self-introductions, and Cohere embeddings produce five vectors.",
            "Candidates are re-ranked with a pgvector HNSW index, later refined into tier ranking based on directional mutual fit.",
            "A profile change sets a stale flag, and a batch worker rebuilds vectors every 30 minutes.",
          ],
        },
        {
          title: "Also built",
          bullets: [
            "Identity verification with AWS Rekognition Face Liveness and ID photo matching.",
            "Apple and Google in-app purchase verification and a lot/transaction point ledger.",
            "Ten onboarding documents and OpenAPI patches to keep the API contract in sync with the app team.",
          ],
        },
      ],
    },
    {
      id: "homelab",
      title: "Homelab GitOps platform",
      period: "2026.11 – Present",
      role: "Personal project",
      summary:
        "A single-node Kubernetes platform on one M1 Mac mini with Lima and k3s, managed as code from host setup to app deployment. The rule: a setting that is not in the repo does not exist. This site is served from this cluster.",
      stack: [
        "k3s",
        "Terraform",
        "Argo CD",
        "Authentik",
        "SOPS",
        "Prometheus",
        "Loki",
        "Velero",
        "Cloudflare",
        "Tailscale",
      ],
      stats: [
        { label: "Full rebuild", value: "about 8 min" },
        { label: "Apps", value: "12" },
        { label: "ADRs", value: "12" },
      ],
      sections: [
        {
          title: "Reproducible infrastructure",
          bullets: [
            "Idempotent bootstrap scripts, three Terraform layers and an Argo CD ApplicationSet.",
            "Adding a directory registers an app, and one PR covers TLS, DNS, login and dashboard registration.",
            "Credentials are encrypted with SOPS (age) in Git. Internal services are reachable over Tailscale, and only public sites go through Cloudflare Tunnel.",
            "Velero backs up to Cloudflare R2 daily, verified by restore rehearsals.",
          ],
        },
        {
          title: "Troubleshooting",
          bullets: [
            "Traced a Grafana that returned 503 without OOM kills using cgroup memory.events and refault metrics. The cause was page cache thrashing at the memory limit.",
            "An amd64-only image broke arm64, so I pinned the version and added a CI check that catches it in advance.",
            "Found that external-dns could not update the zone apex record and moved only that record to Terraform.",
          ],
        },
      ],
    },
  ],
};

export const projects: Record<Locale, ProjectsContent> = { ko, en };
