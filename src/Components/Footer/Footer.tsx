import { Box, Flex, Heading } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LogoHeader } from "./LogoHeader";
import { ReachUsBox } from "./ReachUsBox";
import { SubscribeForm } from "../Form/SubscribeForm";
import { InformationBox } from "./InformationBox";

export type FormValues = {
  email: string;
};

const Footer = () => {
  //get function from react-hook-form
  const { register, handleSubmit, reset } = useForm<FormValues>();
  //send data
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    //show data in console
    console.log(data);
    //reset all inputs
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
        <LogoHeader />
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
          <ReachUsBox />
          {/*       Box information */}
          <InformationBox />
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
            <SubscribeForm
              onSubmit={onSubmit}
              register={register}
              handleSubmit={handleSubmit}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
