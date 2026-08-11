import { type Lang } from '../App'

interface Props { lang: Lang }

const t = {
  ENG: {
    label: 'About Us',
    headline: 'Pioneers of the',
    headline2: 'Visual Future',
    intro: "TAV 3D is Vietnam's leading 3D visualization and immersive technology studio. Since 2012, we've partnered with architects, developers, and brands to transform blueprints into breathtaking visual realities.",
    visionLabel: 'Our Vision',
    vision: 'To be Southeast Asia\'s most trusted creative technology partner, defining the future of how people experience space before it\'s built.',
    missionLabel: 'Our Mission',
    mission: 'We combine cutting-edge 3D technology with world-class design to create immersive experiences that inspire, inform, and accelerate decisions.',
    valuesLabel: 'Core Values',
    values: [
      { title: 'Excellence', desc: 'Every pixel, every frame — crafted to perfection.' },
      { title: 'Innovation', desc: 'We push the boundaries of what\'s technically possible.' },
      { title: 'Integrity', desc: 'Transparent communication and honest partnerships.' },
      { title: 'Impact', desc: 'We measure success by the results we create for clients.' },
    ],
    teamLabel: 'Leadership',
    teamHeadline: 'The Minds Behind the Work',
    milestoneLabel: 'Journey',
    milestoneHeadline: 'Our Story',
  },
  VIE: {
    label: 'Về Chúng Tôi',
    headline: 'Tiên Phong Trong',
    headline2: 'Tương Lai Thị Giác',
    intro: 'TAV 3D là studio trực quan hóa 3D và công nghệ đắm chìm hàng đầu Việt Nam. Từ năm 2012, chúng tôi đã hợp tác với các kiến trúc sư, nhà phát triển và thương hiệu để biến bản vẽ thành những thực tế thị giác tuyệt vời.',
    visionLabel: 'Tầm Nhìn',
    vision: 'Trở thành đối tác công nghệ sáng tạo đáng tin cậy nhất Đông Nam Á, định hình tương lai trải nghiệm không gian trước khi được xây dựng.',
    missionLabel: 'Sứ Mệnh',
    mission: 'Chúng tôi kết hợp công nghệ 3D tiên tiến với thiết kế đẳng cấp thế giới để tạo ra những trải nghiệm đắm chìm truyền cảm hứng và thúc đẩy quyết định.',
    valuesLabel: 'Giá Trị Cốt Lõi',
    values: [
      { title: 'Xuất Sắc', desc: 'Mỗi pixel, mỗi khung hình đều được chế tác hoàn hảo.' },
      { title: 'Đổi Mới', desc: 'Chúng tôi vượt qua giới hạn của những gì có thể về mặt kỹ thuật.' },
      { title: 'Chính Trực', desc: 'Giao tiếp minh bạch và đối tác trung thực.' },
      { title: 'Tác Động', desc: 'Chúng tôi đo lường thành công bằng kết quả tạo ra cho khách hàng.' },
    ],
    teamLabel: 'Lãnh Đạo',
    teamHeadline: 'Những Bộ Óc Đằng Sau Công Việc',
    milestoneLabel: 'Hành Trình',
    milestoneHeadline: 'Câu Chuyện Của Chúng Tôi',
  },
}

const team = [
  {
    name: 'Nguyen Van Minh',
    role: 'Chief Executive Officer',
    roleVIE: 'Giám Đốc Điều Hành',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format',
    bio: '15 years of architecture and visualization experience across Vietnam and Singapore.',
    bioVIE: '15 năm kinh nghiệm kiến trúc và trực quan hóa tại Việt Nam và Singapore.',
  },
  {
    name: 'Tran Thi Lan',
    role: 'Chief Creative Officer',
    roleVIE: 'Giám Đốc Sáng Tạo',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format',
    bio: 'Award-winning art director with a background in computational design.',
    bioVIE: 'Giám đốc nghệ thuật đoạt giải thưởng với nền tảng thiết kế tính toán.',
  },
  {
    name: 'Le Quoc Hung',
    role: 'Head of Technology',
    roleVIE: 'Trưởng Phòng Công Nghệ',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format',
    bio: 'Former game engine developer turned immersive experience architect.',
    bioVIE: 'Cựu nhà phát triển game engine chuyển sang kiến trúc trải nghiệm đắm chìm.',
  },
  {
    name: 'Pham Bich Ngoc',
    role: 'Head of Client Experience',
    roleVIE: 'Trưởng Phòng Trải Nghiệm Khách Hàng',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format',
    bio: 'Specialist in bridging client vision and technical execution across 200+ projects.',
    bioVIE: 'Chuyên gia kết nối tầm nhìn khách hàng và thực thi kỹ thuật trong 200+ dự án.',
  },
]

