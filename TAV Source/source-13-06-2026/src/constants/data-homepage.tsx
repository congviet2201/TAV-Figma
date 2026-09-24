import {
  IAdviseService,
  IBlog,
  ICategoryBlog,
  ICustomerSay,
  IIntroduceSecond,
  IListCountry,
  IPartner,
  IProject,
  IService,
  IWhyChoose,
} from "@interfaces/IHomePage";
// import mapping from "@assets/image/sv-3d-mapping.png";
// import modelling from "@assets/image/sv-3d-modelling.png";
// import render from "@assets/image/sv-3d-render.png";
// import tour from "@assets/image/sv-ar-tour.png";
// import videoProject from "@assets/videos/homeProject.mp4";
// import interactive from "@assets/image/sv-interactive.png";
import logo2 from "@assets/image/logo-Creative.png";
import logo1 from "@assets/image/logo-Modern.png";
import logo3 from "@assets/image/logo-Professional.png";
import logo4 from "@assets/image/logo-Responsible.png";
import img1 from "@assets/image/img-Modern.png";
import img2 from "@assets/image/img-Creative.png";
import img3 from "@assets/image/img-Professional.png";
import img4 from "@assets/image/img-Responsible.png";
import partner1 from "@assets/image/partner1.png";
import partner2 from "@assets/image/partner2.png";
import partner3 from "@assets/image/partner3.png";
import partner4 from "@assets/image/partner4.png";
import partner5 from "@assets/image/partner5.png";
import partner6 from "@assets/image/partner6.png";
import partner7 from "@assets/image/partner7.png";
import partner8 from "@assets/image/partner8.png";
import partner9 from "@assets/image/partner9.png";
import cus1 from "@assets/image/cus1.jpg";
import cus2 from "@assets/image/cus2.jpg";
import cus3 from "@assets/image/cus3.jpg";
import blog1 from "@assets/image/blog1.png";
import blog2 from "@assets/image/blog2.jpg";
import blog3 from "@assets/image/blog3.jpg";
import blog4 from "@assets/image/blog4.png";
import blog5 from "@assets/image/blog5.png";
import blog6 from "@assets/image/blog6.png";
import blog7 from "@assets/image/blog7.png";
import blog1id1 from "@assets/image/blogs/blog1.png";
import blog2id1 from "@assets/image/blogs/blog2.png";
import blog3id1 from "@assets/image/blogs/blog3.png";
import blog4id2 from "@assets/image/blogs/blog4.png";
import blog5id2 from "@assets/image/blogs/blog5.png";
import blog6id2 from "@assets/image/blogs/blog6.png";
import blog7id2 from "@assets/image/blogs/blog7.png";
import blog8id3 from "@assets/image/blogs/blog8.png";
import blog9id3 from "@assets/image/blogs/blog9.png";
import blog10id3 from "@assets/image/blogs/blog10.png";
import blog11id3 from "@assets/image/blogs/blog11.png";
import blog12id3 from "@assets/image/blogs/blog12.png";
import blog13id3 from "@assets/image/blogs/blog13.png";
import blog14id3 from "@assets/image/blogs/blog14.png";
import icVN from "@assets/image/country/Vietnam.png";
import icUS from "@assets/image/country/America.png";
import icJP from "@assets/image/country/Japan.png";
import icFI from "@assets/image/country/Finland.png";
import icFR from "@assets/image/country/France.png";
import icPF from "@assets/image/country/French Polynesia.png";
import icGA from "@assets/image/country/Gabon.png";
import icGM from "@assets/image/country/Gambia.png";
import icGE from "@assets/image/country/Georgia.png";
// import videomapping from "@assets/videos/homeProject.mp4";
// import videorender from "@assets/videos/3drender.mp4";
// import videomodel from "@assets/videos/3dmodel.mp4";
// import videovrartour from "@assets/videos/3drender.mp4";
// import videointeractiveapp from "@assets/videos/interactiveapp.mp4";

export const DataIntroduceSecond: IIntroduceSecond[] = [
  {
    _id: "1",
    title: {
      vi: "Dự án đã thực hiện",
      en: "Projects Completed",
      ja: "完了したプロジェクト",
    },
    amount: 400,
    description: {
      vi: "TAV đã hoàn thành hơn 400 dự án kiến trúc và bất động sản trên toàn quốc. Luôn đảm bảo tiến độ nghiêm ngặt và chất lượng vượt trội.",
      en: "TAV has completed over 400 architecture and real estate projects nationwide. We always ensure strict timelines and superior quality.",
      ja: "TAVは全国で400件以上の建築および不動産プロジェクトを完了しました。厳格なスケジュールと優れた品質を常に保証します。",
    },
  },
  {
    _id: "2",
    amount: 100,
    title: {
      vi: "Số đối tác đã tin tưởng",
      en: "Trusted Partners",
      ja: "信頼されているパートナー数",
    },
    description: {
      vi: "Hơn 100 chủ đầu tư, kiến trúc sư và đơn vị tư vấn đã đồng hành cùng TAV. Chúng tôi cung cấp giải pháp dựng hình 3D chuyên nghiệp, linh hoạt theo mọi yêu cầu.",
      en: "Over 100 investors, architects, and consultants have trusted TAV. We offer professional, flexible 3D rendering solutions tailored to every need.",
      ja: "100人以上の投資家、建築家、コンサルタントがTAVと提携。柔軟で専門的な3Dレンダリングソリューションを提供します。",
    },
  },
  {
    _id: "3",
    amount: 12,
    title: {
      vi: "Số năm kinh nghiệm của đội ngũ",
      en: "Years of Experience",
      ja: "チームの経験年数",
    },
    description: {
      vi: "Đội ngũ TAV với hơn 12 năm kinh nghiệm trong dựng hình, diễn họa và hậu kỳ kiến trúc. Luôn cập nhật công nghệ mới nhất để tối ưu hiệu quả và sáng tạo.",
      en: "TAV team with over 12 years of experience in architectural modeling, visualization and post-production. Always updated with the latest technology to optimize efficiency and creativity.",
      ja: "TAVチームは、建築モデリング、ビジュアライゼーション、ポストプロダクションの分野で12年以上の経験を有しています。常に最新のテクノロジーを活用し、効率性と創造性を最大限に高めています。",
    },
  },
];

export const DataService: IService[] = [
  {
    poster:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/icon%2Fsv-3d-mapping.png?alt=media&token=a76253ac-4cd7-4e6f-a712-8e19b9c3577a",
    id: "3dmapping",
    video:
      "https://res.cloudinary.com/dvazxxprl/video/upload/v1747196375/1_r6l9ux.mp4",
    title: { vi: "3d mapping", en: "3d mapping", ja: "3d mapping" },
    description: {
      vi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
      ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
    },
  },
  {
    poster:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/icon%2Fsv-3d-modelling.png?alt=media&token=ec8ff5a6-ab31-409e-9f42-2e0880bcd586",
    video:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/gif%2F3dmodel.mp4?alt=media&token=e5096668-8301-492e-a244-c4f49cca666d",
    id: "3dmodel",
    title: { vi: "3d model", en: "3d model", ja: "3d model" },
    description: {
      vi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
      ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
    },
  },
  {
    poster:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/icon%2Fsv-3d-render.png?alt=media&token=6664c71e-ffb8-4966-aa24-c47d8335de3a",
    id: "3drender",
    video:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/gif%2F3drender.mp4?alt=media&token=116a23b7-6929-4aea-a373-f33fd839a1cb",
    title: { vi: "3d render", en: "3d render", ja: "3d render" },
    description: {
      vi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
      ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
    },
  },
  {
    poster:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/icon%2Fsv-ar-tour.png?alt=media&token=6e7ece9c-76fa-4a18-bad7-6128aba36d41",
    id: "vrartour",
    video:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/gif%2Fvrartour.mp4?alt=media&token=e83179a9-77b8-4423-b24e-0725c0dcf719",
    title: { vi: "vr/ar tour", en: "vr/ar tour", ja: "vr/ar tour" },
    description: {
      vi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
      ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
    },
  },
  {
    poster:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/icon%2Fsv-interactive.png?alt=media&token=90b47200-be8d-4470-b4e3-da31c00d0925",
    video:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/gif%2Finteractiveapp.mp4?alt=media&token=5205ff7f-8ac1-4fde-91d4-fae838c1f13f",
    id: "interactiveapp",
    title: {
      vi: "interactive app",
      en: "interactive app",
      ja: "interactive app",
    },
    description: {
      vi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
      ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id varius nisl. Nullam non sapien ligula.",
    },
  },
];

export const DataProject: IProject[] = [
  {
    link: "/products/3dmapping",
    videoHome:
      "https://res.cloudinary.com/dvazxxprl/video/upload/v1747196375/1_r6l9ux.mp4",
    service: { id: "3dmapping", title: "3d mapping" },
    name: "Seoul international.",
    description: {
      vi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat in nunc tristique vestibulum sit amet et nunc. Proin id tortor facilisis, tempor libero vel, fringilla dolor. Integer leo lorem, congue et euismod at, mollis eget nunc..",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat in nunc tristique vestibulum sit amet et nunc. Proin id tortor facilisis, tempor libero vel, fringilla dolor. Integer leo lorem, congue et euismod at, mollis eget nunc..",
      ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat in nunc tristique vestibulum sit amet et nunc. Proin id tortor facilisis, tempor libero vel, fringilla dolor. Integer leo lorem, congue et euismod at, mollis eget nunc..",
    },
  },
  {
    link: "/products/3drender",
    videoHome:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fngay-dem-laocai-compressed.mp4?alt=media&token=7e059c8e-510e-4386-bc74-e0eb55561755",
    service: { id: "3drender", title: "3d render" },
    name: "HỘI AN HOME",
    description: {
      vi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat in nunc tristique vestibulum sit amet et nunc. Proin id tortor facilisis, tempor libero vel, fringilla dolor. Integer leo lorem, congue et euismod at, mollis eget nunc..",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat in nunc tristique vestibulum sit amet et nunc. Proin id tortor facilisis, tempor libero vel, fringilla dolor. Integer leo lorem, congue et euismod at, mollis eget nunc..",
      ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat in nunc tristique vestibulum sit amet et nunc. Proin id tortor facilisis, tempor libero vel, fringilla dolor. Integer leo lorem, congue et euismod at, mollis eget nunc..",
    },
  },
  {
    link: "/products/3dmodel",
    videoHome:
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fngay-dem-1-compressed.mp4?alt=media&token=4829c309-c986-4707-9bf1-b1c3c112d055",
    service: { id: "3dmodel", title: "3d model" },
    name: "LAO CAI",
    description: {
      vi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat in nunc tristique vestibulum sit amet et nunc. Proin id tortor facilisis, tempor libero vel, fringilla dolor. Integer leo lorem, congue et euismod at, mollis eget nunc..",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat in nunc tristique vestibulum sit amet et nunc. Proin id tortor facilisis, tempor libero vel, fringilla dolor. Integer leo lorem, congue et euismod at, mollis eget nunc..",
      ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a erat in nunc tristique vestibulum sit amet et nunc. Proin id tortor facilisis, tempor libero vel, fringilla dolor. Integer leo lorem, congue et euismod at, mollis eget nunc..",
    },
  },
];

