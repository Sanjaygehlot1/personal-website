
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
  avatar: './mypic.jpeg',
  cvUrl: 'https://drive.google.com/file/d/1FMu5SsHnfg9W9BccKadadMrsLGNIMrfg/view?usp=drive_link',
  status: 'Open for opportunities',
  bio: 'Passionate Full Stack Developer with expertise in DevOps and Cloud Engineering. Specialized in building scalable applications and automating infrastructure.',
  socialLinks: [
    { icon: 'X', url: 'https://x.com/', label: 'Twitter' },
    { icon: 'instagram', url: 'https://instagram.com/', label: 'Instagram' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/sanjay-gehlot-62b7a0301/', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/Sanjaygehlot1', label: 'GitHub' },
    { icon: 'portfolio', url: 'https://yourportfolio.com', label: 'Portfolio' },
  ],
};





