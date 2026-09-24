import { Box, Input, Stack, Text } from "@chakra-ui/react";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useLanguage } from "@components/LanguageContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const navigator = useNavigate();

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      justifyContent={"space-between"}
      gap={10}
    >
      <Stack>
        <Text
          fontSize={{ base: "2.4rem", md: "4.8rem" }}
          textTransform={"uppercase"}
          fontWeight={"600"}
          maxW={"621px"}
        >
          {isLanguage === "vi"
            ? "đăng ký để nhận tin tức mới nhất từ chúng tôi"
            : isLanguage === "en"
            ? "Subscribe to receive the latest news from us"
            : "最新情報を受け取るために登録してください"}
        </Text>
        <Text fontSize={{ base: "1.4rem", md: "1.6rem" }} fontWeight={"400"}>
          {isLanguage === "vi"
            ? "Cập nhật kịp thời các tin tức, thông báo và bài viết mới nhất từ TAV"
            : isLanguage === "en"
            ? "Stay updated with the latest news, announcements, and articles from TAV"
            : "TAVからの最新ニュース、発表、および記事をいち早くお届けします"}
        </Text>
      </Stack>
      <Stack direction="row" spacing={4} justifyContent={"end"}>
        <Input
          placeholder={
            isLanguage === "vi"
              ? "Nhập email của bạn"
              : isLanguage === "en"
              ? "Enter your email"
              : "メールアドレスを入力してください"
          }
          background={isDarkMode ? "#F0F0F0" : "rgb(30, 30, 30)"}
          size="md"
          w={"325px"}
          h={"50px"}
          fontSize={"1.6rem"}
          fontWeight={"400"}
          borderRadius="1rem"
          color={isDarkMode ? "#858585" : "rgb(133, 133, 133)"}
          sx={{
            "::placeholder": {
              color: isDarkMode ? "#858585" : "#E0E0E0",
            },
          }}
          border={"none"}
          focusBorderColor={"none"}
          py={"24px"}
          px={"20px"}
        />
        <Box
          as={"button"}
          bgColor={"#F5712A"}
          color={"white"}
          fontSize={"1.6rem"}
          fontWeight={"400"}
          borderRadius="6px"
          height={"50px"}
          width={"99px"}
          whiteSpace="nowrap"
          onClick={() => {
            navigator("/", { state: { scrollTo: "advise" } });
          }}
        >
          {isLanguage === "vi"
            ? "Đăng ký"
            : isLanguage === "en"
            ? "Subscribe"
            : "登録する"}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Header;
