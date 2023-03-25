import { Box, Button, Flex, FormControl, FormLabel } from "@chakra-ui/react";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { FormValues } from "../Contact/Contact";
import { useTranslation } from "react-i18next";

type ContactUsFormType = {
  handleSubmit: UseFormHandleSubmit<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
  isFocused: string;
  register: UseFormRegister<FormValues>;
  setIsFocused: Dispatch<SetStateAction<string>>;
};

export const ContactUsForm = (props: ContactUsFormType) => {
  const { t } = useTranslation();
  const { handleSubmit, onSubmit, isFocused, register, setIsFocused } = props;
  return (
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
                {t("name")}
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
                {t("last")}
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
                {t("email_name")}
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
                {t("phone_name")}
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
            {/*      select subject? */}
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
                  {t("subject")}
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
                    {t("general")}
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
                    {t("general")}
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
                    {t("general")}
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
                    {t("general")}
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
            {/*  message */}
            <Box w="100%">
              <FormLabel
                mb="0"
                fontSize="12px"
                lineHeight="20px"
                color="grayNew.300"
                className={isFocused === "message" ? "color-active" : ""}
              >
                {t("message")}
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
            {t("send_message")}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
