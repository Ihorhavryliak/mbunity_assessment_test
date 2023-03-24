import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";


const colors = {
  black: {
    "950": "#000F01",
    "900": "#002704",
    "800": "#084114",
    "700": "#185F28",
    "600": "#2A813F",
    "500": "#3EA359",
    "400": "#55C474",
    "300": "#6DE28F",
    "200": "#9FF7B7",
    "100": "#1F1F1F",
  },
 
};
const typographyObj = {
  fonts: {
    body: `'Poppins', monospace`,
    heading: `'Roboto', monospace`,
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
