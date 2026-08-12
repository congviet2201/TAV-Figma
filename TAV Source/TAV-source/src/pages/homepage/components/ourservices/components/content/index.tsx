/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Image, Stack, Text, chakra } from "@chakra-ui/react";
// import { DataService } from "@constants/data-homepage";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@components/LanguageContext";
import arrow from "@assets/image/arrow-up-right1.png";
import arow1 from "@assets/image/arrow-up-right.png";
import "swiper/css";
import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useBreakpointValue } from "@chakra-ui/react";
import { GetService } from "@apis/homepage.api";
import { IService } from "@interfaces/IService";

const Content = () => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleVideoIndex, setVisibleVideoIndex] = useState<number | null>(
    null
  );
  const slideWidthDefault = useBreakpointValue({
    base: "355px",
    xl: "600px",
  });
  const slideWidthFirst = useBreakpointValue({
    base: "355px",
    xl: "820px",
  });
  const slideHeight = useBreakpointValue({
    base: "400px",
    xl: "692px",
  });

  const [dataApi, setDataApi] = useState<IService[] | undefined>();

  useEffect(() => {
    GetService().then((res) => {
      const data = res.data;
      if (data.length >= 2) {
        // Copy mảng ra để không làm thay đổi gốc
        const swapped = [...data];
        const temp = swapped[1];
        swapped[1] = swapped[2];
        swapped[2] = temp;
        setDataApi(swapped);
      } else {
        setDataApi(data);
      }
    });
  }, []);

  const navigator = useNavigate();
  const handleScrollGallery = (item: string) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={"auto"}
        spaceBetween={30}
        style={{
          paddingBottom: "10px",
        }}
      >
        {dataApi?.map((item, index) => {
          const width = index === 0 ? slideWidthFirst : slideWidthDefault;

          return (
            <SwiperSlide
              style={{
                background: "none",
                textAlign: "initial",
                width: width,
                height: slideHeight,
                borderRadius: "5rem",
                overflow: "hidden",
                border: "1px solid rgb(71, 71, 71)",
              }}
              key={index}
            >
              <Stack
                position={"relative"}
                border={isDarkMode ? "none" : "1px solid rgb(52 52 52)"}
                width={
                  index === 0
                    ? { base: "355px", xl: "820px" }
                    : { base: "355px", xl: "600px" }
                }
                height={{ base: "400px", xl: "692px" }}
                onMouseEnter={() => setVisibleVideoIndex(index)}
                onMouseLeave={() => {
                  setVisibleVideoIndex(null);
                }}
              >
                <Image
                  src={item.image}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  transition="opacity 0.5s ease"
                  opacity={visibleVideoIndex === index ? 0 : 1}
                  position="absolute"
                  top={0}
                  left={0}
                />

                <chakra.video
                  pointerEvents="none"
                  src={item.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  webkit-playsinline="true"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  transition="opacity 0.5s ease"
                  opacity={visibleVideoIndex === index ? 1 : 0}
                  position="absolute"
                  top={0}
                  left={0}
                />

                <Stack
                  position={"absolute"}
                  bottom={0}
                  left={0}
                  p={"20px"}
                  gap={10}
                  width={"100%"}
                >
                  <Text
                    fontSize={{ base: "2.4rem", md: "3.2rem" }}
                    fontWeight={"600"}
                    color={"white"}
                    textTransform={"uppercase"}
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontSize={"1.6rem"}
                    fontWeight={"500"}
                    color={"white"}
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                  >
                    {item.subTitle[isLanguage]}
                  </Text>
                  <Stack
                    justifyContent={"space-between"}
                    direction={"row"}
                    alignItems={"center"}
                    borderRadius={"2rem"}
                    px={"1rem"}
                    py={"1rem"}
                    cursor={"pointer"}
                    onClick={() => {
                      navigator("/services");
                      handleScrollGallery(item.id);
                    }}
                    bgColor={hoveredIndex === index ? "#F5712A" : "white"}
                    transition="all 0.4s ease"
                    boxShadow={
                      hoveredIndex === index
                        ? "0 4px 10px rgba(255, 165, 0, 0.5)"
                        : "none"
                    }
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Text
                      color={hoveredIndex === index ? "white" : "black"}
                      transition="color 0.4s ease"
                      fontSize={{ base: "1.4rem", md: "1.6rem" }}
                      fontWeight={"400"}
                    >
                      {isLanguage === "vi"
                        ? "Tìm hiểu thêm"
                        : isLanguage === "en"
                        ? "Learn more"
                        : "もっと詳しく"}
                    </Text>
                    <Image src={hoveredIndex === index ? arow1 : arrow} />
                  </Stack>
                </Stack>
              </Stack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Content;
*/