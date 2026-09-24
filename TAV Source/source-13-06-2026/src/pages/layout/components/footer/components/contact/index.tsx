import { Image, Stack, Text, Box } from "@chakra-ui/react";
import { FaPinterest, FaFacebook, FaInstagram, FaBehance, FaWhatsapp } from "react-icons/fa";
import icZalo from "@assets/image/icZalo.png";

const Contact = () => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text fontSize={"1.6rem"} fontWeight={"400"}>
        @ 2025 T Architect & Visualization. All rights reserved.
      </Text>
      <Stack direction={{ base: "column", sm: "row" }} gap={10}>
        <Stack
          direction={"row"}
          gap={{ base: 20, md: 10 }}
          alignItems={"center"}
        >
          <Box
            cursor={"pointer"}
            onClick={() => {
              window.open("https://pin.it/7zAOGivKh", "_blank");
            }}
          >
            <FaPinterest size={35} color="#E60023" />
          </Box>
          <Box
            cursor={"pointer"}
            onClick={() => {
              window.open(
                "https://www.facebook.com/profile.php?id=100068490675716&locale=vi_VN",
                "_blank"
              );
            }}
          >
            <FaFacebook size={35} color="#1877F2" />
          </Box>
          <Box
            cursor={"pointer"}
            onClick={() => {
              window.open(
                "https://www.instagram.com/tav.visualization",
                "_blank"
              );
            }}
          >
            <FaInstagram size={35} color="#E4405F" />
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          gap={{ base: 20, md: 10 }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            cursor={"pointer"}
            onClick={() => {
              window.open("https://www.behance.net/tavvn", "_blank");
            }}
          >
            <FaBehance size={35} color="#1769ff" />
          </Box>
          <Image
            src={icZalo}
            height={"35px"}
            cursor={"pointer"}
            onClick={() => {
              window.open("https://zalo.me/0776469999", "_blank");
            }}
          />
          <Box
            cursor={"pointer"}
            onClick={() => {
              window.open("https://wa.me/84972710515", "_blank");
            }}
          >
            <FaWhatsapp size={35} color="#25D366" />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
