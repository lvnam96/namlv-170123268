import Link from 'next/link';

const CTA = () => {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Bạn có dự án cần triển khai?</h2>
          <p className="text-blue-100 mb-8">
            Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về giải pháp phần mềm phù hợp cho doanh
            nghiệp của bạn.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md transition-colors font-medium"
            >
              Liên hệ ngay
            </Link>
            <Link
              href="/services"
              className="border border-white text-white hover:bg-blue-500 px-6 py-3 rounded-md transition-colors font-medium"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
