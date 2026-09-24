export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  icon: 'shopping-cart' | 'calendar' | 'layout-dashboard' | 'shield' | 'database';
  tags: string[];
  metrics?: string;
  architectureHighlights: string[];
  endpoints: { method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; path: string; desc: string }[];
  githubUrl: string;
  liveUrl?: string;
}

export interface TechItem {
  name: string;
  category: 'Runtime' | 'Language' | 'Framework' | 'Database' | 'DevOps' | 'Version Control';
  experience: string;
  description: string;
  color: string;
}

export const TECH_STACK: TechItem[] = [
  {
    name: 'Node.js',
    category: 'Runtime',
    experience: '2+ years',
    description: 'Event-driven, asynchronous I/O backend runtime for microservices and REST APIs.',
    color: '#339933',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    experience: '2+ years',
    description: 'Strict type safety, generics, interfaces, and compile-time contract validation.',
    color: '#3178C6',
  },
  {
    name: 'Express.js',
    category: 'Framework',
    experience: '2+ years',
    description: 'Minimalist, performant web routing, middleware pipelines, and error handling.',
    color: '#FFFFFF',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    experience: '1.5+ years',
    description: 'Relational data modeling, ACID transactions, complex joins, and indexing.',
    color: '#4169E1',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    experience: '1+ year',
    description: 'Containerization, multi-stage builds, Docker Compose for local environments.',
    color: '#2496ED',
  },
  {
    name: 'Git',
    category: 'Version Control',
    experience: '2+ years',
    description: 'Branching workflows, atomic commits, rebasing, and merge conflict resolution.',
    color: '#F05032',
  },
  {
    name: 'GitHub',
    category: 'DevOps',
    experience: '2+ years',
    description: 'CI/CD workflows with GitHub Actions, releases, code review, and issues.',
    color: '#FFFFFF',
  },
];

