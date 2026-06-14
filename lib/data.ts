import type { Experience, Project, Metric, TechStackItem, PortfolioItem, Certification } from './types';

export const experience: Experience[] = [
  {
    id: 'scu',
    company: 'PT Sigma Cipta Utama (Elnusa Group)',
    role: 'Freelance AI-Engineer / System Analyst',
    period: 'Dec 2025 – Jan 2026',
    location: 'Jakarta, Indonesia',
    stack: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'scikit-learn', 'FastAPI', 'Docker'],
    description: 'Short-term freelance contract building a sales forecasting prototype with TensorFlow/Keras. Processed historical sales data with Pandas and served predictions through a FastAPI endpoint. Worked alongside the internal team to understand business requirements and prepare data pipelines.',
    metrics: ['Sales forecasting prototype with TensorFlow/Keras', 'FastAPI endpoint for prediction serving', 'Data preprocessing with Pandas'],
    category: 'ai',
    type: 'experience',
    url: 'https://scu.co.id/',
  },
  {
    id: 'kmplus',
    company: 'KMPlus Consulting',
    role: 'Entry-level Backend Developer',
    period: 'Sep 2023 – Jul 2025',
    location: 'Jakarta, Indonesia',
    stack: ['Node.js', 'Express', 'NestJS', 'Golang', 'MySQL', 'Firebase', 'Redis', 'RabbitMQ', 'Docker', 'Jenkins', `Argocd`],
    description: 'Backend services for LMS, KMS, TMS, CMS, and custom internal tools for clients in education, retail, and logistics. Contributed to API development, database optimization, and code reviews across multiple projects, with a focus on maintainability and performance.',
    metrics: ['-80% query latency optimization via raw SQL, index, and caching', '5,000+ concurrent internal company users', '100% mobile sync reliability'],
    category: 'backend',
    type: 'experience',
    url: 'https://kmplusconsulting.com/',
  },
  {
    id: 'abbauf',
    company: 'PT Teknologi Mulia Sejahtera Cemerlang (Abbauf)',
    role: 'Backend Developer Intern',
    period: 'Aug 2022 – Dec 2022',
    location: 'Depok, Indonesia',
    stack: ['PHP', 'CodeIgniter', 'PostgreSQL', 'PostGIS', 'Docker', 'GitLab'],
    description: 'Internship — contributed backend features and geospatial queries for a field operation data platform. Wrote PostGIS spatial queries, built API endpoints in PHP/CodeIgniter, and maintained services consumed by field team mobile apps.',
    metrics: ['PostGIS spatial queries for field operations', 'API endpoints for field team mobile apps', 'Backend maintenance with PHP/CodeIgniter'],
    category: 'spatial',
    type: 'experience',
    url: 'https://abbauf.com/',
  },
];

export const projects: Project[] = [
  {
    id: 'tanggapi-aceh',
    title: 'Tilikan Indonesia x Tanggapi Aceh',
    client: 'Aceh Government',
    role: 'Backend Developer',
    period: 'Oct 2025 – Dec 2025',
    location: 'Aceh, Indonesia',
    stack: ['TanStack Start (Full-stack React)', 'Cloudflare Workers (nodejs_compat)', 'TypeScript', 'Tailwind CSS v4', 'PostgreSQL (Cloudflare Hyperdrive)', 'Drizzle ORM', 'Cloudflare R2 (media uploads)', 'React Leaflet with OpenStreetMap', 'pnpm', 'Biome (linting & formatting)'],
    description: 'Disaster response platform built during crisis response in Aceh. Features location-based reporting for credible field volunteers, real-time incident mapping, and crisis-grade reliability.',
    category: 'spatial',
    type: 'project',
    url: 'https://tanggapi.acehprov.go.id/',
  },
  {
    id: 'agavi-lms',
    title: 'Agavi Institute LMS',
    client: 'PT Agritama Sinergi Inovasi (AGAVI)',
    role: 'Backend Engineer',
    period: 'Jul 2023 – Jun 2025',
    location: 'Bandung,Indonesia',
    stack: ['NestJS (Auth Service)', 'Express (API Service)', 'PostgreSQL', 'Sequelize', 'Redis', 'Midtrans', 'Cloudinary', 'Railway'],
    description: 'Custom Learning Management System with multi-tier role-based access, granular video progress tracking, and full Midtrans payment gateway integration. Serves 1,000+ active learners.',
    category: 'backend',
    type: 'project',
    url: 'https://institute.agavi.id/',
  },
];

export const portfolioItems: PortfolioItem[] = [...experience, ...projects];

export const metrics: Metric[] = [
  { label: 'Production API Reliability', value: '99', suffix: '%', category: 'backend' },
  { label: 'DB Latency Reduction', value: '-80', suffix: '%', category: 'spatial' },
  { label: 'Years Backend Engineering', value: '2', suffix: '+', category: 'backend' },
  { label: 'Estimated Concurrent Field Users', value: '+5,000', suffix: '+', category: 'spatial' },
  { label: 'Active LMS Learners', value: '+1,000', suffix: '+', category: 'ml' },
  { label: 'API Requests / Day', value: '1', suffix: 'M+', category: 'backend' },
  { label: 'Geospatial Projects Completed', value: '2', suffix: '+', category: 'spatial' },
  { label: 'LMS Projects Completed', value: '2', suffix: '+', category: 'backend' },
];

export const techStack: TechStackItem[] = [
  // Levels are defined as Basic (fundamental knowledge), Intermediate (comfortable with core features), Advanced (proficient with most features), Expert (deep understanding and optimization skills)
  // Programming Languages
  { name: 'Golang', category: 'Language', level: 'Basic', description: 'High-concurrency backend services, gRPC microservices' },
  { name: 'JavaScript', category: 'Language', level: 'Intermediate', description: 'Backend Node.js development' },
  { name: 'PHP', category: 'Language', level: 'Basic', description: 'Laravel 11/12 enterprise applications' },
  { name: 'Python', category: 'Language', level: 'Intermediate', description: 'ML pipelines, data processing, FastAPI' },
  { name: 'SQL', category: 'Language', level: 'Advanced', description: 'Complex query optimization, indexing strategies' },
  { name: 'TypeScript', category: 'Language', level: 'Intermediate', description: 'Node.js/NestJS/Express backend development' },
  // Frameworks
  { name: 'Echo', category: 'Framework', level: 'Basic', description: 'Minimalist Golang web framework' },
  { name: 'Express', category: 'Framework', level: 'Advanced', description: 'Lightweight Node.js web framework' },
  { name: 'FastAPI', category: 'Framework', level: 'Basic', description: 'Python web framework for APIs' },
  { name: 'NestJS', category: 'Framework', level: 'Intermediate', description: 'Modular TypeScript backend architecture' },
  // Databases
  { name: 'MySQL', category: 'Database', level: 'Advanced', description: 'Relational database design, query optimization' },
  { name: 'PostgreSQL', category: 'Database', level: 'Advanced', description: 'Advanced indexing, query optimization, partitioning' },
  { name: 'PostGIS', category: 'Database', level: 'Intermediate', description: 'Geospatial extensions, spatial indexing' },
  { name: 'Redis', category: 'Database', level: 'Intermediate', description: 'Caching, pub/sub, session management' },
  // Infrastructure
  { name: 'Cloudflare Workers', category: 'Infrastructure', level: 'Basic', description: 'Serverless edge computing' },
  { name: 'Docker', category: 'Infrastructure', level: 'Intermediate', description: 'Containerization, Docker Compose' },
  { name: 'Railway', category: 'Infrastructure', level: 'Advanced', description: 'Cloud hosting for web services' },
  { name: 'Jenkins', category: 'Infrastructure', level: 'Basic', description: 'CI/CD pipelines' },
  { name: 'Monolithic', category: 'Infrastructure', level: 'Intermediate', description: 'Monolithic application architecture' },
  { name: 'Microservices', category: 'Infrastructure', level: 'Intermediate', description: 'Microservices architecture, inter-service communication' },
  // Tools
  { name: 'TensorFlow', category: 'Tool', level: 'Basic', description: 'ML model development and deployment' },
  { name: 'Keras', category: 'Tool', level: 'Basic', description: 'High-level neural network API' },
  { name: 'Pandas', category: 'Tool', level: 'Basic', description: 'Data manipulation and analysis' },
  { name: 'scikit-learn', category: 'Tool', level: 'Basic', description: 'Traditional ML algorithms and evaluation' },
];

export const telemetryLogs = [
  { timestamp: '10:00:01', source: 'API Gateway', message: 'User login successful', type: 'backend' as const },
  { timestamp: '10:00:03', source: 'PostgreSQL', message: 'Database connection failed', type: 'backend' as const },
  { timestamp: '10:00:05', source: 'Redis', message: 'High memory usage detected', type: 'backend' as const },
  { timestamp: '10:00:07', source: 'PostGIS', message: 'Spatial query resolved: 24ms', type: 'spatial' as const },
  { timestamp: '10:00:09', source: 'API Gateway', message: 'p99 latency: 142ms', type: 'backend' as const },
  { timestamp: '10:00:11', source: 'Kafka', message: 'Topic sims.tx ingested: 8,420 msgs/s', type: 'backend' as const },
  { timestamp: '10:00:13', source: 'Redis', message: 'Cache hit ratio: 94.2%', type: 'backend' as const },
  { timestamp: '10:00:15', source: 'PostGIS', message: 'Geofence trigger: SPBU-JKT-0421', type: 'spatial' as const },
  { timestamp: '10:00:17', source: 'API Gateway', message: 'Uptime: 99.998% / 30d', type: 'backend' as const },
  { timestamp: '10:00:19', source: 'CNN Pipeline', message: 'Inference batch: 128 images, 87ms', type: 'ml' as const },
  { timestamp: '10:00:21', source: 'PostgreSQL', message: 'Active connections: 247 / 500', type: 'backend' as const },
  { timestamp: '10:00:23', source: 'PostGIS', message: 'Spatial index rebuilt: 1.2s', type: 'spatial' as const },
  { timestamp: '10:00:25', source: 'API Gateway', message: 'Rate limit: 12.4k req/s', type: 'backend' as const },
  { timestamp: '10:00:27', source: 'RabbitMQ', message: 'Queue depth: 143 messages', type: 'backend' as const },
  { timestamp: '10:00:29', source: 'PostGIS', message: 'Routing engine: 312 nodes optimized', type: 'spatial' as const },
];

