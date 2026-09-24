import { Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
const Header = () => {
  const { isLanguage } = useLanguage();

  return (
    <Stack alignItems={"center"}>
      <Text
        textAlign={"center"}
        textTransform={"uppercase"}
        fontSize={{ base: "2.4rem", md: "4.8rem" }}
        fontWeight={"600"}
        maxW={{ base: "396px", md: "792px" }}
      >
        {isLanguage === "vi"
          ? "Khách hàng nói gì về TAV"
          : isLanguage === "en"
          ? "What our customers say about TAV"
          : "TAVに関するお客様の声"}
      </Text>
      <Text
        fontSize={{ base: "1.4rem", md: "1.6rem" }}
        fontWeight={"400"}
        maxW={{ base: "400px", md: "497px" }}
        textAlign={"center"}
      >
        {isLanguage === "vi"
          ? "Sự hài lòng của khách hàng là thước đo thành công của chúng tôi. Cùng lắng nghe những đánh giá chân thực từ các đối tác đã đồng hành cùng TAV trong nhiều dự án khác nhau."
          : isLanguage === "en"
          ? "Customer satisfaction is our measure of success. Listen to honest reviews from partners who have worked with TAV on various projects."
          : "お客様の満足度こそが、私たちの成功の尺度です。様々なプロジェクトでTAVと協働してきたパートナーの皆様からの率直なレビューをご覧ください。"}
      </Text>
    </Stack>
  );
};

export default Header;
