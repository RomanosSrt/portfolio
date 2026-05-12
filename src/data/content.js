// All site content lives here. Edit these to update the page.
// Each component imports what it needs from this file.

export const profile = {
  name: 'Romanos Sarantidis',
  title: 'Junior DevOps Engineer',
  location: 'Athens, Greece',
  tagline: 'Building, deploying, and monitoring software in the cloud.',
  about:
    "I'm a postgraduate student in Informatics at the University of Piraeus and a Junior DevOps Engineer at Mellon Technologies, working on the eSign team. I focus on Azure-based application deployment, monitoring, and integration — and I enjoy the part of engineering where infrastructure, security, and code meet. Quick learner, comfortable in teams, and curious about everything from CI/CD pipelines to smart-card authentication.",
  email: 'rpsarantidis@gmail.com',
  github: 'https://github.com/RomanosSrt',
  linkedin: 'https://www.linkedin.com/in/romanospsarantidis/',
  cvUrl: '/cv.pdf', // Place your CV file at public/cv.pdf
  photo: '/images/profile.png',
}

export const experience = [
  {
    company: 'Mellon Technologies S.A.',
    role: 'Junior DevOps Engineer — eSign Team',
    period: 'Mar 2025 — Present',
    detailed: true,
    bullets: [
      'Deploy and operate client–server e-signature solutions on Microsoft Azure using Docker.',
      'Monitor service health with Azure Application Insights — availability, response times, and error rates — and investigate incidents.',
      'Contribute to Server-Initiated Signature (Pub/Sub) integrations for Salesforce CRM systems.',
      'Support System Integration Testing (SIT) planning and documentation across teams.',
      'Work on eMRTD / smart-card authentication flows (NFC, APDU, PACE) for Greek eID systems.',
    ],
  },
  {
    company: 'Mellon Technologies S.A.',
    role: 'Junior Software Engineer — Back End Team',
    period: 'Oct 2024 — Mar 2025',
    detailed: false,
    bullets: [
      'Built system integrations using ASP.NET Core web apps following SOLID principles.',
    ],
  },
  {
    company: 'PCS Hellas E.E.',
    role: 'Agronomist — Area Manager',
    period: '2023',
    detailed: false,
    bullets: ['Hands-on experience with B2B sales and account management.'],
  },
  {
    company: 'Inditex S.A.',
    role: 'Head Cashier & Sales Consultant',
    period: '2019 — 2022',
    detailed: false,
    bullets: ['Mentored junior cashiers and led shift operations.'],
  },
]

export const projects = [
  {
    name: 'Greek eID PACE Authentication',
    description:
      'Smart-card authentication workflows for Greek eID / eMRTD systems using NFC and APDU communication. Implemented PACE flows in Python with OpenPACE and aligned with ICAO technical specifications.',
    tags: ['Python', 'NFC', 'PACE', 'OpenPACE', 'ICAO'],
  },
  {
    name: 'Azure e-Signature Integration',
    description:
      'Monitoring and reporting analysis for an Azure-based client–server e-signature platform using Application Insights metrics for availability, latency, and error rates.',
    tags: ['Azure', 'Application Insights', 'Docker', 'Monitoring'],
  },
  {
    name: 'LearnAI — Educational Web Platform',
    description:
      'Multi-module educational platform introducing children to AI concepts. Includes interactive quizzes, AI visualizers, TTS narration, and an ethics module, with a responsive dark/light UI.',
    tags: ['Web', 'Education', 'AI', 'Responsive UI'],
  },
  {
    name: 'Movie Recommendation System',
    description:
      'Machine-learning recommendation engine built on IMDb data, combining K-Means clustering, nearest-neighbor analysis, and neural networks. Compared distance metrics for clustering performance.',
    tags: ['Python', 'ML', 'K-Means', 'Neural Networks'],
  },
  {
    name: 'Android TTS Storytelling App',
    description:
      'Android storytelling app in Java with synchronized Text-to-Speech playback and a real-time SeekBar, tuned for cross-device compatibility.',
    tags: ['Android', 'Java', 'TTS'],
  },
]

export const skills = {
  'Cloud & DevOps': [
    'Microsoft Azure',
    'Docker / Podman',
    'Kubernetes',
    'Azure DevOps (CI/CD)',
    'Application Insights',
    'Linux',
  ],
  Languages: ['C#', 'Python', 'Java', 'JavaScript', 'SQL', 'HTML/CSS'],
  'Frameworks & Tools': [
    'ASP.NET Core',
    'Blazor',
    'Android Studio',
    'Git / GitHub',
    'VS Code',
  ],
  Databases: ['SSMS', 'DBeaver', 'SQLite', 'MySQL'],
  'Security & Networking': [
    'NFC / APDU',
    'PACE / BAC',
    'eMRTD / ICAO',
    'TCP/IP',
    'Cisco Packet Tracer',
  ],
}

export const education = [
  {
    school: 'University of Piraeus',
    degree: 'MSc in Informatics',
    period: '2023 — Present',
    note: 'Current GPA: 9.69 / 10',
  },
  {
    school: 'Agricultural University of Athens',
    degree: 'MSc in Natural Resources Development & Agricultural Engineering',
    period: '2013 — 2022',
    note: 'GPA: 7.18',
  },
]
