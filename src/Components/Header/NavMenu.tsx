import {
  Box,
  Flex,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Icon from "../Icon/Icon";
import { NavLink } from "react-router-dom";

export const NavMenu = () => {
  return (
    <Flex as="nav" me="60px">
      <List display="flex" fontFamily="Roboto" gap="47px" color="black.100">
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
  );
};
