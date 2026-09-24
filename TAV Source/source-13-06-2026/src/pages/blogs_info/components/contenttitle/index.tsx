// import { GetBlogs } from "@apis/homepage.api";
import { Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
// import { IBlog } from "@interfaces/IHomePage";
import { IBlog } from "@interfaces/IBlogs";

interface ContentTitleProps {
  blog: IBlog;
}

const ContentTitle = ({ blog }: ContentTitleProps) => {
  const { isLanguage } = useLanguage();
  const handleScrollGallery = (item: string) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Stack
      gap={"2rem"}
      p={"2rem"}
      borderRadius={"2rem"}
      border={{ base: "1px solid rgba(225, 225, 225, 1)", xl: "none" }}
    >
      <Text
        textTransform={"uppercase"}
        fontWeight={"600"}
        fontSize={"2.4rem"}
        borderBottom={"1px solid rgba(225, 225, 225, 1)"}
        py={"2rem"}
      >
        {isLanguage === "vi"
          ? "nội dung"
          : isLanguage === "en"
          ? "Content"
          : "コンテンツ"}
      </Text>
      {blog?.headerContent[isLanguage]?.map((block: string, index: number) => (
        // {/* {blog?.content?.map((block: any, index: number) => ( */}
        <Text
          _hover={{ color: "#F5712A" }}
          key={index}
          // onClick={() => {
          //   handleScrollGallery(block.title?.[isLanguage]);
          // }}
          onClick={() => handleScrollGallery(block)}
          cursor={"pointer"}
          fontSize="2rem"
          fontWeight={"600"}
        >
          {block}
          {/* {block?.title?.[isLanguage]} */}
        </Text>
      ))}
    </Stack>
  );
};

export default ContentTitle;
