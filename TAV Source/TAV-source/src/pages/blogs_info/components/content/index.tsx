/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Image, Stack, Text } from "@chakra-ui/react";
import ButtonArrow from "@components/buttonArrow";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useLanguage } from "@components/LanguageContext";
import { IBlog } from "@interfaces/IBlogs";
// import { IBlog } from "@interfaces/IHomePage";
import { useNavigate } from "react-router-dom";

interface ContentProps {
  blog: IBlog;
}

const Content = ({ blog }: ContentProps) => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const navigator = useNavigate();
  if (!blog) return null;

  return (
    <Stack
      gap={"15px"}
      maxW={{ xl: "750px" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        sx={{ color: isDarkMode ? "#353535" : "white" }}
        dangerouslySetInnerHTML={{
          __html: blog?.data[isLanguage] ?? "",
        }}
      />

      {/* {blog?.content?.map((item, index) => (
        <Box key={index} id={item?.title?.[isLanguage]}>
          {item.title && item.title[isLanguage] && (
            <Text fontWeight={"600"} fontSize="2rem" mb={"15px"}>
              {item.title[isLanguage]}
            </Text>
          )}
          {item.description?.map((desc, descIdx) => {
            if (desc.type === "text") {
              const textContent =
                desc[isLanguage] || desc.en || desc.vi || desc.ja;
              return (
                <Text
                  key={descIdx}
                  fontSize="1.6rem"
                  fontWeight={"400"}
                  mb={"15px"}
                  color={isDarkMode ? "#353535" : "white"}
                >
                  {textContent}
                </Text>
              );
            }

            if (desc.type === "image") {
              return (
                <Stack key={descIdx} alignItems={"center"} mb="15px">
                  <Image
                    src={desc.url}
                    alt={`image-${descIdx}`}
                    borderRadius="2rem"
                    width={{ base: "400px", md: "750px" }}
                    height={{ base: "252px", md: "472px" }}
                    objectFit="cover"
                  />
                </Stack>
              );
            }

            return null;
          })}
        </Box>
      ))} * /}
      <Box position={"relative"} borderRadius={"50px"} overflow={"hidden"}>
        <Image
          src={blog.coverMedia}
          height={"315px"}
          objectFit={"cover"}
          width={{ base: "400px", md: "750px" }}
        />
        <Box
          position="absolute"
          top={0}
          width="100%"
          height="100%"
          pointerEvents="none"
          background="linear-gradient(180deg, rgba(245, 113, 42, 0) -9%, #F5712A 75%)"
        />
        <Stack
          direction={"row"}
          width={"100%"}
          position="absolute"
          bottom={0}
          p={{ base: "2rem", xl: "5rem" }}
          justifyContent={"space-between"}
        >
          <Text
            textTransform={"uppercase"}
            fontSize={{ base: "2rem", md: "2.4rem" }}
            fontWeight={"600"}
            maxW={{ base: "192px", md: "266px" }}
            color={"white"}
          >
            {/* {blog.subTitle?.[isLanguage]} * /}
            {blog.title[isLanguage]}
          </Text>
          <ButtonArrow
            onClick={() => {
              navigator("/blogs");
            }}
            title={
              isLanguage === "vi"
                ? "Xem Ngay"
                : isLanguage === "en"
                ? "See Now "
                : "今すぐ見る"
            }
            sxText={{
              fontSize: { base: "1.4rem", md: "1.6rem" },
              fontWeight: "400",
            }}
            sx={{
              bg: "none",
              border: "1px solid white",
              width: { base: "173px", md: "185px" },
              height: "60px",
              alignSelf: "flex-end",
            }}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Content;
*/