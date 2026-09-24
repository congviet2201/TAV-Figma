import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import ButtonArrow from "@components/buttonArrow";
import { useLanguage } from "@components/LanguageContext";
import { Link } from "react-router-dom";

const MidContent = () => {
  const { isLanguage } = useLanguage();

  return (
    <Box
      border={"1px solid #c8c8c8"}
      height={"100%"}
      p={"2rem"}
      borderRadius={"2rem"}
      width={"100%"}
      maxW={"636px"}
    >
      <Stack gap={5}>
        <Stack
          gap={5}
          direction={{ base: "column", "2xl": "row" }}
          fontSize={"15px"}
        >
          <Stack gap={10} justifyContent={"space-between"} maxW={"318px"}>
            <Stack gap={3}>
              <Text fontWeight={"600"} fontSize={"21.33px"}>
                {isLanguage === "vi"
                  ? "Văn Phòng"
                  : isLanguage === "en"
                  ? "Office"
                  : "オフィス"}
              </Text>
              <Text fontSize={"1.6rem"} fontWeight={"400"}>
                {isLanguage === "vi"
                  ? "194-Nguyễn Mậu Tài, phường Hòa Xuân, quận Cẩm Lệ, Đà Nẵng, Việt Nam"
                  : isLanguage === "en"
                  ? "194-Nguyen Mau Tai, Hoa Xuan, Cam Le, Da Nang, Viet Nam"
                  : "194-Nguyen Mau Tai, Hoa Xuan, Cam Le, Da Nang, Viet Nam"}
              </Text>
            </Stack>
            <Flex
              justifyContent={"center"}
              onClick={() => {
                window.open(
                  "https://maps.app.goo.gl/6Mm33ZpEAGCA5XpZA",
                  "_blank"
                );
              }}
            >
              <ButtonArrow
                sx={{
                  width: "100%",
                  height: "50px",
                }}
                sxText={{ fontSize: "1.6rem", fontWeight: "400", opacity: 0.8 }}
                title={
                  isLanguage === "vi"
                    ? "Xem trên Google Maps"
                    : isLanguage === "en"
                    ? "View on Google Maps"
                    : "Googleマップで見る"
                }
              />
            </Flex>
          </Stack>
          <Box
            borderRadius={"20px"}
            overflow={"hidden"}
            display={{ base: "block", "2xl": "none" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d958.7216594003687!2d108.22758844914705!3d16.01944866422801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219f869658f8b%3A0xa5fe99d03c79b607!2zMTk0IE5ndXnhu4VuIE3huq11IFTDoGksIEhvw6AgWHXDom4sIEPhuqltIEzhu4csIMSQw6AgTuG6tW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1747887148480!5m2!1svi!2sus"
              width="596px"
              height="230px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          <Stack
            gap={10}
            justifyContent={"space-between"}
            direction={{ base: "column", sm: "row", lg: "column" }}
          >
            <Stack>
              <Text fontWeight={"600"} fontSize={"21.33px"}>
                {isLanguage === "vi"
                  ? "Email"
                  : isLanguage === "en"
                  ? "Email"
                  : "メール"}
              </Text>
              <Text lineHeight={"2rem"} fontSize={"1.6rem"} fontWeight={"400"}>
                Mr. Kelvin Trần
              </Text>
              <Text fontSize={"1.6rem"} fontWeight={"400"}>
                <Link to="mailto:tuantn@tav.vn"> tuantn@tav.vn </Link> / <Link to="mailto:info@tav.vn"> info@tav.vn </Link>
              </Text>
            </Stack>
            <Stack>
              <Text fontWeight={"600"} fontSize={"21.33px"}>
                {isLanguage === "vi"
                  ? "Số điện thoại"
                  : isLanguage === "en"
                  ? "Phone number"
                  : "電話番号"}
              </Text>
              <Text lineHeight={"2rem"} fontSize={"1.6rem"} fontWeight={"400"}>
                <Link to="tel:0775315323"> 0775 315 323</Link>
              </Text>
              <Text fontSize={"1.6rem"} fontWeight={"400"}>
                <Link to="tel:0776469999"> 077 646 9999</Link>
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Box
          borderRadius={"20px"}
          overflow={"hidden"}
          display={{ base: "none", "2xl": "block" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d958.7216594003687!2d108.22758844914705!3d16.01944866422801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219f869658f8b%3A0xa5fe99d03c79b607!2zMTk0IE5ndXnhu4VuIE3huq11IFTDoGksIEhvw6AgWHXDom4sIEPhuqltIEzhu4csIMSQw6AgTuG6tW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1747887148480!5m2!1svi!2sus"
            width="596px"
            height="230px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Stack>
    </Box>
  );
};

export default MidContent;
