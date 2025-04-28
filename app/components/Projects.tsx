'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // Get only the first 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Dự án tiêu biểu</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Khám phá các dự án nổi bật mà chúng tôi đã thực hiện cho khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.shortDescription}
              technologies={project.technologies}
              slug={project.slug}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
            Xem tất cả dự án <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
