
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





