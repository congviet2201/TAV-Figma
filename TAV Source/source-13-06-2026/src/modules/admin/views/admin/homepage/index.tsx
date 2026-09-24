import { Stack } from "@chakra-ui/react";
import Home from "./components/home";
import Introduce from "./components/introduce";
import Ready from "./components/ready";

export default function UserReports() {
  return (
    <Stack pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Home />
      <Introduce />
      <Ready />
    </Stack>
  );
}
