import { Check } from 'lucide-react';
import Link from 'next/link';
import { baseUrl } from '@/robots';
import { services, workflowSteps } from '@/data/services';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xs border border-gray-100 h-full flex flex-col">
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <div className="mt-auto">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-blue-600 mt-1 mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface WorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="mb-4 text-blue-600 flex justify-center">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <title>Dịch vụ | DevSoft - Giải pháp công nghệ đổi mới</title>
      <meta
        name="description"
        content="DevSoft cung cấp các dịch vụ phát triển phần mềm chuyên nghiệp, từ ứng dụng web đến di động, giải pháp đám mây và an toàn thông tin."
      />
      <meta name="keywords" content="dịch vụ phần mềm, phát triển web, ứng dụng di động, đám mây, AI, bảo mật" />
      <link rel="canonical" href={`${baseUrl}/services`} />

      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Giải pháp phần mềm toàn diện cho doanh nghiệp của bạn
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              DevSoft cung cấp các dịch vụ phát triển phần mềm chuyên nghiệp, từ ứng dụng web đến di động, giúp doanh
              nghiệp của bạn phát triển trong kỷ nguyên số.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Dịch vụ của chúng tôi</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                DevSoft cung cấp đa dạng các dịch vụ phát triển phần mềm chất lượng cao để đáp ứng nhu cầu kinh doanh
                của bạn
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quy trình làm việc</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Quy trình làm việc chuyên nghiệp, minh bạch giúp đảm bảo chất lượng và tiến độ dự án
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {workflowSteps.map((step, index) => (
                  <WorkflowStep key={index} icon={step.icon} title={step.title} description={step.description} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Bắt đầu dự án của bạn ngay hôm nay</h2>
              <p className="text-blue-100 mb-8">
                Hãy liên hệ với chúng tôi để được tư vấn miễn phí về giải pháp phù hợp nhất cho doanh nghiệp của bạn
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md transition-colors font-medium"
              >
                Liên hệ tư vấn
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
