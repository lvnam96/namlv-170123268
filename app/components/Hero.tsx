import Link from 'next/link';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Giải pháp phần mềm chuyên nghiệp cho doanh nghiệp
            </h1>
            <p className="text-lg text-gray-600">
              Chúng tôi xây dựng các sản phẩm phần mềm chất lượng cao, đáp ứng nhu cầu kinh doanh của bạn
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Liên hệ ngay
              </Link>
              <Link
                href="/services"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md transition-colors"
              >
                Xem dịch vụ
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Người đang làm việc trên máy tính"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
