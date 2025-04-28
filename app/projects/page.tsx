'use client';

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { cn } from '@/lib/utils';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { baseUrl } from '@/robots';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'ecommerce' | 'enterprise';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, technologies, slug }) => {
  return (
    <div className="bg-white shadow-xs rounded-lg overflow-hidden border border-gray-200">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${slug}`} className="inline-block text-blue-600 hover:underline font-medium">
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Tất cả' },
    { id: 'web', label: 'Web App' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'enterprise', label: 'Enterprise' },
  ];

  const filteredProjects =
    activeCategory === 'all' ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Dự án tiêu biểu | DevSoft - Giải pháp công nghệ đổi mới</title>
        <meta
          name="description"
          content="Khám phá các dự án thành công mà DevSoft đã thực hiện cho khách hàng trong và ngoài nước."
        />
        <meta name="keywords" content="dự án phần mềm, portfolio công nghệ, devsoft, web app, mobile app, e-commerce" />
        <link rel="canonical" href={`${baseUrl}/projects`} />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Dự án tiêu biểu của DevSoft</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Khám phá những dự án thành công mà chúng tôi đã thực hiện cho khách hàng trong và ngoài nước
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
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
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Câu chuyện thành công</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Khám phá những câu chuyện thành công từ khách hàng của chúng tôi
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-xs mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                      alt="CEO của Công ty CP Thương mại Điện tử ABC"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Công ty CP Thương mại Điện tử ABC</h3>
                    <p className="text-gray-600 text-sm">Tăng trưởng doanh thu 200% sau 6 tháng</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "DevSoft đã giúp chúng tôi xây dựng nền tảng thương mại điện tử hiện đại, tối ưu trải nghiệm người
                  dùng và tăng tỷ lệ chuyển đổi."
                </blockquote>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-xs">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                      alt="Giám đốc công nghệ của Tập đoàn Y tế XYZ"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Tập đoàn Y tế XYZ</h3>
                    <p className="text-gray-600 text-sm">Cải thiện 50% hiệu quả quản lý</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "Hệ thống quản lý y tế thông minh do DevSoft phát triển đã giúp chúng tôi tối ưu hóa quy trình, tiết
                  kiệm thời gian và nâng cao chất lượng dịch vụ cho bệnh nhân."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
};

export default Projects;
