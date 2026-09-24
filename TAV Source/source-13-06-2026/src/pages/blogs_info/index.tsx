import { Box, Skeleton, Stack } from "@chakra-ui/react";
// import { DataBlog } from "@constants/data-homepage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/header";
import ContentTitle from "./components/contenttitle";
import Content from "./components/content";
import LatestBlogs from "./components/latestblogs";
import RelatedBlogs from "./components/relatedblogs";
import { GetBlogs, GetBlogsAll } from "@apis/homepage.api";
// import { IBlog } from "@interfaces/IHomePage";
import { IBlog } from "@interfaces/IBlogs";

const BlogInfomation = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [dataApi, setDataApi] = useState<IBlog[] | undefined>();
  const [dataApiAll, setDataApiAll] = useState<IBlog[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const blogsResponse = await GetBlogsAll();
        setDataApiAll(blogsResponse.data.data);

        const otherResponse = await GetBlogs();
        setDataApi(otherResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const foundBlog = dataApi?.find((item) => item._id === id);
    // const foundBlog = DataBlog.find((item) => item.id === id);
    setBlog(foundBlog || null);
  }, [id, dataApi]);

  if (isLoading) {
    return (
      <Box gap={"50px"} pt={{ base: "80px", lg: "20px" }}>
        {/* Header Skeleton */}
        <Box position="relative" height="400px">
          <Skeleton height="100%" width="100%" />
        </Box>

        <Stack
          sx={{
            gap: "2rem",
            "@media screen and (min-width: 1700px)": {
              gap: "9.1rem",
            },
          }}
          mt={"5rem"}
          direction={{ base: "column", xl: "row" }}
          mx={"auto"}
          maxW={"192rem"}
          px={{ base: "2rem", md: "5rem" }}
          justifyContent={"center"}
        >
          {/* Left Column Skeleton */}
          <Stack flex="1">
            <Stack spacing={4}>
              <Skeleton height="40px" width="60%" />
              <Skeleton height="20px" width="80%" />
              <Skeleton height="20px" width="70%" />
            </Stack>
            <Box
              pl={"2rem"}
              pt={"2rem"}
              display={{ base: "none", xl: "block", "2xl": "none" }}
            >
              <Stack spacing={4}>
                <Skeleton height="100px" />
                <Skeleton height="100px" />
                <Skeleton height="100px" />
              </Stack>
            </Box>
          </Stack>

          {/* Center Column Skeleton */}
          <Stack flex="2" spacing={6}>
            <Skeleton height="300px" />
            <Skeleton height="20px" width="90%" />
            <Skeleton height="20px" width="85%" />
            <Skeleton height="20px" width="95%" />
            <Skeleton height="20px" width="80%" />
            <Skeleton height="20px" width="90%" />
          </Stack>

          {/* Right Column Skeleton */}
          <Box display={{ base: "none", xl: "none", "2xl": "block" }} flex="1">
            <Stack spacing={4}>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
          </Box>
        </Stack>

        {/* Related Blogs Skeleton */}
        <Box px={{ base: "2rem", md: "5rem" }} mt="4rem">
          <Skeleton height="40px" width="30%" mb="2rem" />
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Skeleton height="200px" flex="1" />
            <Skeleton height="200px" flex="1" />
            <Skeleton height="200px" flex="1" />
          </Stack>
        </Box>
      </Box>
    );
  }

  if (!blog) return null;

  return (
    <Box gap={"50px"} pt={{ base: "80px", lg: "20px" }}>
      <Header
        img={blog?.coverMedia}
        title={blog?.title}
        category={blog?.blogCategory.name}
        author={blog?.author}
        time={blog?.createdAt}
      />
      <Stack
        sx={{
          gap: "2rem",
          "@media screen and (min-width: 1700px)": {
            gap: "9.1rem",
          },
        }}
        mt={"5rem"}
        direction={{ base: "column", xl: "row" }}
        mx={"auto"}
        maxW={"192rem"}
        px={{ base: "2rem", md: "5rem" }}
        justifyContent={"center"}
      >
        <Stack
          position={{ base: "relative", md: "sticky" }}
          top={{ base: "0", md: "100px" }}
          height="fit-content"
        >
          <ContentTitle blog={blog} />
          <Box
            pl={"2rem"}
            pt={"2rem"}
            display={{ base: "none", xl: "block", "2xl": "none" }}
          >
            <LatestBlogs dataApiAll={dataApiAll} />
          </Box>
        </Stack>
        <Content blog={blog} />
        <Box
          display={{ base: "none", xl: "none", "2xl": "block" }}
          position="sticky"
          top="100px"
          height="fit-content"
        >
          <LatestBlogs dataApiAll={dataApiAll} />
        </Box>
      </Stack>
      <RelatedBlogs dataApiAll={dataApiAll} />
    </Box>
  );
};

export default BlogInfomation;
