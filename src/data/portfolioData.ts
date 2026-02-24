
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
  avatar: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771946050/mypic_yc81zl.jpg',
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

export const projectsInfo: Project[] = [
  { id: 1, category: 'Project', title: 'Multi-Tier Cloud Infrastructure Automation', techStack: ['AWS', 'Jenkins', 'Terraform', 'Docker'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771943294/AWs_1_cug030.png', link: 'https://github.com/Sanjaygehlot1/terraform-jenkins-aws-cicd' },

  { id: 2, category: 'Project', title: 'Flixora | Video Streaming Platform', techStack: ['MongoDB', 'Expressjs', 'Reactjs', 'Nodejs'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771941616/Screenshot_218_u5om5l.png', link: 'https://flixora.vercel.app/' },

  
  { id: 5, category: 'Project', title: 'OrgPulse | A github Organisation CLI Tool', techStack: ['Github APIs', 'Docker', 'Commander', 'Nock', 'P-limit'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771940348/Screenshot_214_nzheoa.png', link: 'https://github.com/Sanjaygehlot1/ReferMe' },

  { id: 3, category: 'Project', title: 'X-Connect | Anonymous Messaging App', techStack: ['Nextjs', 'Reactjs', 'MongoDB', 'SSR' , 'ShadCN'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771941610/Screenshot_217_phpxiv.png', link: 'https://x-connect-tan.vercel.app/' },

  { id: 4, category: 'Project', title: 'ReferIt | A refer credit App', techStack: ['Nextjs', 'Reactjs', 'MongoDB', 'SSR', 'ShadCN'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771940348/Screenshot_214_nzheoa.png', link: 'https://github.com/Sanjaygehlot1/ReferMe' },
 
  { id: 6, category: 'Badges', title: 'LeetCode | 50 Days Badge', techStack: ['LeetCode', 'DSA'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771943496/download_fff07y.png', link: 'https://leetcode.com/u/Sanjay0907/' },





]




