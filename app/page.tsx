import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import { baseUrl } from '@/robots';

const Index = () => {
  return (
    <>
      <title>DevSoft - Giải pháp công nghệ đổi mới và sáng tạo</title>
      <meta
        name="description"
        content="DevSoft cung cấp các giải pháp công nghệ thông minh giúp doanh nghiệp của bạn phát triển trong kỷ nguyên số."
      />
      <meta
        name="keywords"
        content="devsoft, công nghệ, phát triển phần mềm, thiết kế web, dịch vụ đám mây, việt nam"
      />
      <meta property="og:title" content="DevSoft - Giải pháp công nghệ đổi mới và sáng tạo" />
      <meta
        property="og:description"
        content="DevSoft cung cấp các giải pháp công nghệ thông minh giúp doanh nghiệp của bạn phát triển trong kỷ nguyên số."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DevSoft - Giải pháp công nghệ đổi mới và sáng tạo" />
      <meta
        name="twitter:description"
        content="DevSoft cung cấp các giải pháp công nghệ thông minh giúp doanh nghiệp của bạn phát triển trong kỷ nguyên số."
      />
      <link rel="canonical" href={baseUrl} />

      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
};

export default Index;
