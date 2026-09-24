import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
// import bg from "@assets/image/bg-introduce.png";
// import video from "@assets/gif/introduce1.gif";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";
import FadeImage from "@components/FadeImage";
import { useEffect, useState } from "react";
import { GetIntroduce1 } from "@apis/homepage.api";
import { IIntroduceFirst } from "@interfaces/IHomePage";

const IntroduceFirst = () => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();

  const [dataApi, setDataApi] = useState<IIntroduceFirst[] | undefined>();

  useEffect(() => {
    GetIntroduce1().then((res) => {
      setDataApi(res.data);
    });
  }, []);

  const isBase = useBreakpointValue({ base: true, md: false });
  return (
    <Stack
      width="100%"
      direction={"row"}
      alignItems={"center"}
      position={"relative"}
      justifyContent={"center"}
    >
      <Box flex={{ base: "none", md: 2 }}>
        {isBase ? (
          <FadeImage
            src={dataApi?.[0].logoSmall ?? ""}
            alt="GIF animation"
            priority
            wrapStyle={{ width: "350px", height: "500px", background: "transparent" }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Box
            display="grid"
            gridTemplateColumns="1fr"
            width="100%"
            alignItems="center"
          >
            <FadeImage
              src={dataApi?.[0].logoLight ?? ""}
              alt=""
              priority
              wrapStyle={{ gridArea: "1/1", width: "100%", background: "transparent" }}
              style={{ width: "100%", objectFit: "cover", transform: "scale(1.7)", opacity: isDarkMode ? 1 : 0, transition: "opacity 0.25s", pointerEvents: isDarkMode ? "auto" : "none" }}
            />
            <FadeImage
              src={dataApi?.[0].logoLarge ?? ""}
              alt="GIF animation"
              priority
              wrapStyle={{ gridArea: "1/1", width: "100%", background: "transparent" }}
              style={{ width: "100%", objectFit: "cover", transform: "scale(1.7)", opacity: isDarkMode ? 0 : 1, transition: "opacity 0.25s", pointerEvents: isDarkMode ? "none" : "auto" }}
            />
          </Box>
        )}
      </Box>
      <Box
        position={{ base: "absolute", md: "relative" }}
        right={{ base: "5%", md: "auto" }}
        maxW={{ base: "306px", md: "none" }}
        fontSize={{ base: "1.8rem", md: "3.2rem" }}
        fontWeight={"500"}
        flex={{ base: "none", md: 2 }}
        bg={isDarkMode ? "white" : "black"}
        color={isDarkMode ? "black" : "white"}
      >
        <Box
          dangerouslySetInnerHTML={{
            __html: dataApi?.[0].title[isLanguage] ?? "",
          }}
        />
        {/* {isLanguage === "vi" ? (
          <>
            Trong lĩnh vực kiến trúc và bất động sản, một hình ảnh ấn tượng có
            sức mạnh hơn cả ngàn lời thuyết trình. TAV mang đến giải pháp diễn
            họa kiến trúc toàn diện – từ{" "}
            <span style={{ color: "#F5712A" }}>3D rendering</span>,{" "}
            <span style={{ color: "#F5712A" }}>3D mapping</span> đến trải nghiệm{" "}
            <span style={{ color: "#F5712A" }}>VR/AR</span> – giúp các ý tưởng
            thiết kế được truyền tải một cách sống động, trực quan và đầy cảm
            xúc.
          </>
        ) : isLanguage === "en" ? (
          <>
            In the fields of architecture and real estate, a striking image can
            speak louder than a thousand words. TAV offers a comprehensive
            architectural visualization solution – from{" "}
            <span style={{ color: "#F5712A" }}>3D rendering</span>,{" "}
            <span style={{ color: "#F5712A" }}>3D mapping</span> to immersive{" "}
            <span style={{ color: "#F5712A" }}>VR/AR</span> experiences –
            helping design ideas come to life in vivid, emotional, and intuitive
            ways.
          </>
        ) : (
          <>
            建築や不動産の分野では、印象的なビジュアルは千の言葉よりも強力です。
            TAVは、<span style={{ color: "#F5712A" }}>3Dレンダリング</span>、{" "}
            <span style={{ color: "#F5712A" }}>3Dマッピング</span>、 没入型の
            <span style={{ color: "#F5712A" }}>VR/AR</span>体験まで、
            設計アイデアを鮮やかかつ感情豊かに伝える包括的なソリューションを提供します。
          </>
        )} */}
      </Box>
    </Stack>
  );
};

export default IntroduceFirst;