export const DataWhyChoose: IWhyChoose[] = [
  {
    img: img1,
    logo: logo1,
    title: {
      vi: "hiện đại",
      en: "modern",
      ja: "現代的",
    },
    description: {
      vi: "TAV luôn cập nhật công nghệ và xu hướng hình ảnh mới nhất để mang đến giải pháp trực quan, sắc nét và phù hợp với thị trường hiện đại.",
      en: "TAV constantly updates the latest technologies and visual trends to deliver sharp, intuitive solutions suited for the modern market.",
      ja: "TAVは常に最新の技術とビジュアルトレンドを取り入れ、現代市場に適した鮮明で直感的なソリューションを提供します。",
    },
  },
  {
    img: img2,
    logo: logo2,
    title: {
      vi: "sáng tạo",
      en: "creative",
      ja: "創造的",
    },
    description: {
      vi: "Chúng tôi tạo ra sản phẩm mang dấu ấn riêng, kết hợp giữa ý tưởng đột phá và tầm nhìn của khách hàng.",
      en: "We create unique products that blend breakthrough ideas with the client’s vision.",
      ja: "私たちは革新的なアイデアとクライアントのビジョンを融合させ、独自性のある製品を創造します。",
    },
  },
  {
    img: img3,
    logo: logo3,
    title: {
      vi: "chuyên nghiệp",
      en: "professional",
      ja: "プロフェッショナル",
    },
    description: {
      vi: "Đội ngũ TAV làm việc theo quy trình rõ ràng, đúng tiến độ, đảm bảo chất lượng và hiệu quả trong từng dự án.",
      en: "The TAV team works with clear processes and deadlines, ensuring quality and efficiency in every project.",
      ja: "TAVチームは明確なプロセスとスケジュールに基づいて作業し、すべてのプロジェクトで品質と効率を保証します。",
    },
  },
  {
    img: img4,
    logo: logo4,
    title: {
      vi: "trách nhiệm",
      en: "responsible",
      ja: "責任感",
    },
    description: {
      vi: "Chúng tôi đồng hành cùng khách hàng từ đầu đến cuối, sẵn sàng hỗ trợ và cam kết giữ vững uy tín.",
      en: "We accompany our clients from start to finish, offering full support and committing to maintaining our credibility.",
      ja: "私たちは最初から最後までお客様と共に歩み、全力でサポートし、信頼を守ることを約束します。",
    },
  },
];

export const DataPartner: IPartner[] = [
  { img: partner1, width: "150px", height: "100px" },
  {
    img: partner2,
    width: "69.09px",
    height: "52px",
    top: "24px",
    left: "41.46px",
  },
  {
    img: partner3,
    width: "102.42px",
    height: "53px",
    top: "23.5px",
    left: "23.79px",
  },
  { img: partner4, width: "150px", height: "95px", top: "2.5px" },
  {
    img: partner5,
    width: "53px",
    height: "53px",
    top: "23.5px",
    left: "48.5px",
  },
  {
    img: partner6,
    width: "70px",
    height: "70px",
    top: "15.5px",
    left: "41.5px",
  },
  { img: partner7, width: "64px", height: "64px", top: "18px", left: "43px" },
  { img: partner8, width: "150px", height: "100px" },
  { img: partner9, width: "100px", height: "100px" },
];

export const DataCustomerSay: ICustomerSay[] = [
  {
    img: cus1,
    name: "Phạm Minh Thế",
    position: "CEO of Urban Plan Inc. Vietnam",
    content: {
      vi: "Chúng tôi đã làm việc với nhiều đơn vị diễn họa, nhưng chất lượng hình ảnh 3D của TAV thực sự khác biệt. Ánh sáng, chất liệu và góc nhìn đều được xử lý tinh tế, giúp dự án của chúng tôi trở nên sống động và thuyết phục ngay từ bản trình bày đầu tiên.",
      en: "We have worked with many visualization agencies, but the quality of TAV's 3D images is truly different. The lighting, materials and perspectives are all handled with precision, making our project come alive and convincing from the first presentation.",
      ja: "これまで多くのビジュアライゼーション会社と仕事をしてきましたが、TAVの3D画像の品質は本当に別格です。照明、素材、遠近法のすべてが精密に処理されており、最初のプレゼンテーションから私たちのプロジェクトは生き生きとしていて説得力がありました。",
    },
  },
  {
    img: cus2,
    name: "Hương Nguyễn",
    position: "Marketing Director at Trí Dương Group",
    content: {
      vi: "Với nhiều năm làm Marketing bất động sản và hợp tác cùng nhiều đơn vị 3D, tôi đánh giá cao TAV ở sự chỉn chu, tinh tế và chiều sâu trong từng phối cảnh. TAV không chỉ tạo hình ảnh đẹp mà còn truyền tải tinh thần dự án và hiện thực hóa nhịp sống tương lai một cách sống động.",
      en: "Having worked in real estate marketing and with many 3D visualization firms, I highly value TAV’s attention to detail, creativity, and depth. Beyond beautiful imagery, TAV captures the project's vision and brings its future lifestyle to life with remarkable realism.",
      ja: "不動産マーケティングに長く携わり、多くの3D制作会社と仕事をしてきましたが、TAVの細部へのこだわり、表現力、そして奥行きのあるビジュアルには特に感銘を受けました。美しいCGだけでなく、プロジェクトの理念や未来の暮らしをリアルに表現しています。",
    },
  },
  {
    img: cus3,
    name: "Huỳnh Trọng Nghĩa",
    position: "CEO & Founder of KOSO",
    content: {
      vi: "TAV cung cấp mô hình 3D chính xác và linh hoạt, giúp quá trình thiết kế và trình bày ý tưởng của chúng tôi hiệu quả hơn bao giờ hết. Chúng tôi đánh giá cao sự chuyên nghiệp và khả năng tùy biến của họ.",
      en: "TAV provides accurate and flexible 3D models, making our design process and presentation of ideas more efficient than ever. We appreciate their professionalism and customization.",
      ja: "TAVは正確で柔軟な3Dモデルを提供してくれるので、設計プロセスとアイデアのプレゼンテーションがこれまで以上に効率的になりました。彼らのプロフェッショナリズムとカスタマイズ性に感謝しています。",
    },
  },
];

export const DataCategoryBlog: ICategoryBlog[] = [
  { title: { vi: "Kiến trúc", en: "architecture", ja: "建築" } },
  { title: { vi: "Phong cách sống", en: "Lifestyle", ja: "ライフスタイル" } },
  { title: { vi: "Công nghệ", en: "Technology", ja: "テクノロジー" } },
];

