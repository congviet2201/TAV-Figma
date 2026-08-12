/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import logoDarkWebm from "@assets/gif/logoDark.webm";
import logoDarkGif from "@assets/gif/logoDark.gif";
import logoLightWebm from "@assets/gif/logoLight.webm";
import logoLightGif from "@assets/gif/logoLight.gif";
import HeaderResponsive from "../header-responsive";
import Menu from "./components/menu";
import Control from "./components/control";
import { useNavigate } from "react-router-dom";
import { useDarkModeContext } from "@components/DarkModeContext";

const LogoVideo = ({
  webm,
  gif,
  style,
  onClick,
}: {
  webm: string;
  gif: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => (
  <video key={webm} autoPlay muted loop playsInline onClick={onClick} style={style}>
    <source src={webm} type="video/webm" />
    <source src={gif} type="image/gif" />
  </video>
);

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, xl: false });
  const navigator = useNavigate();
  const { isDarkMode } = useDarkModeContext();

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
          overflow="hidden"
        >
          <LogoVideo
            webm={isDarkMode ? logoLightWebm : logoDarkWebm}
            gif={isDarkMode ? logoLightGif : logoDarkGif}
            onClick={() => navigator("/")}
            style={{
              width: "40px",
              cursor: "pointer",
              paddingLeft: "2rem",
              transform: "scale(13)",
            }}
          />
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
          overflow="hidden"
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            maxW={"192rem"}
            mx={"auto"}
          >
            <LogoVideo
              webm={isDarkMode ? logoLightWebm : logoDarkWebm}
              gif={isDarkMode ? logoLightGif : logoDarkGif}
              onClick={() => navigator("/")}
              style={{
                cursor: "pointer",
                maxWidth: "230px",
                height: "61px",
                objectFit: "cover",
                transform: "scale(1.5)",
                paddingLeft: "2rem",
              }}
            />
            <Menu />
            <Control />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Header;
*/