/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Image, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
// import { DataCategoryBlog } from "@constants/data-homepage";
// import { DataBlog } from "@constants/data-homepage";
import { useState } from "react";
import arrow1 from "@assets/image/arrow-down3.png";
import arrow2 from "@assets/image/arrow-down2.png";
import Blogs from "./components/blog";
import { useDarkModeContext } from "@components/DarkModeContext";
import { IBlog, IBlogCategory } from "@interfaces/IBlogs";
interface IContentsProps {
  dataApi?: IBlog[];
  dataApiCategory?: IBlogCategory[];
}
const Contents = ({ dataApi, dataApiCategory }: IContentsProps) => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const [isHover, setIsHover] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const filteredBlogs =
    selectedCategory === "all"
      ? dataApi
      : dataApi?.filter(
          (blog) => blog.blogCategory?.name.vi === selectedCategory
        );
  // const filteredBlogs =
  //   selectedCategory === "all"
  //     ? DataBlog
  //     : DataBlog?.filter((blog) => blog.category?.vi === selectedCategory);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row" }}
        justifyContent={"space-between"}
        pb={"29px"}
        borderBottom={"1px solid rgba(225, 225, 225, 1)"}
        gap={"10px"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={{ base: "5px", md: "20px" }}
        >
          <Text
            onClick={() => {
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
            cursor={"pointer"}
            textTransform={"uppercase"}
            fontSize={{ base: "1.3rem", sm: "1.6rem" }}
            fontWeight={selectedCategory === "all" ? "700" : "400"}
            _hover={{ color: "#F5712A" }}
            color={
              selectedCategory === "all"
                ? isDarkMode
                  ? "black"
                  : "white"
                : isDarkMode
                ? "#696969"
                : "#a9a9a9"
            }
          >
            {isLanguage === "vi"
              ? "Tất cả"
              : isLanguage === "en"
              ? "all"
              : "全て"}
          </Text>
          {dataApiCategory?.map((item, index) => (
            <Text
              cursor={"pointer"}
              onClick={() => {
                setSelectedCategory(item.name.vi);
                setCurrentPage(1);
              }}
              _hover={{ color: "#F5712A" }}
              key={index}
              textTransform={"uppercase"}
              fontSize={{ base: "1.3rem", md: "1.6rem" }}
              fontWeight={selectedCategory === item.name.vi ? "700" : "400"}
              color={
                selectedCategory === item.name.vi
                  ? isDarkMode
                    ? "black"
                    : "white"
                  : isDarkMode
                  ? "#696969"
                  : "#a9a9a9"
              }
            >
              {item.name[isLanguage]}
            </Text>
          ))}
        </Stack>
        <Stack direction="row" alignItems={"center"} justifyContent={"end"}>
          <Text fontSize={{ base: "1.4rem", md: "1.6rem" }} fontWeight={"400"}>
            {isLanguage === "vi"
              ? "Sắp xếp theo:"
              : isLanguage === "en"
              ? "Sort by:"
              : "並べ替え："}
          </Text>
          <Stack
            direction={"row"}
            alignItems={"center"}
            border={"1px solid #bebebe"}
            px={"20px"}
            py={"10px"}
            ml={"10px"}
            cursor={"pointer"}
            borderRadius="2rem"
            width={"fit-content"}
            height={"fit-content"}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            transition="all 0.4s ease"
            _hover={{
              bg: "#F5712A",
              boxShadow: "0 4px 10px rgba(255, 165, 0, 0.5)",
            }}
          >
            <Text
              fontSize={{ base: "1.4rem", md: "1.6rem" }}
              fontWeight={"400"}
              color={isDarkMode ? (isHover ? "white" : "black") : "white"}
              transition="color 0.4s ease"
            >
              {isLanguage === "vi"
                ? "Mới nhất"
                : isLanguage === "en"
                ? "Latest"
                : "最新"}
            </Text>
            <Image
              src={isDarkMode ? (isHover ? arrow2 : arrow1) : arrow2}
              transform={
                !isDarkMode || isHover ? "rotate(180deg)" : "rotate(0deg)"
              }
            />
          </Stack>
        </Stack>
      </Stack>

      <Blogs
        filteredBlogs={filteredBlogs ?? []}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Contents;
*/