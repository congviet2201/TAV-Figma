import { Stack } from "@chakra-ui/react";
import Title from "./components/title";
import ItemService from "./components/itemservice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Service = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <Stack
      maxW={"192rem"}
      mx={"auto"}
      px={{ base: "20px", md: "50px" }}
      gap={{ base: "20px", md: "50px" }}
      pt={{ base: "75px", xl: "20px" }}
    >
      <Title />
      <ItemService />
    </Stack>
  );
};

export default Service;
