import { Flex } from '@chakra-ui/react';
import { DiscardIcon } from '../Icons/DiscardIcon';
import { InstagramIcon } from '../Icons/InstagramIcon';
import { TwitterIcon } from '../Icons/TwitterIcon';

export const SocialMediaIcons = () => {
  return (
    <Flex
      justifyContent={{
        base: 'center',
        lg: 'start',
        xl: 'start',
        '2xl': 'start',
      }}
      alignItems="center"
      mt={{ base: '58px', lg: '159px', xl: '159px', '2xl': '159px' }}
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
        
        <TwitterIcon w='15' h='12'  color="#fff" />
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
     
        <InstagramIcon w='15' h='15'  color="#fff" />
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
        <DiscardIcon w='15' h='10'  color="#fff" />
      </Flex>
    </Flex>
  );
};
