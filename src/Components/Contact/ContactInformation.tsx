import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Icon from "../Icon/Icon";
import { SocialMediaIcons } from "./SocialMediaIcons";

export const ContactInformation = () => {
  
  return (
    <Box
      maxWidth={{ base: "100%", lg: "491px", xl: "491px", "2xl": "491px" }}
      width="100%"
      bg="black"
      borderRadius="10px"
      position="relative"
      ps={{ base: "15px", lg: "40px", xl: "40px", "2xl": "40px" }}
      pe={{ base: "15px", lg: "114px", xl: "114px", "2xl": "114px" }}
      pt={{ base: "15px", lg: "40px", xl: "40px", "2xl": "40px" }}
      pb={{ base: "25px", lg: "36px", xl: "36px", "2xl": "36px" }}
      overflow="hidden"
      textAlign={{ base: "center", lg: "left", xl: "left", "2xl": "left" }}
    >
      {/* title */}
      <Heading
        as="h2"
        fontFamily="Poppins-600"
        fontSize={{ base: "20px", lg: "28px", xl: "28px", "2xl": "28px" }}
        lineHeight={{ base: "30px", lg: "42px", xl: "42px", "2xl": "42px" }}
        color="white"
      >
        Contact Information
      </Heading>
      {/* text */}
      <Text
        fontSize={{ base: "11px", lg: "18px", xl: "18px", "2xl": "18px" }}
        lineHeight={{ base: "16px", lg: "27px", xl: "27px", "2xl": "27px" }}
        mt="6px"
        color="grayNew.200"
      >
        Say something to start a live chat!
      </Text>
      {/*  contacts */}
      <Box
        mt={{ base: "12px", lg: "111px", xl: "111px", "2xl": "111px" }}
        color="white"
      >
        {/* phone */}
        <Flex
          flexDirection={{
            base: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          alignItems="center"
          gap={{ base: "10px", lg: "25px", xl: "25px", "2xl": "25px" }}
        >
          <Box as="span" p="2px">
            <Icon type="phone" w={20} h={20} />
          </Box>
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            +1012 3456 789
          </Box>
        </Flex>
        {/* email */}
        <Flex
          flexDirection={{
            base: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          alignItems="center"
          gap={{ base: "10px", lg: "25px", xl: "25px", "2xl": "25px" }}
          mt={{ base: "15px", lg: "50px", xl: "50px", "2xl": "50px" }}
        >
          <Box as="span" p="2px">
            <Icon type="email" w={20} h={20} />
          </Box>
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
          >
            demo@gmail.com
          </Box>
        </Flex>
        {/* map */}
        <Flex
          flexDirection={{
            base: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          alignItems={{
            base: "center",
            lg: "flex-start",
            xl: "flex-start",
            "2xl": "flex-start",
          }}
          gap={{ base: "10px", lg: "25px", xl: "25px", "2xl": "25px" }}
          mt={{ base: "15px", lg: "50px", xl: "50px", "2xl": "50px" }}
        >
          <Box as="span" p="2px">
            <Icon type="map" w={20} h={20} />
          </Box>
          <Box
            as="span"
            lineHeight={{
              base: "18px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            fontSize={{
              base: "12px",
              lg: "16px",
              xl: "16px",
              "2xl": "16px",
            }}
            maxWidth={{
              base: "221px",
              lg: "none",
              xl: "none",
              "2xl": "none",
            }}
          >
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </Box>
        </Flex>
        {/* social media */}
        <SocialMediaIcons />
        {/*  ellipse */}
        <Box
          as="span"
          position="absolute"
          right={{ base: "26px", lg: "70px", xl: "70px", "2xl": "70px" }}
          bottom={{ base: "52px", lg: "71px", xl: "71px", "2xl": "71px" }}
          w={{ base: "54px", lg: "138px", xl: "138px", "2xl": "138px" }}
          h={{ base: "54px", lg: "138px", xl: "138px", "2xl": "138px" }}
          borderRadius="100%"
          bg="black.200"
          zIndex="1"
        ></Box>
        <Box
          as="span"
          position="absolute"
          right={{
            base: "-115px",
            lg: "-95px",
            xl: "-95px",
            "2xl": "-95px",
          }}
          bottom="-84px"
          w={{ base: "192px", lg: "269px", xl: "269px", "2xl": "269px" }}
          h={{ base: "192px", lg: "269px", xl: "269px", "2xl": "269px" }}
          borderRadius="100%"
          bg="black.400"
          zIndex="2"
        ></Box>
      </Box>
    </Box>
  );
};
