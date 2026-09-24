import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      background: "white",
    },
    a: {
      textDecoration: "none",
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
    baseStyle: (props: {
      color?: string;
      fontFamily?: string;
      bg?: string;
    }) => ({
      fontFamily: props.fontFamily || "Manrope",
      color: props.color || "black",
      webkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
    }),
  },
};

export const defaultTheme = extendTheme({
  config,
  styles,
  components,
});
