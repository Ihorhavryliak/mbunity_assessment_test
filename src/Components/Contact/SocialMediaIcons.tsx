import { Flex } from "@chakra-ui/react";
import Icon from "../Icon/Icon";

export const SocialMediaIcons = () => {
  
  return (
    <Flex
      justifyContent={{
        base: "center",
        lg: "start",
        xl: "start",
        "2xl": "start",
      }}
      alignItems="center"
      mt={{ base: "58px", lg: "159px", xl: "159px", "2xl": "159px" }}
      gap="24px"
    >
      {/*  twitter */}
      <Flex
        alignItems="center"
        borderRadius="50px"
        py="9px"
        px="8px"
        w="30px"
        h="30px"
        bg="black.100"
        className="hover-social"
      >
        <Icon type="twitter" w={15} h={12} />
      </Flex>
      {/* instagram */}
      <Flex
        alignItems="center"
        borderRadius="50px"
        py="9px"
        px="8px"
        w="30px"
        h="30px"
        bg="black.100"
        className="hover-social"
      >
        <Icon type="instagram" w={15} h={15} />
      </Flex>
      {/* discard */}
      <Flex
        alignItems="center"
        borderRadius="50px"
        py="9px"
        px="8px"
        w="30px"
        h="30px"
        bg="black.100"
        className="hover-social"
      >
        <Icon type="discard" w={15} h={10} />
      </Flex>
    </Flex>
  );
};
