import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import logoDarkWebm from "@assets/gif/logoDark.webm";
import logoDarkGif from "@assets/gif/logoDark.gif";
import logoLightWebm from "@assets/gif/logoLight.webm";
import logoLightGif from "@assets/gif/logoLight.gif";
import HeaderResponsive from "../header-responsive";
import Menu from "./components/menu";
import Control from "./components/control";
import { useNavigate } from "react-router-dom";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useIsIosWebkit } from "@hooks/useIsIosWebkit";

const LogoMedia = ({
  webm,
  gif,
  style,
  onClick,
}: {
  webm: string;
  gif: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const isIosWebkit = useIsIosWebkit();

  if (isIosWebkit) {
    return (
      <img
        src={gif}
        alt="logo"
        onClick={onClick}
        style={{ ...style, display: "block" }}
      />
    );
  }

  return (
    <video key={webm} autoPlay muted loop playsInline onClick={onClick} style={style}>
      <source src={webm} type="video/webm" />
      <source src={gif} type="image/gif" />
    </video>
  );
};

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, xl: false });
  const navigator = useNavigate();
  const { isDarkMode } = useDarkModeContext();

  const logoWebm = isDarkMode ? logoLightWebm : logoDarkWebm;
  const logoGif = isDarkMode ? logoLightGif : logoDarkGif;

  return (
    <>
      {isMobile ? (
        <Stack
          mx={"auto"}
          width={"100%"}
          position={"fixed"}
          zIndex={3}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={"2rem"}
          pr={"2rem"}
          bg={isDarkMode ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.75)"}
          backdropFilter="blur(10px)"
        >
          <Box w="40px">
            <LogoMedia
              webm={logoWebm}
              gif={logoGif}
              onClick={() => navigator("/")}
              style={{
                width: "40px",
                cursor: "pointer",
                paddingLeft: "2rem",
                transform: "scale(13)",
              }}
            />
          </Box>
          <HeaderResponsive />
        </Stack>
      ) : (
        <Box
          width={"100%"}
          position={"sticky"}
          top="0"
          zIndex={3}
          py={"0.5rem"}
          px={{ base: "15px", xl: "50px" }}
          background={isDarkMode ? "white" : "black"}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            maxW={"192rem"}
            mx={"auto"}
          >
            <Box h="61px">
              <LogoMedia
                webm={logoWebm}
                gif={logoGif}
                onClick={() => navigator("/")}
                style={{
                  cursor: "pointer",
                  maxWidth: "230px",
                  height: "61px",
                  objectFit: "cover",
                  overflow: "hidden",
                  transformOrigin: "left",
                  transform: "scale(1.5)",
                }}
              />
            </Box>
            <Menu />
            <Control />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Header;
