import { Box, Flex, Heading } from "@chakra-ui/react";
import Icon from "../Icon/Icon";

export const ReachUsBox = () => {

  return (
    <Box
      me={{ base: "0", lg: "48px", xl: "48px", "2xl": "48px" }}
      mb={{ base: "40px", lg: "0", xl: "0", "2xl": "0" }}
      maxWidth={{
        base: "143px",
        lg: "331px",
        xl: "331px",
        "2xl": "331px",
      }}
    >
      {/* title */}
      <Heading
        as="h3"
        fontFamily="Poppins-600"
        fontSize={{ base: "16px", lg: "18px", xl: "18px", "2xl": "18px" }}
        lineHeight="26px"
        color="white"
        mb={{
          base: "15px",
          lg: "20px",
          xl: "20px",
          "2xl": "20px",
        }}
      >
        Reach us
      </Heading>
      {/* phone */}
      <Flex
        alignItems={{
          base: "start",
          lg: "center",
          xl: "center",
          "2xl": "center",
        }}
        gap={{
          base: "12px",
          lg: "25px",
          xl: "25px",
          "2xl": "25px",
        }}
        flexDirection={{
          base: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Box as="span" p="2px">
          <Icon type="phone" w={18} h={18} />
        </Box>
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
        alignItems={{
          base: "start",
          lg: "center",
          xl: "center",
          "2xl": "center",
        }}
        gap={{
          base: "12px",
          lg: "25px",
          xl: "25px",
          "2xl": "25px",
        }}
        mt={{
          base: "15px",
          lg: "24px",
          xl: "24px",
          "2xl": "24px",
        }}
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
          color="white"
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
          base: "start",
          lg: "flex-start",
          xl: "flex-start",
          "2xl": "flex-start",
        }}
        gap={{
          base: "12px",
          lg: "25px",
          xl: "25px",
          "2xl": "25px",
        }}
        mt={{
          base: "15px",
          lg: "24px",
          xl: "24px",
          "2xl": "24px",
        }}
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
          color="white"
          fontSize={{
            base: "12px",
            lg: "16px",
            xl: "16px",
            "2xl": "16px",
          }}
        >
          132 Dartmouth Street Boston, Massachusetts 02156 United States
        </Box>
      </Flex>
    </Box>
  );
};
