//set own button styles
export const ButtonTheme = {
  variants: {
    black: {
      borderRadius: "5px",
      bg: "black",
      color: "white",
      fontWeight: "500",
      boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.12)",
      px: "48px",
      py: "15px",
      _hover: {
        opacity: "0.9",
      },
    },
    subscribe: {
      borderLeftRadius: "0px",
      borderRightRadius: "4px",
      bg: "black",
      color: "white",
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: "500",
      pt: "11px",
      pb: "10px",
      px: "22px",
      h: "39px",
      _hover: {
        opacity: "0.7",
      },
    },
  },
};
