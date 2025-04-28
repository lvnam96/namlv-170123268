'use client';

import { useCallback, useEffect, useState, type FC } from 'react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, useCarouselContext } from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? 'currentColor' : 'none'}
          className={i < rating ? 'text-amber-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

const TestimonialCard: FC<TestimonialProps> = ({ quote, author, position, company, rating }) => {
  return (
    <div className="h-full bg-white p-6 rounded-lg shadow-xs border border-gray-100">
      <StarRating rating={rating} />
      <p className="text-gray-600 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold">{author}</h4>
          <p className="text-gray-600 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote:
      'DevSoft đã giúp chúng tôi phát triển một hệ thống quản lý doanh nghiệp hoàn chỉnh. Đội ngũ chuyên nghiệp, hỗ trợ tận tình và sản phẩm chất lượng cao.',
    author: 'Nguyễn Văn An',
    position: 'Giám đốc công nghệ',
    company: 'TechVina',
    rating: 5,
  },
  {
    quote:
      'Ứng dụng di động do DevSoft phát triển đã giúp công ty chúng tôi tăng doanh số bán hàng lên 40%. Rất hài lòng về sự hợp tác này.',
    author: 'Trần Thị Bình',
    position: 'Giám đốc marketing',
    company: 'ShopNow',
    rating: 5,
  },
  {
    quote:
      'DevSoft đã hỗ trợ chúng tôi chuyển đổi số thành công. Đội ngũ kỹ thuật chuyên nghiệp và luôn đáp ứng tốt các yêu cầu của chúng tôi.',
    author: 'Lê Minh Cường',
    position: 'Giám đốc',
    company: 'FinTech Solutions',
    rating: 4.5,
  },
  {
    quote: 'Dịch vụ tư vấn IT của DevSoft đã giúp chúng tôi tiết kiệm được rất nhiều chi phí vận hành.',
    author: 'Phạm Thị Dung',
    position: 'Giám đốc tài chính',
    company: 'LogiViet',
    rating: 5,
  },
  {
    quote:
      'Đội ngũ DevSoft rất tận tâm và chuyên nghiệp. Họ không chỉ cung cấp giải pháp mà còn đào tạo nhân viên chúng tôi sử dụng hiệu quả.',
    author: 'Hoàng Văn Em',
    position: 'Trưởng phòng IT',
    company: 'ManuTech',
    rating: 5,
  },
  {
    quote:
      'Đội ngũ DevSoft không chỉ cung cấp giải pháp mà còn là đối tác tin cậy trong việc phát triển kinh doanh của chúng tôi.',
    author: 'Nguyễn Thị Hoa',
    position: 'Giám đốc kinh doanh',
    company: 'BizGrowth',
    rating: 5,
  },
  {
    quote:
      'Chúng tôi đánh giá cao khả năng hiểu và đáp ứng nhu cầu của DevSoft. Họ luôn mang đến những giải pháp sáng tạo.',
    author: 'Trần Văn Minh',
    position: 'CTO',
    company: 'SmartTech',
    rating: 5,
  },
];
const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Những đánh giá từ khách hàng đã hợp tác với DevSoft</p>
        </div>

        <div className="mx-auto max-w-7xl">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[AutoPlay({ delay: 4000, stopOnInteraction: false })]}
          >
            <TestimonialsCarousel />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialsCarousel = () => {
  const { api: emblaApi } = useCarouselContext();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const handler = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', handler);

    return () => {
      emblaApi.off('select', handler);
    };
  }, [emblaApi]);

  return (
    <>
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
              index === selectedIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};
