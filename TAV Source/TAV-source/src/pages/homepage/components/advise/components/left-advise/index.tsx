/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Stack, Text } from "@chakra-ui/react";
import home from "@assets/videos/home.mp4";
import ButtonArrow from "@components/buttonArrow";
import { useLanguage } from "@components/LanguageContext";
const LeftAdvise = () => {
  const { isLanguage } = useLanguage();
  return (
    <Box
      borderRadius={"3.5rem"}
      position="relative"
      overflow="hidden"
      width={"100%"}
      maxWidth={{ base: "400px", md: "974px" }}
      minHeight={{ base: "318px", md: "850px" }}
    >
      <Box
        as="video"
        src={home}
        width="100%"
        height="100%"
        objectFit="cover"
        position="absolute"
        top={0}
        left={0}
        autoPlay
        muted
        loop
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        pointerEvents="none"
        background="linear-gradient(180deg, rgba(245, 113, 42, 0) -9%, #F5712A 75%)"
      />
      <Stack
        direction={"row"}
        alignItems={"end"}
        position={"absolute"}
        bottom={0}
        p={{ base: "20px", md: "50px" }}
      >
        <Text
          textTransform={"uppercase"}
          fontSize={{ base: "2rem", md: "4.8rem" }}
          fontWeight={"600"}
          flex={{ base: 1, md: 3 }}
          color={"white"}
        >
          {isLanguage === "vi"
            ? "Kết nối với đội ngũ TAV© để biến ý tưởng của bạn thành hiện thực"
            : isLanguage === "en"
            ? "Connect with the TAV© team to turn your ideas into reality"
            : "TAV©チームとつながり、あなたのアイデアを現実のものにしましょう。"}
        </Text>
        <Stack maxW={"184px"} flex={{ base: 1, md: 2 }} alignItems={"end"}>
          <Text
            textAlign={"right"}
            fontWeight={"400"}
            color={"white"}
            fontSize={{ base: "1.4rem", md: "1.6rem" }}
          >
            {isLanguage === "vi"
              ? "Muốn xem qua hồ sơ năng lực của chúng tôi?"
              : isLanguage === "en"
              ? "Want to see our portfolio?"
              : "ポートフォリオをご覧になりたいですか？"}
          </Text>
          <Box width={"fit-content"}>
            <ButtonArrow
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1C3CZi0_IaOc6UDcJz1Vmq8YFQgBrsIbS/view",
                  "_blank"
                );
              }}
              title="Xem Proposal"
              sxText={{
                fontSize: { base: "1.4rem", md: "1.6rem" },
                fontWeight: "400",
              }}
              sx={{
                border: "1px solid white",
                width: { base: "173px", md: "185px" },
                height: "60px",
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LeftAdvise;
*/