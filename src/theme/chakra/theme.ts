import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { ButtonTheme } from "./_Button";

const colors = {
  black: {
    "100": "#1F1F1F",
    "200": "rgba(72, 72, 72, 0.5)",
    "300": "#1A1A1A",
    "400": "#ffffff0d",
  },
  grayNew: {
    "100": "#717171",
    "200": "#C9C9C9",
    "300": "#8D8D8D",
  },
};
const typographyObj = {
  fonts: {
    body: `'Poppins', monospace`,
    heading: `'Poppins', monospace`,
  },
};

const components = { Button: ButtonTheme };

const typography = { ...typographyObj };

const theme = extendTheme({
  components,
  colors,
  ...typography,
});

export default theme;
