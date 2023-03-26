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
import SVG from 'react-inlinesvg';
import menu from '../../assets/icons/ci_menu-alt-01.svg';
import close from '../../assets/icons/close.svg';
import arrow from '../../assets/icons/arrow.svg';
import cart from '../../assets/icons/cart.svg';

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
        <SVG
          cacheRequests={true}
          src={menu}
          width={24}
          height={24}
          fill="#000"
        />
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
              <SVG
                cacheRequests={true}
                src={close}
                width={24}
                height={24}
                fill="#000"
              />
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

                          <SVG
                            cacheRequests={true}
                            src={arrow}
                            width={12}
                            height={7}
                            fill="#fff"
                          />
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
                  <SVG
                    cacheRequests={true}
                    src={cart}
                    width={18}
                    height={19}
                    fill="#fff"
                  />
                </Box>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
