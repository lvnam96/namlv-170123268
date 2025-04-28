import Link from 'next/link';
import CTA from '@/components/CTA';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
// import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
// import remarkGfm from 'remark-gfm';
import ProjectCard from '@/components/ProjectCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { baseUrl } from '@/robots';

export async function generateStaticParams() {
  return projects.map((proj) => ({ slug: proj.slug }));
}

const ProjectDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <title>Chi tiết dự án | DevSoft - Giải pháp công nghệ đổi mới</title>
        <meta name="description" content="Mô tả dự án" />
        <meta name="keywords" content="devsoft, dự án" />
        <link rel="canonical" href={`${baseUrl}/projects`} />

        <div className="container mx-auto px-4 pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-6">Dự án không tìm thấy</h1>
          <p className="mb-8 text-gray-600">Dự án bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
          <Link href="/projects" className="inline-flex items-center text-blue-600 font-medium">
            <ArrowLeft size={16} className="mr-2" /> Quay lại trang dự án
          </Link>
        </div>
      </>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id && p.category === project.category);

  return (
    <>
      <title>{project.title} | DevSoft - Giải pháp công nghệ đổi mới</title>
      <meta name="description" content={project.shortDescription} />
      <meta name="keywords" content={`${project.title}, devsoft, dự án, ${project.technologies.join(', ')}`} />
      <link rel="canonical" href={`${baseUrl}/projects/${project.slug}`} />

      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <Link href="/projects" className="inline-flex items-center text-blue-600 font-medium">
                <ArrowLeft size={16} className="mr-2" /> Quay lại trang dự án
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-gray-600 mb-8">{project.fullDescription}</p>

                <div className="bg-white p-6 rounded-lg shadow-xs mb-6">
                  <h2 className="text-xl font-semibold mb-4">Thông tin dự án</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-1">Khách hàng:</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Thời gian thực hiện:</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Ngày hoàn thành:</p>
                      <p className="font-medium">{project.completionDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Loại dự án:</p>
                      <p className="font-medium capitalize">{project.category}</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-4">Công nghệ sử dụng</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                {/* <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-md" /> */}
                <Carousel className="rounded-lg overflow-hidden">
                  <CarouselContent>
                    <CarouselItem>
                      <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-md" />
                    </CarouselItem>
                    {project.additionalImages?.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Project Content */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-bold prose-img:rounded-lg prose-img:shadow-md">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
              >
                {project.content}
              </ReactMarkdown>
            </div>
          </div>
        </section> */}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Dự án liên quan</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.id !== project.id && p.category === project.category)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    // <div
                    //   key={relatedProject.id}
                    //   className="bg-white shadow-xs rounded-lg overflow-hidden border border-gray-200"
                    // >
                    //   <div className="h-48 overflow-hidden">
                    //     <img
                    //       src={relatedProject.image}
                    //       alt={relatedProject.title}
                    //       className="w-full h-full object-cover"
                    //     />
                    //   </div>
                    //   <div className="p-5">
                    //     <h3 className="text-xl font-semibold mb-2">{relatedProject.title}</h3>
                    //     <p className="text-gray-600 mb-4">{relatedProject.shortDescription}</p>
                    //     <Link
                    //       href={`/projects/${relatedProject.slug}`}
                    //       className="inline-block text-blue-600 hover:underline font-medium"
                    //     >
                    //       Xem chi tiết
                    //     </Link>
                    //   </div>
                    // </div>
                    <ProjectCard
                      key={relatedProject.id}
                      {...relatedProject}
                      description={relatedProject.shortDescription}
                    />
                  ))}
              </div>
            </div>
          </section>
        )}

        <CTA />
      </main>
    </>
  );
};

export default ProjectDetail;
