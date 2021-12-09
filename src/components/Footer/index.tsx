import {
  Box,
  Container,
  Image,
  IconButton,
  Stack,
  Text,
  useColorModeValue,

} from '@chakra-ui/react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Image w="280px" h="140px" src={'https://3000-chocolate-squirrel-2xcs1j9b.ws-us21.gitpod.io/img/epice.png'} />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2021 Epice</Text>
          <Stack direction={'row'} spacing={6}>
            <IconButton _hover={{ bg: 'purple.600' }} as="a" href="#" aria-label="Discord" icon={<FaInstagram fontSize="20px" />} />
            <IconButton _hover={{ bg: 'purple.600' }} as="a" href="#" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
            <IconButton _hover={{ bg: 'purple.600' }} as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}