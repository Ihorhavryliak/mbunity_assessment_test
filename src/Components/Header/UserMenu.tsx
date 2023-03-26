import { Box, Flex, Image } from '@chakra-ui/react';
import userImg from '../../assets/img/header/user.png';
import SVG from 'react-inlinesvg';
import cart from '../../assets/icons/cart.svg';

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
        <SVG
          cacheRequests={true}
          src={cart}
          width={18}
          height={19}
          fill="#000"
        />
      </Box>
    </Flex>
  );
};
