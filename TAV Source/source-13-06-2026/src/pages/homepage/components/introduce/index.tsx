import IntroduceFirst from "./components/introduce-first";
import IntroduceSecond from "./components/introduce-second";
import IntroduceThrid from "./components/introduce-thrid";
import { Stack } from "@chakra-ui/react";

const Introduce = () => {
  return (
    <Stack
      maxW={"192rem"}
      mx={"auto"}
      py={{ base: "20px", md: "100px" }}
      px={{ base: "20px", md: "50px" }}
      gap={{ base: "20px", sm: "50px", md: "100px" }}
    >
      <IntroduceFirst />
      <IntroduceSecond />
      <IntroduceThrid />
    </Stack>
  );
};

export default Introduce;
