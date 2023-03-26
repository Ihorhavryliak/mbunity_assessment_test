import {
  Box,
  Flex,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowIcon } from '../Icons/ArrowIcon';

export const NavMenu = () => {
  const { t } = useTranslation();
  return (
    <Flex as="nav" me="60px">
      <List display="flex" fontFamily="Roboto" gap="47px" color="black.100">
        <ListItem lineHeight="19px" cursor="pointer">
          <NavLink to="/">{t('home')}</NavLink>
        </ListItem>
        {/* drop down */}
        <ListItem color="black.100" lineHeight="19px">
          <Menu>
            <MenuButton>
              <Flex alignItems="center" gap="8px">
                <Box as="span">{t('features')}</Box>

                <ArrowIcon color="#1F1F1F" />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="#">
                {t('link1')}
              </MenuItem>
              <MenuItem as="a" href="#">
                {t('link2')}
              </MenuItem>
            </MenuList>
          </Menu>
        </ListItem>
        <ListItem lineHeight="19px"> {t('blog')}</ListItem>
        <ListItem lineHeight="19px">{t('shop')}</ListItem>
        <ListItem lineHeight="19px">{t('about')}</ListItem>
        <ListItem lineHeight="19px" cursor="pointer">
          <NavLink to="/contact"> {t('contact')} </NavLink>
        </ListItem>
      </List>
    </Flex>
  );
};
