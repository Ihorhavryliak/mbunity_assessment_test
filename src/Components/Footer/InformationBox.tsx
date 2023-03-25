import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const InformationBox = () => {
  
  return (
    <>
      {/* first */}
      <Box
        me={{ base: "0", lg: "60px", xl: "60px", "2xl": "60px" }}
        mb={{ base: "40px", lg: "0", xl: "0", "2xl": "0" }}
      >
        {/* title */}
        <Heading
          as="h3"
          fontFamily="Poppins-600"
          fontSize={{ base: "16px", lg: "18px", xl: "18px", "2xl": "18px" }}
          lineHeight="26px"
          color="white"
          mb="20px"
        >
          Company
        </Heading>
        {/* About */}
        <Flex gap="25px">
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="white"
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            About
          </Box>
        </Flex>
        {/* Contact */}
        <Flex gap="25px" mt="24px">
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="white"
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            Contact
          </Box>
        </Flex>
        {/* Blogs */}
        <Flex gap="25px" mt="24px">
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="white"
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            Blogs
          </Box>
        </Flex>
      </Box>
      {/* second */}
      <Box
        me={{ base: "0", lg: "60px", xl: "60px", "2xl": "60px" }}
        mb={{ base: "40px", lg: "0", xl: "0", "2xl": "0" }}
      >
        {/* title */}
        <Heading
          as="h3"
          fontFamily="Poppins-600"
          fontSize={{ base: "16px", lg: "18px", xl: "18px", "2xl": "18px" }}
          lineHeight="26px"
          color="white"
          mb="20px"
        >
          Legal
        </Heading>
        {/*  Privacy Policy */}
        <Flex gap="25px">
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="white"
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            Privacy Policy
          </Box>
        </Flex>
        {/* Terms & Services */}
        <Flex gap="25px" mt="24px">
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="white"
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            Terms & Services
          </Box>
        </Flex>
        {/* Terms of Use */}
        <Flex gap="25px" mt="24px">
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="white"
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            Terms of Use
          </Box>
        </Flex>
        {/* Refund Policy */}
        <Flex gap="25px" mt="24px">
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="white"
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            Refund Policy
          </Box>
        </Flex>
      </Box>

      {/*  thirty */}
      <Box
        me={{ base: "0", lg: "60px", xl: "60px", "2xl": "60px" }}
        mb={{ base: "40px", lg: "0", xl: "0", "2xl": "0" }}
      >
        {/* title */}
        <Heading
          as="h3"
          fontFamily="Poppins-600"
          fontSize={{ base: "16px", lg: "18px", xl: "18px", "2xl": "18px" }}
          lineHeight="26px"
          color="white"
          mb="20px"
        >
          Quick Links
        </Heading>
        {/*  Techlabz Keybox */}
        <Flex gap="25px">
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="white"
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            Techlabz Keybox
          </Box>
        </Flex>
        {/* Downloads */}
        <Flex gap="25px" mt="24px">
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="white"
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            Downloads
          </Box>
        </Flex>
        {/* Forum */}
        <Flex gap="25px" mt="24px">
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="white"
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            Forum
          </Box>
        </Flex>
      </Box>
    </>
  );
};
