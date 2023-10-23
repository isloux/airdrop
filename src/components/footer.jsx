import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaFacebook, FaTelegram } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')} mt='auto'>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2023 Website maintained by Subterra Software SASU</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/BaldGtoken'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/people/BaldGtoken_Official/61550821750443'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/baldgtoken'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Telegram'} href={'https://t.me/baldgtoken'}>
              <FaTelegram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }