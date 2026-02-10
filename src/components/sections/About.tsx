// components/sections/About.tsx

import React from 'react';
import SectionTitle from '../SectionTitle';
import type { PersonalInfo } from '../../types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  const skills = {
    frontend: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB'],
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Vercel', 'Netlify'],
  };

  return (
    <div className="min-h-screen bg-[#0f1115] py-16 px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle title="About Me" />

        {/* Bio Section - Exact text from reference */}
        <div className="mb-12">
          <p className="text-[#9ca3af] leading-[1.9] text-[16px] font-light">
            A passionate and skilled DevOps, SRE, and Cloud Engineer with a strong background in infrastructure provisioning,
            automation, and monitoring. I have completed and been certified by Google Cloud for Associate Cloud Engineer and AWS
            for AWS Certified Cloud Practitioner.
          </p>
          
          <p className="text-[#9ca3af] leading-[1.9] text-[16px] font-light mt-6">
            Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and
            ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on AWS and GCP,
            as well as maintaining high availability with Kubernetes-based container cluster. Successfully implemented monitoring and
            logging tools like ELK, Grafana, and Datadog to ensure comprehensive visibility into system performance and implemented
            GitOps for managing infrastructure as code. My expertise also includes integrating automation testing into the CI/CD
            pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Frontend Skills */}
          <div className="bg-[#1a1d23] rounded-3xl p-10 border border-[#2a2e38] hover:border-[#06b6d4]/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#06b6d4] to-[#2563eb] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-[19px] font-bold text-white">Frontend Development</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2.5 bg-[#23272f] text-[#06b6d4] rounded-lg text-[13px] font-medium hover:bg-[#06b6d4]/10 transition-colors border border-[#2a2e38]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-[#1a1d23] rounded-3xl p-10 border border-[#2a2e38] hover:border-[#10b981]/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="text-[19px] font-bold text-white">Backend Development</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2.5 bg-[#23272f] text-[#10b981] rounded-lg text-[13px] font-medium hover:bg-[#10b981]/10 transition-colors border border-[#2a2e38]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps Skills */}
          <div className="bg-[#1a1d23] rounded-3xl p-10 border border-[#2a2e38] hover:border-[#f97316]/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f97316] to-[#dc2626] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-[19px] font-bold text-white">DevOps & CI/CD</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.devops.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2.5 bg-[#23272f] text-[#f97316] rounded-lg text-[13px] font-medium hover:bg-[#f97316]/10 transition-colors border border-[#2a2e38]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud Skills */}
          <div className="bg-[#1a1d23] rounded-3xl p-10 border border-[#2a2e38] hover:border-[#8b5cf6]/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-[19px] font-bold text-white">Cloud Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.cloud.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2.5 bg-[#23272f] text-[#8b5cf6] rounded-lg text-[13px] font-medium hover:bg-[#8b5cf6]/10 transition-colors border border-[#2a2e38]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="bg-[#1a1d23] rounded-3xl p-10 border border-[#2a2e38]">
          <h3 className="text-[26px] font-bold text-white mb-8">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#06b6d4] to-[#2563eb] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">💻</span>
              </div>
              <h4 className="text-white text-[17px] font-semibold mb-2.5">Full Stack Development</h4>
              <p className="text-[#9ca3af] text-[14px] leading-relaxed font-light">Building responsive and scalable web applications from frontend to backend</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#dc2626] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="text-white text-[17px] font-semibold mb-2.5">DevOps Engineering</h4>
              <p className="text-[#9ca3af] text-[14px] leading-relaxed font-light">Automating deployments and managing CI/CD pipelines</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">☁️</span>
              </div>
              <h4 className="text-white text-[17px] font-semibold mb-2.5">Cloud Architecture</h4>
              <p className="text-[#9ca3af] text-[14px] leading-relaxed font-light">Designing and implementing cloud-native solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;