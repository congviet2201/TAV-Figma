/* COMMENTED OUT FOR DUP PREVENTION */
/*import { useLanguage } from "@components/LanguageContext";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import arrow from "@assets/image/arrow-up-right.png";
import arrowRight from "@assets/image/arrowRight2.png";
import "./style.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import ButtonArrow from "@components/buttonArrow";
import { useNavigate } from "react-router-dom";
import { GetProducts } from "@apis/homepage.api";
import { IProject } from "@interfaces/IHomePage";
import LazyVideo from "@components/LazyVideo";
import { getPosterUrl } from "@utils/mediaUtils";

const Content = () => {
  const { isLanguage } = useLanguage();
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const navigator = useNavigate();
  const [dataApi, setDataApi] = useState<IProject[] | undefined>();
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    GetProducts().then((res) => {
      setDataApi(res.data.data);
    });
  }, []);
  return (
    <Box position={"relative"} width="100%">
      <Box
        className="project-button-prev"
        position={"absolute"}
        left={"3.5%"}
        top={"27%"}
        bgColor={"#F5712A"}
        p={{ base: "10px", md: "15px" }}
        borderRadius={"1rem"}
        zIndex={2}
        display={isFirstSlide ? "none" : "block"}
        cursor={"pointer"}
      >
        <Image src={arrowRight} transform="scaleX(-1)" />
      </Box>
      <Box
        className="project-button-next"
        position={"absolute"}
        right={"3.5%"}
        top={"27%"}
        bgColor={"#F5712A"}
        p={{ base: "10px", md: "15px" }}
        borderRadius={"1rem"}
        zIndex={2}
        display={isLastSlide ? "none" : "block"}
        cursor={"pointer"}
      >
        <Image src={arrowRight} />
      </Box>

      <Swiper
        className="swiperHomePageProject"
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".project-button-next",
          prevEl: ".project-button-prev",
        }}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => {
          setIsFirstSlide(swiper.activeIndex === 0);
        }}
        onSlideChange={(swiper) => {
          setIsFirstSlide(swiper.activeIndex === 0);
          setIsLastSlide(swiper.isEnd);
        }}
        style={{
          height: "100%",
        }}
      >
        {dataApi?.map((item, index) => (
          <SwiperSlide
            style={{
              background: "none",
              textAlign: "initial",
            }}
            key={index}
          >
            <Box
              maxH={"692px"}
              borderRadius={{ base: "1.5rem", md: "6rem" }}
              overflow="hidden"
            >
              <LazyVideo
                src={item.videoHome}
                poster={getPosterUrl(item.videoHome)}
              />

              <Stack
                direction={"row"}
                position="absolute"
                bottom={0}
                width="100%"
                justifyContent="space-between"
                alignItems={{ base: "end", md: "start" }}
                p={{ base: "20px", md: "30px" }}
              >
                <Stack
                  textTransform="uppercase"
                  fontWeight={"600"}
                  fontSize={{ base: "1.4rem", md: "3.2rem" }}
                  flex={1}
                >
                  <Text color={"white"}>
                    {isLanguage === "vi"
                      ? "dự án mẫu"
                      : isLanguage === "en"
                      ? "sample project"
                      : "サンプルプロジェクト"}
                  </Text>
                  <Text color={"white"}>{item.service.title}</Text>
                </Stack>
                <Stack
                  flex={1}
                  alignItems={{ base: "end", md: "start" }}
                  maxW={{ base: "150px", md: "382px" }}
                >
                  <Text
                    textTransform="uppercase"
                    fontSize={{ base: "1.4rem", md: "3.2rem" }}
                    fontWeight={"600"}
                    color={"white"}
                    textAlign={{ base: "right", md: "left" }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    fontSize="1.6rem"
                    fontWeight={"400"}
                    color={"white"}
                    display={{ base: "none", md: "block" }}
                  >
                    {item?.description?.[isLanguage]}
                  </Text>
                </Stack>
                <Box
                  flex={1}
                  display={{ base: "none", md: "flex" }}
                  justifyContent="flex-end"
                  mt={{ base: "auto", lg: "unset" }}
                  onClick={() => {
                    navigator(`/products/${item.service.id}`);
                  }}
                >
                  <Box
                    width={"fit-content"}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered ? (
                      <ButtonArrow
                        title="Khám phá dự án "
                        sxText={{ fontSize: "1.6rem" }}
                        sx={{
                          height: "50px",
                        }}
                      />
                    ) : (
                      <Image src={arrow} pr={"20px"} pt={"5px"} />
                    )}
                  </Box>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Content;
*/