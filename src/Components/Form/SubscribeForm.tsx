import { Box, Button, Flex, FormControl, Text } from '@chakra-ui/react';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormValues } from '../Footer/Footer';

type SubscribeFormType = {
  handleSubmit: UseFormHandleSubmit<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
  register: UseFormRegister<FormValues>;
};

export const SubscribeForm = (props: SubscribeFormType) => {
  const { t } = useTranslation();
  const { handleSubmit, onSubmit, register } = props;
  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fontFamily="Poppins-500" w="100%">
          {/* email */}
          <Flex w="100%">
            <input
              placeholder={t('your_email') as string}
              className="form-input-subscribe"
              type="email"
              {...register('email')}
            />
            {/* button */}
            <Button type="submit" variant="subscribe">
              {t('subscribe')}
            </Button>
          </Flex>
          {/* text */}
          <Text
            fontFamily="Manrope-500"
            fontSize="13px"
            lineHeight="18px"
            color="white"
            mt={{ base: '20px', lg: '19px', xl: '19px', '2xl': '19px' }}
            opacity="0.5"
          >
            {t('info')}
          </Text>
        </FormControl>
      </form>
    </Box>
  );
};
