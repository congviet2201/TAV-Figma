/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
// import { DataBlog } from "@constants/data-homepage";
import gif from "@assets/gif/blogheader.gif";
import "./style.css";
import { Pagination } from "swiper/modules";
import ButtonArrow from "@components/buttonArrow";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useNavigate } from "react-router-dom";
import { IBlog } from "@interfaces/IBlogs";

interface IHeaderProps {
  dataApi?: IBlog[];
}
const Header = ({ dataApi }: IHeaderProps) => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const navigator = useNavigate();

  return (
    <Box
      position={"relative"}
      height="540px"
      borderRadius="50px"
      overflow="hidden"
    >
      <Image
        src={gif}
        alt="GIF animation"
        height="100%"
        objectFit="cover"
        width="100%"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={1}
      >
        <Swiper
          className="swiperBlog"
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={1}
          style={{ height: "100%", width: "100dvw" }}
        >
          {dataApi?.slice(0, 3).map((item, index) => (
            <SwiperSlide
              style={{
                background: "none",
                textAlign: "initial",
                cursor: "pointer",
              }}
              key={index}
            >
              <Stack
                gap={0}
                py={"20px"}
                px={"50px"}
                justifyContent={"space-between"}
                direction={"row"}
                height={"100%"}
              >
                <Stack height={"100%"}>
                  <Box
                    borderRadius={"12px"}
                    bg={
                      isDarkMode
                        ? "rgba(133, 133, 133, 1)"
                        : "rgb(178, 178, 178)"
                    }
                    px={"20px"}
                    py={"10px"}
                    width={"fit-content"}
                    color={"white"}
                  >
                    <Text
                      fontSize={{ base: "1.4rem", md: "1.6rem" }}
                      color={"white"}
                      fontWeight={"400"}
                    >
                      {item.blogCategory?.name?.[isLanguage]}
                      {/* {item.category?.[isLanguage]} * /}
                    </Text>
                  </Box>
                  <Stack
                    justifyContent={"end"}
                    gap={{ base: "20px", md: "10px" }}
                    height={"100%"}
                    maxW={{ base: "177px", md: "642px" }}
                  >
                    <Text
                      fontSize={{ base: "2.4rem", md: "4.8rem" }}
                      textTransform={"uppercase"}
                      fontWeight={"600"}
                      color={"white"}
                    >
                      {item.title[isLanguage]}
                    </Text>
                    <Text
                      fontSize={{ base: "1.6rem", md: "2rem" }}
                      color={"white"}
                      fontWeight={"600"}
                    >
                      {item.author}
                    </Text>
                    <Text
                      fontSize={{ base: "1rem", md: "1.2rem" }}
                      color={"white"}
                      fontWeight={"400"}
                    >
                      {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                      {/* {new Date(item.time).toLocaleDateString("vi-VN")} * /}
                    </Text>
                  </Stack>
                </Stack>
                <Stack justifyContent="end">
                  <ButtonArrow
                    onClick={() => {
                      navigator(`/blogs/${item._id}`);
                      // navigator(`/blogs/${item.id}`);
                    }}
                    title={
                      isLanguage === "vi"
                        ? "Xem bài viết"
                        : isLanguage === "en"
                        ? "View all"
                        : "すべて表示"
                    }
                    sx={{
                      height: "60px",
                      width: { base: "163px", md: "174px" },
                    }}
                    sxText={{ fontSize: { base: "1.4rem", md: "1.6rem" } }}
                  />
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Header;
*/