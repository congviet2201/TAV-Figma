import { Stack } from "@chakra-ui/react";
import LeftAdvise from "./components/left-advise";
import RightAdvise from "./components/right-advise";

const Advise = () => {
  return (
    <Stack
      id="advise"
      gap={"5rem"}
      direction={{ base: "column", lg: "row" }}
      maxW={"192rem"}
      alignItems={"center"}
      mx={"auto"}
      px={{ base: "2rem", md: "5rem" }}
      my={{ base: "20px", md: "100px" }}
    >
      <LeftAdvise />
      <RightAdvise />
    </Stack>
  );
};

export default Advise;
