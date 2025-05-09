'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | Project['category']>('all');

  const projects: Project[] = [
    {
      id: 'eatery-pos',
      title: 'Restaurant Management System',
      description: 'Modern POS and inventory management system inspired by family eatery needs. Streamlines operations with real-time tracking and reporting.',
      imageSrc: '/images/projects/restaurant-pos.jpg',
      imageAlt: 'Restaurant Management System Dashboard',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
      category: 'business',
      link: 'https://restaurant-pos.eltonjohnkyeremeh.com',
      githubLink: 'https://github.com/eltonjohnkyeremeh/restaurant-pos',
    },
    {
      id: 'campus-tools',
      title: 'Campus Process Automation',
      description: 'Suite of tools that digitized manual administrative processes, reducing processing time by 60% and improving accuracy.',
      imageSrc: '/images/projects/campus-tools.jpg',
      imageAlt: 'Campus Management Dashboard',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      category: 'business',
      link: 'https://campus-tools.eltonjohnkyeremeh.com',
      githubLink: 'https://github.com/eltonjohnkyeremeh/campus-tools',
    },
    {
      id: 'northland-analytics',
      title: 'Northland Analytics Platform',
      description: 'Cloud-based business intelligence platform providing real-time insights for West African businesses.',
      imageSrc: '/images/projects/northland-analytics.jpg',
      imageAlt: 'Analytics Dashboard',
      technologies: ['React', 'Python', 'AWS', 'TensorFlow'],
      category: 'cloud',
      link: 'https://northland-analytics.com',
      githubLink: 'https://github.com/eltonjohnkyeremeh/northland-analytics',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming business challenges into efficient digital solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'frontend', 'business', 'cloud'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as typeof activeCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Project Image */}
              <div className="aspect-video relative">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}