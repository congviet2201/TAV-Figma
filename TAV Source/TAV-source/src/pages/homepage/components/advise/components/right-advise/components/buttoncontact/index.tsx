/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Image, Stack, Text } from "@chakra-ui/react";
import arrow from "@assets/image/arrowRight3.png";
import mail from "@assets/image/icMail.png";
import mail1 from "@assets/image/icMail1.png";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";

const ButtonContact = ({
  onClick,
  isLoading,
}: {
  onClick: () => void;
  isLoading?: boolean;
}) => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();

  return (
    <Stack
      gap={"20px"}
      direction={{ base: "column", xl: "row" }}
      width={"100%"}
    >
      <Stack
        direction={"row"}
        as="button"
        alignItems={"center"}
        bgColor={"#F5712A"}
        py={"19px"}
        width={"100%"}
        px={"20px"}
        cursor={"pointer"}
        borderRadius={"2rem"}
        justifyContent={"space-between"}
        height={"fit-content"}
        flex={4}
        onClick={onClick}
      >
        {isLoading ? (
          <Text
            fontWeight={"400"}
            color={"white"}
            fontSize={{ base: "1.4rem", md: "1.6rem" }}
          >
            Đang gửi...
          </Text>
        ) : (
          <Text
            fontWeight={"400"}
            color={"white"}
            fontSize={{ base: "1.4rem", md: "1.6rem" }}
          >
            {isLanguage === "vi"
              ? "Nhận tư vấn ngay"
              : isLanguage === "en"
              ? "Get advice now"
              : "今すぐアドバイスを受ける"}
          </Text>
        )}

        <Image src={arrow} />
      </Stack>
      <Stack
        flex={2}
        direction={"row"}
        as="button"
        alignItems={"center"}
        border={"1px solid #d8d8d8"}
        py={"19px"}
        height={"fit-content"}
        width={"100%"}
        px={"20px"}
        cursor={"pointer"}
        borderRadius={"2rem"}
        justifyContent={"space-between"}
        onClick={() => {
          window.location.href = "mailto:tav.0402239694@gmail.com";
        }}
      >
        <Text fontWeight={"400"} fontSize={{ base: "1.4rem", md: "1.6rem" }}>
          {isLanguage === "vi"
            ? "Hoặc liên hệ qua Email"
            : isLanguage === "en"
            ? "Or contact via Email"
            : "またはメールでお問い合わせください"}
        </Text>
        <Image src={isDarkMode ? mail : mail1} />
      </Stack>
    </Stack>
  );
};

export default ButtonContact;
*/