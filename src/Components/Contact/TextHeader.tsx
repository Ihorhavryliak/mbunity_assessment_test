import { Box, Heading, Text } from "@chakra-ui/react";

export const TextHeader = () => {
  
  return (
    <Box
      textAlign="center"
      mb={{ base: "20px", lg: "50px", xl: "50px", "2xl": "50px" }}
    >
      {/* title h1 */}
      <Heading
        as="h1"
        fontFamily="Poppins-700"
        lineHeight={{ base: "36px", lg: "60px", xl: "60px", "2xl": "60px" }}
        fontSize={{ base: "24px", lg: "40px", xl: "40px", "2xl": "40px" }}
      >
        Contact Us
      </Heading>
      {/* text */}
      <Text
        mt="10px"
        fontFamily="Poppins-500"
        fontWeight="500"
        fontSize={{ base: "14px", lg: "18px", xl: "18px", "2xl": "18px" }}
        lineHeight={{ base: "21px", lg: "27px", xl: "27px", "2xl": "27px" }}
        color="grayNew.100"
        px={{ base: "68px", lg: "0", xl: "0", "2xl": "0" }}
      >
        Any question or remarks? Just write us a message!
      </Text>
    </Box>
  );
};