export const certifications: Certification[] = [
  { id: 'software-eng', name: 'Software Engineer', issuer: 'HackerRank', date: 'Jun 2026', svgPath: '/certificates/HackerRank - Software Engineer.svg', verifyUrl: 'https://www.hackerrank.com/certificates/77f4057ee8a1' },
  { id: 'go-basic', name: 'Go (Basic)', issuer: 'HackerRank', date: 'Jun 2026', svgPath: '/certificates/HackerRank - Go (Basic).svg', verifyUrl: 'https://www.hackerrank.com/certificates/e295e5b4269a' },
  { id: 'cybersec-pan', name: 'Cybersecurity Foundations', issuer: 'Palo Alto Networks', date: 'Jun 2026', svgPath: '/certificates/Palo Alto - Palo Alto Networks Cybersecurity Foundation.svg', verifyUrl: 'https://coursera.org/share/ed7e031b19a60e4a46600b3cfd89a427' },
  { id: 'cybersec-ibm', name: 'Cybersecurity Fundamentals', issuer: 'IBM', date: 'May 2026', svgPath: '/certificates/IBM - Cybersecurity Fundamentals.svg', verifyUrl: 'https://www.credly.com/badges/1de7e35b-bd7f-4247-a7c8-195fdfa82869' },
  { id: 'js-inter', name: 'JavaScript (Intermediate)', issuer: 'HackerRank', date: 'Sep 2024', svgPath: '/certificates/HackerRank - JavaScript (Intermediate).svg', verifyUrl: 'https://www.hackerrank.com/certificates/11223344556677889900' },
  { id: 'rest-inter', name: 'REST API (Intermediate)', issuer: 'HackerRank', date: 'Sep 2024', svgPath: '/certificates/HackerRank - REST API (Intermediate).svg', verifyUrl: 'https://www.hackerrank.com/certificates/00998877665544332211' },
  { id: 'ptesol', name: 'PTESOL - English Proficiency', issuer: 'Indonesia University of Education', date: 'Jul 2024', svgPath: '/certificates/Balai Bahasa UPI - Sertifikat PTESOL.svg', verifyUrl: 'https://www.indonesiauniversityofeducation.ac.id/certificates/ptesol' },
  { id: 'sql-adv', name: 'SQL (Advanced)', issuer: 'HackerRank', date: 'Dec 2023', svgPath: '/certificates/HackerRank - SQL (Advanced).svg', verifyUrl: 'https://www.hackerrank.com/certificates/a383cf97c20d' },
  { id: 'problem-solving', name: 'Problem Solving (Basic)', issuer: 'HackerRank', date: 'Dec 2023', svgPath: '/certificates/HackerRank - Problem Solving (Basic).svg', verifyUrl: 'https://www.hackerrank.com/certificates/0f41ae8b9802' },
  { id: 'python-ibm', name: 'Python for Data Science, AI & Development', issuer: 'IBM', date: 'Jul 2023', svgPath: '/certificates/IBM - Python for Data Science, AI & Development.svg', verifyUrl: 'https://coursera.org/share/fa5b302d86751723f1ed8d13d72d392e' },
  { id: 'thrive-telkomsel', name: 'THRIVE Tech Enthusiast - Software Development', issuer: 'Telkomsel', date: 'Oct 2022', svgPath: '/certificates/Telkomsel - Software Development.svg', verifyUrl: 'https://drive.google.com/file/d/15Dqgutbyw9NCEYc1XL-tKm9a18nAUzYU/view?usp=sharing' },
  { id: 'js-binar', name: 'JavaScript Back End Developer', issuer: 'Binar Academy', date: 'Jul 2022', svgPath: '/certificates/Binar Academy - Backend JavaScript.svg', verifyUrl: 'https://drive.google.com/file/d/1yFZvwII9wvWKvrsQ8x-FRWPo_SypCH6n/view?usp=sharing' },
  { id: 'node-basic', name: 'Node.js (Basic)', issuer: 'HackerRank', date: 'Jul 2022', svgPath: '/certificates/HackerRank - NodeJS (Basic).svg', verifyUrl: 'https://www.hackerrank.com/certificates/472d386310fc' },
  { id: 'comp-net', name: 'Computer Networking', issuer: 'Google', date: 'Jun 2022', svgPath: '/certificates/Google - Seluk Beluk Jaringan Komputer.svg', verifyUrl: 'https://coursera.org/share/823876392f0efec4939e00c7ae093b95' },
  { id: 'tech-support', name: 'Technical Support Fundamentals', issuer: 'Google', date: 'Jun 2022', svgPath: '/certificates/Google - Dasar-Dasar Dukungan Teknis.svg', verifyUrl: 'https://coursera.org/share/d9923a59b10f0f87d2eaf9fe4427d358' },
];

export const personalInfo = {
  name: 'Dicky Adhi Satria',
  headline: 'Engineering Scalable Backends & Geospatial Systems',
  summary: 'Backend Developer with 2+ years of production experience designing Learning Management System and Geospatial Systems, Microservices Architectures, and ML inference pipelines for enterprise-grade platforms in Indonesia.',
  email: 'dicky2ux@gmail.com',
  phone: '+62 812-8821-4415',
  location: 'Cianjur, West Java, Indonesia',
  linkedin: 'linkedin.com/in/dickyadhisatria',
  github: 'github.com/dickyadhisatria',
  education: {
    institution: 'Universitas Pendidikan Indonesia',
    period: 'Jun 2019 – Aug 2024',
    degree: 'Bachelor of Engineering',
    gpa: '3.44 / 4.00',
    // specific skiprsi nya paru-paru pneumonia
    thesis: 'Lung X-ray disease classification using CNN (EfficientNetB7) in TensorFlow/Keras — achieved high diagnostic accuracy; defended with commendation, Aug 2024.',
  },
};