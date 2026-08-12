/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
import { IHomeReady } from "@interfaces/IHomePage";
import { useEffect, useState } from "react";
import { GetHomeReady } from "@apis/homepage.api";
const Ready = () => {
  const { isLanguage } = useLanguage();
  const [dataApi, setDataApi] = useState<IHomeReady[] | undefined>();
  const handleScrollGallery = () => {
    const element = document.getElementById("advise");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    GetHomeReady().then((res) => {
      setDataApi(res.data);
    });
  }, []);
  return (
    <Box
      position={"relative"}
      display={"flex"}
      width={"100%"}
      height={"100dvh"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={{ base: "5rem", md: "10rem" }}
      overflow={"hidden"}
      my={{ base: "20px", md: "100px" }}
    >
      <video
        src={dataApi?.[0].media}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        style={{
          width: "100%",
          height: "100dvh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      />

      <Stack
        position={"absolute"}
        gap={10}
        width={"fit-content"}
        alignItems={"center"}
        px={"2rem"}
      >
        <Text
          textTransform={"uppercase"}
          fontSize={{ base: "3.2rem", md: "6.4rem" }}
          fontWeight={"600"}
          color={"#F5712A"}
          maxW={"100.2rem"}
          textAlign={"center"}
        >
          {dataApi?.[0].title[isLanguage]}
          {/* {isLanguage === "vi"
            ? "sẵn sàng để biến ý tưởng của bạn thành hiện thực?"
            : isLanguage === "en"
            ? "Ready to turn your ideas into reality?"
            : "あなたのアイデアを現実に変える準備はできていますか？"} * /}
        </Text>
        <Text
          fontSize={{ base: "1.8rem", md: "2rem" }}
          fontWeight={"600"}
          maxW={"663px"}
          textAlign={"center"}
          color={"white"}
        >
          {dataApi?.[0].subTitle[isLanguage]}
          {/* {isLanguage === "vi"
            ? " Hãy để TAV đồng hành cùng bạn trong hành trình tạo nên những không gian ấn tượng."
            : isLanguage === "en"
            ? "Let TAV accompany you in the journey to create impressive spaces."
            : "TAVと一緒に、印象的な空間を作り上げる旅に出ましょう。"} * /}
        </Text>
        <Box
          as="button"
          width={"fit-content"}
          alignItems={"center"}
          bgColor={"#F5712A"}
          p={{ base: "10px", md: "15px" }}
          cursor={"pointer"}
          borderRadius={"1.5rem"}
          onClick={handleScrollGallery}
        >
          <Text fontSize={"1.6rem"} fontWeight={"400"} color={"white"}>
            {isLanguage === "vi"
              ? "Kết Nối Với Chúng Tôi"
              : isLanguage === "en"
              ? "Connect With Us"
              : "お問い合わせ"}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Ready;
*/