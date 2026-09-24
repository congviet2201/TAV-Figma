import React, { Suspense, useEffect } from "react";
import Home from "./components/home";
import Introduce from "./components/introduce";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const OurServices = React.lazy(() => import("./components/ourservices"));
const Projects = React.lazy(() => import("./components/projects"));
const Ready = React.lazy(() => import("./components/ready"));
const WhyChoose = React.lazy(() => import("./components/whychoose"));
const Partner = React.lazy(() => import("./components/partner"));
const CustomerSay = React.lazy(() => import("./components/customersay"));
const Blog = React.lazy(() => import("./components/blog"));
const Advise = React.lazy(() => import("./components/advise"));

const HomePage = () => {
  // cuộn đến một phần tử cụ thể được chỉ định từ page khác.
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
    <Box top={0} width={"100%"} position={"relative"}>
      <Home />
      <Introduce />
      <Suspense fallback={<Box height="100vh" />}>
        <OurServices />
        <Projects />
        <WhyChoose />
        <Partner />
        <CustomerSay />
        <Ready />
        <Advise />
        <Blog />
      </Suspense>
    </Box>
  );
};

export default HomePage;
