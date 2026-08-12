/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
// import bg from "@assets/image/bg-aboutus.png";
import { useEffect, useState } from "react";
import { GetIntroduce } from "@apis/homepage.api";
import { IIntroduce } from "@interfaces/IAboutUs";
import FadeImage from "@components/FadeImage";

const Title = () => {
  const { isLanguage } = useLanguage();
  const [dataApi, setDataApi] = useState<IIntroduce[] | undefined>();

  useEffect(() => {
    GetIntroduce().then((res) => {
      setDataApi(res.data.data.aboutUs);
    });
  }, []);

  return (
    <Stack
      alignItems={"end"}
      width={"100%"}
      minH={{ base: "400px", xl: "600px" }}
      direction={"row"}
      justifyContent={"space-between"}
      pt={{ base: "80px", xl: "0" }}
      position={"relative"}
    >
      <Box borderRadius={{ base: "50px", md: "100px" }} overflow="hidden" width="100%">
        <FadeImage
          src={dataApi?.[0].cover ?? ""}
          loadFullRes
          placeholderBlur="8px"
          wrapStyle={{ width: "100%", aspectRatio: "200/187" }}
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Box
        position={"absolute"}
        top={0}
        mx={"auto"}
        maxW={"192rem"}
        px={{ base: "20px", md: "50px" }}
        pt={{ base: "70px", xl: "20px" }}
        width={"100%"}
      >
        <Text
          pt={"2rem"}
          maxW={{ base: "1083px", sm: "1083px" }}
          textTransform={"uppercase"}
          fontSize={{
            base: "2.4rem",
            sm: "3.4rem",
            md: "4.4rem",
            lg: "6.4rem",
          }}
          fontWeight={"600"}
          color={"white"}
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          {dataApi?.[0].title[isLanguage]}
          {/* {isLanguage === "vi"
            ? "Chúng tôi sẽ giúp các ý tưởng của doanh nghiệp bất động sản trở thành hiện thực"
            : isLanguage === "en"
            ? "We turn real estate business ideas into reality"
            : "不動産ビジネスのアイデアを現実にします"} * /}
        </Text>
      </Box>
    </Stack>
  );
};

export default Title;
*/