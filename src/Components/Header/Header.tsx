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
} from "@chakra-ui/react";
import Icon from "../Icon/Icon";
import userImg from "../../assets/img/header/user.png";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Flex as="header" justifyContent="center" mt="40px">
      <Flex maxWidth="1240px" w="100%" justifyContent="space-between">
        {/* logo */}

        <Box
          cursor="pointer"
          fontFamily="Inter-800"
          fontWeight="800"
          fontSize="24px"
          lineHeight="29px"
        >
          <Link to="/"> Logo Here </Link>
        </Box>

        {/* right side */}
        <Flex alignItems="center">
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
                      <Box as="span"> Open menu</Box>
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
              opacity="0.75"
            >
              <Image src={userImg} w="16px" h="18" opacity="1" />
            </Box>
            <Box
              py="6px"
              px="7px"
              border="1px"
              borderRadius="50px"
              opacity="0.75"
            >
              <Icon type="cart" w={18} h={19} title="arrow" opacity="1" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
