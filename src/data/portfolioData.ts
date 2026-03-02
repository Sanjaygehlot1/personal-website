
import type { PersonalInfo, Project, SkillsInfo } from '../types/index';

export const skillsData: SkillsInfo = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux'],
  backend: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
  cloud: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Vercel', 'Netlify'],
}


export const personalInfo: PersonalInfo = {
  name: 'Sanjay Gehlot',
  title: 'Full Stack Developer | DevOps | Cloud Engineer',
  email: 'sanjaygehlot1695@gmail.com',
  location: 'Mumbai, IND',
  avatar: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771946050/mypic_yc81zl.jpg',
  cvUrl: 'https://drive.google.com/file/d/1KBKKv0jYCGCxZ0q9h416DRk_bIyPVQmN/view?usp=drivesdk',
  status: 'AWS Intern',
  bio: 'Passionate Full Stack Developer with expertise in DevOps and Cloud Engineering. Specialized in building scalable applications and automating infrastructure.',
  socialLinks: [
    { icon: 'instagram', url: 'https://www.instagram.com/sanjay_.095', label: 'Instagram' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/sanjay-gehlot-62b7a0301/', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/Sanjaygehlot1', label: 'GitHub' },
  ],
};

export const projectsInfo: Project[] = [
  { id: 1, category: 'Project', title: 'Multi-Tier Cloud Infrastructure Automation', techStack: ['AWS', 'Jenkins', 'Terraform', 'Docker'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771943294/AWs_1_cug030.png', link: 'https://github.com/Sanjaygehlot1/terraform-jenkins-aws-cicd', buttonTitle: 'Github' },

  { id: 2, category: 'Project', title: 'Flixora | Video Streaming Platform', techStack: ['MongoDB', 'Expressjs', 'Reactjs', 'Nodejs'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771941616/Screenshot_218_u5om5l.png', link: 'https://flixora.vercel.app/', buttonTitle: 'Website' },

  { id: 3, category: 'Certification', title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate', image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1772107954/Screenshot_2026-02-26_174153_gl40xw.png', link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9A3207B59E9FA66D23E2FDB08F41DA2E5B3D07EAFA983514BCE960EAAA791DE5', buttonTitle: 'Verify' },

  
  { id: 4, category: 'Project', title: 'OrgPulse | A github Organisation CLI Tool', techStack: ['Github APIs', 'Docker', 'Commander', 'Nock', 'P-limit'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771940348/Screenshot_214_nzheoa.png', link: 'https://github.com/Sanjaygehlot1/ReferMe', buttonTitle: 'Github' },

  { id: 5, category: 'Project', title: 'X-Connect | Anonymous Messaging App', techStack: ['Nextjs', 'Reactjs', 'MongoDB', 'SSR' , 'ShadCN'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771941610/Screenshot_217_phpxiv.png', link: 'https://x-connect-tan.vercel.app/', buttonTitle: 'Website' },

  { id: 6, category: 'Project', title: 'ReferIt | A refer credit App', techStack: ['Nextjs', 'Reactjs', 'MongoDB', 'SSR', 'ShadCN'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771940348/Screenshot_214_nzheoa.png', link: 'https://github.com/Sanjaygehlot1/ReferMe', buttonTitle: 'Github'},
 
  { id: 7, category: 'Badge', title: 'LeetCode | 50 Days Badge', techStack: ['LeetCode', 'DSA'], image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1771943496/download_fff07y.png', link: 'https://leetcode.com/u/Sanjay0907/', buttonTitle: 'Open' },

  { id: 8, category: 'Badge', title: 'OCI Certified Assosiate Badge', image: 'https://res.cloudinary.com/dh9bwsdjp/image/upload/v1772107938/OCI25FNDCFA_q7trpc.jpg', link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9A3207B59E9FA66D23E2FDB08F41DA2E5B3D07EAFA983514BCE960EAAA791DE5', buttonTitle: 'Open' },





]