export const CORE_STRENGTHS = [
  {
    id: 'problem-solver',
    icon: 'code-xml',
    title: 'Problem Solver',
    description: 'I enjoy turning complex problems into simple and efficient solutions.',
    detail: 'Algorithmic efficiency, clean architecture, refactoring legacy bottlenecks into decoupled services.',
  },
  {
    id: 'always-learning',
    icon: 'book-open',
    title: 'Always Learning',
    description: "I'm constantly exploring new technologies and best practices.",
    detail: 'Deep diving into system design patterns, distributed queues, caching strategies, and API security.',
  },
  {
    id: 'team-player',
    icon: 'users',
    title: 'Team Player',
    description: 'I communicate well and enjoy working in collaborative environments.',
    detail: 'Clear documentation, asynchronous pull request reviews, and agile sprint alignment.',
  },
  {
    id: 'goal-oriented',
    icon: 'rocket',
    title: 'Goal Oriented',
    description: 'I focus on growth and delivering real value in every project.',
    detail: 'Delivering robust software on time, measured by test coverage, response latency, and reliability.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-api',
    title: 'E-Commerce API',
    category: 'REST API & Microservices',
    description: 'A complete e-commerce backend with user management, product catalog, cart and order system, and admin panel.',
    fullDescription: 'Production-ready e-commerce RESTful API designed with clean layered architecture (Controller -> Service -> Repository). Implements role-based access control, JWT refresh token rotation, inventory decrement locking, and automated Swagger OpenAPI documentation.',
    icon: 'shopping-cart',
    tags: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Docker', 'Swagger'],
    metrics: '< 45ms average response time across 12,000 requests',
    architectureHighlights: [
      'Layered modular structure with strict Dependency Injection',
      'Database transactions for safe checkout & inventory consistency',
      'Rate-limiting with express-rate-limit and Helmet security headers',
      'Automated OpenAPI 3.0 specs generated and hosted via Swagger UI',
    ],
    endpoints: [
      { method: 'POST', path: '/api/v1/auth/login', desc: 'Authenticate user and issue JWT access/refresh tokens' },
      { method: 'GET', path: '/api/v1/products', desc: 'Paginated product list with search, filter, and sorting' },
      { method: 'POST', path: '/api/v1/orders/checkout', desc: 'Transactional order processing with inventory locks' },
      { method: 'GET', path: '/api/v1/admin/analytics', desc: 'Admin sales summary and low-stock alerts' },
    ],
    githubUrl: 'https://github.com/abolfazlshahabi/ecommerce-backend-api',
  },
  {
    id: 'booking-system',
    title: 'Booking System',
    category: 'Real-Time Reservation Engine',
    description: 'A reservation system with real-time availability check, user roles, and cancellation support. Includes notification system.',
    fullDescription: 'High-concurrency appointment scheduling backend built with optimistic concurrency control. Utilizes Redis for time-slot caching and lock management to eliminate double-booking bugs during simultaneous user checkouts.',
    icon: 'calendar',
    tags: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Jest'],
    metrics: 'Zero double-booking incidents verified with automated Jest stress tests',
    architectureHighlights: [
      'Distributed Redis locks for atomic slot booking',
      'Background worker for automated email & SMS reminders',
      'Optimized PostgreSQL index on (provider_id, start_time, end_time)',
      '100% test coverage for critical reservation reservation logic',
    ],
    endpoints: [
      { method: 'GET', path: '/api/v1/availability', desc: 'Cached real-time slots query with Redis fallback to DB' },
      { method: 'POST', path: '/api/v1/bookings', desc: 'Atomic slot reservation with race-condition prevention' },
      { method: 'PUT', path: '/api/v1/bookings/:id/cancel', desc: 'Cancellation workflow with automatic slot release' },
      { method: 'GET', path: '/api/v1/user/bookings', desc: 'User booking history with status filtering' },
    ],
    githubUrl: 'https://github.com/abolfazlshahabi/booking-system-backend',
  },
  {
    id: 'project-management-saas',
    title: 'Project Management SaaS',
    category: 'Multi-Tenant Architecture',
    description: 'A multi-tenant platform for managing projects, teams and tasks with role-based access and real-time notifications.',
    fullDescription: 'Scalable NestJS enterprise backend implementing multi-tenant row-level security. Features real-time WebSocket event dispatching for task updates, audit logging, and automated CI/CD deployment pipelines.',
    icon: 'layout-dashboard',
    tags: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'WebSocket', 'Docker', 'CI/CD'],
    metrics: 'Sub-30ms WebSocket event delivery to connected team members',
    architectureHighlights: [
      'Multi-tenant schema isolation ensuring tenant data boundary',
      'Socket.io gateway for live Kanban board updates',
      'Role-based permissions guard (Admin, Manager, Member, Guest)',
      'Automated GitHub Actions linting, unit tests, and Docker push',
    ],
    endpoints: [
      { method: 'GET', path: '/api/v1/projects/:id/board', desc: 'Fetch project columns, tasks, and assignees' },
      { method: 'POST', path: '/api/v1/tasks', desc: 'Create task and broadcast socket event to workspace' },
      { method: 'PATCH', path: '/api/v1/tasks/:id/move', desc: 'Reorder task position with optimistic UI support' },
      { method: 'GET', path: '/api/v1/workspaces/members', desc: 'Manage workspace invitations and team roles' },
    ],
    githubUrl: 'https://github.com/abolfazlshahabi/project-management-saas-api',
  },
  {
    id: 'auth-microservice',
    title: 'Authentication & SSO Service',
    category: 'Identity & Security',
    description: 'Centralized OAuth2 and JWT authentication microservice with refresh token rotation and rate limiting.',
    fullDescription: 'Secure identity provider service managing user credentials, bcrypt password hashing with salt rounds, session invalidation via Redis blacklists, and two-factor authentication (2FA).',
    icon: 'shield',
    tags: ['Node.js', 'TypeScript', 'Express', 'Redis', 'PostgreSQL', 'Docker'],
    metrics: 'Standardized OAuth2 & OIDC compliant auth flow',
    architectureHighlights: [
      'Asymmetric RSA-256 JWT signing for decoupled token verification',
      'Redis token revocation blacklist for instant logout across sessions',
      'Brute-force protection with IP-based rate limiting',
    ],
    endpoints: [
      { method: 'POST', path: '/auth/register', desc: 'Register new account with verification email' },
      { method: 'POST', path: '/auth/token', desc: 'OAuth2 password grant & refresh token exchange' },
      { method: 'POST', path: '/auth/revoke', desc: 'Revoke refresh token and invalidate active sessions' },
    ],
    githubUrl: 'https://github.com/abolfazlshahabi/auth-microservice',
  },
];

export const EXPERIENCES = [
  {
    role: 'Junior Backend Developer',
    company: 'Tech Solutions & Freelance',
    period: '2023 - Present',
    location: 'Remote',
    summary: 'Developing RESTful APIs, optimizing PostgreSQL queries, and containerizing microservices for web applications.',
    achievements: [
      'Designed and deployed 4+ production REST APIs using Node.js, TypeScript, and Express.',
      'Reduced database query latency by 35% through proper index modeling and Redis caching.',
      'Implemented automated testing suites with Jest reaching over 85% code coverage.',
    ],
  },
  {
    role: 'Backend Intern / Contributor',
    company: 'Open Source Community',
    period: '2022 - 2023',
    location: 'Remote',
    summary: 'Contributed to open source Node.js libraries, writing comprehensive unit tests and documentation.',
    achievements: [
      'Authored middleware modules for HTTP request logging and error handling.',
      'Collaborated via Git pull requests with code reviews and CI/CD pipelines.',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'B.Sc. in Software Engineering / Computer Science',
    institution: 'University of Technology',
    period: '2020 - 2024',
    description: 'Focused on Data Structures, Algorithms, Database Management Systems, and Software Architecture.',
  },
  {
    degree: 'Backend Engineering & Distributed Systems Certification',
    institution: 'Professional Developer Program',
    period: '2023',
    description: 'Comprehensive study of REST API design, Docker containerization, PostgreSQL optimization, and Redis caching.',
  },
];
