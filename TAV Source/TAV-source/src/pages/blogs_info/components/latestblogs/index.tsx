/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useLanguage } from "@components/LanguageContext";
// import { DataBlog } from "@constants/data-homepage";
import { IBlog } from "@interfaces/IBlogs";
import { useNavigate } from "react-router-dom";

interface ILatestBlogs {
  dataApiAll?: IBlog[];
}
const LatestBlogs = ({ dataApiAll }: ILatestBlogs) => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const navigator = useNavigate();

  return (
    <Stack gap={"20px"}>
      <Text fontSize={"2.4rem"} fontWeight={"600"} textTransform={"uppercase"}>
        {isLanguage === "vi"
          ? "Các bài viết mới nhất"
          : isLanguage === "en"
          ? "Latest articles"
          : "最新記事"}
      </Text>
      <Stack gap={"2rem"}>
        {dataApiAll?.slice(0, 3).map((item, index) => (
          <Box
            cursor={"pointer"}
            position={"relative"}
            key={index}
            borderRadius={"5rem"}
            overflow="hidden"
            onClick={() => {
              navigator(`/blogs/${item._id}`);
            }}
          >
            <Image
              src={item.coverMedia}
              // src={item.img}
              width={"555px"}
              height={"350px"}
              objectFit="cover"
            />
            <Box
              borderRadius={"12px"}
              position="absolute"
              top={0}
              left={0}
              bg={isDarkMode ? "rgba(133, 133, 133, 1)" : "rgb(178, 178, 178)"}
              px={"20px"}
              py={"10px"}
              m={"30px"}
            >
              <Text
                fontSize={{ base: "1.4rem", md: "1.6rem" }}
                fontWeight={"400"}
                color={"white"}
              >
                {item.blogCategory.name[isLanguage]}
                {/* {item.category[isLanguage]} * /}
              </Text>
            </Box>

            <Stack
              width={"100%"}
              height={"100%"}
              direction={"row"}
              gap={"20px"}
              position="absolute"
              bottom={0}
              p={"30px"}
              alignItems={"end"}
              background="linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000000 100%)"
            >
              <Text fontWeight={"600"} fontSize={"2rem"} color={"white"}>
                {item.title[isLanguage]}
              </Text>
              <Text fontWeight={"400"} fontSize={"1.2rem"} color={"white"}>
                {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                {/* {new Date(item.time).toLocaleDateString("vi-VN")} * /}
              </Text>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default LatestBlogs;
*/