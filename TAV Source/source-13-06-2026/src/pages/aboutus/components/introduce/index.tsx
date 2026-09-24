import { Stack, Text } from "@chakra-ui/react";
import ButtonArrow from "@components/buttonArrow";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useLanguage } from "@components/LanguageContext";
// import { DataListImg } from "@constants/data-aboutus";
import { useNavigate } from "react-router-dom";
// import { Autoplay, EffectFade } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import videoHome from "@assets/videos/home.mp4";
// import bgHome from "@assets/image/bgHome.png";
import { useEffect, useState } from "react";
import { IIntroduce } from "@interfaces/IAboutUs";
import { GetIntroduce } from "@apis/homepage.api";
// import "swiper/css/effect-fade";
// import { useEffect, useState } from "react";
import bg from "@assets/image/bgHome.png";
import LazyVideo from "@components/LazyVideo";
import { getPosterUrl } from "@utils/mediaUtils";

const Introduce = () => {
  const { isLanguage } = useLanguage();
  const navigator = useNavigate();
  const { isDarkMode } = useDarkModeContext();
  // const [swiperKey, setSwiperKey] = useState(0);

  // ép Swiper re-render lại đúng sau khi component đã mount, tránh lỗi effect-fade không hoạt động lúc đầu.
  // useEffect(() => {
  //   setSwiperKey(Date.now());
  // }, []);
  const [dataApi, setDataApi] = useState<IIntroduce[] | undefined>();
  useEffect(() => {
    GetIntroduce().then((res) => {
      setDataApi(res.data.data.aboutUs);
    });
  }, []);

  return (
    <Stack
      py={{ base: "20px", md: "50px" }}
      gap={"2rem"}
      px={{ base: "20px", md: "50px" }}
      direction={{ base: "column-reverse", xl: "row" }}
      mx={"auto"}
      width={"100%"}
      height={"100%"}
      maxW={"192rem"}
    >
      <Stack flex={1} gap={{ base: "20px", md: "50px" }} maxW={"1066px"}>
        <Text
          fontWeight={"600"}
          fontSize={{ base: "2rem", md: "3.2rem" }}
          textTransform={"uppercase"}
        >
          {dataApi?.[0].subTitle[isLanguage]}
          {/* {isLanguage === "vi"
            ? "TAV – Giải pháp công nghệ cho lĩnh vực bất động sản."
            : isLanguage === "en"
            ? "TAV – TECHNOLOGY SOLUTIONS FOR REAL ESTATE SECTOR."
            : "TAV – 不動産業界向けのテクノロジーソリューション。"} */}
        </Text>
        {dataApi?.[0].content?.map((item: any, index: number) => (
          <Text
            key={index}
            color={isDarkMode ? "#696969" : "#a9a9a9"}
            fontWeight="600"
            fontSize={{ base: "1.6rem", md: "2rem" }}
          >
            {item[isLanguage]}
          </Text>
        ))}

        {/* <Text
          color={isDarkMode ? "#696969" : "#a9a9a9"}
          fontWeight={"600"}
          fontSize={{ base: "1.6rem", md: "2rem" }}
        >
          {isLanguage === "vi"
            ? "TAV không chỉ tạo ra hình ảnh đẹp – chúng tôi kiến tạo trải nghiệm. Là đối tác công nghệ đáng tin cậy của các doanh nghiệp bất động sản và kiến trúc, TAV cung cấp các giải pháp toàn diện từ dựng hình 3D, video, phần mềm tương tác cho đến trình chiếu 3D mapping."
            : isLanguage === "en"
            ? "TAV doesn’t just create beautiful images – we create experiences. As a trusted technology partner for real estate and architecture businesses, TAV provides comprehensive solutions from 3D rendering, video, interactive software to 3D mapping projection."
            : "TAVは美しい画像を作り出すだけでなく、体験を創造します。不動産・建築業界の信頼できるテクノロジーパートナーとして、TAVは3Dレンダリング、ビデオ、インタラクティブソフトウェア、3Dマッピングプロジェクションまで、包括的なソリューションを提供しています。"}
        </Text> 
         <Text
          color={isDarkMode ? "#696969" : "#a9a9a9"}
          fontWeight={"600"}
          fontSize={{ base: "1.6rem", md: "2rem" }}
        >
          {isLanguage === "vi"
            ? "Chúng tôi giúp các dự án trở nên sống động, dễ tiếp cận và dễ thuyết phục hơn trong mắt khách hàng và nhà đầu tư – thông qua công nghệ trực quan và hiệu quả truyền thông vượt trội. Sứ mệnh của chúng tôi là giúp các doanh nghiệp bất động sản biến ý tưởng thành hiện thực, nâng tầm trải nghiệm khách hàng và tạo ra lợi thế cạnh tranh bền vững."
            : isLanguage === "en"
            ? "We make projects more vivid, accessible and compelling for customers and investors – through intuitive technology and superior communication. Our mission is to help real estate businesses turn ideas into reality, enhance customer experience and create sustainable competitive advantage."
            : "私たちは、直感的なテクノロジーと優れたコミュニケーションを通して、お客様と投資家にとって、プロジェクトをより鮮明で、アクセスしやすく、魅力的なものにします。私たちの使命は、不動産企業がアイデアを現実のものにし、顧客体験を向上させ、持続可能な競争優位性を築くお手伝いをすることです。"}
        </Text> */}
        <ButtonArrow
          sxText={{
            fontSize: { base: "1.4rem", md: "1.6rem" },
            fontWeight: "400",
          }}
          sx={{ height: "60px", width: { base: "100%", md: "346px" } }}
          title={
            isLanguage === "vi"
              ? "Khám phá các dịch vụ của chúng tôi"
              : isLanguage === "en"
              ? "Explore our services"
              : "当社のサービスをご覧ください"
          }
          onClick={() => {
            navigator("/services");
          }}
        />
      </Stack>
      <Stack
        flex={1}
        justifyContent={"center"}
        display={{ base: "none", xl: "flex" }}
      >
        {/* <Text
          fontWeight={"600"}
          fontSize={{ base: "2.4rem", md: "4.8rem" }}
          textTransform={"uppercase"}
          textAlign={{ base: "center", lg: "right" }}
          minW={"342px"}
        >
          {isLanguage === "vi"
            ? "về chúng tôi"
            : isLanguage === "en"
            ? "about us"
            : "私たちについて"}
        </Text> */}
        <LazyVideo
          src={dataApi?.[0].video ?? ""}
          poster={getPosterUrl(dataApi?.[0].video) || bg}
          wrapStyle={{ borderRadius: "3rem" }}
          style={{ pointerEvents: "none" }}
        />
        {/* <Swiper
          key={swiperKey}
          slidesPerView={1}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
        >
          {DataListImg.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                width="100%"
                height={{ base: "234px", md: "446px" }}
                overflow="hidden"
                borderRadius="md"
              >
                <Image
                  src={item.img}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </Stack>
    </Stack>
  );
};

export default Introduce;
