import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@chakra-ui/react';
import userMobileImg from '../../assets/img/header/userMobile.png';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowIcon } from '../Icons/ArrowIcon';
import { CloseIcon } from '../Icons/CloseIcon';
import { MenuIcon } from '../Icons/MenuIcon';
import { CartIcon } from '../Icons/CartIcon';

export type NavMenuMobileType = {
  isOpen: boolean;
  setIsOpen: (bol: boolean) => void;
};

export const NavMenuMobile = (props: NavMenuMobileType) => {
  const { t } = useTranslation();
  const { setIsOpen, isOpen } = props;
  return (
    <>
      <Box
        as="button"
        h="24px"
        display={{ base: 'flex', lg: 'none', xl: 'none', '2xl': 'none' }}
        onClick={() => setIsOpen(!isOpen)}
        alignItems="center"
      >
        <MenuIcon w="24" h="24" />
      </Box>
      {/*  Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        motionPreset="none"
        size="6xl"
      >
        <ModalContent
          background="black"
          px="20px"
          pt="28px"
          pb="30px"
          borderRadius="0"
          top="-64px"
        >
          {/* header */}
          <ModalHeader
            p="0"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="58px"
          >
            {/* logo */}
            <Box
              cursor="pointer"
              fontFamily="Inter-800"
              fontWeight="800"
              fontSize="18px"
              lineHeight="22px"
              color="white"
            >
              <Link to="/"> Logo Here </Link>
            </Box>
            <Box
              fill="primary.600"
              as="span"
              _hover={{ fill: 'primary.700' }}
              onClick={() => setIsOpen(!isOpen)}
              cursor="pointer"
            >
              {/* icon close */}

              <CloseIcon w="24" h="24" color="#fff" />
            </Box>
          </ModalHeader>
          {/* menu */}
          <ModalBody p="0">
            {/* right side */}
            <Box>
              {/*  nav menu */}
              <Box as="nav">
                <List fontFamily="Roboto" fontSize="14px">
                  <ListItem
                    lineHeight="16px"
                    cursor="pointer"
                    color="white"
                    mb="30px"
                  >
                    <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
                      {t('home')}
                    </NavLink>
                  </ListItem>
                  {/* drop down */}
                  <ListItem lineHeight="16px" mb="30px">
                    <Menu>
                      <MenuButton>
                        <Flex alignItems="center" gap="8px">
                          <Box as="span" color="white">
                            {t('features')}
                          </Box>

                          <ArrowIcon color="#fff" />
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
                  <ListItem lineHeight="16px" color="white" mb="30px">
                    {t('blog')}
                  </ListItem>
                  <ListItem lineHeight="16px" color="white" mb="30px">
                    {t('shop')}
                  </ListItem>
                  <ListItem lineHeight="16px" color="white" mb="30px">
                    {t('about')}
                  </ListItem>
                  <ListItem lineHeight="16px" cursor="pointer" color="white">
                    <NavLink to="/contact" onClick={() => setIsOpen(!isOpen)}>
                      {t('contact')}
                    </NavLink>
                  </ListItem>
                </List>
              </Box>
              {/*  user menu */}
              <Flex gap="36px" justifyContent="center" mt="60px">
                <Box
                  py="6px"
                  px="7px"
                  border="1px"
                  borderRadius="50px"
                  borderColor="white.500"
                >
                  <Image src={userMobileImg} w="16px" h="18" />
                </Box>
                <Box
                  py="6px"
                  px="7px"
                  border="1px"
                  borderRadius="50px"
                  borderColor="white.500"
                >
                  <CartIcon w="18" h="19" color="#fff" />
                </Box>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
