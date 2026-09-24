import { Stack } from "@chakra-ui/react";
import Header from "./components/header";
import Content from "./components/content";

const CustomerSay = () => {
  return (
    <Stack
      maxW={"192rem"}
      gap={{ base: "2rem", lg: "10rem" }}
      mx={"auto"}
      px={{ base: "20px", md: "40px", lg: "50px" }}
    >
      <Header />
      <Content />
    </Stack>
  );
};

export default CustomerSay;
