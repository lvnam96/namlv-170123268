import CTA from '@/components/CTA';
import { Shield, Eye, LightbulbIcon, Goal, Award, HeartHandshake } from 'lucide-react';
import { baseUrl } from '@/robots';
import { teamMembers } from '@/data/teamMembers';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image }) => {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="w-40 h-40 mx-auto mb-4 rounded-full object-cover" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
};

const About = () => {
  const values = [
    {
      icon: <Award className="text-blue-600" />,
      title: 'Chất lượng',
      description: 'Cam kết sản phẩm đạt chuẩn cao nhất',
    },
    {
      icon: <LightbulbIcon className="text-blue-600" />,
      title: 'Đổi mới',
      description: 'Luôn tìm phương pháp đúng công nghệ mới',
    },
    {
      icon: <HeartHandshake className="text-blue-600" />,
      title: 'Hợp tác',
      description: 'Xây dựng mối quan hệ lâu dài với khách hàng và nhân sự',
    },
    {
      icon: <Goal className="text-blue-600" />,
      title: 'Trách nhiệm',
      description: 'Luôn giữ lời với của khách hàng và hàng đầu',
    },
  ];

  return (
    <>
      <title>Về chúng tôi | DevSoft - Giải pháp công nghệ đổi mới</title>
      <meta
        name="description"
        content="Tìm hiểu thêm về DevSoft - đội ngũ phát triển phần mềm chuyên nghiệp với hơn 10 năm kinh nghiệm trong ngành."
      />
      <meta name="keywords" content="devsoft, về chúng tôi, công ty phần mềm, đội ngũ phát triển, công nghệ việt nam" />
      <link rel="canonical" href={`${baseUrl}/about`} />

      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Về DevSoft</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Chúng tôi là đối tác tin cậy trong hành trình chuyển đổi số của doanh nghiệp, với hơn 10 năm kinh nghiệm
              phát triển phần mềm chất lượng cao.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-6 border-t-2 border-blue-600">
                <div className="flex items-center mb-4">
                  <Shield className="text-blue-600 mr-3" size={24} />
                  <h2 className="text-2xl font-bold">Sứ mệnh</h2>
                </div>
                <p className="text-gray-600">
                  Chúng tôi mang đến các giải pháp phần mềm chất lượng, giúp doanh nghiệp chuyển đổi số hiệu quả, từ đó
                  nâng cao năng lực phát triển bền vững trong kỷ nguyên số.
                </p>
              </div>

              <div className="p-6 border-t-2 border-blue-600">
                <div className="flex items-center mb-4">
                  <Eye className="text-blue-600 mr-3" size={24} />
                  <h2 className="text-2xl font-bold">Tầm nhìn</h2>
                </div>
                <p className="text-gray-600">
                  Trở thành công ty phần mềm hàng đầu tại Đông Nam Á, được công nhận về sáng tạo, uy tín và năng lực
                  triển khai các dự án quy mô toàn cầu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Giá trị cốt lõi</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Những giá trị định hình văn hóa và cách làm việc tại DevSoft
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ValueCard key={index} icon={value.icon} title={value.title} description={value.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Đội ngũ của chúng tôi</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hơn 50 chuyên gia với nhiều năm kinh nghiệm trong lĩnh vực phát triển phần mềm
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} name={member.name} position={member.position} image={member.image} />
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
};

export default About;
