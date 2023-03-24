import { Box, Flex, List, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex as="header" justifyContent="center" mt="40px">
      <Flex maxWidth="1240px" w="100%" justifyContent="space-between">
        <Box
          fontFamily="Inter"
          fontWeight="800"
          fontSize="24px"
          lineHeight="29px"
        >
          Logo Here
        </Box>
        {/* right side */}
        <Flex>
         {/*  nav menu */}
          <Flex as="nav">
            <List display="flex">
              <ListItem>Home</ListItem>
              <ListItem>Features</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Shop</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Contact</ListItem>
            </List>
          </Flex>
         {/*  user menu */}
          <Box>menu</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
