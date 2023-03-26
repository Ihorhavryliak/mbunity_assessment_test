import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { NavMenu } from './NavMenu';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { NavMenuMobile } from './NavMenuMobile';

const Header = () => {
  //open close mobile menu
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      as="header"
      justifyContent="center"
      pt={{ base: '28px', lg: '40px', xl: '40px', '2xl': '40px' }}
      boxShadow={{
        base: '0px -2px 4px rgba(0, 0, 0, 0.25)',
        lg: 'none',
        xl: 'none',
        '2xl': 'none',
      }}
      pb={{ base: '29px', lg: '0', xl: '0', '2xl': '0' }}
    >
      <Flex mx="20px" maxWidth="1236px" w="100%" justifyContent="space-between">
        {/* logo */}
        <Logo />
        {/* right side */}
        <Flex
          alignItems="center"
          display={{ base: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
        >
          {/*  nav menu */}
          <NavMenu />
          {/*  user menu */}
          <UserMenu />
        </Flex>
        {/*   nav menu mobile */}
        <NavMenuMobile setIsOpen={setIsOpen} isOpen={isOpen} />
      </Flex>
    </Flex>
  );
};

export default Header;
