import { Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
const Header = () => {
  const { isLanguage } = useLanguage();

  return (
    <Stack alignItems={"center"}>
      <Text
        textTransform={"uppercase"}
        fontSize={{ base: "2.4rem", md: "4.8rem" }}
        fontWeight={"600"}
      >
        {isLanguage === "vi"
          ? "tại sao nên chọn tav"
          : isLanguage === "en"
          ? "why choose tav"
          : "なぜTAVを選ぶのか"}
      </Text>
      <Text
        fontSize={{ base: "1.4rem", md: "1.6rem" }}
        fontWeight={"400"}
        maxW={"342px"}
        textAlign={"center"}
      >
        {isLanguage === "vi"
          ? "Chúng tôi là một đội ngũ chuyên nghiệp hoạt động dựa trên những giá trị cốt lõi sau"
          : isLanguage === "en"
          ? "We are a professional team operating based on the following core values"
          : "私たちは以下のコアバリューに基づいて活動するプロフェッショナルチームです"}
      </Text>
    </Stack>
  );
};

export default Header;
