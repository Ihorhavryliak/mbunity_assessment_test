import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Icon from "../Icon/Icon";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import letterImg from "../../assets/img/contact/letter_send.png";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  generalInquiry: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };
  // firstName and lastName will have correct type
  const [isFocused, setIsFocused] = useState("");
  return (
    <Box mt={{ base: "43px", lg: "75px", xl: "75px", "2xl": "75px" }} w="100%">
      {/* h1 text contact*/}
      <Box
        textAlign="center"
        mb={{ base: "20px", lg: "50px", xl: "50px", "2xl": "50px" }}
      >
        {/* title h1 */}
        <Heading
          as="h1"
          fontFamily="Poppins-700"
          lineHeight={{ base: "36px", lg: "60px", xl: "60px", "2xl": "60px" }}
          fontSize={{ base: "24px", lg: "40px", xl: "40px", "2xl": "40px" }}
        >
          Contact Us
        </Heading>
        {/* text */}
        <Text
          mt="10px"
          fontFamily="Poppins-500"
          fontWeight="500"
          fontSize={{ base: "14px", lg: "18px", xl: "18px", "2xl": "18px" }}
          lineHeight={{ base: "21px", lg: "27px", xl: "27px", "2xl": "27px" }}
          color="grayNew.100"
          px={{ base: "68px", lg: "0", xl: "0", "2xl": "0" }}
        >
          Any question or remarks? Just write us a message!
        </Text>
      </Box>
      {/* box contact */}
      <Flex
        py={{ base: "5px", lg: "10px", xl: "10px", "2xl": "10px" }}
        ps={{ base: "5px", lg: "10px", xl: "10px", "2xl": "10px" }}
        pe={{ base: "5px", lg: "50px", xl: "50px", "2xl": "50px" }}
        pb={{ base: "64px", lg: "10px", xl: "10px", "2xl": "10px" }}
        gap="50px"
        bg="white"
        position="relative"
        overflow="hidden"
        display={{ base: "box", lg: "flex", xl: "flex", "2xl": "flex" }}
      >
        {/* contact information */}
        <Box
          maxWidth={{ base: "100%", lg: "491px", xl: "491px", "2xl": "491px" }}
          width="100%"
          bg="black"
          borderRadius="10px"
          position="relative"
          ps={{ base: "15px", lg: "40px", xl: "40px", "2xl": "40px" }}
          pe={{ base: "15px", lg: "114px", xl: "114px", "2xl": "114px" }}
          pt={{ base: "15px", lg: "40px", xl: "40px", "2xl": "40px" }}
          pb={{ base: "25px", lg: "36px", xl: "36px", "2xl": "36px" }}
          overflow="hidden"
          textAlign={{ base: "center", lg: "left", xl: "left", "2xl": "left" }}
        >
          {/* title */}
          <Heading
            as="h2"
            fontFamily="Poppins-600"
            fontSize={{ base: "20px", lg: "28px", xl: "28px", "2xl": "28px" }}
            lineHeight={{ base: "30px", lg: "42px", xl: "42px", "2xl": "42px" }}
            color="white"
          >
            Contact Information
          </Heading>
          {/* text */}
          <Text
            fontSize={{ base: "11px", lg: "18px", xl: "18px", "2xl": "18px" }}
            lineHeight={{ base: "16px", lg: "27px", xl: "27px", "2xl": "27px" }}
            mt="6px"
            color="grayNew.200"
          >
            Say something to start a live chat!
          </Text>
          {/*  contacts */}
          <Box
            mt={{ base: "12px", lg: "111px", xl: "111px", "2xl": "111px" }}
            color="white"
          >
            {/* phone */}
            <Flex
              flexDirection={{
                base: "column",
                lg: "row",
                xl: "row",
                "2xl": "row",
              }}
              alignItems="center"
              gap={{ base: "10px", lg: "25px", xl: "25px", "2xl": "25px" }}
            >
              <Box as="span" p="2px">
                <Icon type="phone" w={20} h={20} />
              </Box>
              <Box
                as="span"
                lineHeight={{
                  base: "18px",
                  lg: "24px",
                  xl: "24px",
                  "2xl": "24px",
                }}
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
              alignItems="center"
              gap={{ base: "10px", lg: "25px", xl: "25px", "2xl": "25px" }}
              mt={{ base: "15px", lg: "50px", xl: "50px", "2xl": "50px" }}
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
              alignItems={{ base: "center", lg: "flex-start", xl: "flex-start", "2xl": "flex-start" }}
              gap={{ base: "10px", lg: "25px", xl: "25px", "2xl": "25px" }}
              mt={{ base: "15px", lg: "50px", xl: "50px", "2xl": "50px" }}
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
                fontSize={{
                  base: "12px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": "16px",
                }}
                maxWidth={{
                  base: "221px",
                  lg: "none",
                  xl: "none",
                  "2xl": "none",
                }}
           
              >
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </Box>
            </Flex>
            {/* social media */}
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
            {/*  ellipse */}
            <Box
              as="span"
              position="absolute"
              right={{ base: "26px", lg: "70px", xl: "70px", "2xl": "70px" }}
              bottom={{ base: "52px", lg: "71px", xl: "71px", "2xl": "71px" }}
              w={{ base: "54px", lg: "138px", xl: "138px", "2xl": "138px" }}
              h={{ base: "54px", lg: "138px", xl: "138px", "2xl": "138px" }}
              borderRadius="100%"
              bg="black.200"
              zIndex="1"
            ></Box>
            <Box
              as="span"
              position="absolute"
              right={{
                base: "-115px",
                lg: "-95px",
                xl: "-95px",
                "2xl": "-95px",
              }}
              bottom="-84px"
              w={{ base: "192px", lg: "269px", xl: "269px", "2xl": "269px" }}
              h={{ base: "192px", lg: "269px", xl: "269px", "2xl": "269px" }}
              borderRadius="100%"
              bg="black.400"
              zIndex="2"
            ></Box>
          </Box>
        </Box>
        {/* form */}
        <Box w="100%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              mt={{ base: "30px", lg: "50px", xl: "50px", "2xl": "50px" }}
              fontFamily="Poppins-500"
              w="100%"
            >
              {/*   the first line */}
              <Flex
                flexDirection={{
                  base: "column",
                  lg: "row",
                  xl: "row",
                  "2xl": "row",
                }}
                justifyContent="space-between"
                gap={{ base: "20px", lg: "39px", xl: "39px", "2xl": "39px" }}
                mb={{ base: "20px", lg: "45px", xl: "45px", "2xl": "45px" }}
              >
                {/*  first name */}
                <Box w="100%">
                  <FormLabel
                    fontSize="12px"
                    lineHeight="20px"
                    color="grayNew.300"
                    mb="0"
                    className={isFocused === "firstName" ? "color-active" : ""}
                  >
                    First Name
                  </FormLabel>
                  <input
                    className="form-input"
                    type="text"
                    {...register("firstName")}
                    onFocus={() => setIsFocused("firstName")}
                    onBlur={() => setIsFocused("")}
                  />
                </Box>
                {/*   last name */}
                <Box w="100%">
                  <FormLabel
                    mb="0"
                    fontSize="12px"
                    lineHeight="20px"
                    color="grayNew.300"
                    className={isFocused === "lastName" ? "color-active" : ""}
                  >
                    Last Name
                  </FormLabel>
                  <input
                    className="form-input"
                    type="text"
                    {...register("lastName")}
                    onFocus={() => setIsFocused("lastName")}
                    onBlur={() => setIsFocused("")}
                  />
                </Box>
              </Flex>
              {/*   the second line */}
              <Flex
                flexDirection={{
                  base: "column",
                  lg: "row",
                  xl: "row",
                  "2xl": "row",
                }}
                justifyContent="space-between"
                gap={{ base: "20px", lg: "39px", xl: "39px", "2xl": "39px" }}
                mb={{ base: "25px", lg: "45px", xl: "45px", "2xl": "45px" }}
              >
                {/*  Email */}
                <Box w="100%">
                  <FormLabel
                    mb="0"
                    fontSize="12px"
                    lineHeight="20px"
                    color="grayNew.300"
                    className={isFocused === "email" ? "color-active" : ""}
                  >
                    Email
                  </FormLabel>
                  <input
                    className="form-input"
                    type="email"
                    {...register("email")}
                    onFocus={() => setIsFocused("email")}
                    onBlur={() => setIsFocused("")}
                  />
                </Box>
                {/*   Phone Number */}
                <Box w="100%">
                  <FormLabel
                    mb="0"
                    fontSize="12px"
                    lineHeight="20px"
                    color="grayNew.300"
                    className={isFocused === "phone" ? "color-active" : ""}
                  >
                    Phone Number
                  </FormLabel>
                  <input
                    className="form-input"
                    type="text"
                    {...register("phone")}
                    onFocus={() => setIsFocused("phone")}
                    onBlur={() => setIsFocused("")}
                  />
                </Box>
              </Flex>
              {/* the thirty line */}
              <Flex
                justifyContent="space-between"
                gap="39px"
                mb={{ base: "28px", lg: "45px", xl: "45px", "2xl": "45px" }}
              >
                {/*      Select Subject? */}
                <Box w="100%">
                  <Box>
                    <FormLabel
                      fontFamily="Poppins-600"
                      fontSize="14px"
                      lineHeight="20px"
                      color="black"
                      mb={{
                        base: "10px",
                        lg: "14px",
                        xl: "14px",
                        "2xl": "14px",
                      }}
                      className={
                        isFocused === "generalInquiry" ? "color-active" : ""
                      }
                    >
                      Select Subject?
                    </FormLabel>
                    <Flex
                      gap={{
                        base: "14px",
                        lg: "20px",
                        xl: "20px",
                        "2xl": "20px",
                      }}
                      flexWrap="wrap"
                    >
                      {/*    generalInquiry 1 */}
                      <FormLabel
                        htmlFor="1"
                        display="flex"
                        gap="10px"
                        fontSize="12px"
                        lineHeight="20px"
                      >
                        <input
                          id="1"
                          className="form-radio"
                          value="1"
                          type="radio"
                          {...register("generalInquiry")}
                        />
                        General Inquiry
                      </FormLabel>
                      {/*    generalInquiry 2 */}
                      <FormLabel
                        htmlFor="2"
                        display="flex"
                        gap="10px"
                        fontSize="12px"
                        lineHeight="20px"
                      >
                        <input
                          id="2"
                          className="form-radio"
                          value="2"
                          type="radio"
                          {...register("generalInquiry")}
                        />
                        General Inquiry
                      </FormLabel>
                      {/*    generalInquiry 3 */}
                      <FormLabel
                        htmlFor="3"
                        display="flex"
                        gap="10px"
                        fontSize="12px"
                        lineHeight="20px"
                      >
                        <input
                          id="3"
                          className="form-radio"
                          value="32"
                          type="radio"
                          {...register("generalInquiry")}
                        />
                        General Inquiry
                      </FormLabel>
                      {/*    generalInquiry 4 */}
                      <FormLabel
                        htmlFor="4"
                        display="flex"
                        gap="10px"
                        fontSize="12px"
                        lineHeight="20px"
                      >
                        <input
                          id="4"
                          className="form-radio"
                          value="32"
                          type="radio"
                          {...register("generalInquiry")}
                        />
                        General Inquiry
                      </FormLabel>
                    </Flex>
                  </Box>
                </Box>
              </Flex>

              {/* four line */}
              <Flex
                justifyContent="space-between"
                gap="39px"
                mb={{ base: "25px", lg: "45px", xl: "45px", "2xl": "45px" }}
              >
                {/*  Message */}
                <Box w="100%">
                  <FormLabel
                    mb="0"
                    fontSize="12px"
                    lineHeight="20px"
                    color="grayNew.300"
                    className={isFocused === "message" ? "color-active" : ""}
                  >
                    Message
                  </FormLabel>
                  <input
                    placeholder="Write your message.."
                    className="form-input form-input-message"
                    type="text"
                    {...register("message")}
                    onFocus={() => setIsFocused("message")}
                    onBlur={() => setIsFocused("")}
                  />
                </Box>
              </Flex>
            </FormControl>
            {/* button */}
            <Box
              textAlign={{
                base: "left",
                lg: "right",
                xl: "right",
                "2xl": "right",
              }}
            >
              <Button
                w={{ base: "100%", lg: "214px", xl: "214px", "2xl": "214px" }}
                h={{ base: "38px", lg: "54px", xl: "54px", "2xl": "54px" }}
                fontSize={{
                  base: "13px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": "16px",
                }}
                lineHeight={{
                  base: "19px",
                  lg: "24px",
                  xl: "24px",
                  "2xl": "24px",
                }}
                type="submit"
                variant="black"
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
        {/* letter Img */}
        <Image
          src={letterImg}
          position="absolute"
          right={{
            base: "45%",

            lg: "130px",
            xl: "130px",
            "2xl": "130px",
          }}
          bottom={{ base: "-29px", lg: "-50px", xl: "-50px", "2xl": "-50px" }}
          w={{ base: "133px", lg: "266px", xl: "266px", "2xl": "266px" }}
          h={{ base: "109px", lg: "217px", xl: "217px", "2xl": "217px" }}
        ></Image>
      </Flex>
    </Box>
  );
};
export default Contact;
