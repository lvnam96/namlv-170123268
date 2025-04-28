import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const StatItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="text-center md:text-left">
      <p className="text-3xl font-bold text-blue-600">{value}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Đội ngũ DevSoft làm việc"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Về DevSoft</h2>
            <p className="text-gray-600">
              DevSoft là công ty phát triển phần mềm hàng đầu tại Việt Nam, với hơn 10 năm kinh nghiệm trong ngành.
              Chúng tôi tự hào cung cấp các giải pháp phần mềm chất lượng cao cho khách hàng trong nước và quốc tế.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
              <StatItem value="50+" label="Dự án hoàn thành" />
              <StatItem value="30+" label="Chuyên gia phát triển" />
              <StatItem value="100%" label="Khách hàng hài lòng" />
              <StatItem value="8+" label="Năm kinh nghiệm" />
            </div>

            <div>
              <Link href="/about" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                Tìm hiểu thêm về chúng tôi <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
