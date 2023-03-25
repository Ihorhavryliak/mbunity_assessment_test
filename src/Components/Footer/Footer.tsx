import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Icon from "../Icon/Icon";

type FormValues = {
  email: string;
};

const Footer = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Flex bg="black" justifyContent="center" mt="50px">
      <Box maxWidth="1281px" w="100%" pt="80px" pb="66px">
        {/* logo */}
        <Heading
          as="h2"
          fontFamily="Inter-800"
          fontSize="36px"
          lineHeight="44px"
          color="white"
          textAlign="center"
        >
          Logo Here
        </Heading>

        {/* box footer info */}

        <Flex pt="30px" ps="21px" borderTop="1px" borderColor="white" mt="45px">
          {/*    Reach us */}
          <Box me="48px" maxWidth="331px">
            {/* title */}
            <Heading
              as="h3"
              fontFamily="Poppins-600"
              fontSize="18px"
              lineHeight="26px"
              color="white"
              mb="20px"
            >
              Reach us
            </Heading>
            {/* phone */}
            <Flex alignItems="center" gap="25px">
              <Box as="span" p="2px">
                <Icon type="phone" w={18} h={18} />
              </Box>
              <Box as="span" lineHeight="24px" color="white">
                +1012 3456 789
              </Box>
            </Flex>
            {/* email */}
            <Flex alignItems="center" gap="25px" mt="24px">
              <Box as="span" p="2px">
                <Icon type="email" w={20} h={20} />
              </Box>
              <Box as="span" lineHeight="24px" color="white">
                demo@gmail.com
              </Box>
            </Flex>
            {/* map */}
            <Flex gap="25px" mt="24px">
              <Box as="span" p="2px">
                <Icon type="map" w={20} h={20} />
              </Box>
              <Box as="span" lineHeight="24px" color="white">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </Box>
            </Flex>
          </Box>

          {/*       Box information */}
          <Flex gap="60px" me="96px">
            {/* first */}
            <Box>
              {/* title */}
              <Heading
                as="h3"
                fontFamily="Poppins-600"
                fontSize="18px"
                lineHeight="26px"
                color="white"
                mb="20px"
              >
                Company
              </Heading>
              {/* About */}
              <Flex gap="25px">
                <Box as="span" lineHeight="24px" color="white">
                  About
                </Box>
              </Flex>
              {/* Contact */}
              <Flex gap="25px" mt="24px">
                <Box as="span" lineHeight="24px" color="white">
                  Contact
                </Box>
              </Flex>
              {/* Blogs */}
              <Flex gap="25px" mt="24px">
                <Box as="span" lineHeight="24px" color="white">
                  Blogs
                </Box>
              </Flex>
            </Box>
            {/* second */}
            <Box>
              {/* title */}
              <Heading
                as="h3"
                fontFamily="Poppins-600"
                fontSize="18px"
                lineHeight="26px"
                color="white"
                mb="20px"
              >
                Legal
              </Heading>
              {/*  Privacy Policy */}
              <Flex gap="25px">
                <Box as="span" lineHeight="24px" color="white">
                  Privacy Policy
                </Box>
              </Flex>
              {/* Terms & Services */}
              <Flex gap="25px" mt="24px">
                <Box as="span" lineHeight="24px" color="white">
                  Terms & Services
                </Box>
              </Flex>
              {/* Terms of Use */}
              <Flex gap="25px" mt="24px">
                <Box as="span" lineHeight="24px" color="white">
                  Terms of Use
                </Box>
              </Flex>
              {/* Refund Policy */}
              <Flex gap="25px" mt="24px">
                <Box as="span" lineHeight="24px" color="white">
                  Refund Policy
                </Box>
              </Flex>
            </Box>

            {/*  thirty */}
            <Box>
              {/* title */}
              <Heading
                as="h3"
                fontFamily="Poppins-600"
                fontSize="18px"
                lineHeight="26px"
                color="white"
                mb="20px"
              >
                Quick Links
              </Heading>
              {/*  Techlabz Keybox */}
              <Flex gap="25px">
                <Box as="span" lineHeight="24px" color="white">
                  Techlabz Keybox
                </Box>
              </Flex>
              {/* Downloads */}
              <Flex gap="25px" mt="24px">
                <Box as="span" lineHeight="24px" color="white">
                  Downloads
                </Box>
              </Flex>
              {/* Forum */}
              <Flex gap="25px" mt="24px">
                <Box as="span" lineHeight="24px" color="white">
                  Forum
                </Box>
              </Flex>
            </Box>
          </Flex>
          {/*     Subscribe news Box */}
          <Box
            bg="#131313"
            pt="14px"
            pb="21px"
            ps="13px"
            pe="14px"
            borderRadius="10px"
            maxHeight='184px'
            maxWidth='304px'
          >
            {/* title */}
            <Heading
              as="h3"
              fontFamily="Poppins-600"
              fontSize="18px"
              lineHeight="26px"
              color="white"
              mb="29px"
            >
              Join Our Newsletter
            </Heading>
            {/* form */} 
            <Box w="100%">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl  fontFamily="Poppins-500" w="100%">

                  {/* email */}
                  <Flex w="100%">
                    <input
                                placeholder="Your email address"
                      className="form-input-subscribe"
                      type="email"
                      {...register("email")}
                    />
                    {/* button */}
                    <Button type="submit" variant="subscribe" >
                    Subscribe
                    </Button>
                  </Flex>
                        {/* text */}
                        <Text fontFamily='Manrope-500'
                        fontSize='13px'
                        lineHeight='18px'
                        color='white'
                        mt='19px'
                        opacity='0.5'
                        >
                    *  Will send you weekly updates for your better tool management.
                    </Text>
                </FormControl>
              </form>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
