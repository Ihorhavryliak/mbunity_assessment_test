import { Box, Flex, Image } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import letterImg from '../../assets/img/contact/letter_send.png';
import { TextHeader } from './TextHeader';
import { ContactInformation } from './ContactInformation';
import { ContactUsForm } from '../Form/ContactUsForm';

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  generalInquiry: string;
  message: string;
};

const Contact = () => {
  //get function from react-hook-form
  const { register, handleSubmit, reset } = useForm<FormValues>();
  //send data
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    //show data in console
    console.log(data);
    //reset all inputs
    reset();
  };
  // firstName and lastName will have correct type
  const [isFocused, setIsFocused] = useState('');
  return (
    <Box mt={{ base: '43px', lg: '75px', xl: '75px', '2xl': '75px' }} w="100%">
      {/* h1 text contact*/}
      <TextHeader />
      {/* box contact */}
      <Flex
        py={{ base: '5px', lg: '10px', xl: '10px', '2xl': '10px' }}
        ps={{ base: '5px', lg: '10px', xl: '10px', '2xl': '10px' }}
        pe={{ base: '5px', lg: '50px', xl: '50px', '2xl': '50px' }}
        pb={{ base: '64px', lg: '10px', xl: '10px', '2xl': '10px' }}
        gap="50px"
        bg="white"
        position="relative"
        overflow="hidden"
        display={{ base: 'box', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
      >
        {/* contact information */}
        <ContactInformation />
        {/* form */}
        <ContactUsForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isFocused={isFocused}
          register={register}
          setIsFocused={setIsFocused}
        />
        {/* letter Img */}
        <Image
          src={letterImg}
          position="absolute"
          right={{
            base: '45%',

            lg: '130px',
            xl: '130px',
            '2xl': '130px',
          }}
          bottom={{ base: '-29px', lg: '-50px', xl: '-50px', '2xl': '-50px' }}
          w={{ base: '133px', lg: '266px', xl: '266px', '2xl': '266px' }}
          h={{ base: '109px', lg: '217px', xl: '217px', '2xl': '217px' }}
        ></Image>
      </Flex>
    </Box>
  );
};
export default Contact;
