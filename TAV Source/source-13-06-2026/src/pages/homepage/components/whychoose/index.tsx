import { Stack } from "@chakra-ui/react";
import Header from "./components/header";
import Content from "./components/content";

const WhyChoose = () => {
  return (
    <Stack maxW={"192rem"} gap={"3rem"} mx={"auto"}>
      <Header />
      <Content />
    </Stack>
  );
};

export default WhyChoose;
