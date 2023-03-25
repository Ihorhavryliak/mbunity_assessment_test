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
      <Flex py="10px" ps="10px" pe="50px" gap="50px" bg="white" position='relative' overflow='hidden'>
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
          overflow="hidden"
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
          <Box mt="111px" color="white">
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
            {/*  ellipse */}
            <Box
              as="span"
              position="absolute"
              right="70px"
              bottom="71px"
              w="138px"
              h="138px"
              borderRadius="100%"
              bg="black.200"
              zIndex="1"
            ></Box>
            <Box
              as="span"
              position="absolute"
              right="-95px"
              bottom="-84px"
              w="269px"
              h="269px"
              borderRadius="100%"
              bg="black.400"
              zIndex="2"
            ></Box>
          </Box>
        </Box>
        {/* form */}
        <Box w="100%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt="60px" fontFamily="Poppins-500" w="100%">
              {/*   the first line */}
              <Flex justifyContent="space-between" gap="39px" mb="45px">
                {/*  first name */}
                <Box w="100%">
                  <FormLabel
                    fontSize="12px"
                    lineHeight="20px"
                    color="grayNew.300"
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
              <Flex justifyContent="space-between" gap="39px" mb="45px">
                {/*  Email */}
                <Box w="100%">
                  <FormLabel
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
              <Flex justifyContent="space-between" gap="39px" mb="45px">
                {/*      Select Subject? */}
                <Box w="100%">
                  <Box>
                    <FormLabel
                      fontFamily="Poppins-600"
                      fontSize="14px"
                      lineHeight="20px"
                      color="dark"
                      mb="14px"
                      className={
                        isFocused === "generalInquiry" ? "color-active" : ""
                      }
                    >
                      Select Subject?
                    </FormLabel>
                    <Flex gap="20px">
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
              <Flex justifyContent="space-between" gap="39px" mb="45px">
                {/*  Message */}
                <Box w="100%">
                  <FormLabel
                    fontSize="12px"
                    lineHeight="20px"
                    color="grayNew.300"
                    className={isFocused === "message" ? "color-active" : ""}
                  >
                    Message
                  </FormLabel>
                  <input
                    placeholder="Write your message.."
                    className="form-input"
                    type="text"
                    {...register("message")}
                    onFocus={() => setIsFocused("message")}
                    onBlur={() => setIsFocused("")}
                  />
                </Box>
              </Flex>
            </FormControl>
            {/* button */}
            <Box textAlign="right">
              <Button type="submit" variant="black">
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
        {/* letter Img */}
        <Image
        src={letterImg}
    
              position="absolute"
              right="130px"
              bottom="-79px"
      
            ></Image>
      
      </Flex>
    </Box>
  );
};
export default Contact;
