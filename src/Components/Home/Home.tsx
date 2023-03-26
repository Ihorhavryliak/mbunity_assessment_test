import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Box mt="91px" minHeight="30vh" w="100%">
      <Box>{t('info_home')}</Box>
      <Box color="blue.500">
        <NavLink to="/contact">{t('to_page')}</NavLink>
      </Box>
    </Box>
  );
};
export default Home;
