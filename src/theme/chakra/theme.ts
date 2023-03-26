import { extendTheme } from '@chakra-ui/react';
import { ButtonTheme } from './_Button';
//create own colors styles
const colors = {
  black: {
    '100': '#1F1F1F',
    '200': 'rgba(72, 72, 72, 0.5)',
    '300': '#1A1A1A',
    '400': '#ffffff0d',
    '700': 'rgba(0, 0, 0, 0.75)',
  },
  grayNew: {
    '100': '#717171',
    '200': '#C9C9C9',
    '300': '#8D8D8D',
  },
  gray: {
    '200': '#fff',
    '800': '#000',
  },
  white: {
    '500': 'rgba(255, 255, 255, 0.5)',
  },
};
const typographyObj = {
  fonts: {
    body: `'Poppins', monospace`,
    heading: `'Poppins', monospace`,
  },
};
//create own button styles
const components = { Button: ButtonTheme };
//create own typography styles
const typography = { ...typographyObj };

//connect styles
const theme = extendTheme({
  components,
  colors,
  ...typography,
});

export default theme;
