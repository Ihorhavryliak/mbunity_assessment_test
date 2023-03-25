import {
  Box,
  Button,
  Flex,
  FormControl,
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
    <Flex
      bg="black"
      justifyContent="center"
      mt={{ base: "53px", lg: "50px", xl: "50px", "2xl": "50px" }}
    >
      <Box
        maxWidth="1281px"
        w="100%"
        pt={{ base: "19px", lg: "80px", xl: "80px", "2xl": "80px" }}
        mx="20px"
        pb={{ base: "-5px", lg: "66px", xl: "66px", "2xl": "66px" }}
      >
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

        <Flex
          pt="30px"
          ps="21px"
          borderTop="1px"
          borderColor="white"
          mt={{ base: "20px", lg: "45px", xl: "45px", "2xl": "45px" }}
          flexWrap="wrap"
          justifyContent={{
            base: "space-between",
            md: "",
            lg: "",
            xl: "",
            "2xl": "",
          }}
        >
          {/*    Reach us */}
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

          {/*       Box information */}

          {/* first */}
          <Box
            me={{ base: "0", lg: "60px", xl: "60px", "2xl": "60px" }}
            mb={{ base: "40px", lg: "0", xl: "0", "2xl": "0" }}
          >
            {/* title */}
            <Heading
              as="h3"
              fontFamily="Poppins-600"
              fontSize={{ base: "16px", lg: "18px", xl: "18px", "2xl": "18px" }}
              lineHeight="26px"
              color="white"
              mb="20px"
            >
              Company
            </Heading>
            {/* About */}
            <Flex gap="25px">
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
                About
              </Box>
            </Flex>
            {/* Contact */}
            <Flex gap="25px" mt="24px">
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
                Contact
              </Box>
            </Flex>
            {/* Blogs */}
            <Flex gap="25px" mt="24px">
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
                Blogs
              </Box>
            </Flex>
          </Box>
          {/* second */}
          <Box
            me={{ base: "0", lg: "60px", xl: "60px", "2xl": "60px" }}
            mb={{ base: "40px", lg: "0", xl: "0", "2xl": "0" }}
          >
            {/* title */}
            <Heading
              as="h3"
              fontFamily="Poppins-600"
              fontSize={{ base: "16px", lg: "18px", xl: "18px", "2xl": "18px" }}
              lineHeight="26px"
              color="white"
              mb="20px"
            >
              Legal
            </Heading>
            {/*  Privacy Policy */}
            <Flex gap="25px">
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
                Privacy Policy
              </Box>
            </Flex>
            {/* Terms & Services */}
            <Flex gap="25px" mt="24px">
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
                Terms & Services
              </Box>
            </Flex>
            {/* Terms of Use */}
            <Flex gap="25px" mt="24px">
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
                Terms of Use
              </Box>
            </Flex>
            {/* Refund Policy */}
            <Flex gap="25px" mt="24px">
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
                Refund Policy
              </Box>
            </Flex>
          </Box>

          {/*  thirty */}
          <Box
            me={{ base: "0", lg: "60px", xl: "60px", "2xl": "60px" }}
            mb={{ base: "40px", lg: "0", xl: "0", "2xl": "0" }}
          >
            {/* title */}
            <Heading
              as="h3"
              fontFamily="Poppins-600"
              fontSize={{ base: "16px", lg: "18px", xl: "18px", "2xl": "18px" }}
              lineHeight="26px"
              color="white"
              mb="20px"
            >
              Quick Links
            </Heading>
            {/*  Techlabz Keybox */}
            <Flex gap="25px">
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
                Techlabz Keybox
              </Box>
            </Flex>
            {/* Downloads */}
            <Flex gap="25px" mt="24px">
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
                Downloads
              </Box>
            </Flex>
            {/* Forum */}
            <Flex gap="25px" mt="24px">
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
                Forum
              </Box>
            </Flex>
          </Box>

          {/*     Subscribe news Box */}
          <Box
            mb={{ base: "40px", lg: "0", xl: "0", "2xl": "0" }}
            bg="#131313"
            pt={{ base: "17px", lg: "14px", xl: "14px", "2xl": "14px" }}
            pb={{ base: "14px", lg: "21px", xl: "21px", "2xl": "21px" }}
            ps={{ base: "14px", lg: "13px", xl: "13px", "2xl": "13px" }}
            pe={{ base: "29px", lg: "14px", xl: "14px", "2xl": "14px" }}
            borderRadius="10px"
            maxHeight="184px"
            maxWidth="304px"
          >
            {/* title */}
            <Heading
              as="h3"
              fontFamily="Poppins-600"
              fontSize={{ base: "16px", lg: "18px", xl: "18px", "2xl": "18px" }}
              lineHeight="26px"
              color="white"
              mb={{ base: "23px", lg: "29px", xl: "29px", "2xl": "29px" }}
            >
              Join Our Newsletter
            </Heading>
            {/* form */}
            <Box w="100%">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fontFamily="Poppins-500" w="100%">
                  {/* email */}
                  <Flex w="100%">
                    <input
                      placeholder="Your email address"
                      className="form-input-subscribe"
                      type="email"
                      {...register("email")}
                    />
                    {/* button */}
                    <Button type="submit" variant="subscribe">
                      Subscribe
                    </Button>
                  </Flex>
                  {/* text */}
                  <Text
                    fontFamily="Manrope-500"
                    fontSize="13px"
                    lineHeight="18px"
                    color="white"
                    mt={{ base: "20px", lg: "19px", xl: "19px", "2xl": "19px" }}
                    opacity="0.5"
                  >
                    * Will send you weekly updates for your better tool
                    management.
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
