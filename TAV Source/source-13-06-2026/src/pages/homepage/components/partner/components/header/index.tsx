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
          ? "được tin tưởng bởi các đối tác"
          : isLanguage === "en"
          ? "Trusted by partners"
          : "パートナーからの信頼"}
      </Text>
      <Text
        fontSize={{ base: "1.4rem", md: "1.6rem" }}
        fontWeight={"400"}
        maxW={{ base: "400px", md: "497px" }}
        textAlign={"center"}
      >
        {isLanguage === "vi"
          ? "TAV tự hào là đối tác tin cậy của hơn các đơn vị trong và ngoài nước. Sự hài lòng và gắn bó lâu dài của khách hàng chính là minh chứng cho chất lượng và uy tín mà chúng tôi luôn gìn giữ."
          : isLanguage === "en"
          ? "TAV is proud to be a trusted partner of more than a dozen domestic and foreign companies. Customer satisfaction and long-term commitment are testament to the quality and reputation we always maintain."
          : "TAVは、国内外の10社以上の企業から信頼されるパートナーであることを誇りに思っています。顧客満足と長期的なコミットメントは、私たちが常に維持している品質と評判の証です。"}
      </Text>
    </Stack>
  );
};

export default Header;
