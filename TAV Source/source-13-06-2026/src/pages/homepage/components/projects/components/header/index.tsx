import { Image, Stack, Text } from "@chakra-ui/react";
import ArrowRight1 from "@assets/image/arrowRight1.png";
import ArrowRight3 from "@assets/image/arrowRight3.png";
import { useLanguage } from "@components/LanguageContext";
import { useState } from "react";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { isLanguage } = useLanguage();
  const [isHover, setIsHover] = useState(false);
  const { isDarkMode } = useDarkModeContext();
  const navigator = useNavigate();

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      justifyContent={"space-between"}
      gap={"2rem"}
    >
      <Stack>
        <Text
          fontWeight={"600"}
          fontSize={{ base: "2rem", md: "4.8rem" }}
          textTransform={"uppercase"}
        >
          {isLanguage === "vi"
            ? "các dự án"
            : isLanguage === "en"
            ? "Projects"
            : "プロジェクト"}
        </Text>
        <Text
          fontSize={{ base: "1.4rem", md: "2rem" }}
          fontWeight={"500"}
          textTransform={"uppercase"}
        >
          {isLanguage === "vi"
            ? "đa dạng dự án đã được thực hiện bởi tav"
            : isLanguage === "en"
            ? "Various projects executed by TAV"
            : "TAVによって実行された多様なプロジェクト"}
        </Text>
      </Stack>
      <Stack alignItems={"flex-end"} justifyContent={"center"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          border={"1px solid #bebebe"}
          px={"20px"}
          py={"10px"}
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
          onClick={() => {
            navigator("/products");
          }}
        >
          <Text
            fontSize={{ base: "1.4rem", md: "1.6rem" }}
            fontWeight={"400"}
            color={isDarkMode ? (isHover ? "white" : "black") : "white"}
            transition="color 0.4s ease"
          >
            {isLanguage === "vi"
              ? "Khám phá toàn bộ dự án"
              : isLanguage === "en"
              ? "Explore all projects"
              : "すべてのプロジェクトを探索する"}
          </Text>
          <Image
            src={
              isDarkMode ? (isHover ? ArrowRight3 : ArrowRight1) : ArrowRight3
            }
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
