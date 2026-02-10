// components/sections/Blog.tsx

import React from 'react';
import SectionTitle from '../SectionTitle';
import type { BlogPost } from '../../types/index';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

interface BlogProps {
  posts: BlogPost[];
}

const Blogs: React.FC<BlogProps> = ({ posts }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return { day, month };
  };

  return (
    <div className="min-h-screen bg-[#0f1115] py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Blog" icon={<BookOpen className="w-8 h-8" />} />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => {
            const { day, month } = formatDate(post.date);
            
            return (
              <div
                key={post.id}
                className="bg-[#1a1d23] rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
              >
                {/* Date Badge and Image */}
                <div className="relative">
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-orange-500 text-white rounded-2xl p-3 text-center min-w-[70px]">
                      <div className="text-2xl font-bold leading-none">{day}</div>
                      <div className="text-sm font-medium">{month}</div>
                    </div>
                  </div>

                  {/* Post Image/Thumbnail */}
                  <div className={`h-64 bg-gradient-to-br ${post.bgColor || 'from-blue-500 to-blue-700'} relative overflow-hidden flex items-center justify-center`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    
                    {/* Tech Stack Icons Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-50">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <div 
                          key={index}
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                        >
                          <span className="text-white font-bold text-xs">{tag.substring(0, 3).toUpperCase()}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Pattern */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                      <div className="absolute bottom-0 right-0 w-16 h-2 bg-white transform rotate-45"></div>
                      <div className="absolute bottom-4 right-0 w-16 h-2 bg-white transform rotate-45"></div>
                      <div className="absolute bottom-8 right-0 w-16 h-2 bg-white transform rotate-45"></div>
                    </div>

                    {/* Branding */}
                    <div className="absolute bottom-4 right-4 text-white text-xs font-medium opacity-60">
                      YOUR.DOMAIN
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#23272f] text-cyan-400 text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors group/btn">
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blog posts available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;