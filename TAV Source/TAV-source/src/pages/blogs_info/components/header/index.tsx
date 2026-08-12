/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
import arrow from "@assets/image/arrowLeft1.png";
import { useNavigate } from "react-router-dom";
import { useDarkModeContext } from "@components/DarkModeContext";
interface Lang {
  vi: string;
  en: string;
  ja: string;
}

interface BlogProps {
  img: string;
  title: Lang;
  author: string;
  time: string;
  category: Lang;
}

const Header = ({ ...prop }: BlogProps) => {
  const { isLanguage } = useLanguage();
  const navigator = useNavigate();
  const { isDarkMode } = useDarkModeContext();

  return (
    <Box
      position={"relative"}
      height="540px"
      borderRadius="50px"
      overflow="hidden"
    >
      <Image src={prop.img} height="100%" objectFit="cover" width="100%" />
      <Box
        position="absolute"
        top={0}
        width="100%"
        height="100%"
        px="50px"
        py="20px"
      >
        <Stack
          cursor={"pointer"}
          onClick={() => {
            navigator("/blogs");
          }}
          direction="row"
          align="center"
          spacing="8px"
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
          width={"fit-content"}
        >
          <Image src={arrow} />
          <Text
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
            textTransform="uppercase"
            fontSize={{ base: "2rem", md: "2.4rem" }}
            fontWeight="600"
            color={"white"}
          >
            blog
          </Text>
        </Stack>
        <Stack
          position="absolute"
          bottom={0}
          left="50%"
          transform="translateX(-50%)"
          width={"100%"}
          maxW={"865px"}
          textAlign={"center"}
          alignItems={"center"}
          gap={"20px"}
          pb={"20px"}
        >
          <Text
            fontSize={{ base: "2.4rem", md: "4.8rem" }}
            textTransform={"uppercase"}
            fontWeight="600"
            color="white"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            {prop.title[isLanguage]}
          </Text>
          <Box
            borderRadius={"12px"}
            bg={isDarkMode ? "rgba(133, 133, 133, 1)" : "rgb(178, 178, 178)"}
            px={"20px"}
            py={"10px"}
            width={"fit-content"}
          >
            <Text
              fontSize={{ base: "1.4rem", md: "1.6rem" }}
              color="white"
              fontWeight={"400"}
            >
              {prop.category[isLanguage]}
            </Text>
          </Box>
          <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
            <Box
              bg={"rgba(217, 217, 217, 1)"}
              width={"40px"}
              height={"40px"}
              borderRadius={"5rem"}
            ></Box>
            <Text
              fontSize={{ base: "1.6rem", md: "2rem" }}
              fontWeight={"600"}
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              color={"white"}
            >
              {prop.author}
            </Text>
          </Stack>
          <Text
            color={"white"}
            fontSize={{ base: "1rem", md: "1.2rem" }}
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
            fontWeight={"400"}
          >
            {new Date(prop.time).toLocaleDateString("vi-VN")}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
*/