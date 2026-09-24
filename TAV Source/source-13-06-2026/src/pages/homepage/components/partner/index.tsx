import { Stack } from "@chakra-ui/react";
import Header from "./components/header";
import Content from "./components/content";

const Partner = () => {
  return (
    <Stack
      maxW={"192rem"}
      gap={{ base: "2rem", lg: "10rem" }}
      mx={"auto"}
      py={{ base: "50px", md: "100px" }}
      px={{ base: "20px", md: "40px", lg: "50px" }}
    >
      <Header />
      <Content />
    </Stack>
  );
};

export default Partner;
