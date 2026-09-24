import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      background: "black",
    },
    a: {
      textDecoration: "none",
      color: "white",
    },
    button: {
      webkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      cursor: "pointer",
    },
  },
};

const components = {
  Text: {
    baseStyle: (props: { color?: string; fontFamily?: string }) => ({
      fontFamily: props.fontFamily || "Manrope",
      color: props.color || "white",
      webkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
    }),
  },
};
export const darkTheme = extendTheme({ config, styles, components });
