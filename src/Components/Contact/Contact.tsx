import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Icon from "../Icon/Icon";

const Contact = () => {
  return (
    <Box mt="75px" maxWidth="1196px" w="100%">
      {/* h1 text contact*/}
      <Box textAlign="center" mb="50px">
        {/* title h1 */}
        <Heading
          as="h1"
          fontFamily="Poppins-700"
          lineHeight="60px"
          fontSize="40px"
        >
          Contact Us
        </Heading>
        {/* text */}
        <Text
          mt="10px"
          fontFamily="Poppins-500"
          fontWeight="500"
          fontSize="18px"
          lineHeight="27px"
          color="grayNew.100"
        >
          Any question or remarks? Just write us a message!
        </Text>
      </Box>
      {/* box contact */}
      <Flex py="10px" ps="10px" pe="50px" gap="50px">
        {/* contact information */}
        <Box
          maxWidth="491px"
          width="100%"
          bg="black"
          borderRadius="10px"
          position="relative"
          ps="40px"
          pe="114px"
          pt="40px"
          pb="36px"
          overflow='hidden'
        >
          {/* title */}
          <Heading
            as="h2"
            fontFamily="Poppins-600"
            fontSize="28px"
            lineHeight="42px"
            color="white"
          >
            Contact Information
          </Heading>
          {/* text */}
          <Text fontSize="18px" lineHeight="27px" mt="6px" color="grayNew.200">
            Say something to start a live chat!
          </Text>
          {/*  contacts */}
          <Box mt="111px" color="white"  >
            {/* phone */}
            <Flex alignItems="center" lineHeight="16px" gap="25px">
              <Box as="span" p="2px">
                <Icon type="phone" w={20} h={20} />
              </Box>
              <Box as="span" lineHeight="24px">
                +1012 3456 789
              </Box>
            </Flex>
            {/* email */}
            <Flex alignItems="center" gap="25px" mt="50px">
              <Box as="span" p="2px">
                <Icon type="email" w={20} h={20} />
              </Box>
              <Box as="span" lineHeight="24px">
              demo@gmail.com
              </Box>
            </Flex>
            {/* map */}
            <Flex alignItems="center" gap="25px" mt="50px">
              <Box as="span" p="2px">
                <Icon type="map" w={20} h={20} />
              </Box>
              <Box as="span" lineHeight="24px">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
              </Box>
            </Flex>
            {/* social media */}
            <Flex alignItems="center" mt="159px" gap="24px">
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
            {/*  ellipss */}
            <Box
              as="span"
              position="absolute"
              right="70px"
              bottom="71px"
              w='138px'
              h='138px'
              borderRadius='100%'
              bg="black.200"
              zIndex="1"
            ></Box>
             <Box as='span' position='absolute'  
             right='-95px' 
             bottom='-84px'
                w='269px'
                h='269px'
                borderRadius='100%'
                bg="black.400"
             zIndex='2' ></Box>  
          </Box>
        </Box>
        {/* form */}
        <Box>ei</Box>
      </Flex>
    </Box>
  );
};
export default Contact;
