import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Box
      cursor="pointer"
      fontFamily="Inter-800"
      fontWeight="800"
      fontSize={{ base: "18px", lg: "24px", xl: "24px", "2xl": "24px" }}
      lineHeight={{ base: "22px", lg: "29px", xl: "29px", "2xl": "29px" }}
    >
      <Link to="/"> Logo Here </Link>
    </Box>
  );
};