const milestones = [
  { year: '2012', title: 'Founded', titleVIE: 'Thành Lập', desc: 'Started as a 3-person architectural visualization boutique in Ho Chi Minh City.' },
  { year: '2015', title: 'First Major Project', titleVIE: 'Dự Án Lớn Đầu Tiên', desc: 'Won the visualization contract for the Diamond Island master plan.' },
  { year: '2018', title: 'VR Division Launch', titleVIE: 'Ra Mắt Bộ Phận VR', desc: 'Expanded into virtual reality tours, becoming Vietnam\'s first dedicated VR studio.' },
  { year: '2020', title: 'Regional Expansion', titleVIE: 'Mở Rộng Khu Vực', desc: 'Opened offices in Hanoi and signed first international clients in Singapore.' },
  { year: '2023', title: 'AI Integration', titleVIE: 'Tích Hợp AI', desc: 'Integrated AI-assisted rendering pipelines, reducing production time by 40%.' },
  { year: '2025', title: 'Industry Leader', titleVIE: 'Dẫn Đầu Ngành', desc: '350+ completed projects and Southeast Asia\'s most awarded visualization studio.' },
]

export default function AboutPage({ lang }: Props) {
  const tx = t[lang]

  return (
    <div className="pt-[76px]">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[#0A0A0A]">
          <img
            src="https://images.unsplash.com/photo-1633109611134-c41b5c0bbc1a?w=1920&h=700&fit=crop&auto=format"
            alt="Office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 to-[#050505]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-6">◆ {tx.label}</div>
          <h1 className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold leading-[1.05] text-white mb-8 uppercase">
            {tx.headline}<br />
            <span className="text-gradient">{tx.headline2}</span>
          </h1>
          <p className="max-w-[620px] text-white/75 text-lg leading-relaxed">{tx.intro}</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel rounded-2xl p-10 border border-[#FF6B00]/25 card-hover">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/15 border border-[#FF6B00]/40 flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="#FF6B00" strokeWidth="1.5" />
                  <path d="M9 5v4l3 2" stroke="#FF9E00" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="section-label mb-4">{tx.visionLabel}</div>
              <p className="text-white text-lg leading-relaxed font-light">{tx.vision}</p>
            </div>
            <div className="glass-panel rounded-2xl p-10 border border-[#FF9E00]/25 card-hover">
              <div className="w-12 h-12 rounded-xl bg-[#FF9E00]/15 border border-[#FF9E00]/40 flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L16 6.5v5L9 16 2 11.5v-5L9 2Z" stroke="#FF9E00" strokeWidth="1.5" fill="none" />
                  <circle cx="9" cy="9" r="2" fill="#FF6B00" />
                </svg>
              </div>
              <div className="section-label mb-4">{tx.missionLabel}</div>
              <p className="text-white text-lg leading-relaxed font-light">{tx.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-4">◆ {tx.valuesLabel}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {tx.values.map((val, i) => (
              <div key={i} data-cursor="DISCOVER" className="card-highlight p-8 group">
                <div className="font-display text-5xl font-extrabold text-[#FF9E00] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-[#FF9E00] transition-colors">{val.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-4">◆ {tx.teamLabel}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16 uppercase">{tx.teamHeadline}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} data-cursor="DISCOVER" className="group card-highlight overflow-hidden">
                <div className="relative overflow-hidden" style={{ height: '280px' }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1217] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-lg group-hover:text-[#FF9E00] transition-colors uppercase">{member.name}</h3>
                  <div className="text-[#FF9E00] text-xs font-mono mt-1.5 mb-3 bg-[#FF6B00]/15 px-3 py-1 rounded-full inline-block border border-[#FF6B00]/40 font-bold uppercase">
                    {lang === 'ENG' ? member.role : member.roleVIE}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {lang === 'ENG' ? member.bio : member.bioVIE}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="section-label mb-4">◆ {tx.milestoneLabel}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16 uppercase">{tx.milestoneHeadline}</h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] timeline-line transform md:-translate-x-1/2" />
            <div className="flex flex-col gap-12">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2 pl-8 md:pl-0">
                    <div
                      data-cursor="DISCOVER"
                      className={`card-highlight p-7 group ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                    >
                      <div className="font-display text-3xl font-extrabold text-[#FF9E00] mb-2">{m.year}</div>
                      <h3 className="font-display font-bold text-white text-lg mb-2 uppercase group-hover:text-[#FF9E00] transition-colors">
                        {lang === 'ENG' ? m.title : m.titleVIE}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  {/* Glowing Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 top-7 w-3.5 h-3.5 rounded-full bg-[#FF6B00] md:-translate-x-1/2 ring-4 ring-[#0A0A0A] shadow-[0_0_15px_#FF6B00]" />
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
