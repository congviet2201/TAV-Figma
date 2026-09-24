import { Stack } from "@chakra-ui/react";
import Header from "./components/header";
import Content from "./components/content";

const OurServices = () => {
  return (
    <Stack
      px={{ base: "20px", md: "40px", lg: "50px" }}
      maxW={"192rem"}
      mx={"auto"}
      gap={"2rem"}
    >
      <Header />
      <Content />
    </Stack>
  );
};

export default OurServices;
