/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
// import { DataBlog } from "@constants/data-homepage";
import { IBlog } from "@interfaces/IBlogs";
import { useNavigate } from "react-router-dom";
interface ILatestBlogs {
  dataApiAll?: IBlog[];
}
const RelatedBlogs = ({ dataApiAll }: ILatestBlogs) => {
  const { isLanguage } = useLanguage();
  const navigator = useNavigate();

  return (
    <Stack
      pt={{ base: "2rem", md: "10rem" }}
      px={{ base: "2rem", md: "5rem" }}
      maxW={"192rem"}
      mx={"auto"}
      gap={"20px"}
    >
      <Text
        fontSize={{ base: "2.4rem", md: "4.8rem" }}
        fontWeight={"600"}
        textTransform={"uppercase"}
      >
        {isLanguage === "vi"
          ? "các bài viết liên quan"
          : isLanguage === "en"
          ? "Related Articles"
          : "関連記事"}
      </Text>
      <Grid
        gap={"23.33px"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
      >
        {dataApiAll?.slice(0, 3).map((item, index) => (
          <GridItem
            key={index}
            display="flex"
            flexDirection="column"
            borderRadius="5rem"
            overflow="hidden"
            border="1px solid #b4b4b4"
          >
            <Box h="324px" overflow="hidden">
              <Image
                src={item.coverMedia}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>

            <Stack flex="1" p="3rem" gap="12px" justifyContent="space-between">
              <Text
                fontSize={{ base: "1.8rem", md: "2rem" }}
                fontWeight={"500"}
                textTransform={"uppercase"}
              >
                {item.title[isLanguage]}
              </Text>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text
                  fontSize={{ base: "1.6rem", md: "1.8rem" }}
                  fontWeight={"400"}
                >
                  {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                </Text>
                <Box
                  py={"10px"}
                  px={"20px"}
                  borderRadius={{ base: "1.4rem", md: "1.5rem" }}
                  bg={"#F5712A"}
                  cursor={"pointer"}
                  onClick={() => {
                    navigator(`/blogs/${item._id}`);
                  }}
                >
                  <Text
                    fontSize={{ base: "1.4rem", md: "1.6rem" }}
                    fontWeight={"400"}
                    color={"rgba(255, 255, 255, 1)"}
                  >
                    {isLanguage === "vi"
                      ? "Đọc thêm"
                      : isLanguage === "en"
                      ? "Read more"
                      : "続きを読む"}
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </GridItem>
        ))}

        <Stack
          justifyContent={"space-between"}
          borderRadius="5rem"
          p={"30px"}
          background="linear-gradient(180deg, #F5712A 0%, #E60023 50%, #F5712A 100%)"
        >
          <Text
            fontSize={{ base: "2.4rem", md: "3.2rem" }}
            fontWeight={"600"}
            maxW={"226px"}
            textTransform={"uppercase"}
            color={"white"}
          >
            {isLanguage === "vi"
              ? "Đọc thêm các bài viết mới nhất của chúng tôi"
              : isLanguage === "en"
              ? "Read more of our latest articles"
              : "最新の記事をもっと読む"}
          </Text>
          <Stack width={"100%"} alignItems={{ base: "end", xl: "start" }}>
            <Box
              borderRadius={"12px"}
              width={"fit-content"}
              py={"10px"}
              px={"20px"}
              bg={"white"}
              cursor={"pointer"}
            >
              <Text
                color={"black"}
                fontSize={{ base: "1.4rem", md: "1.6rem" }}
                fontWeight={"400"}
                onClick={() => {
                  navigator(`/blogs`);
                }}
              >
                {isLanguage === "vi"
                  ? "Xem Blog"
                  : isLanguage === "en"
                  ? "View Blog"
                  : "ブログを見る"}
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Grid>
    </Stack>
  );
};

export default RelatedBlogs;
*/