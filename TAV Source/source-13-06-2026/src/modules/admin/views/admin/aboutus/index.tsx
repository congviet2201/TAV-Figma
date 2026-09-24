import { Stack } from "@chakra-ui/react";
import Home from "./components/home";
import ListImg from "./components/listimg";
import Leader from "./components/leader";
import Member from "./components/member";

export default function Marketplace() {
  return (
    <Stack pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Home />
      <ListImg />
      <Leader />
      <Member />
    </Stack>
  );
}
