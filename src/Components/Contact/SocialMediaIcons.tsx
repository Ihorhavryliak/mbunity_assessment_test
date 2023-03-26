import { Flex } from '@chakra-ui/react';
import SVG from 'react-inlinesvg';
import twitter from '../../assets/icons/twitter.svg';
import instagram from '../../assets/icons/twitter.svg';
import discard from '../../assets/icons/discard.svg';

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
        <SVG
          cacheRequests={true}
          src={twitter}
          width={15}
          height={12}
          fill="#000"
        />
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
        <SVG
          cacheRequests={true}
          src={instagram}
          width={15}
          height={15}
          fill="#000"
        />
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
        <SVG
          cacheRequests={true}
          src={discard}
          width={15}
          height={10}
          fill="#000"
        />
      </Flex>
    </Flex>
  );
};
