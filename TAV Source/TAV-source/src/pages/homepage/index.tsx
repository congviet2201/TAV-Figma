/* COMMENTED OUT FOR DUP PREVENTION */
/*import Home from "./components/home";
import Introduce from "./components/introduce";
import { Box } from "@chakra-ui/react";
import OurServices from "./components/ourservices";
import Projects from "./components/projects";
import Ready from "./components/ready";
import WhyChoose from "./components/whychoose";
import Partner from "./components/partner";
import CustomerSay from "./components/customersay";
import Blog from "./components/blog";
import Advise from "./components/advise";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
      <OurServices />
      <Projects />
      <WhyChoose />
      <Partner />
      <CustomerSay />
      <Ready />
      <Advise />
      <Blog />
    </Box>
  );
};

export default HomePage;
*/