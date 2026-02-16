
import type { PersonalInfo, Experience, Education, Certification, Project, BlogPost, SkillsInfo } from '../types/index';

export const skillsData: SkillsInfo = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux'],
  backend: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
  cloud: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Vercel', 'Netlify'],
}

export const personalInfo: PersonalInfo = {
  name: 'Sanjay Gehlot',
  title: 'Full Stack Developer | DevOps | Cloud Engineer',
  email: 'email@example.com',
  location: 'Mumbai, IND',
  avatar: '/avatar.jpg',
  cvUrl: '/resume.pdf',
  status: 'Open for opportunities',
  bio: 'Passionate Full Stack Developer with expertise in DevOps and Cloud Engineering. Specialized in building scalable applications and automating infrastructure.',
  socialLinks: [
    { icon: 'facebook', url: 'https://facebook.com/yourprofile', label: 'Facebook' },
    { icon: 'twitter', url: 'https://twitter.com/yourprofile', label: 'Twitter' },
    { icon: 'instagram', url: 'https://instagram.com/yourprofile', label: 'Instagram' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/yourprofile', label: 'GitHub' },
    { icon: 'portfolio', url: 'https://yourportfolio.com', label: 'Portfolio' },
  ],
};

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Company',
    position: 'Senior Full Stack Developer',
    location: 'City, Country',
    period: 'Jan 2023 - Present',
    responsibilities: [
      'Developed and maintained microservices architecture using Node.js and React',
      'Implemented CI/CD pipelines using Jenkins and GitHub Actions',
      'Managed cloud infrastructure on AWS and GCP',
      'Led a team of 5 developers in agile environment',
      'Optimized application performance resulting in 40% faster load times',
    ],
  },
  {
    id: '2',
    company: 'Previous Company',
    position: 'DevOps Engineer',
    location: 'City, Country',
    period: 'Jun 2020 - Dec 2022',
    responsibilities: [
      'Automated infrastructure provisioning using Terraform and Ansible',
      'Set up monitoring and logging with ELK stack and Prometheus',
      'Containerized applications using Docker and orchestrated with Kubernetes',
      'Reduced deployment time by 60% through automation',
    ],
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University Name',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    location: 'City, Country',
    period: 'Sep 2015 - Jun 2019',
  },
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    period: 'Jul 2023 - Jul 2026',
    hours: '40 Hours',
    description: 'Professional certification for designing distributed systems on AWS',
    mode: 'Online',
  },
  {
    id: '2',
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    period: 'May 2023 - May 2026',
    hours: '35 Hours',
    description: 'Certification for Kubernetes administration and troubleshooting',
    mode: 'Online',
  },
  {
    id: '3',
    name: 'Google Cloud Professional DevOps Engineer',
    issuer: 'Google Cloud',
    period: 'Mar 2023 - Mar 2025',
    hours: '30 Hours',
    description: 'Professional certification for implementing DevOps practices on GCP',
    mode: 'Online',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with microservices architecture',
    image: '/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes'],
    link: 'https://github.com/yourprofile/ecommerce',
    category: 'Project',
    bgColor: 'from-blue-400 to-blue-600',
  },
  {
    id: '2',
    title: 'Cloud Infrastructure Automation',
    description: 'Automated cloud infrastructure provisioning using IaC',
    image: '/projects/infrastructure.jpg',
    tags: ['Terraform', 'AWS', 'Python', 'Ansible'],
    link: 'https://github.com/yourprofile/infrastructure',
    category: 'Project',
    bgColor: 'from-purple-400 to-indigo-600',
  },
  {
    id: '3',
    title: 'AWS Solutions Architect',
    description: 'Completed AWS Solutions Architect certification',
    image: '/certs/aws-cert.jpg',
    tags: ['AWS', 'Cloud', 'Architecture'],
    category: 'Certifications',
    bgColor: 'from-cyan-400 to-cyan-600',
  },
  {
    id: '4',
    title: 'Kubernetes Administrator',
    description: 'Certified Kubernetes Administrator',
    image: '/certs/cka-cert.jpg',
    tags: ['Kubernetes', 'DevOps', 'Cloud Native'],
    category: 'Certifications',
    bgColor: 'from-orange-400 to-orange-600',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Learn how to design and implement microservices architecture using Node.js and Docker',
    date: '2024-01-15',
    image: '/blog/microservices.jpg',
    tags: ['Node.js', 'Microservices', 'Docker'],
    bgColor: 'from-blue-500 to-blue-700',
  },
  {
    id: '2',
    title: 'Infrastructure as Code with Terraform',
    excerpt: 'A comprehensive guide to managing cloud infrastructure using Terraform',
    date: '2024-01-10',
    image: '/blog/terraform.jpg',
    tags: ['Terraform', 'AWS', 'IaC'],
    bgColor: 'from-green-500 to-green-700',
  },
  {
    id: '3',
    title: 'Kubernetes Best Practices',
    excerpt: 'Essential best practices for deploying and managing Kubernetes clusters',
    date: '2024-01-05',
    image: '/blog/kubernetes.jpg',
    tags: ['Kubernetes', 'DevOps', 'Best Practices'],
    bgColor: 'from-purple-500 to-purple-700',
  },
];