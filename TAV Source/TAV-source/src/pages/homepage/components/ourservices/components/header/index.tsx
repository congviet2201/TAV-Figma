/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Image, Stack, Text } from "@chakra-ui/react";
import ArrowRight from "@assets/image/arrowRight.png";
import ArrowRight1 from "@assets/image/arrowRight1.png";
import ArrowRight2 from "@assets/image/arrowRight2.png";
import ArrowRight3 from "@assets/image/arrowRight3.png";
import ArrowLeft from "@assets/image/arrowLeft.png";
import ArrowLeft2 from "@assets/image/arrowLeft2.png";
import { useLanguage } from "@components/LanguageContext";
import { useEffect, useState } from "react";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useNavigate } from "react-router-dom";
import { GetOurServiceHeader } from "@apis/homepage.api";
import { IOurServiceHeader } from "@interfaces/IHomePage";
const Header = () => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const [isHover, setIsHover] = useState(false);
  const navigator = useNavigate();
  const [dataApi, setDataApi] = useState<IOurServiceHeader[] | undefined>();
  console.log(dataApi);
  useEffect(() => {
    GetOurServiceHeader().then((res) => {
      setDataApi(res.data);
    });
  }, []);
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      justifyContent={"space-between"}
      gap={"2rem"}
    >
      <Stack gap={"1rem"}>
        <Text
          fontWeight={"600"}
          fontSize={{ base: "2rem", md: "4.8rem" }}
          textTransform={"uppercase"}
        >
          {/* {dataApi?.[0].title[isLanguage]} * /}
          {isLanguage === "vi"
            ? "dịch vụ của chúng tôi"
            : isLanguage === "en"
            ? "Our Services"
            : "私たちのサービス"}
        </Text>
        <Text fontSize={{ base: "1.4rem", md: "2rem" }} fontWeight={"500"}>
          {/* {dataApi?.[0].description[isLanguage]} * /}
          {isLanguage === "vi"
            ? "3D Modelling, VR/AR, Project Mapping và hơn thế nữa"
            : isLanguage === "en"
            ? "3D Modelling, VR/AR, Project Mapping and more"
            : "3Dモデリング、VR/AR、プロジェクトマッピングなど"}
        </Text>
      </Stack>
      <Stack direction={"row"} justifyContent={"right"} alignItems={"center"}>
        <Stack
          className="swiper-button-prev"
          justifyContent={"center"}
          border={"1px solid #bebebe"}
          borderRadius="1rem"
          px={"15px"}
          py={"15px"}
          cursor={"pointer"}
          height={"fit-content"}
        >
          <Image src={isDarkMode ? ArrowLeft : ArrowLeft2} />
        </Stack>
        <Stack
          className="swiper-button-next"
          justifyContent={"center"}
          border={"1px solid #bebebe"}
          px={"15px"}
          py={"15px"}
          borderRadius="1rem"
          mx={"15px"}
          cursor={"pointer"}
          height={"fit-content"}
        >
          <Image src={isDarkMode ? ArrowRight : ArrowRight2} />
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          border={"1px solid rgba(225, 225, 225, 1)"}
          px={"15px"}
          py={"7px"}
          cursor={"pointer"}
          borderRadius="2rem"
          height={"fit-content"}
          transition="all 0.4s ease"
          _hover={{
            bg: "#F5712A",
            boxShadow: "0 4px 10px rgba(255, 165, 0, 0.5)",
            color: "white",
          }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => navigator("/services")}
        >
          <Text
            fontSize={{ base: "1.4rem", md: "1.6rem" }}
            fontWeight={"400"}
            color={isDarkMode ? (isHover ? "white" : "black") : "white"}
            transition="color 0.4s ease"
          >
            {isLanguage === "vi"
              ? "Khám phá"
              : isLanguage === "en"
              ? "Explore"
              : "探索する"}{" "}
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
*/