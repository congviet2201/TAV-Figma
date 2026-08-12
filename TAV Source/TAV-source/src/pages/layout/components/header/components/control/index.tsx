/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Image, Stack, Text } from "@chakra-ui/react";
import sun from "@assets/image/light.png";
import moon from "@assets/image/light1.png";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useNavigate } from "react-router-dom";

const Control = () => {
  const { isLanguage } = useLanguage();
  const navigator = useNavigate();
  const { isDarkMode, setIsDarkMode } = useDarkModeContext();
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Stack
      direction={"row"}
      gap={{ base: "1rem", xl: "3rem" }}
      alignItems={"center"}
    >
      <Box
        bg={isDarkMode ? "#F5712A" : "#5f5f5f"}
        w="30px"
        h="20px"
        borderRadius="2rem"
        position="relative"
        onClick={toggleDarkMode}
        cursor="pointer"
      >
        <Image
          src={isDarkMode ? sun : moon}
          width="30px"
          height="30px"
          position="absolute"
          top="50%"
          left="50%"
          transform={`translate(${isDarkMode ? "10%" : "-100%"}, -50%)`}
          transition="transform 0.5s ease"
        />
      </Box>
      <Text
        bgColor={"rgba(245, 113, 42, 1)"}
        px={"2rem"}
        textAlign={"center"}
        py={"3px"}
        borderRadius={"5rem"}
        fontSize={{ md: "1.6rem", lg: "1.8rem" }}
        fontWeight={"400"}
        cursor={"pointer"}
        color={"white"}
        onClick={() => {
          navigator("/", { state: { scrollTo: "advise" } });
        }}
      >
        {isLanguage === "vi"
          ? "Liên hệ tư vấn"
          : isLanguage === "en"
          ? "Contact"
          : "接触"}
      </Text>
    </Stack>
  );
};

export default Control;
*/