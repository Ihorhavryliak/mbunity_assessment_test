import { Box, Flex, Image } from "@chakra-ui/react";
import Icon from "../Icon/Icon";
import userImg from "../../assets/img/header/user.png";

export const UserMenu = () => {
  return (
    <Flex gap="36px">
      <Box
        py="6px"
        px="7px"
        border="1px"
        borderRadius="50px"
        borderColor="black.700"
      >
        <Image src={userImg} w="16px" h="18" />
      </Box>
      <Box
        py="6px"
        px="7px"
        border="1px"
        borderRadius="50px"
        borderColor="black.700"
      >
        <Icon type="cart" w={18} h={19} title="arrow" />
      </Box>
    </Flex>
  );
};
