import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { LanguageProvider } from "@components/LanguageContext";
import { useEffect } from "react";
import { VideoLoadProvider } from "@components/VideoLoadContext";

const LayoutInner = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box position="relative">
      <Box
        height={"100%"}
        minH={"100dvh"}
        width={"100dvw"}
        // overflowX={"hidden"}
        position={"relative"}
      >
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

const Layout = () => {
  return (
    <LanguageProvider>
      <VideoLoadProvider>
        <LayoutInner />
      </VideoLoadProvider>
    </LanguageProvider>
  );
};

export default Layout;
