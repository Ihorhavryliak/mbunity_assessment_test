import { Box, Flex, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { EmailIcon } from '../Icons/EmailIcon';
import { MapIcon } from '../Icons/MapIcon';
import { PhoneIcon } from '../Icons/PhoneIcon';

export const ReachUsBox = () => {
  const { t } = useTranslation();
  return (
    <Box
      me={{ base: '0', lg: '48px', xl: '48px', '2xl': '48px' }}
      mb={{ base: '40px', lg: '0', xl: '0', '2xl': '0' }}
      maxWidth={{
        base: '143px',
        lg: '331px',
        xl: '331px',
        '2xl': '331px',
      }}
    >
      {/* title */}
      <Heading
        as="h3"
        fontFamily="Poppins-600"
        fontSize={{ base: '16px', lg: '18px', xl: '18px', '2xl': '18px' }}
        lineHeight="26px"
        color="white"
        mb={{
          base: '15px',
          lg: '20px',
          xl: '20px',
          '2xl': '20px',
        }}
      >
        {t('reach')}
      </Heading>
      {/* phone */}
      <Flex
        alignItems={{
          base: 'start',
          lg: 'center',
          xl: 'center',
          '2xl': 'center',
        }}
        gap={{
          base: '12px',
          lg: '25px',
          xl: '25px',
          '2xl': '25px',
        }}
        flexDirection={{
          base: 'column',
          lg: 'row',
          xl: 'row',
          '2xl': 'row',
        }}
      >
        <Box as="span" p="2px">
          <PhoneIcon w="18" h="18" color="#fff" />
        </Box>
        <Box
          as="span"
          lineHeight={{
            base: '18px',
            lg: '24px',
            xl: '24px',
            '2xl': '24px',
          }}
          color="white"
          fontSize={{
            base: '12px',
            lg: '16px',
            xl: '16px',
            '2xl': '16px',
          }}
        >
          {t('mobile_phone')}
        </Box>
      </Flex>
      {/* email */}
      <Flex
        flexDirection={{
          base: 'column',
          lg: 'row',
          xl: 'row',
          '2xl': 'row',
        }}
        alignItems={{
          base: 'start',
          lg: 'center',
          xl: 'center',
          '2xl': 'center',
        }}
        gap={{
          base: '12px',
          lg: '25px',
          xl: '25px',
          '2xl': '25px',
        }}
        mt={{
          base: '15px',
          lg: '24px',
          xl: '24px',
          '2xl': '24px',
        }}
      >
        <Box as="span" p="2px">
          <EmailIcon w="20" h="20" color="#fff" />
        </Box>
        <Box
          as="span"
          lineHeight={{
            base: '18px',
            lg: '24px',
            xl: '24px',
            '2xl': '24px',
          }}
          color="white"
          fontSize={{
            base: '12px',
            lg: '16px',
            xl: '16px',
            '2xl': '16px',
          }}
        >
          {t('email')}
        </Box>
      </Flex>
      {/* map */}
      <Flex
        flexDirection={{
          base: 'column',
          lg: 'row',
          xl: 'row',
          '2xl': 'row',
        }}
        alignItems={{
          base: 'start',
          lg: 'flex-start',
          xl: 'flex-start',
          '2xl': 'flex-start',
        }}
        gap={{
          base: '12px',
          lg: '25px',
          xl: '25px',
          '2xl': '25px',
        }}
        mt={{
          base: '15px',
          lg: '24px',
          xl: '24px',
          '2xl': '24px',
        }}
      >
        <Box as="span" p="2px">
          <MapIcon w="20" h="20" color="#fff" />
        </Box>
        <Box
          as="span"
          lineHeight={{
            base: '18px',
            lg: '24px',
            xl: '24px',
            '2xl': '24px',
          }}
          color="white"
          fontSize={{
            base: '12px',
            lg: '16px',
            xl: '16px',
            '2xl': '16px',
          }}
        >
          {t('address')}
        </Box>
      </Flex>
    </Box>
  );
};
