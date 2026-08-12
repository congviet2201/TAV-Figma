/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Text } from "@chakra-ui/react";
import footerWebm from "@assets/gif/footer.webm";
import footerGif from "@assets/gif/footer.gif";
import { useLanguage } from "@components/LanguageContext";

const LeftContent = () => {
  const { isLanguage } = useLanguage();
  return (
    <Box
      borderRadius={"3.5rem"}
      position="relative"
      overflow="hidden"
      width={"100%"}
      maxW={"590px"}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }}
      >
        <source src={footerWebm} type="video/webm" />
        <source src={footerGif} type="image/gif" />
      </video>

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        pointerEvents="none"
        background="linear-gradient(180deg, rgba(245, 113, 42, 0) -30%, #F5712A 55%)"
      />

      <Text
        position="absolute"
        top={0}
        left={0}
        fontSize={"3.2rem"}
        fontWeight={"600"}
        color="white"
        p={"20px"}
      >
        TAV©
      </Text>
      <Text
        position="absolute"
        bottom={0}
        right={0}
        fontSize={{
          base: "3rem",
          sm: "4rem",
          md: "5.6rem",
          xl: "3.2rem",
          "2xl": "5rem",
        }}
        color="white"
        p={"10px"}
        textTransform={"uppercase"}
        fontWeight={"700"}
        maxW={"55rem"}
        textAlign="right"
      >
        {isLanguage === "vi"
          ? "công ty TNHH t architect & visualization"
          : isLanguage === "en"
          ? "T Architect & Visualization Co., Ltd."
          : "Tアーキテクト・アンド・ビジュアライゼーション株式会社"}
      </Text>
    </Box>
  );
};

export default LeftContent;
*/