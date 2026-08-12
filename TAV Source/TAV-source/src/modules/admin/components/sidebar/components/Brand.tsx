/* COMMENTED OUT FOR DUP PREVENTION */
/*// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "@adminComponents/separator/Separator";
import logoDarkWebm from "@assets/gif/logoDark.webm";
import logoDarkGif from "@assets/gif/logoDark.gif";
import logoLightWebm from "@assets/gif/logoLight.webm";
import logoLightGif from "@assets/gif/logoLight.gif";

const logoStyle: React.CSSProperties = {
  objectFit: "cover",
  maxWidth: "230px",
  height: "61px",
  transform: "scale(1.5)",
};

export function SidebarBrand() {
  const isLightMode = useColorModeValue(true, false);

  return (
    <Flex alignItems="center" flexDirection="column">
      <video autoPlay muted loop playsInline style={logoStyle}>
        <source
          src={isLightMode ? logoLightWebm : logoDarkWebm}
          type="video/webm"
        />
        <source
          src={isLightMode ? logoLightGif : logoDarkGif}
          type="image/gif"
        />
      </video>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
*/