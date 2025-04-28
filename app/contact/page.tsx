'use client';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CONTACT_INFO } from '@/components/Footer';
import { baseUrl } from '@/robots';

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Tên phải có ít nhất 2 ký tự.',
  }),
  email: z.string().email({
    message: 'Vui lòng nhập một địa chỉ email hợp lệ.',
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: 'Tin nhắn phải có ít nhất 10 ký tự.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const FAQ_ITEMS = [
  {
    question: 'Quy trình làm việc của DevSoft như thế nào?',
    answer:
      'Chúng tôi làm việc theo quy trình Agile, bắt đầu từ khảo sát yêu cầu, phân tích, thiết kế, phát triển và kiểm thử. Khách hàng được cập nhật liên tục thường xuyên và có thể đóng góp ý kiến trong suốt quá trình.',
  },
  {
    question: 'Chi phí phát triển phần mềm như thế nào?',
    answer:
      'Chi phí sẽ phụ thuộc vào quy mô và độ phức tạp của dự án. Chúng tôi sẽ cung cấp báo giá chi tiết sau khi tìm hiểu yêu cầu cụ thể của dự án.',
  },
  {
    question: 'Thời gian hoàn thành dự án trung bình là bao lâu?',
    answer:
      'Thời gian phát triển thường từ 2-6 tháng tùy theo quy mô dự án. Chúng tôi sẽ đưa ra lộ trình chi tiết sau khi phân tích yêu cầu của bạn.',
  },
];

const ContactItem = ({ icon: Icon, title, details }) => {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
        <Icon className="text-blue-600" size={24} />
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-800">{title}</h4>
        <p className="text-gray-600">{details}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const now = new Date();
      await Promise.all([
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NOTIFY_STAFF as string,
          {
            ...data,
            time: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`,
          }
        ),
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONFIRM_USER as string,
          {
            ...data,
          }
        ),
      ]);

      toast({
        title: 'Gửi tin nhắn thành công!',
        description: 'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.',
      });

      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Không thể gửi tin nhắn',
        description: 'Đã xảy ra lỗi. Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Liên hệ | DevSoft - Giải pháp công nghệ đổi mới</title>
        <meta
          name="description"
          content="Liên hệ với DevSoft để được tư vấn miễn phí về giải pháp phần mềm phù hợp cho doanh nghiệp của bạn."
        />
        <meta name="keywords" content="liên hệ, devsoft, tư vấn phần mềm, hỗ trợ khách hàng, phát triển phần mềm" />
        <link rel="canonical" href={`${baseUrl}/contact`} />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Liên hệ với DevSoft</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hãy để chúng tôi lắng nghe và hỗ trợ bạn trong việc xây dựng giải pháp phần mềm phù hợp cho doanh nghiệp
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-start md:justify-center items-center">
              <div className="md:flex flex-col items-center">
                <ContactItem icon={MapPin} title="Địa chỉ" details={CONTACT_INFO.address} />
              </div>
              <div className="md:flex flex-col items-center">
                <ContactItem icon={Phone} title="Điện thoại" details={CONTACT_INFO.phone} />
              </div>
              <div className="md:flex flex-col items-center">
                <ContactItem icon={Mail} title="Email" details={CONTACT_INFO.email} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-xs">
                <h2 className="text-2xl font-semibold mb-6">Gửi tin nhắn cho chúng tôi</h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Họ và tên</FormLabel>
                          <FormControl>
                            <Input placeholder="Nhập họ và tên của bạn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Số điện thoại (không bắt buộc)</FormLabel>
                            <FormControl>
                              <Input placeholder="Nhập số điện thoại" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nội dung tin nhắn</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Nhập nội dung tin nhắn của bạn"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Câu hỏi thường gặp</h2>
              <p className="text-gray-600">Những câu hỏi khách hàng thường quan tâm</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {FAQ_ITEMS.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
