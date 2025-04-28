import { Code, Smartphone, Cloud, Shield, Brain, LifeBuoy } from 'lucide-react';

export const workflowSteps = [
  {
    icon: (
      <div className="bg-blue-100 p-3 rounded-full">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 15C21 15.5523 20.5523 16 20 16H13C12.4477 16 12 15.5523 12 15V15C12 14.4477 12.4477 14 13 14H20C20.5523 14 21 14.4477 21 15V15ZM21 19C21 19.5523 20.5523 20 20 20H13C12.4477 20 12 19.5523 12 19V19C12 18.4477 12.4477 18 13 18H20C20.5523 18 21 18.4477 21 19V19Z"
            fill="currentColor"
          ></path>
          <path
            d="M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6Z"
            fill="currentColor"
          ></path>
          <path
            d="M9.55279 12.9728C9.1995 12.3684 8.63323 11.9241 7.95487 11.7346C7.49161 11.5975 7.00594 11.5558 6.52615 11.5723C5.28195 11.622 4.13895 12.282 3.41795 13.359C2.78979 14.2914 2.40591 15.3897 2.33107 16.5333L2 21.5L6.95219 21.8126C7.92226 21.867 8.8956 21.7215 9.81246 21.3849C10.6577 21.0787 11.4433 20.6199 12.1099 20.0328L12.5577 19.637C12.9356 19.3045 13 18.7895 13 18.2518V17.5C13 16.1193 12.5521 14.8085 11.4126 14C10.9354 13.651 10.1251 13.3402 9.55279 12.9728Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    ),
    title: 'Tư vấn & Phân tích',
    description: 'Tìm hiểu yêu cầu và đề xuất giải pháp phù hợp',
  },
  {
    icon: (
      <div className="bg-blue-100 p-3 rounded-full">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.56301 4L3.00001 4L3.00001 20L8.56301 20C8.69997 20 8.83321 19.9473 8.93196 19.8485L16.5 12.2806L8.93196 4.71152C8.83321 4.61278 8.69997 4.56 8.56301 4.56L8.56301 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M13 7L19 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M13 17L19 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    ),
    title: 'Thiết kế',
    description: 'Thiết kế UI/UX và kiến trúc hệ thống',
  },
  {
    icon: (
      <div className="bg-blue-100 p-3 rounded-full">
        <Code size={24} color="currentColor" />
      </div>
    ),
    title: 'Phát triển',
    description: 'Lập trình và kiểm thử kỹ lưỡng',
  },
  {
    icon: (
      <div className="bg-blue-100 p-3 rounded-full">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      </div>
    ),
    title: 'Triển khai',
    description: 'Đưa vào sử dụng và hỗ trợ vận hành',
  },
];

export const services = [
  {
    icon: <Code size={40} />,
    title: 'Phát triển phần mềm tùy chỉnh',
    description:
      'Xây dựng phần mềm đáp ứng chính xác nhu cầu của doanh nghiệp bạn, từ hệ thống quản lý đến nền tảng thương mại điện tử.',
    features: ['Phân tích yêu cầu chi tiết', 'Thiết kế UX/UI chuyên nghiệp', 'Phát triển & kiểm thử toàn diện'],
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Phát triển ứng dụng di động',
    description: 'Tạo ứng dụng di động đa nền tảng với trải nghiệm người dùng tuyệt vời cho iOS và Android.',
    features: ['Native & Cross-platform', 'Tối ưu hiệu năng', 'Tích hợp API & backend'],
  },
  {
    icon: <Cloud size={40} />,
    title: 'Giải pháp điện toán đám mây',
    description: 'Tư vấn và triển khai các giải pháp đám mây toàn diện, đảm bảo an toàn và hiệu quả.',
    features: ['Tư vấn chiến lược cloud', 'Triển khai & di chuyển', 'Quản lý & tối ưu chi phí'],
  },
  {
    icon: <Shield size={40} />,
    title: 'Bảo mật & An toàn thông tin',
    description: 'Đảm bảo an toàn thông tin cho hệ thống của bạn với các giải pháp bảo mật toàn diện.',
    features: ['Đánh giá & tư vấn bảo mật', 'Triển khai giải pháp', 'Giám sát & phản ứng'],
  },
  {
    icon: <Brain size={40} />,
    title: 'AI & Machine Learning',
    description: 'Tích hợp trí tuệ nhân tạo vào sản phẩm của bạn, tạo ra giá trị khác biệt trên thị trường.',
    features: ['Phát triển mô hình AI', 'Xử lý dữ liệu thông minh', 'Tự động hóa quy trình'],
  },
  {
    icon: <LifeBuoy size={40} />,
    title: 'Hỗ trợ & Bảo trì',
    description: 'Dịch vụ hỗ trợ và bảo trì chuyên nghiệp, đảm bảo hệ thống của bạn luôn hoạt động ổn định.',
    features: ['Hỗ trợ 24/7', 'Bảo trì định kỳ', 'Nâng cấp hệ thống'],
  },
];
