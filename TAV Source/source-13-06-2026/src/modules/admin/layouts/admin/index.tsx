// Chakra imports
import { Portal, Box, useDisclosure } from "@chakra-ui/react";
import Footer from "@adminComponents/footer/FooterAdmin";
// Layout components
import Navbar from "@adminComponents/navbar/NavbarAdmin";
import Sidebar from "@adminComponents/sidebar/Sidebar";
import { SidebarContext } from "@adminContexts/SidebarContext";
import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import routes from "@modules/admin/routes";

// Custom Chakra theme
export default function Dashboard(props: { [x: string]: any }) {
  const { ...rest } = props;

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/auth/sign-in");
    }
  }, []);

  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };
  const location = useLocation();
  const getActiveRoute = (routes: RoutesType[]): string => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname === routes[i].layout + routes[i].path) {
        return routes[i].name;
      }
    }
    return "Default Brand Text";
  };
  const getActiveNavbar = (routes: RoutesType[]): boolean => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname === routes[i].layout + routes[i].path) {
        return routes[i].secondary ?? false;
      }
    }
    return false;
  };
  const getActiveNavbarText = (routes: RoutesType[]): string | boolean => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname === routes[i].layout + routes[i].path) {
        return routes[i].name;
      }
    }
    return "Default Brand Text";
  };
  const getRoutes = (routes: RoutesType[]): any => {
    return routes.map((route: RoutesType, key: any) => {
      if (route.layout === "/admin") {
        return (
          <Route path={`${route.path}`} element={route.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  document.documentElement.dir = "ltr";
  const { onOpen } = useDisclosure();
  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Sidebar routes={routes} display="none" {...rest} />
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: "100%", xl: "calc( 100% - 290px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
              <Navbar
                onOpen={onOpen}
                logoText={"Horizon UI Dashboard PRO"}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                message={getActiveNavbarText(routes)}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          {getRoute() ? (
            <Box
              mx="auto"
              p={{ base: "20px", md: "30px" }}
              pe="20px"
              minH="100vh"
              pt="50px"
            >
              {/* <Routes>
                {getRoutes(routes)}
                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes> */}
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={
                    localStorage.getItem("accessToken") ? (
                      <Navigate to="/admin/homepage" replace />
                    ) : (
                      <Navigate to="/auth/sign-in" replace />
                    )
                  }
                />
              </Routes>
            </Box>
          ) : null}
          <Box>
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}
