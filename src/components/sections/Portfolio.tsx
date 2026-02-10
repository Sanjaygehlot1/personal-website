// components/sections/Portfolio.tsx

import React, { useState } from 'react';
import SectionTitle from '../SectionTitle';
import type { Project } from '../../types/index';
import { Box, ExternalLink } from 'lucide-react';

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Certifications', 'Project', 'Badge'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0f1115] py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Portfolio" icon={<Box className="w-8 h-8" />} />

        {/* Filters */}
        <div className="flex items-center space-x-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-2 rounded-lg font-medium transition-all duration-300
                ${activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1d23]'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1d23] rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Category Tag */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg">
                    {project.category}
                  </span>
                </div>

                {/* Project Image */}
                <div className={`h-64 bg-gradient-to-br ${project.bgColor || 'from-gray-700 to-gray-900'} relative overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center space-x-2 hover:bg-blue-700 transition-colors"
                      >
                        <span>{project.category === 'Certifications' ? 'Certificate' : 'Website'}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#23272f] text-cyan-400 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;