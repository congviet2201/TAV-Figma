import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import arrowDown3 from "@assets/image/arrow-down3.png";
import arrowDown2 from "@assets/image/arrow-down2.png";
import { DataLanguage } from "@constants/data-language";
import { LangCode, useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";

const LanguageMoblie = () => {
  const { isLanguage, setIsLanguage } = useLanguage();
  const [isLangList, setIsLangList] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const [isLangSelected, setIsLangSelected] = useState(false);
  const { isDarkMode } = useDarkModeContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangList(false);
        setIsLangSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Load lại ngôn ngữ khi mở lại trang
  useEffect(() => {
    const lang = localStorage.getItem("language") as LangCode;
    if (lang) {
      setIsLanguage(lang);
    }
  }, []);

  return (
    <Box position={"relative"} ref={langRef}>
      <Box
        role="group"
        cursor="pointer"
        bg={isLangSelected ? "#F5712A" : "transparent"}
        onClick={() => {
          setIsLangList(!isLangList);
          setIsLangSelected(!isLangSelected);
        }}
        boxShadow={isLangSelected ? "0px 4px 12px #F5712A" : ""}
        borderRadius={"2rem"}
        transition="background 0.4s ease"
        _hover={{
          bg: "#F5712A",
        }}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={2}
          justifyContent={"space-between"}
          mx={"1rem"}
          py={"1.5rem"}
        >
          <Text
            fontWeight={"400"}
            fontSize={"1.8rem"}
            color={isDarkMode ? (isLangSelected ? "white" : "black") : "white"}
            transition="color 0.5s ease"
            _groupHover={{
              color: "white",
            }}
          >
            {isLanguage.toUpperCase()}
          </Text>
          <Box position="relative" w="20px" h="10px">
            <Image
              src={arrowDown2}
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              opacity={isLangSelected ? 1 : 0}
              transform={isLangSelected ? "rotate(0deg)" : "rotate(0deg)"}
              _groupHover={
                isLangSelected
                  ? {}
                  : {
                      opacity: 1,
                      transform: "rotate(180deg)",
                    }
              }
            />
            <Image
              src={isDarkMode ? arrowDown3 : arrowDown2}
              transform={isDarkMode ? "none" : "rotate(180deg)"}
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              opacity={isLangSelected ? 0 : 1}
              _groupHover={
                isLangSelected
                  ? {}
                  : {
                      opacity: 0,
                    }
              }
            />
          </Box>
        </Stack>
      </Box>
      {isLangList && (
        <Stack
          position="absolute"
          alignItems={"center"}
          width={"100%"}
          pt={"5rem"}
          px={"1rem"}
          mt={"-2rem"}
          border={"1px solid #aaaaaa"}
          zIndex={-1}
          borderBottomLeftRadius={"2rem"}
          borderBottomRightRadius={"2rem"}
        >
          {DataLanguage.map((item, index) => (
            <Stack
              borderRadius="md"
              cursor={"pointer"}
              onClick={() => {
                console.log(item.name);
                setIsLanguage(item.name as LangCode);
                localStorage.setItem("language", item.name);
              }}
              direction={"row"}
              key={index}
              gap={10}
              alignItems="center"
              pb={"1rem"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Image src={item.img} />
              <Text fontSize={"1.5rem"}>{item.title}</Text>
            </Stack>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default LanguageMoblie;
