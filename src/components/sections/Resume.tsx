// components/sections/Resume.tsx

import React from 'react';
import SectionTitle from '../SectionTitle';
import type { Experience, Education, Certification } from '../../types/index';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

interface ResumeProps {
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
}

const Resume: React.FC<ResumeProps> = ({ experiences, education, certifications }) => {
  return (
    <div className="min-h-screen bg-[#0f1115] py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Resume" />

        {/* Experience Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className="bg-[#1a1d23] rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <h4 className="text-xl font-bold text-white">
                        {exp.company} <span className="text-gray-400 font-normal">as {exp.position}</span>
                      </h4>
                    </div>
                    <p className="text-gray-400 ml-6">{exp.location}</p>
                    <p className="text-gray-500 text-sm ml-6">{exp.period}</p>
                  </div>
                </div>
                <ul className="ml-6 space-y-2">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-orange-500 mr-2">-</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education and Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  className="bg-[#1a1d23] rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="text-gray-300">{edu.degree}</p>
                    {edu.field && <p className="text-gray-400 text-sm">focused on {edu.field}</p>}
                    <p className="text-gray-500 text-sm mt-1">{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Nonformal Education</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-[#1a1d23] rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {cert.period} {cert.hours && `( ${cert.hours})`}
                      </p>
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="text-gray-300 mb-2">{cert.description}</p>
                    <p className="text-gray-500 text-sm">{cert.mode}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;