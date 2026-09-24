import { Stack } from "@chakra-ui/react";
import Header from "./components/header";
import Content from "./components/content";

const Projects = () => {
  return (
    <Stack
      px={{ base: "20px", md: "40px", lg: "50px" }}
      py={{ base: "20px", sm: "50px", md: "100px" }}
      maxW={"192rem"}
      gap={"3rem"}
      mx={"auto"}
    >
      <Header />
      <Content />
    </Stack>
  );
};

export default Projects;
