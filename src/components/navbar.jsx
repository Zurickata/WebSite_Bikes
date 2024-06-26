import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import logoImage from '../assets/SprintPits_Logo.jpg'
import letraImage from '../assets/SprintPits_Letra.png'

const Links = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/services' },
  { name: 'Productos', path: '/products' },
  { name: 'Contacto', path: '/contacto' },
];
// eslint-disable-next-line react/prop-types
const NavLink = ({ children, to }) => {
  return (
    <Box
      as={Link}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('#585174', '#585174'),
      }}
      fontFamily="'arial', sans-serif"
      fontWeight="bold"
      color={useColorModeValue('#BEBDC0', '#BEBDC0')}
      to={to}>
      {children}
    </Box>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('#2D284A', '#BEBDC0')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Avatar boxSize="60px" src={logoImage} />
            <Image src={letraImage} alt="Logo" width="160px" height="auto" objectFit="contain"/>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.path}>
                  {link.name} 
                </NavLink>
              ))}
            </HStack>
          </HStack>
          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.path} >
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
