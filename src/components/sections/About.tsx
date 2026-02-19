import React from 'react';
import {
  Cloud,
  GitBranch,
  Boxes,
  LineChart,
  Terminal,
  Shield,
} from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { About as aboutInfo } from '../../data/about';

const About: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design scalable solutions on AWS, GCP, and Azure',
      color: 'text-cyan-500',
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline',
      description: 'Automated deployments with Jenkins and GitOps',
      color: 'text-green-500',
    },
    {
      icon: Boxes,
      title: 'Container Orchestration',
      description: 'Kubernetes cluster management and optimization',
      gradient: 'text-blue-500',
    },
    {
      icon: LineChart,
      title: 'Monitoring & Observability',
      description: 'Prometheus, Grafana, and ELK Stack setup',
      color: 'text-orange-500',
    },
    {
      icon: Terminal,
      title: 'Infrastructure as Code',
      description: 'Terraform and Ansible automation',
      color: 'text-purple-500',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'DevSecOps and security best practices',
      color: 'text-red-500',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" />

        <div className="mb-12">
          <p className="text-white leading-relaxed text-base font-normal max-w-4xl mx-auto whitespace-pre-wrap">
            {aboutInfo}
          </p>
        </div>

          <h2 className="text-white font-bold text-2xl mb-8">
            What I Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#23272f] border border-[#2a2e38] rounded-2xl p-6  transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6  ${service.color}`} strokeWidth={2} />
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2">
                    {service.title}
                  </h3>

                  <p className="text-[#9ca3af] text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};

export default About;