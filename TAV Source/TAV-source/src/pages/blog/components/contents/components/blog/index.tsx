/* COMMENTED OUT FOR DUP PREVENTION */
/*import {
  Box,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
import arrowLeft from "@assets/image/arrowLeft.png";
import arrowLeft2 from "@assets/image/arrowLeft2.png";
import arrowRight from "@assets/image/arrowRight.png";
import arrowRight2 from "@assets/image/arrowRight2.png";
import { useNavigate } from "react-router-dom";
import { useDarkModeContext } from "@components/DarkModeContext";
// import { IBlog } from "@interfaces/IHomePage";
import { IBlog } from "@interfaces/IBlogs";

interface BlogsProps {
  filteredBlogs: IBlog[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Blogs = ({ filteredBlogs, currentPage, setCurrentPage }: BlogsProps) => {
  const navigator = useNavigate();
  const { isLanguage } = useLanguage();
  const isMobile = useBreakpointValue({ base: true, md: false }) || false;
  const blogsPerPage = useBreakpointValue({ base: 3, md: 6, xl: 9 }) || 3;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const { isDarkMode } = useDarkModeContext();

  const getPaginationRange = (
    currentPage: number,
    totalPages: number
  ): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (isMobile) {
      if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
        if (currentPage <= 2) {
          pages.push(1, 2, "...", totalPages);
        } else if (currentPage === 3) {
          pages.push(1, "...", 3, 4, "...", totalPages);
        } else if (currentPage >= totalPages - 2) {
          pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
        } else {
          pages.push(1, "...", currentPage, currentPage + 1, "...", totalPages);
        }
      }
    } else {
      if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
        if (currentPage <= 2) {
          pages.push(1, 2, 3, "...", totalPages);
        } else if (currentPage === 3) {
          pages.push(1, "...", 2, 3, 4, "...", totalPages);
        } else if (currentPage >= totalPages - 2) {
          pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
        } else {
          pages.push(
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages
          );
        }
      }
    }

    return pages;
  };

  return (
    <>
      <Grid
        mt={{ base: "2rem", md: "4rem" }}
        columnGap={{ md: "20px", lg: "30px", xl: "55px", "2xl": "85px" }}
        rowGap={{ base: "20px", md: "50px" }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
      >
        {currentBlogs.map((item, index) => (
          <GridItem
            key={index}
            display="flex"
            flexDirection="column"
            borderRadius="5rem"
            overflow="hidden"
            border="1px solid #b4b4b4"
            position={"relative"}
          >
            <Box
              m={"30px"}
              position={"absolute"}
              borderRadius={"12px"}
              bg={isDarkMode ? "rgba(133, 133, 133, 1)" : "rgb(178, 178, 178)"}
              px={"20px"}
              py={"10px"}
              width={"fit-content"}
            >
              <Text
                fontSize={{ base: "1.4rem", md: "1.6rem" }}
                color={"white"}
                fontWeight={"400"}
              >
                {item.blogCategory?.name[isLanguage]}
                {/* {item.category[isLanguage]} * /}
              </Text>
            </Box>
            <Box h="324px" overflow="hidden">
              <Image
                src={item.coverMedia}
                // src={item.img}
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
                  fontSize={{ base: "1rem", md: "1.2rem" }}
                  fontWeight={"400"}
                  color={isDarkMode ? "rgba(53, 53, 53, 1)" : "white"}
                >
                  {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                  {/* {new Date(item.time).toLocaleDateString("vi-VN")} * /}
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
                  <Text fontSize={"1.6rem"} fontWeight={"400"} color={"white"}>
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
      </Grid>

      {/* Phân trang * /}
      <Stack
        direction="row"
        justifyContent="center"
        mt="4rem"
        gap={{ base: "5px", md: "50px" }}
      >
        <Box
          as="button"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          px={"25px"}
          borderRadius="12px"
          py={"20px"}
          border={"1px solid rgb(97, 97, 97)"}
        >
          <Image src={isDarkMode ? arrowLeft : arrowLeft2} />
        </Box>
        <Stack
          direction={"row"}
          gap={{ Base: "5px", md: "15px" }}
          justifyContent="center"
          alignItems={"center"}
        >
          {getPaginationRange(currentPage, totalPages).map((page, i) => {
            if (page === "...") {
              return (
                <Box
                  key={`ellipsis-${i}`}
                  fontSize="1.4rem"
                  color={isDarkMode ? "black" : "white"}
                >
                  ...
                </Box>
              );
            }

            return (
              <Box
                key={page}
                as="button"
                onClick={() => setCurrentPage(Number(page))}
                px="15px"
                py="10px"
                height="42px"
                width={{ base: "fit-content", md: "47px" }}
                borderRadius="12px"
                fontSize={{ base: "1.4rem", md: "1.6rem" }}
                bg={
                  currentPage === page
                    ? "#F5712A"
                    : isDarkMode
                    ? "white"
                    : "black"
                }
                color={
                  currentPage === page
                    ? "white"
                    : isDarkMode
                    ? "black"
                    : "white"
                }
                _hover={{ bg: "#F5712A", color: "white" }}
              >
                {page}
              </Box>
            );
          })}
        </Stack>
        <Box
          as="button"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          px={"25px"}
          borderRadius="12px"
          py={"20px"}
          border={"1px solid rgb(97, 97, 97)"}
        >
          <Image src={isDarkMode ? arrowRight : arrowRight2} />
        </Box>
      </Stack>
    </>
  );
};

export default Blogs;
*/