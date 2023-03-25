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
} from "@chakra-ui/react";
import Icon from "../Icon/Icon";
import userMobileImg from "../../assets/img/header/userMobile.png";
import { Link, NavLink } from "react-router-dom";

export type NavMenuMobileType = {
  isOpen: boolean;
  setIsOpen: (bol: boolean) => void;
};

export const NavMenuMobile = (props: NavMenuMobileType) => {
  const { setIsOpen, isOpen } = props;
  return (
    <>
      <Box
        as="button"
        h="24px"
        display={{ base: "flex", lg: "none", xl: "none", "2xl": "none" }}
        onClick={() => setIsOpen(!isOpen)}
        alignItems="center"
      >
        <Icon type="menu" w={24} h={24} />
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
              _hover={{ fill: "primary.700" }}
              onClick={() => setIsOpen(!isOpen)}
              cursor="pointer"
            >
              {/* icon close */}
              <Icon type="close" w={24} h={24} />
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
                      {" "}
                      Home
                    </NavLink>
                  </ListItem>
                  {/* drop down */}
                  <ListItem lineHeight="16px" mb="30px">
                    <Menu>
                      <MenuButton>
                        <Flex alignItems="center" gap="8px">
                          <Box as="span" color="white">
                            Features
                          </Box>
                          <Icon
                            type="arrow"
                            w={12}
                            h={7}
                            title="arrow"
                            color={"#fff"}
                          />
                        </Flex>
                      </MenuButton>
                      <MenuList>
                        <MenuItem as="a" href="#">
                          Link 1
                        </MenuItem>
                        <MenuItem as="a" href="#">
                          Link 2
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </ListItem>
                  <ListItem lineHeight="16px" color="white" mb="30px">
                    Blog
                  </ListItem>
                  <ListItem lineHeight="16px" color="white" mb="30px">
                    Shop
                  </ListItem>
                  <ListItem lineHeight="16px" color="white" mb="30px">
                    About
                  </ListItem>
                  <ListItem lineHeight="16px" cursor="pointer" color="white">
                    <NavLink to="/contact" onClick={() => setIsOpen(!isOpen)}>
                      {" "}
                      Contact{" "}
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
                  <Icon type="cart" w={18} h={19} title="cart" color="white" />
                </Box>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