export const DataBlog: IBlog[] = [
  {
    id: "1",
    img: blog1,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Công nghệ 3d mapping là gì? Những ứng dụng của 3d mapping",
      en: "What is 3D mapping technology? Applications of 3D mapping",
      ja: "3Dマッピング技術とは？ 3Dマッピングの応用例",
    },
    titleSub: {
      vi: "Xem qua các dự án 3d mapping đã được thực hiện bởi tav",
      en: "Check out 3d mapping projects done by tav",
      ja: "tavが行った3Dマッピングプロジェクトをご覧ください",
    },
    time: "2025-04-18T13:00:00",
    content: [
      {
        description: [
          {
            type: "text",
            vi: "3D Mapping dường như là một thuật ngữ tương đối xa lạ với nhiều người và nhiều người  hỏi về nó khi họ nghe đến nó. Mặc dù vậy, trong những năm gần đây 3D Mapping đang trở nên phổ biến và trở thành một công nghệ mới, nổi tiếng, mang lại những hiệu quả tốt và sử dụng trong nhiều ngành tại Việt Nam.",
            en: "3D Mapping seems to be a relatively unfamiliar term to many people and many people ask about it when they hear it. However, in recent years 3D Mapping is becoming popular and becoming a new, famous technology, bringing good effects and used in many industries in Vietnam.",
            ja: "3Dマッピングは多くの人にとってあまり馴染みのない言葉で、耳にすると多くの人が「なぜ？」と尋ねます。しかし近年、3Dマッピングは人気が高まり、新たな技術として注目を集め、ベトナムでは多くの産業で活用されています。",
          },
          {
            type: "text",
            vi: "Vậy 3D Mapping là gì và được ứng dụng như thế nào, hãy cùng với TAV tìm hiểu thông qua bài viết sau nhé!",
            en: "So what is 3D Mapping and how is it applied? Let's find out with TAV through the following article!",
            ja: "では、3Dマッピングとは何か、そしてどのように応用されるのでしょうか？TAVと一緒に、以下の記事で詳しく見ていきましょう。",
          },
        ],
      },
      {
        title: {
          vi: "3D Mapping là gì?",
          en: "What is 3D Mapping?",
          ja: "3D マッピングとは何ですか?",
        },
        description: [
          {
            type: "text",
            vi: "Công nghệ 3D Mapping ngày càng  trở nên phổ biến. Vậy 3D Mapping là gì? Đó là kỹ thuật sử dụng ánh sáng để tạo hiệu ứng 3D cho bề mặt mà nó tiếp xúc để tạo ra các khối hình ảnh tương tác trong không gian 3 chiều. Có thể hiểu, 3D Mapping là sự kết hợp giữa công nghệ 3D và công nghệ làm phim. Kỹ thuật làm 3D Mapping sẽ tạo ra một mô hình có tỷ lệ kích thước chính xác 100% so với vật thể thật, sau đó sau đó kỹ thuật viên tạo hiệu ứng âm thanh, ánh sáng 3D từ mô hình trên máy tính để trình chiếu cho người xem.",
            en: "3D Mapping technology is becoming more and more popular. So what is 3D Mapping? It is a technique that uses light to create a 3D effect on the surface it contacts to create interactive image blocks in 3D space. It can be understood that 3D Mapping is a combination of 3D technology and filmmaking technology. 3D Mapping technique will create a model with a 100% accurate size ratio compared to the real object, then the technician creates 3D sound and light effects from the model on the computer to show to the viewer.",
            ja: "3Dマッピング技術はますます普及しています。では、3Dマッピングとは何でしょうか？光を用いて接触面に3D効果を生み出し、3D空間にインタラクティブな画像ブロックを作成する技術です。3Dマッピングは、3D技術と映画制作技術を組み合わせた技術と言えます。3Dマッピング技術では、実物と100%正確なサイズ比のモデルを作成し、技術者がコンピューター上でそのモデルから3Dの音と光の効果を作り出し、視聴者に提示します。",
          },
          {
            type: "text",
            vi: "Công nghệ 3D Mapping được biết đến là một loại hình nghệ thuật hiện đại và tiên tiến nhất hiện nay. Nó thể hiện câu chuyện và thông điệp bạn muốn truyền tải thông qua hình ảnh ở định dạng 3D trong không gian ba chiều thay vì chỉ là 2 chiều truyền thống. Công nghệ này trình chiếu những hình ảnh và video clip được thiết kế tương thích với vật chiếu không bằng phẳng như bình thường, kết hợp với các hiệu ứng ánh sáng và âm thanh để tạo ra sự độc đáo, đáng kinh ngạc về thị giác trên vật thể.",
            en: "3D Mapping technology is known as the most modern and advanced art form today. It shows the story and message you want to convey through images in 3D format in three-dimensional space instead of just the traditional 2-dimensional. This technology projects images and video clips that are designed to be compatible with the projection object that is not flat as usual, combined with lighting and sound effects to create a unique, amazing visual effect on the object.",
            ja: "3Dマッピング技術は、今日最も現代的で先進的な芸術形式として知られています。従来の2次元空間ではなく、3次元空間に3D形式の画像を通して伝えたいストーリーやメッセージを提示します。この技術は、投影対象物に合わせて設計された画像やビデオクリップを投影し、照明や音響効果と組み合わせることで、対象物に独特で驚くべき視覚効果を生み出します。",
          },
          {
            type: "text",
            vi: "3D Mapping rất phổ biến trong thực tế vì nó là một công cụ để hiển thị video tại các sự kiện. Về cơ bản, nó giống như vẽ tranh bằng ánh sáng: một cách để thêm kết cấu, màu sắc và thậm chí cả cảm xúc vào không gian. Họ thực sự có thể giới thiệu mọi thứ, từ các thương hiệu được tài trợ  đến các video tường thuật theo phong cách điện ảnh.",
            en: "3D Mapping is popular in practice as a tool for displaying videos at events. It’s basically like painting with light: a way to add texture, color, and even emotion to a space. They can really showcase everything from sponsored brands to cinematic-style narrative videos.",
            ja: "3Dマッピングは、イベントで動画を映し出すツールとして、実用的にも人気があります。光で絵を描くようなもので、空間に質感、色彩、そして感情さえも加えることができます。スポンサーブランドから映画のような物語動画まで、あらゆるものを効果的にアピールできます。",
          },
        ],
      },
      {
        title: {
          vi: "Đặc điểm nổi trội của công nghệ 3D Mapping",
          en: "Outstanding features of 3D Mapping technology",
          ja: "3Dマッピング技術の優れた特徴",
        },
        description: [
          {
            type: "text",
            vi: "Đó là việc sử dụng các phần mềm chuyên dụng. Với phần mềm này, người dùng có thể hiển thị hình ảnh động, phim, hình ảnh và gửi chúng đến một hoặc nhiều máy chiếu công suất lớn. Chức năng chiếu hình ảnh bao phủ hoặc tạo hiệu ứng 3D thay đổi lên bề mặt của vật thể thật. Hoặc có thể chiếu trên các sân khấu ngoài trời và trong nhà, ở những nơi có diện tích rộng như trung tâm thương mại, cao ốc. Công nghệ Mapping sẽ giúp cho hiệu ứng 3D và các đối tượng có thể trùng khớp đến từng chi tiết nhỏ nhất. o đó, với công nghệ này, nó sẽ trông không khác so với vật thể thật.",
            en: "It is the use of specialized software. With this software, users can display animations, movies, images and send them to one or more high-power projectors. The function of projecting images that cover or create 3D effects changes on the surface of real objects. Or it can be projected on outdoor and indoor stages, in large areas such as shopping malls, high-rise buildings. Mapping technology will help 3D effects and objects to match the smallest details. Therefore, with this technology, it will look no different from real objects.",
            ja: "専用ソフトウェアを使用します。このソフトウェアを使用すると、アニメーション、映画、画像を表示し、1台または複数の高出力プロジェクターに送信できます。投影する画像は、実物の表面に3D効果を覆い隠したり、変化させたりすることができます。また、屋外や屋内のステージ、ショッピングモールや高層ビルなどの広大なエリアにも投影できます。マッピング技術により、3D効果とオブジェクトは細部まで正確に一致します。そのため、この技術を使用すれば、実物と見分けがつかないほど鮮明に映し出されます。",
          },
          {
            type: "image",
            url: blog1id1,
          },
          {
            type: "text",
            vi: "Ngoài ra, đối tượng được chiếu và môi trường được chiếu sáng cũng có tác động lớn đến sự thành công của công nghệ 3D Mapping. Ví dụ như một chiếc xe ô tô hay bất cứ vật thể nào khi đặt ngoài trời hiệu ứng đương nhiên sẽ không đẹp bằng đặt trong nhà.",
            en: "In addition, the projected object and the illuminated environment also have a big impact on the success of 3D Mapping technology. For example, a car or any object when placed outdoors will of course not have the same effect as when placed indoors.",
            ja: "さらに、投影される物体と照明環境も3Dマッピング技術の成功に大きな影響を与えます。例えば、車やその他の物体を屋外に置いた場合、屋内に置いた場合と同じ効果は得られません。",
          },
          {
            type: "text",
            vi: "Điều cần nhớ khi sử dụng công nghệ 3D Mapping là chất lượng hiển thị hình ảnh bị ảnh hưởng mạnh bởi chất liệu của bề mặt chiếu. Ví dụ, nếu vật thể có bề mặt thủy tinh, sơn bóng, đá, hoặc độ phản chiếu cao, việc thực hiện sẽ  khó khăn. Thậm chí việc chiếu sẽ không thể thực hiện được vì bị hắt ánh sáng trở lại. Khi đó, các kỹ thuật viên sẽ phủ lên bề mặt vật thể một chất liệu khác, có thể là vải màn chiếu hoặc sơn đặc biệt để hấp thụ ánh sáng từ máy chiếu.",
            en: "The thing to remember when using 3D Mapping technology is that the quality of the image is strongly affected by the material of the projection surface. For example, if the object has a glass surface, glossy paint, stone, or is highly reflective, it will be difficult to perform. Projection will not even be possible because the light will bounce back. In this case, technicians will cover the surface of the object with another material, which can be a projection screen fabric or a special paint to absorb the light from the projector.",
            ja: "3Dマッピング技術を使用する際に留意すべき点は、投影面の材質によって画質が大きく左右されるということです。例えば、投影対象物がガラス、光沢のある塗装、石材、あるいは反射率の高い素材の場合、投影が困難になります。光が反射してしまうため、投影自体が不可能になることもあります。このような場合、技術者は投影面を別の素材で覆います。例えば、投影スクリーン用の布や、プロジェクターからの光を吸収する特殊な塗料などが挙げられます。",
          },
          {
            type: "text",
            vi: "Có thể kể đến những hiệu quả thu được khi ứng dụng công nghệ 3D mapping vào trình chiếu như sau:",
            en: "The following are some of the benefits of applying 3D mapping technology to presentations:",
            ja: "プレゼンテーションに 3D マッピング テクノロジを適用すると、次のようなメリットが得られます。",
          },
        ],
      },
      {
        title: {
          vi: "Những hiệu quả mà 3D Mapping đem lại",
          en: "The benefits of 3D Mapping",
          ja: "3Dマッピングの利点",
        },
        description: [
          {
            type: "text",
            vi: "– Là một công cụ marketing hiệu quả trong việc tung ra các sản phẩm và dịch vụ của doanh nghiệp. Nhờ phần trình bày, trình diễn sản phẩm gần như thật 100% giúp cho khách hàng và đối tác có tầm nhìn khách quan và trung thực nhất. Do đó, họ dễ  thuyết phục hơn là chỉ nghe và nhìn thấy hình ảnh.",
            en: "– Is an effective marketing tool in launching the products and services of the business. Thanks to the presentation, the product demonstration is almost 100% real, helping customers and partners have the most objective and honest vision. Therefore, they are easier to convince than just hearing and seeing images.",
            ja: "– 企業の製品やサービスを発表する上で効果的なマーケティングツールです。プレゼンテーションのおかげで、製品デモンストレーションはほぼ100%リアルなものであり、顧客やパートナーが最も客観的かつ誠実なビジョンを持つことができます。そのため、単に聞いたり画像を見たりするよりも、説得力があります。",
          },
          {
            type: "text",
            vi: "– Tạo sự sống động cho các sự kiện quảng cáo, giúp người xem cảm nhận rõ ràng, tránh nhàm chán.",
            en: "– Create liveliness for advertising events, help viewers feel clearly, avoid boredom.",
            ja: "– 広告イベントに活気を与え、視聴者に明確な印象を与え、退屈を回避します。",
          },
          {
            type: "text",
            vi: "– Thể hiện được đẳng cấp doanh nghiệp và là cách mạnh mẽ nhất trong truyền thông quảng cáo.",
            en: "– Demonstrates the class of the business and is the most powerful way in advertising communication.",
            ja: "– ビジネスのクラスを示し、広告コミュニケーションにおいて最も強力な手段です。",
          },
          {
            type: "text",
            vi: "– Bắt kịp xu hướng, mang lại hiệu quả cao, tối ưu chi phí quảng cáo cho công ty.",
            en: "– Keep up with trends, bring high efficiency, optimize advertising costs for the company.",
            ja: "– トレンドを追従し、高い効率性をもたらし、企業の広告コストを最適化します。",
          },
          {
            type: "text",
            vi: "Nhìn chung, hiệu quả của 3D Mapping mang lại là rất lớn. Vì vậy, nhiều người đã quyết định sử dụng công nghệ này để giúp các sự kiện diễn ra hiệu quả hơn. Quảng bá sản phẩm, dịch vụ và phục vụ nhiều mục đích khác nhau.",
            en: "Overall, the effectiveness of 3D Mapping is huge. Therefore, many people have decided to use this technology to help events take place more effectively. Promote products, services and serve many different purposes.",
            ja: "3Dマッピングの有効性は総じて非常に高く、多くの人がイベントをより効果的に開催するためにこの技術を活用しています。商品やサービスのプロモーションなど、様々な用途に活用できます。",
          },
          {
            type: "image",
            url: blog2id1,
          },
        ],
      },
      {
        title: {
          vi: "Những ứng dụng công nghệ 3D Mapping",
          en: "Applications of 3D Mapping technology",
          ja: "3Dマッピング技術の応用",
        },
        description: [
          {
            type: "text",
            vi: "Ở Việt Nam, việc ứng dụng công nghệ 3D Mapping chủ yếu liên quan đến việc trình chiếu hình ảnh. Hoạt động  chiếu hình ảnh này có ứng dụng  trong nhiều hạng mục. Hiệu quả của  công nghệ 3D Mapping mang lại nhanh chóng được các công ty và tập đoàn truyền thông ứng dụng cho mục đích marketing, bán hàng, quản lý, báo cáo… để đạt hiệu quả tối đa.",
            en: "In Vietnam, the application of 3D Mapping technology is mainly related to image projection. This image projection activity has applications in many categories. The effectiveness of 3D Mapping technology is quickly applied by companies and media corporations for marketing, sales, management, reporting purposes... to achieve maximum efficiency.",
            ja: "ベトナムでは、3Dマッピング技術の応用は主に画像投影に関連しています。この画像投影は様々な分野で応用されています。企業やメディア企業は、マーケティング、販売、経営、レポート作成など、最大限の効率を実現するために、3Dマッピング技術の有効性を迅速に活用しています。",
          },
          {
            type: "text",
            vi: "Một số hoạt động đáng chú ý trong việc ứng dụng công nghệ 3D mapping hiện nay như:",
            en: "Some notable activities in the application of 3D mapping technology today are:",
            ja: "今日の 3D マッピング技術の応用における注目すべき活動は次のとおりです。",
          },
          {
            type: "text",
            vi: "Sự kiện liên quan đến chính trị, văn hóa, giải trí ... hoặc các sự kiện liên quan đến lĩnh vực kinh doanh như: Giới thiệu sản phẩm và dịch vụ, demo trải nghiệm sản phẩm. Với kịch bản được dựng sẵn trước đó thì công nghệ 3D Mapping hoàn toàn có thể đáp ứng nhu cầu trình diễn hình ảnh, video một cách hoàn chỉnh.",
            en: "Events related to politics, culture, entertainment... or events related to the business field such as: Product and service introduction, product experience demo. With a pre-built scenario, 3D Mapping technology can completely meet the needs of displaying images and videos completely.",
            ja: "政治、文化、エンターテインメントなどに関するイベント、あるいは製品・サービス紹介、製品体験デモといったビジネス分野に関するイベントなど、様々なイベントに対応可能です。あらかじめ用意されたシナリオを活用することで、3Dマッピング技術は画像や動画の表示ニーズに完璧に応えます。",
          },
        ],
      },
      {
        title: {
          vi: "Tổ chức sự kiện",
          en: "Event organization",
          ja: "イベント企画",
        },
        description: [
          {
            type: "text",
            vi: "Hiệu quả được ghi nhận của hoạt động này là mang lại trải nghiệm mới mẻ và hiện đại. Người xem choáng ngợp bởi quy mô và tính chân thực của hoạt động này bởi những hình ảnh thực tế và chân thực. Đặc biệt, người xem có được những cảm xúc chân thực nhất liên quan đến nội dung được trình chiếu. Điều này rất hữu ích cho các chương trình nghệ thuật áp dụng công nghệ 3D Mapping vào thực hiện.",
            en: "The noted effectiveness of this activity is to bring a new and modern experience. Viewers are overwhelmed by the scale and authenticity of this activity with realistic and authentic images. In particular, viewers have the most genuine emotions related to the content being shown. This is very useful for art programs applying 3D Mapping technology.",
            ja: "このアクティビティの注目すべき効果は、新しく現代的な体験をもたらすことです。観客は、リアルで本格的な映像とスケール感に圧倒されます。特に、観客は提示されたコンテンツに対して、最も純粋な感情を抱くことができます。これは、3Dマッピング技術を応用したアートプログラムに非常に有効です。",
          },
        ],
      },
      {
        title: {
          vi: "Giới thiệu sản phẩm",
          en: "Product Introduction",
          ja: "製品紹介",
        },
        description: [
          {
            type: "image",
            url: blog3id1,
          },
          {
            type: "text",
            vi: "Tùy thuộc vào sản phẩm, việc ứng dụng công nghệ 3D Mapping để để trình bày sản phẩm, dịch vụ một cách hiệu quả và đạt được các mục tiêu marketing cụ thể cho các công ty. Hiệu ứng hình ảnh được xây dựng kết hợp giữa ánh sáng và âm thanh làm tăng hiệu quả tiếp cận sản phẩm của khán giả.",
            en: "Depending on the product, the application of 3D Mapping technology to present products and services effectively and achieve specific marketing goals for companies. Visual effects are built in combination with light and sound to increase the audience's access to the product.",
            ja: "製品に応じて、3Dマッピング技術を適用することで、製品やサービスを効果的に提示し、企業の特定のマーケティング目標を達成します。光と音を組み合わせた視覚効果により、視聴者の製品へのアクセスが向上します。",
          },
          {
            type: "text",
            vi: "Đặc biệt qua lần ra mắt này, thương hiệu còn khẳng định được tầm vóc của mình bằng sự chuyên nghiệp và chỉn chu trong các sản phẩm.",
            en: "Especially through this launch, the brand also affirms its stature with professionalism and meticulousness in its products.",
            ja: "特に今回の発売を通じて、同ブランドは製品に対するプロフェッショナリズムと細心の注意によってその地位を確立しました。",
          },
        ],
      },
      {
        title: {
          vi: "Trình diễn sản phẩm và dịch vụ",
          en: "Product and service demonstration",
          ja: "製品とサービスのデモンストレーション",
        },
        description: [
          {
            type: "text",
            vi: "Trong một số lĩnh vực liên quan đến xây dựng và bất động sản, việc ứng dụng công nghệ 3D Mapping sẽ giúp việc trình diễn sản phẩm ở mức độ chuyên nghiệp. Toàn bộ dự án được hiện thực hóa một cách sống động trước mắt người xem một cách trực quan.  Không chỉ người xem được tận mắt chiêm ngưỡng sản phẩm mà các công ty, thương hiệu còn khẳng định giá trị mang lại cho khách hàng.",
            en: "In some fields related to construction and real estate, the application of 3D Mapping technology will help to present products at a professional level. The entire project is vividly realized before the eyes of the viewer in an intuitive way. Not only can the viewer see the product with their own eyes, but companies and brands also affirm the value they bring to customers.",
            ja: "建設・不動産関連の分野では、3Dマッピング技術を活用することで、製品をプロフェッショナルなレベルで提示することが可能になります。プロジェクト全体が、視聴者の目の前に鮮明かつ直感的に再現されます。視聴者は製品を自分の目で確認できるだけでなく、企業やブランドは顧客に提供する価値を確信できます。",
          },
          {
            type: "text",
            vi: "Việc ứng dụng công nghệ bản đồ 3D cho phép quản lý tình hình thực hiện dự án, hỗ trợ nội dung trực quan cho các kênh quảng cáo như web / blog, chủ động đo kích thước sản phẩm khi cần sử dụng…",
            en: "The application of 3D mapping technology allows for project implementation status management, visual content support for advertising channels such as web/blog, proactively measuring product dimensions when needed...",
            ja: "3D マッピング技術の応用により、プロジェクトの実施状況の管理、Web やブログなどの広告チャネル向けのビジュアル コンテンツのサポート、必要に応じて製品の寸法を積極的に測定することが可能になります...",
          },
          {
            type: "text",
            vi: "Các sự kiện ứng dụng công nghệ 3D mapping đã tạo được tiếng vang về hiệu quả mang đến Việt Nam: Tuần lễ Thể thao và Du lịch Quốc gia 2018 – Ninh Bình, tổ chức tiệc cưới, 3D mapping tại Dinh Thống Nhất, lễ ra mắt Galaxy Note 8, sự kiện về James Bond do nhãn hàng Heineken tổ chức…",
            en: "Events applying 3D mapping technology have created a buzz about the effectiveness brought to Vietnam: National Sports and Tourism Week 2018 - Ninh Binh, wedding party organization, 3D mapping at Reunification Palace, Galaxy Note 8 launch ceremony, James Bond event organized by Heineken brand...",
            ja: "3D マッピング技術を適用したイベントは、ベトナムにもたらした効果について話題を呼びました。2018 年全国スポーツ観光週間 - ニンビン、結婚式のパーティー企画、統一会堂での 3D マッピング、Galaxy Note 8 発表式典、ハイネケン ブランドが主催したジェームズ ボンド イベントなどです...",
          },
          {
            type: "text",
            vi: "Với những thông tin mà chúng tôi đã chia sẻ ở trên, hy vọng sẽ giúp bạn trả lời được câu hỏi công nghệ 3D Mapping là gì? và những ứng dụng của công nghệ 3D mapping.",
            en: "With the information we have shared above, we hope to help you answer the question: What is 3D Mapping technology? and the applications of 3D mapping technology.",
            ja: "上記で共有した情報により、「3D マッピング テクノロジーとは何か」という質問と、3D マッピング テクノロジーの応用についての答えが得られることを願っています。",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    img: blog2,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    titleSub: {
      vi: "Xem qua các dự án 3d render đã được thực hiện bởi tav",
      en: "Check out 3d render projects done by tav",
      ja: "tavが手がけた3Dレンダリングプロジェクトをご覧ください",
    },
    time: "2025-04-18T13:00:00",
    content: [
      {
        description: [
          {
            type: "text",
            vi: "Ngày nay, có rất nhiều giải pháp CGI và các dịch vụ 3D Rendering được cung cấp với mục đích giúp cho các nhà phát triển bất động sản, kiến trúc sư trực quan hóa ý tưởng của họ về một không gian. Hiểu rõ về từng loại giải pháp sẽ giúp chúng ta khai thác tối đa hiệu quả và ứng dụng vào dự án phù hợp.",
            en: "Nowadays, there are many CGI solutions and 3D Rendering services provided with the aim of helping real estate developers and architects visualize their ideas about a space. Understanding each type of solution will help us maximize efficiency and apply it to the right project.",
            ja: "今日では、不動産開発業者や建築家が空間に関するアイデアを視覚化することを支援することを目的とした、CGIソリューションや3Dレンダリングサービスが数多く提供されています。それぞれのソリューションを理解することで、効率を最大限に高め、適切なプロジェクトに適用することができます。",
          },
          {
            type: "text",
            vi: "Dưới đây là 5 giải pháp 3D rendering phổ biến nhất trong các dự án thiết kế và kiến ​​trúc.",
            en: "Here are the 5 most popular 3D rendering solutions in design and architecture projects.",
            ja: "ここでは、設計および建築プロジェクトで最も人気のある 5 つの 3D レンダリング ソリューションを紹介します。",
          },
        ],
      },
      {
        title: {
          vi: "1. External 3D Visualization",
          en: "1. External 3D Visualization",
          ja: "1. 外部3Dビジュアライゼーション",
        },
        description: [
          {
            type: "image",
            url: blog4id2,
          },
          {
            type: "text",
            vi: "3D exterior rendering giữ vị trí số 1 trong danh sách này, vì đây là giải pháp được sử dụng rộng rãi nhất trong ngành. Trên thực tế, để thể hiện phần ngoại thất của một công trình kiến trúc, chủ đầu tư thường cần đến những hình ảnh CG chân thực, sống động để diễn tả trọn vẹn các chi tiết của công trình.",
            en: "3D exterior rendering holds the number 1 spot on this list, as it is the most widely used solution in the industry. In fact, to represent the exterior of an architectural work, the investor often needs realistic, vivid CG images to fully express the details of the work.",
            ja: "3D外観レンダリングは、業界で最も広く使用されているソリューションであるため、このリストの1位を占めています。実際、建築作品の外観を表現するには、投資家は作品の細部まで完全に表現できる、リアルで鮮明なCG画像を必要とすることがよくあります。",
          },
          {
            type: "text",
            vi: "External 3D visualization được ứng dụng mạnh mẽ trong thiết kế kiến trúc và bất động sản vì nó mang đến hình dung rõ ràng nhất cho dự án, tạo sự tin cậy với các chủ đầu tư, thuận lợi trong quá trình kêu gọi vốn và phê duyệt xây dựng.",
            en: "External 3D visualization is widely used in architectural and real estate design because it provides the clearest visualization of the project, creates trust with investors, and facilitates the process of capital mobilization and construction approval.",
            ja: "外部 3D ビジュアライゼーションは、プロジェクトの最も明確な視覚化を提供し、投資家との信頼関係を構築し、資本動員と建設承認のプロセスを容易にするため、建築設計や不動産設計で広く使用されています。",
          },
          {
            type: "text",
            vi: "Hình ảnh đẹp, chân thực, sống động cũng là một cách tuyệt vời để thu hút khách hàng và thôi thúc họ tìm hiểu chi tiết về dự án.",
            en: "Beautiful, realistic, and vivid images are also a great way to attract customers and urge them to learn more about the project.",
            ja: "美しく、リアルで、鮮明な画像は、顧客を引き付け、プロジェクトについてさらに詳しく知るよう促す優れた方法でもあります。",
          },
        ],
      },
      {
        title: {
          vi: "2. Interior Rendering",
          en: "2. Interior Rendering",
          ja: "2. インテリアレンダリング",
        },
        description: [
          {
            type: "image",
            url: blog5id2,
          },
          {
            type: "text",
            vi: "Tương tự ngoại thất, diễn họa nội thất cũng đóng một vai trò quan trọng trong việc bán và quảng bá bất kỳ không gian sống nào. 3D interior visualization giúp hiển thị bố cục của một không gian cụ thể, khắc họa công năng của nội thất một cách rõ nét.",
            en: "Similar to exteriors, interior visualization also plays an important role in selling and promoting any living space. 3D interior visualization helps to show the layout of a particular space, clearly depicting the functionality of the interior.",
            ja: "外観と同様に、内部の視覚化もあらゆる居住空間の販売と宣伝において重要な役割を果たします。3D 内部視覚化は、特定の空間のレイアウトを示し、内部の機能性を明確に表現するのに役立ちます。",
          },
          {
            type: "text",
            vi: "Hình ảnh diễn họa xuất sắc là hình ảnh lột tả được vẻ đẹp chân thực của nội thất, thể hiện được tone & mood nhất quán và gợi được cảm xúc muốn đắm chìm trong không gian đó cho khách hàng. Bằng 3D model, khách hàng có thể xem xét kỹ lưỡng món đồ nội thất trước khi quyết định chọn mua.",
            en: "An excellent visualization is one that captures the true beauty of the interior, conveys a consistent tone & mood, and evokes the desire to immerse customers in that space. With a 3D model, customers can carefully examine the furniture before deciding to buy.",
            ja: "優れたビジュアライゼーションとは、インテリアの真の美しさを捉え、一貫したトーンとムードを伝え、顧客がその空間に浸りたいという欲求を喚起するものです。3Dモデルがあれば、顧客は購入を決める前に家具をじっくりと検討することができます。",
          },
          {
            type: "text",
            vi: "3D rendering đóng vai trò như một công cụ mà các nhà thiết kế nội thất sử dụng để truyền tải mọi khía cạnh của thiết kế từ texture, bố cục cho đến phong cách, tone & mood và những đường nét chi tiết khác.",
            en: "3D rendering acts as a tool that interior designers use to convey every aspect of the design from texture, layout to style, tone & mood and other detailed lines.",
            ja: "3D レンダリングは、インテリア デザイナーがテクスチャ、レイアウトからスタイル、トーンやムード、その他の詳細な線までデザインのあらゆる側面を伝えるために使用するツールとして機能します。",
          },
        ],
      },
      {
        title: {
          vi: "3. CG Panoramas",
          en: "3. CG Panoramas",
          ja: "3. CGパノラマ",
        },
        description: [
          {
            type: "image",
            url: blog6id2,
          },
          {
            type: "text",
            vi: "Để hiển thị trọn vẹn địa điểm và truyền tải bầu không khí của một không gian, không có cách nào tốt hơn là dẫn dắt người xem trải nghiệm tương tác 360 độ theo thời gian thực (real-time), nơi họ có thể chiêm ngưỡng mọi chi tiết bề mặt của không gian thông qua chế độ xem toàn cảnh trong cuộc sống thực.",
            en: "To fully display a location and convey the atmosphere of a space, there is no better way than to lead viewers through a real-time 360-degree interactive experience, where they can admire every surface detail of the space through a panoramic view in real life.",
            ja: "場所を完全に表現し、空間の雰囲気を伝えるには、視聴者をリアルタイムの360度インタラクティブ体験へと導くこと以上に優れた方法はありません。視聴者は、現実世界のパノラマビューを通して、空間のあらゆる表面ディテールを鑑賞することができます。",
          },
          {
            type: "text",
            vi: "Đây hiện là một trong những xu hướng được ưa thích nhất trong kiến ​​trúc, giúp cho cả khách hàng và nhà đầu tư khám phá về địa điểm, trải nghiệm hiệu ứng tổng thể, nắm bắt từng chi tiết và có thể di chuyển tùy ý trong không gian ảo được xây dựng một cách sống động.",
            en: "This is currently one of the most popular trends in architecture, helping both clients and investors explore the location, experience the overall effect, grasp every detail and be able to move freely in the virtual space built vividly.",
            ja: "これは現在、建築業界で最も人気のあるトレンドの一つであり、クライアントと投資家の両方が、その場所を探索し、全体的な効果を体験し、細部まで把握し、鮮やかに構築された仮想空間内を自由に移動できるようになります。",
          },
          {
            type: "text",
            vi: "CG panoramas đòi hỏi nhiều nỗ lực và thời gian hơn bất kỳ loại hình 3D rendering nào vì việc này bao gồm việc render hình ảnh toàn cảnh 2D (panoramic) để có thể cho ra được hình ảnh 3D. Việc chuyển đổi hình ảnh 2D thành hình ảnh 3D mất nhiều thời gian và công sức hơn, gấp hai hoặc thậm chí ba lần việc sản xuất các hình ảnh CGI thông thường.",
            en: "CG panoramas require more effort and time than any other type of 3D rendering because it involves rendering 2D panoramic images to produce 3D images. Converting 2D images into 3D images takes more time and effort, twice or even three times more than producing conventional CGI images.",
            ja: "CGパノラマは、2Dパノラマ画像をレンダリングして3D画像を作成するため、他の3Dレンダリングよりも多くの労力と時間がかかります。2D画像を3D画像に変換するには、従来のCGI画像を作成するよりも2倍、あるいは3倍の時間と労力がかかります。",
          },
          {
            type: "text",
            vi: "Mặc dù vậy, kết quả mang lại hoàn toàn tương xứng với công sức bạn bỏ ra khi giúp khách hàng có được trải nghiệm chân thật nhất về không gian, đủ để họ quyết định chi tiền để sở hữu ngay bất động sản.",
            en: "However, the results are completely worth the effort you put in to help customers have the most realistic experience of the space, enough for them to decide to spend money to own the real estate immediately.",
            ja: "しかし、顧客にその空間を最もリアルに体験してもらうために費やす労力は、その成果に十分見合う価値があります。その不動産をすぐに購入するためにお金を払う決断をするほどの価値があるのです。",
          },
          {
            type: "text",
            vi: "CG panoramas là một trong những loại hình 3D rendering kiến ​​trúc hiệu quả nhất, nhằm mục đích thuyết phục khách hàng mua hàng bằng cách để họ được tự do trải nghiệm không gian ảo một cách chân thật.",
            en: "CG panoramas are one of the most effective types of 3D architectural rendering, aiming to convince customers to buy by letting them freely experience the virtual space in a realistic way.",
            ja: "CG パノラマは、最も効果的な 3D 建築レンダリングの 1 つであり、仮想空間をリアルに体験することで顧客の購入意欲を高めることを目的としています。",
          },
        ],
      },
      {
        title: {
          vi: "4. 3D Animation",
          en: "4. 3D Animation",
          ja: "4. 3Dアニメーション",
        },
        description: [
          {
            type: "text",
            vi: "3D animation được xem như một bộ phim ngắn với đầy đủ các cung bậc cảm xúc và thông điệp được gửi gắm trong từng khung hình.",
            en: "3D animation is considered a short film with a full range of emotions and messages conveyed in each frame.",
            ja: "3Dアニメーションは、フレームごとに多様な感情やメッセージを伝える短編映画とみなされています。",
          },
          {
            type: "text",
            vi: "Bất kỳ khách hàng nào muốn mua bất động sản đều mong muốn được tận mắt chứng kiến ​​những giá trị lý tính và cảm tính mà bất động sản đó mang lại. 3D animation có khả năng trình chiếu bao quát mọi góc độ với đầy đủ ánh sáng, bố cục và đặc điểm của vật liệu giúp khách hàng hình dung công năng của các món đồ nội thất. Từng chi tiết, đường nét của dự án hiện lên rõ ràng, sắc nét giúp chủ đầu tư khéo léo “khoe” trọn vẹn vẻ đẹp của công trình. 3D animation là sự kết hợp giữa hình ảnh với các hiệu ứng chuyển động và âm thanh thể hiện mọi góc độ và tập trung vào chi tiết của bất kỳ không gian nào. Đây là hình thức dễ chạm đến cảm xúc của khách hàng hơn bất kì loại dịch vụ nào.",
            en: `Any customer who wants to buy real estate wants to witness with their own eyes the rational and emotional values ​​that the real estate brings. 3D animation has the ability to present all angles with full lighting, layout and material characteristics to help customers visualize the function of the furniture. Every detail and line of the project appears clearly and sharply, helping investors cleverly "show off" the full beauty of the project. 3D animation is a combination of images with motion effects and sounds that show all angles and focus on the details of any space. This is a form that touches customers' emotions more easily than any other service.`,
            ja: "不動産を購入したい顧客は皆、その不動産がもたらす合理的かつ感情的な価値を自分の目で確かめたいと考えています。3Dアニメーションは、照明、レイアウト、素材の特性など、あらゆる角度から提示できるため、顧客は家具の機能を視覚的に理解することができます。プロジェクトのあらゆるディテールやラインが鮮明かつ鮮明に表現され、投資家はプロジェクトの美しさを巧みに「アピール」することができます。3Dアニメーションは、あらゆる角度から提示し、あらゆる空間の細部に焦点を当てた画像とモーションエフェクト、そしてサウンドを組み合わせたものです。これは、他のどのサービスよりも顧客の感情に訴えかけるものです。",
          },
        ],
      },
      {
        title: {
          vi: "5. Virtual Tours",
          en: "5. Virtual Tours",
          ja: "5. バーチャルツアー",
        },
        description: [
          {
            type: "image",
            url: blog7id2,
          },
          {
            type: "text",
            vi: "Virtual tours cung cấp trọn bộ ảnh toàn cảnh được xâu chuỗi dưới dạng video bao gồm văn bản và âm thanh, tùy theo nhu cầu. Loại hình 3D rendering cực kỳ hiệu quả này chủ yếu được sử dụng trong kiến ​​trúc và bất động sản. Virtual tours giúp các chuyên gia đưa khách hàng tham gia một chuyến tham quan ảo theo nghĩa đen để khách hàng biết rõ không gian sẽ trông như thế nào khi được xây dựng. Điều này rất cần thiết trong xây dựng vì giúp tránh được rủi ro mắc sai lầm gây tốn kém thời gian, công sức và tiền bạc để sửa chữa.",
            en: "Virtual tours provide a complete set of panoramic images strung together in a video format with text and audio, depending on the need. This highly effective type of 3D rendering is mainly used in architecture and real estate. Virtual tours help professionals take clients on a virtual tour so that they can see exactly what the space will look like when built. This is essential in construction because it helps avoid the risk of making mistakes that cost time, effort and money to fix.",
            ja: "バーチャルツアーは、必要に応じてテキストと音声付きの動画形式でつなぎ合わせたパノラマ画像一式を提供します。この非常に効果的な3Dレンダリングは、主に建築と不動産業界で使用されています。バーチャルツアーは、専門家がクライアントをバーチャルツアーに案内し、完成した空間がどのように見えるかを正確に確認するのに役立ちます。これは、修正に時間、労力、費用がかかるミスのリスクを回避するため、建設業界では不可欠です。",
          },
          {
            type: "text",
            vi: "Khách hàng có thể xem qua từng chi tiết và góc độ của dự án trước khi họ đồng ý mua. Các chuyến tham quan ảo cho phép sửa đổi hoặc điều chỉnh bất kì chi tiết nào nếu cần.",
            en: "Clients can see every detail and angle of the project before they agree to buy. Virtual tours allow for any modifications or adjustments if needed.",
            ja: "クライアントは、購入に同意する前に、プロジェクトのあらゆる詳細と角度を確認できます。バーチャルツアーでは、必要に応じて変更や調整を行うことができます。",
          },
          {
            type: "text",
            vi: "Sự chi tiết và chân thực mà các Virtual tours mang lại giúp các kiến ​​trúc sư dễ dàng hơn rất nhiều trong việc trình bày tác phẩm của họ với khách hàng tiềm năng. Nội dung được trình bày có thể chia sẻ trên bất kỳ kênh truyền thông nào mà bạn muốn.",
            en: "The detail and realism that Virtual tours provide makes it much easier for architects to present their work to potential clients. The content presented can be shared on any media channel you want.",
            ja: "バーチャルツアーが提供する詳細さとリアルさにより、建築家は潜在的なクライアントへのプレゼンテーションがはるかに容易になります。提示されたコンテンツは、任意のメディアチャネルで共有できます。",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    titleSub: {
      vi: "Xem qua các dự án 3d Model đã được thực hiện bởi tav",
      en: "Check out 3d Model projects done by tav",
      ja: "tavが作成した3Dモデルプロジェクトをご覧ください",
    },
    time: "2025-04-18T13:00:00",
    content: [
      {
        description: [
          {
            type: "text",
            vi: "Có đến 95% khách hàng có xu hướng liên hệ với các tư vấn viên của những bất động sản có cung cấp tham quan không gian thực tế ảo 3D hơn các dự án không có. Cho thấy xu hướng thay đổi và phát triển bất động sản 3D đã không còn xa lạ với nhiều doanh nghiệp hoạt động trong lĩnh vực này. Vậy bất động sản 3D là gì? và mang đến những lợi ích nào cho các nhà đầu tư? Theo dõi ngay nội dung bài viết dưới dây.",
            en: "Up to 95% of customers tend to contact consultants of real estate that provide 3D virtual reality space tours than projects that do not. Showing the trend of change and development of 3D real estate is no longer strange to many businesses operating in this field. So what is 3D real estate? and what benefits does it bring to investors? Follow the content of the article below.",
            ja: "3Dバーチャルリアリティ空間ツアーを提供する不動産コンサルタントに問い合わせる顧客は、そうでないプロジェクトよりも最大95%に上ります。3D不動産の変化と発展のトレンドは、この分野で事業を展開する多くの企業にとってもはや珍しいことではありません。では、3D不動産とは何でしょうか？そして、投資家にどのようなメリットをもたらすのでしょうか？以下の記事でその詳細をご覧ください。",
          },
          {
            type: "image",
            url: blog8id3,
          },
        ],
      },
      {
        title: {
          vi: "I. Bất động sản 3D là gì? ",
          en: "I. What is 3D real estate?",
          ja: "I. 3D 不動産とは何ですか?",
        },
        description: [
          {
            type: "image",
            url: blog9id3,
          },
          {
            type: "text",
            vi: "Bất động sản 3D sử dụng công nghệ scan 3D dựa trên việc quét tia hồng ngoại để thu thập các dữ liệu từ không gian thực qua môi trường kỹ thuật số. Sau đó mô phỏng lại căn hộ thành một mô hình 3D chân thực, từ màu sắc, kích thước, ánh sáng đến các đồ vật ở mọi ngóc ngách cũng đều được tái hiện rõ nét và chính xác 100%. Mô hình bất động sản 3D mở ra một cách tiếp cận, trao đổi mới dành cho các doanh nghiệp hoạt động kinh doanh trong lĩnh vực này. ",
            en: "3D real estate uses 3D scanning technology based on infrared scanning to collect data from real space through a digital environment. Then simulate the apartment into a realistic 3D model, from color, size, light to objects in every corner are reproduced clearly and 100% accurately. 3D real estate models open up a new approach and exchange for businesses operating in this field.",
            ja: "3D不動産は、赤外線スキャンをベースとした3Dスキャン技術を用いて、デジタル環境を通して現実空間からデータを収集します。そして、マンションをリアルな3Dモデルにシミュレートします。色、サイズ、光、隅々まで鮮明かつ100%正確に再現されます。3D不動産モデルは、この分野で事業を展開する企業にとって新たなアプローチと交流の場を切り開きます。",
          },
          {
            type: "text",
            vi: "Theo một khảo sát có 95% nhà đầu tư, đối tác và khách hàng có xu hướng liên hệ hợp tác với tư vấn viên của bất động sản cung cấp chuyến tham quan không gian thực tế ảo 3D. Việc ứng dụng công nghệ thực tế ảo tạo nên một chuyến tham quan đầy tiện lợi và hiệu quả dành cho khách hàng. Giúp họ tự do di chuyển bên trong căn hộ trên mặt phẳng hình ảnh 3D, cho phép những người tham quan có thể xoay chuyển, chọn góc nhìn và quan sát được toàn bộ không gian chi tiết bên trong của căn nhà.  ",
            en: "According to a survey, 95% of investors, partners and customers tend to cooperate with real estate consultants who provide 3D virtual reality tours. The application of virtual reality technology creates a convenient and effective tour for customers. Helping them move freely inside the apartment on a 3D image plane, allowing visitors to rotate, choose the viewing angle and observe the entire detailed space inside the house.",
            ja: "ある調査によると、投資家、パートナー、顧客の95%が、3Dバーチャルリアリティ空間ツアーを提供する不動産コンサルタントと連絡を取り、協力する傾向があります。バーチャルリアリティ技術の活用により、顧客にとって便利で効果的なツアーが実現します。3D画像平面上でマンション内を自由に移動でき、回転したり、視点を選んだりして、住宅の詳細な内部空間全体を観察することができます。",
          },
          {
            type: "image",
            url: blog10id3,
          },
        ],
      },
      {
        title: {
          vi: "II. Tiềm năng bất động sản 3D mang lại ",
          en: "II. Potential of 3D real estate",
          ja: "II. 3D不動産の可能性",
        },
        description: [
          {
            type: "text",
            vi: "Có 74% công ty Bất động sản sử dụng Công nghệ thực tế ảo 3D Matterport mang về nhiều hợp đồng hơn. Nhiều doanh nghiệp đã triển khai để ứng dụng giải pháp này trong từng hoạt động kinh doanh và mang lại hiệu quả khá tốt.  ",
            en: "74% of real estate companies using Matterport 3D Virtual Reality Technology bring in more contracts. Many businesses have deployed this solution in each business activity and brought quite good results.",
            ja: "Matterport 3Dバーチャルリアリティ技術を活用している不動産会社の74%が、契約獲得数を増加させています。多くの企業がこのソリューションを各事業活動に導入し、良好な成果を上げています。",
          },
          {
            type: "text",
            vi: "Nhiều chuyên gia nhận định, trong vài năm tới, nhà đầu tư không nhất thiết phải ra khỏi nhà và tìm kiếm thông tin về những dự án đầu tư tiềm năng nữa. Tất cả đều được giới thiệu, tổng hợp chi tiết trong bất động sản ảo. Thông qua đó, nhà đầu tư, khách hàng có thể tùy chọn xem mọi không gian bên ngoài, bên trong của từng phân khu bất động sản với hiệu quả tham quan gần như quá trình tham quan trực tiếp. ",
            en: "Many experts say that in the next few years, investors will not necessarily have to leave their homes and look for information about potential investment projects anymore. All are introduced and summarized in detail in virtual real estate. Through that, investors and customers can optionally view all the exterior and interior spaces of each real estate subdivision with the same tour efficiency as a direct tour.",
            ja: "多くの専門家は、今後数年のうちに、投資家は必ずしも自宅を離れて投資対象物件の情報を探す必要がなくなると述べています。すべての物件はバーチャル不動産で詳細に紹介・まとめられています。これにより、投資家や顧客は、各不動産区画の内外のあらゆる空間を、直接物件を見学するのと同じ効率で自由に閲覧できます。",
          },
          {
            type: "text",
            vi: "Không chỉ vậy, bất động sản 3D mang đến một cách thức giới thiệu, truyền thông mới thu hút hơn với công nghệ thực tế ảo. Khách hàng có thể chủ động tham quan dự án bất động sản ở bất cứ thời điểm, không gian nào. Từ đó gia tăng được sự tương tác và quan tâm từ khách hàng. Thông qua dự án, khách hàng đã biết đến những thông tin về bất động sản, diện tích và các thông tin tiện ích khác. Thì bây giờ, sau khi đã xem xét mọi không gian, hình ảnh 3D, khách hàng có thể nhanh chóng đưa ra quyết định hợp tác. Một số khảo sát cho thấy bất động sản ảo giúp giảm thời gian cho mỗi giao dịch lên đến 31%. ",
            en: "Not only that, 3D real estate brings a new and more attractive way of introducing and communicating with virtual reality technology. Customers can proactively visit real estate projects at any time and space. This increases interaction and interest from customers. Through the project, customers have learned about real estate information, area and other utility information. Now, after reviewing all spaces and 3D images, customers can quickly make a decision to cooperate. Some surveys show that virtual real estate helps reduce the time for each transaction by up to 31%.",
            ja: "さらに、3D不動産は、バーチャルリアリティ技術を活用した、より魅力的な新しい紹介・コミュニケーション方法をもたらします。顧客はいつでもどこでも、積極的に不動産物件を訪問することができます。これにより、顧客との交流と関心が高まります。プロジェクトを通じて、顧客は不動産情報、エリア、その他のユーティリティ情報を把握できます。そして、すべての空間と3D画像を確認した後、迅速に取引を決定できます。いくつかの調査によると、バーチャル不動産は各取引の時間を最大31%短縮することが示されています。",
          },
          {
            type: "image",
            url: blog11id3,
          },
          {
            type: "text",
            vi: "Không dừng lại ở việc ứng dụng công nghệ 3D vào bất động sản, mà nhiều doanh nghiệp hiện tại đang cố gắng để tối ưu dịch vụ, mang đến cho khách hàng những tính năng trải nghiệm mới. 90% các khách hàng cho rằng các dự án Bất động sản giới thiệu trực tuyến có chức năng tham quan trực tuyến 3D sẽ hấp dẫn họ hơn. Thu hút đúng nhóm khách hàng mục tiêu bằng cách cung cấp cho khách hàng hồ sơ giới thiệu trực tuyến đầy đủ thông tin, giúp doanh nghiệp thu hút được sự quan tâm của khách hàng trong những tương tác đầu tiên. ",
            en: "Not stopping at applying 3D technology to real estate, many businesses are currently trying to optimize services, bringing customers new experience features. 90% of customers believe that real estate projects introduced online with 3D online tour function will be more attractive to them. Attracting the right target customer group by providing customers with a full online introduction profile, helping businesses attract customers' attention in the first interactions.",
            ja: "多くの企業は、不動産業界への3D技術の応用に留まらず、サービスの最適化に取り組み、顧客に新たな体験を提供しています。顧客の90%は、3Dオンラインツアー機能を活用してオンラインで紹介された不動産プロジェクトは、より魅力的であると考えています。顧客に包括的なオンライン紹介プロフィールを提供することで、適切なターゲット顧客層を獲得し、最初のインタラクションで顧客の関心を引き付けることができます。",
          },
          {
            type: "text",
            vi: "Ứng dụng bất động sản 3D là một phương tiện để doanh nghiệp có thể nâng cao hồ sơ năng lực trực tuyến cho những dự án bất động sản của họ. 99% các trưởng phòng, giám đốc kinh doanh đồng ý rằng những chuyến tham quan bằng công nghệ thực tế ảo 3D giúp tăng hạng dự án của họ trên thị trường cạnh tranh. ",
            en: "3D real estate application is a means for businesses to enhance the online capacity profile for their real estate projects. 99% of department heads and business directors agree that 3D virtual reality tours help increase their project ranking in the competitive market.",
            ja: "3D不動産アプリケーションは、企業が不動産プロジェクトのオンラインキャパシティプロファイルを強化するための手段です。部門長や経営幹部の99%は、3Dバーチャルリアリティツアーが競争の激しい市場におけるプロジェクトのランキング向上に役立つと考えています。",
          },
        ],
      },
      {
        title: {
          vi: "III. Lợi ích của bất động sản 3D trong kinh doanh ",
          en: "III. Benefits of 3D real estate in business",
          ja: "III. ビジネスにおける3D不動産のメリット",
        },
        description: [
          {
            type: "text",
            vi: "Ứng dụng công nghệ 3D vào bất động sản mang đến những lợi ích vượt trội cho cả doanh nghiệp, nhà đầu tư và các khách hàng có nhu cầu nghỉ dưỡng khác. ",
            en: "Applying 3D technology to real estate brings outstanding benefits to businesses, investors and other customers with vacation needs.",
            ja: "3D テクノロジーを不動産に適用すると、企業、投資家、休暇を必要とするその他の顧客に多大なメリットがもたらされます。",
          },
          {
            type: "image",
            url: blog12id3,
          },
        ],
      },
      {
        title: {
          vi: "3.1 Bất động sản nhà ở ",
          en: "3.1 Residential real estate",
          ja: "3.1 住宅不動産",
        },
        description: [
          {
            type: "text",
            vi: "Không gian thực tế ảo 3D không chỉ giúp doanh nghiệp xây dựng hình ảnh thương hiệu là công ty bất động sản hàng đầu, đổi mới về công nghệ và thể hiện sự chuyên nghiệp mà còn mở rộng cơ hội hợp tác với nhiều khách hàng tiềm năng. Bất động sản 3D mang đến một trải nghiệm chân thật và mới lạ dành cho khách hàng. Quá trình tìm kiếm căn hộ trở nên dễ dàng và nhanh chóng hơn đối với quý khách hàng. Thông qua việc tham quan trực tiếp, chỉ với vài thao tác đơn giản, khách hàng đã có thể xem xét kỹ lưỡng các thông tin về phòng ốc, hợp đồng mua nhà... ",
            en: "3D virtual reality space not only helps businesses build their brand image as a leading real estate company, innovate in technology and demonstrate professionalism, but also expands cooperation opportunities with many potential customers. 3D real estate brings a realistic and novel experience to customers. The process of finding an apartment becomes easier and faster for customers. Through direct visits, with just a few simple steps, customers can carefully review information about rooms, home purchase contracts, etc.",
            ja: "3Dバーチャルリアリティ空間は、企業が大手不動産会社としてのブランドイメージを構築し、技術革新と専門性を示すのに役立つだけでなく、多くの潜在顧客との協業機会を拡大することにも役立ちます。3D不動産は、顧客にリアルで斬新な体験をもたらします。顧客にとって、アパート探しのプロセスはより簡単かつ迅速になります。直接訪問することで、わずか数ステップで部屋や住宅購入契約などの情報をじっくりと確認できます。",
          },
          {
            type: "text",
            vi: "Các hình ảnh, nội thất, vị trí và phương hướng được thể hiện một cách chân thật thông qua giải pháp 3D toàn diện (tạo không gian 3D, hình ảnh 360, sơ đồ mặt bằng...) với độ phân giải cao và chính xác. Mang đến những trải nghiệm chân thực về không gian của căn hộ mà không cần đến trực tiếp.  ",
            en: `Images, interiors, locations and directions are realistically presented through a comprehensive 3D solution (creating 3D spaces, 360 images, floor plans, etc.) with high resolution and accuracy. Bringing realistic experiences of the apartment space without having to go directly.`,
            ja: "画像、インテリア、場所、道順は、包括的な3Dソリューション（3D空間、360度画像、間取り図などの作成）を通じて、高解像度かつ高精度にリアルに提示されます。直接訪問することなく、アパート空間のリアルな体験を提供します。",
          },
          {
            type: "image",
            url: blog13id3,
          },
        ],
      },
      {
        title: {
          vi: "3.2 Bất động sản thương mại ",
          en: "3.2 Commercial real estate",
          ja: "3.2 商業用不動産",
        },
        description: [
          {
            type: "text",
            vi: "Thông thường, các bất động sản thương mại có giá trị lớn, phương thức truyền thông thông qua hình ảnh, video thông thường đã không thể thỏa mãn nhu cầu của nhà đầu tư. Ứng dụng công nghệ thực tế ảo mang đến cho họ có cái nhìn chính xác về không gian bất động sản mà họ đang tìm kiếm. Nhà đầu tư có thể ngay lập tức truy cập và đánh giá không gian tổng quan, giá trị của bất động sản đang nắm giữ.",
            en: "Normally, for high-value commercial properties, conventional media methods such as images and videos cannot satisfy investors' needs. Applying virtual reality technology gives them an accurate view of the real estate space they are looking for. Investors can immediately access and evaluate the overall space and value of the property they are holding.",
            ja: "通常、高額な商業用不動産の場合、画像や動画といった従来のメディア手法では投資家のニーズを満たすことができません。しかし、バーチャルリアリティ技術を活用することで、投資家は希望する不動産空間を正確に把握できるようになります。投資家は保有物件の全体的な空間と価値を即座に把握し、評価することができます。",
          },
          {
            type: "text",
            vi: "Nếu là trước đây, những người đầu tư bất động sản phải mất nhiều thời gian để xem xét, khảo sát dự án thì giờ đây bất động sản 3D có thể thu hút họ ngay từ quá trình tìm kiếm trực tuyến. Không gian thực tế ảo 3D mang đến công cụ trực quan hơn để những nhà đầu tư có thể xem xét các lựa chọn và ra quyết định, từ đó giúp tiết kiệm thời gian và tiền bạc. ",
            en: "In the past, real estate investors had to spend a lot of time reviewing and surveying projects, but now 3D real estate can attract them right from the online search process. 3D virtual reality space provides a more intuitive tool for investors to review options and make decisions, thereby saving time and money.",
            ja: "かつて、不動産投資家はプロジェクトの検討と調査に多くの時間を費やさなければなりませんでしたが、今では3D不動産を活用することで、オンライン検索の段階から投資家を惹きつけることができます。3Dバーチャルリアリティ空間は、投資家がより直感的に選択肢を検討し、意思決定を行うためのツールとなり、時間とコストの節約につながります。",
          },
        ],
      },
      {
        title: {
          vi: "3.3 Bất động sản cho thuê ",
          en: "3.3 Real estate for rent",
          ja: "3.3 賃貸不動産",
        },
        description: [
          {
            type: "text",
            vi: "Không gian bất động sản 3D có thể giúp khách hàng giảm tỷ lệ phòng trống bằng cách thu hút thêm nhiều khách hàng tiềm năng và tăng mức độ tương tác với họ thông qua cung cấp chuyến tham quan căn hộ, đất đai trực tuyến. Giải pháp này còn giải quyết được vấn đề suy nghĩ để ra quyết định của khách hàng, bằng việc tiếp cận đến nhiều nhóm đối tượng khách hàng tiềm năng và tạo giá trị khan hiếm cho bất động sản cho thuê. ",
            en: `3D real estate space can help customers reduce vacancy rates by attracting more potential customers and increasing their engagement by providing online tours of apartments and land. This solution also solves the problem of thinking to make decisions of customers, by reaching many groups of potential customers and creating scarcity value for rental real estate.`,
            ja: "3D不動産空間は、より多くの潜在顧客を引きつけ、アパートや土地のオンライン内覧を提供することで顧客のエンゲージメントを高めることで、空室率の低減に貢献します。また、このソリューションは、多くの潜在顧客グループにリーチし、賃貸不動産に希少価値を生み出すことで、顧客の意思決定における思考の課題も解決します。",
          },
          {
            type: "image",
            url: blog14id3,
          },
          {
            type: "text",
            vi: "Bên cạnh những lợi ích mà công nghệ thực tế ảo 3D mang lại trong mỗi loại bất động sản. Dễ dàng nhận thấy công nghệ này giúp tăng năng lực cạnh tranh cho doanh nghiệp. Không chỉ tạo nên những trải nghiệm tuyệt vời dành cho khách hàng mà còn thể hiện năng lực, sự chuyên nghiệp trước đối tác, khách hàng. ",
            en: "In addition to the benefits that 3D virtual reality technology brings to each type of real estate. It is easy to see that this technology helps increase the competitiveness of businesses. Not only creating great experiences for customers but also demonstrating capacity and professionalism to partners and customers.",
            ja: "3Dバーチャルリアリティ技術は、あらゆる不動産業界にメリットをもたらします。この技術が企業の競争力向上に貢献することは明らかです。顧客に素晴らしい体験を提供するだけでなく、パートナーや顧客に対しても、自社の能力とプロフェッショナリズムを示すことができます。",
          },
          {
            type: "text",
            vi: "Giúp tiết kiệm thời gian và chi phí cho cả doanh nghiệp và khách hàng. Không cần phải sắp xếp thời gian để khảo sát trực tiếp các dự án, chỉ với một thiết bị di động, khách hàng đã có thể tham quan toàn cảnh không gian, chủ nhà cũng dễ dàng giới thiệu đến khách hàng của mình.",
            en: "Helps save time and costs for both businesses and customers. There is no need to arrange time to directly survey projects, with just a mobile device, customers can visit the entire space, and homeowners can easily introduce to their customers.",
            ja: "企業と顧客双方の時間とコストを節約します。プロジェクトを直接調査するために時間を割く必要はありません。モバイルデバイスだけで、顧客は物件全体を視察でき、住宅所有者は顧客に簡単に物件を紹介できます。",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    img: blog7,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "5",
    img: blog4,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-17T13:00:00",
  },
  {
    id: "6",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "7",
    img: blog5,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-17T13:00:00",
  },
  {
    id: "8",
    img: blog2,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "9",
    img: blog6,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Bất động sản 3D là gì? Lợi ích trong kinh doanh bất động sản",
      en: "What is 3D Real Estate? Benefits in Real Estate Business",
      ja: "3D不動産とは？不動産ビジネスにおけるメリット",
    },
    time: "2025-04-17T13:00:00",
  },
  {
    id: "10",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "11",
    img: blog7,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "12",
    img: blog7,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "12",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "13",
    img: blog2,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "14",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "15",
    img: blog1,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Công nghệ 3d mapping là gì? Những ứng dụng của 3d mapping",
      en: "What is 3D mapping technology? Applications of 3D mapping",
      ja: "3Dマッピング技術とは？ 3Dマッピングの応用例",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "16",
    img: blog2,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "17",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "18",
    img: blog7,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "19",
    img: blog4,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-17T13:00:00",
  },
  {
    id: "20",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "21",
    img: blog5,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-17T13:00:00",
  },
  {
    id: "22",
    img: blog2,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "23",
    img: blog6,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Bất động sản 3D là gì? Lợi ích trong kinh doanh bất động sản",
      en: "What is 3D Real Estate? Benefits in Real Estate Business",
      ja: "3D不動産とは？不動産ビジネスにおけるメリット",
    },
    time: "2025-04-17T13:00:00",
  },
  {
    id: "24",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "25",
    img: blog7,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "26",
    img: blog7,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "27",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "28",
    img: blog2,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "29",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "30",
    img: blog1,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Công nghệ 3d mapping là gì? Những ứng dụng của 3d mapping",
      en: "What is 3D mapping technology? Applications of 3D mapping",
      ja: "3Dマッピング技術とは？ 3Dマッピングの応用例",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "31",
    img: blog2,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "32",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "33",
    img: blog7,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "34",
    img: blog4,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-17T13:00:00",
  },
  {
    id: "35",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "36",
    img: blog5,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-17T13:00:00",
  },
  {
    id: "37",
    img: blog2,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "38",
    img: blog6,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "Bất động sản 3D là gì? Lợi ích trong kinh doanh bất động sản",
      en: "What is 3D Real Estate? Benefits in Real Estate Business",
      ja: "3D不動産とは？不動産ビジネスにおけるメリット",
    },
    time: "2025-04-17T13:00:00",
  },
  {
    id: "39",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "40",
    img: blog7,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "40",
    img: blog7,
    author: "Lorem Ipsum",
    category: { vi: "Công nghệ", en: "technology", ja: "テクノロジー" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "41",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "42",
    img: blog2,
    author: "Lorem Ipsum",
    category: { vi: "Phong cách sống", en: "lifestyle", ja: "ライフスタイル" },
    title: {
      vi: "5 loại hình giải pháp 3D rendering trong lĩnh vực kiến trúc",
      en: "5 types of 3D rendering solutions in the field of architecture",
      ja: "建築分野における5種類の3Dレンダリングソリューション",
    },
    time: "2025-04-18T13:00:00",
  },
  {
    id: "43",
    img: blog3,
    author: "Lorem Ipsum",
    category: { vi: "Kiến trúc", en: "architecture", ja: "建築" },
    title: {
      vi: "Xu hướng ứng dụng công nghệ trong m arketing bất động sản 2025",
      en: "Trends of technology application in real estate marketing 2025",
      ja: "不動産マーケティングにおけるテクノロジー応用のトレンド（2025年）",
    },
    time: "2025-04-18T13:00:00",
  },
];

export const DataAdviseService: IAdviseService[] = [
  {
    value: "3D Mapping",
    name: "3D Mapping",
  },
  {
    value: "3D Modelling",
    name: "3D Modelling",
  },
  {
    value: "Interactive App",
    name: "Interactive App",
  },
  {
    value: "3D Render",
    name: " 3D Render",
  },
  {
    value: "VR/AR Tour",
    name: "VR/AR Tour",
  },
];

export const DataCountry: IListCountry[] = [
  { img: icVN, name: "Vietnam", phone: "+84" },
  { img: icUS, name: "America", phone: "+1" },
  { img: icJP, name: "Japan", phone: "+81" },
  { img: icFI, name: "Finland", phone: "+338" },
  { img: icFR, name: "France", phone: "+33" },
  { img: icPF, name: "French Polynesia", phone: "+689" },
  { img: icGA, name: "Gabon", phone: "+241" },
  { img: icGM, name: "Gambia", phone: "+220" },
  { img: icGE, name: "Georgia", phone: "+995" },
];
