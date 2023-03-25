import {
  Box,
  Button,
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
import userImg from "../../assets/img/header/user.png";
import userMobileImg from "../../assets/img/header/userMobile.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      as="header"
      justifyContent="center"
      pt={{ base: "28px", lg: "40px", xl: "40px", "2xl": "40px" }}
      boxShadow={{
        base: "0px -2px 4px rgba(0, 0, 0, 0.25)",
        lg: "none",
        xl: "none",
        "2xl": "none",
      }}
      pb={{ base: "29px", lg: "0", xl: "0", "2xl": "0" }}
    >
      <Flex mx="20px" maxWidth="1236px" w="100%" justifyContent="space-between">
        {/* logo */}

        <Box
          cursor="pointer"
          fontFamily="Inter-800"
          fontWeight="800"
          fontSize={{ base: "18px", lg: "24px", xl: "24px", "2xl": "24px" }}
          lineHeight={{ base: "22px", lg: "29px", xl: "29px", "2xl": "29px" }}
        >
          <Link to="/"> Logo Here </Link>
        </Box>

        {/* right side */}
        <Flex
          alignItems="center"
          display={{ base: "none", lg: "flex", xl: "flex", "2xl": "flex" }}
        >
          {/*  nav menu */}
          <Flex as="nav" me="60px">
            <List
              display="flex"
              fontFamily="Roboto"
              gap="47px"
              color="black.100"
            >
              <ListItem lineHeight="19px" cursor="pointer">
                <NavLink to="/"> Home</NavLink>
              </ListItem>
              {/* drop down */}
              <ListItem color="black.100" lineHeight="19px">
                <Menu>
                  <MenuButton>
                    <Flex alignItems="center" gap="8px">
                      <Box as="span">Features</Box>
                      <Icon type="arrow" w={12} h={7} title="arrow" />
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
              <ListItem lineHeight="19px">Blog</ListItem>
              <ListItem lineHeight="19px">Shop</ListItem>
              <ListItem lineHeight="19px">About</ListItem>
              <ListItem lineHeight="19px" cursor="pointer">
                <NavLink to="/contact"> Contact </NavLink>
              </ListItem>
            </List>
          </Flex>
          {/*  user menu */}
          <Flex gap="36px">
            <Box
              py="6px"
              px="7px"
              border="1px"
              borderRadius="50px"
              borderColor="black.700"
            >
              <Image src={userImg} w="16px" h="18" />
            </Box>
            <Box
              py="6px"
              px="7px"
              border="1px"
              borderRadius="50px"
              borderColor="black.700"
            >
              <Icon type="cart" w={18} h={19} title="arrow" />
            </Box>
          </Flex>
        </Flex>

        {/*   nav menu mobile */}
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
          size='6xl'
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
                      <NavLink to="/" onClick={()=>setIsOpen(!isOpen)}> Home</NavLink>
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
                      <NavLink to="/contact" onClick={()=>setIsOpen(!isOpen)}> Contact </NavLink>
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
                    <Icon
                      type="cart"
                      w={18}
                      h={19}
                      title="cart"
                      color="white"
                    />
                  </Box>
                </Flex>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
};

export default Header;
