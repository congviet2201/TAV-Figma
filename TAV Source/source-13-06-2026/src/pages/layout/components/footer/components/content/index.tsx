import { Stack } from "@chakra-ui/react";
import LeftContent from "./components/left-content";
import MidContent from "./components/mid-content";
import RightContent from "./components/right-content";
const Content = () => {
  return (
    <Stack
      direction={{ base: "column", xl: "row" }}
      alignItems={{ base: "center", xl: "normal" }}
      justifyContent={"space-between"}
      width={"100%"}
      gap={"20px"}
    >
      <LeftContent />
      <MidContent />
      <RightContent />
    </Stack>
  );
};

export default Content;
