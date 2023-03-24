import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";


const colors = {
  black: {
    "100": "#1F1F1F",
    "200": "rgba(72, 72, 72, 0.5)",
    "300": "#1A1A1A",
    "400": "#ffffff0d"
  },
  grayNew: {
    '100': '#717171',
    '200': '#C9C9C9'
  }
};
const typographyObj = {
  fonts: {
    body: `'Poppins', monospace`,
    heading: `'Poppins', monospace`,
  },
};

const sizes = {
  // general
  // container
  "container-sm": "640px",
  "container-md": "768px",
  "container-lg": "1024px",
  "container-xl": "1280px",
  "container-2xl": "1536px",
  // full
  "full-x": "100vw",
  "full-y": "100vh",
};
const typography = { ...typographyObj };

const theme = extendTheme({
  colors,
  sizes,
  ...typography,
});

export default theme;
