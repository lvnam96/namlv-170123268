import type { FC } from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  slug: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ image, title, description, technologies, slug }) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block bg-white shadow-sm hover:shadow-md rounded-lg overflow-hidden border border-gray-200 transition-shadow duration-300"
    >
      <div className="h-48 bg-gray-600 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
