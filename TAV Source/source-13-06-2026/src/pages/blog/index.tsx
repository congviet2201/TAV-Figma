import { Box, Stack, Text, Skeleton } from "@chakra-ui/react";
import Header from "./components/header";
import Contents from "./components/contents";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useEffect, useState } from "react";
import { IBlog, IBlogCategory } from "@interfaces/IBlogs";
import { GetBlogCategories, GetBlogsAll } from "@apis/homepage.api";

const Blog = () => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const [dataApi, setDataApi] = useState<IBlog[] | undefined>();
  const [dataApiCategory, setDataApiCategory] = useState<IBlogCategory[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch data in parallel
        const [blogsResponse, categoriesResponse] = await Promise.all([
          GetBlogsAll(),
          GetBlogCategories()
        ]);
        
        setDataApi(blogsResponse.data.data);
        setDataApiCategory(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box pt={{ base: "80px", xl: "20px" }}>
      <Header dataApi={dataApi} />
      <Stack
        maxW={"192rem"}
        px={{ base: "2rem", md: "5rem" }}
        py={{ base: "2rem", md: "5rem" }}
        mx={"auto"}
      >
        <Stack gap={"2rem"} pb={{ base: "20px", md: "50px" }}>
          <Text
            textTransform={"uppercase"}
            fontSize={"4.8rem"}
            fontWeight={"600"}
          >
            blog
          </Text>

          <Text
            fontSize={"1.8rem"}
            color={isDarkMode ? "#696969" : "#a9a9a9"}
            fontWeight={"400"}
          >
            {isLanguage === "vi"
              ? "Các bài blog cập nhật tin tức, xu hướng, công nghệ mới nhất trong ngành"
              : isLanguage === "en"
              ? "Blog posts update the latest news, trends, and technology in the industry"
              : "ブログ投稿では、業界の最新ニュース、トレンド、テクノロジーを更新します"}
          </Text>
        </Stack>
        {isLoading ? (
          <Stack spacing={4}>
            <Skeleton height="200px" />
            <Skeleton height="200px" />
            <Skeleton height="200px" />
          </Stack>
        ) : (
          <Contents dataApi={dataApi} dataApiCategory={dataApiCategory} />
        )}
      </Stack>
    </Box>
  );
};

export default Blog;

