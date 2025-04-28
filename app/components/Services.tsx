'use client';

import { ArrowRight, Code, Smartphone, Cloud } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xs border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Dịch vụ của chúng tôi</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            DevSoft cung cấp đa dạng các dịch vụ phát triển phần mềm chất lượng cao để đáp ứng nhu cầu kinh doanh của
            bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Code size={32} className="text-blue-600" />}
            title="Phát triển phần mềm"
            description="Chúng tôi phát triển các ứng dụng web, di động và desktop chất lượng cao, tùy chỉnh theo nhu cầu của doanh nghiệp."
          />

          <ServiceCard
            icon={<Smartphone size={32} className="text-blue-600" />}
            title="Phát triển ứng dụng di động"
            description="Xây dựng ứng dụng di động đa nền tảng cho iOS và Android với trải nghiệm người dùng tối ưu."
          />

          <ServiceCard
            icon={<Cloud size={32} className="text-blue-600" />}
            title="Giải pháp đám mây"
            description="Tư vấn và triển khai các giải pháp đám mây an toàn, linh hoạt và hiệu quả cho doanh nghiệp."
          />
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
            Xem tất cả dịch vụ <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
