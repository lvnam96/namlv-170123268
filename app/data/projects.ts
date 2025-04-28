export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  additionalImages?: string[];
  technologies: string[];
  category: 'web' | 'mobile' | 'ecommerce' | 'enterprise';
  client: string;
  duration: string;
  completionDate: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'he-thong-quan-ly-benh-vien',
    title: 'Hệ thống quản lý bệnh viện thông minh',
    shortDescription:
      'Xây dựng hệ thống quản lý toàn diện cho bệnh viện đa khoa với các tính năng quản lý bệnh nhân, lịch khám và hồ sơ y tế điện tử.',
    fullDescription:
      'Hệ thống quản lý bệnh viện thông minh được phát triển nhằm tối ưu hóa quy trình quản lý và vận hành của bệnh viện đa khoa. Hệ thống bao gồm nhiều module như quản lý bệnh nhân, đặt lịch khám, hồ sơ y tế điện tử, quản lý thuốc và vật tư y tế.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker'],
    category: 'web',
    client: 'Bệnh viện Đa khoa Trung ương',
    duration: '8 tháng',
    completionDate: '12/2023',
  },
  {
    id: 2,
    slug: 'ung-dung-thuong-mai-dien-tu',
    title: 'Ứng dụng thương mại điện tử',
    shortDescription:
      'Xây dựng nền tảng thương mại điện tử đa nền tảng với tính năng thanh toán, quản lý đơn hàng và tích hợp đa kênh bán hàng.',
    fullDescription:
      'Nền tảng thương mại điện tử toàn diện giúp doanh nghiệp mở rộng kênh bán hàng online. Hệ thống bao gồm website và ứng dụng di động với đầy đủ tính năng quản lý sản phẩm, đơn hàng, khách hàng và tích hợp đa dạng phương thức thanh toán.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'AWS'],
    category: 'ecommerce',
    client: 'ShopNow',
    duration: '6 tháng',
    completionDate: '09/2023',
  },
  {
    id: 3,
    slug: 'ung-dung-di-dong-dat-dich-vu',
    title: 'Ứng dụng di động đặt dịch vụ',
    shortDescription:
      'Phát triển ứng dụng di động cho phép người dùng đặt và theo dõi các dịch vụ tại nhà với trải nghiệm người dùng tối ưu.',
    fullDescription:
      'Ứng dụng di động giúp kết nối người dùng với các nhà cung cấp dịch vụ tại nhà như sửa chữa, dọn dẹp, chăm sóc sức khỏe. Ứng dụng cung cấp giao diện dễ sử dụng, hệ thống đánh giá, thanh toán trực tuyến và tính năng theo dõi dịch vụ theo thời gian thực.',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1473091534298-04dcbce3278c',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    ],
    technologies: ['React Native', 'Firebase', 'Express', 'Node.js', 'Google Maps API'],
    category: 'mobile',
    client: 'HomeServe',
    duration: '5 tháng',
    completionDate: '06/2023',
  },
  {
    id: 4,
    slug: 'he-thong-quan-ly-doanh-nghiep',
    title: 'Hệ thống quản lý doanh nghiệp',
    shortDescription:
      'Giải pháp quản lý doanh nghiệp tích hợp với các module quản lý nhân sự, tài chính và vận hành cho doanh nghiệp vừa và lớn.',
    fullDescription:
      'Hệ thống quản lý doanh nghiệp tích hợp (ERP) giúp doanh nghiệp số hóa và tối ưu hóa quy trình vận hành. Giải pháp bao gồm các module quản lý nhân sự, tài chính, kế toán, chuỗi cung ứng và báo cáo phân tích.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    ],
    technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes'],
    category: 'enterprise',
    client: 'TechCorp',
    duration: '12 tháng',
    completionDate: '03/2024',
  },
  {
    id: 5,
    slug: 'ung-dung-hoc-truc-tuyen',
    title: 'Ứng dụng học trực tuyến',
    shortDescription:
      'Nền tảng học trực tuyến với các khóa học đa dạng, hỗ trợ học tập tương tác và chứng chỉ điện tử.',
    fullDescription:
      'Nền tảng học trực tuyến cung cấp các khóa học đa dạng từ nhiều lĩnh vực, với tính năng học tập tương tác, đánh giá tự động và cấp chứng chỉ điện tử. Hệ thống hỗ trợ cả người học và giảng viên với các công cụ quản lý khóa học hiệu quả.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
    category: 'web',
    client: 'EduTech',
    duration: '7 tháng',
    completionDate: '11/2023',
  },
  {
    id: 6,
    slug: 'ung-dung-quan-ly-tai-chinh-ca-nhan',
    title: 'Ứng dụng quản lý tài chính cá nhân',
    shortDescription:
      'Ứng dụng di động giúp người dùng theo dõi chi tiêu, quản lý ngân sách và lập kế hoạch tài chính.',
    fullDescription:
      'Ứng dụng quản lý tài chính cá nhân giúp người dùng theo dõi thu chi, quản lý ngân sách, đặt mục tiêu tài chính và nhận các báo cáo phân tích chi tiết. Ứng dụng còn tích hợp với ngân hàng và cung cấp tính năng quản lý đầu tư.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6',
      'https://images.unsplash.com/photo-1554260570-9140fd3b7614',
    ],
    technologies: ['Flutter', 'Firebase', 'GraphQL', 'Node.js', 'TensorFlow'],
    category: 'mobile',
    client: 'FinPlan',
    duration: '4 tháng',
    completionDate: '02/2024',
  },
];
