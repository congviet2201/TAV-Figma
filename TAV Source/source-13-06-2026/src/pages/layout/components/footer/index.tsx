import { Box, Stack } from "@chakra-ui/react";
import Header from "./components/header";
import Content from "./components/content";
import Contact from "./components/contact";

const Footer = () => {
  return (
    <Box
      border={"1px solid #c8c8c8"}
      borderTopLeftRadius={"10rem"}
      borderTopRightRadius={"10rem"}
      paddingY={"5rem"}
      mx={"auto"}
      maxW={"192rem"}
      mt={{ base: "20px", sm: "50px", md: "100px" }}
    >
      <Stack maxW={"192rem"} gap={10} px={{ base: "20px", md: "50px" }}>
        <Header />
        <Content />
        <Contact />
      </Stack>
    </Box>
  );
};

export default Footer;
