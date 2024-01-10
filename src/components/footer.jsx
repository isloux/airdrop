import {
    Box,
    chakra,
    Container,
    Flex,
    Stack,
    Image,
    Text,
    useColorModeValue,
    VisuallyHidden, Link
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaFacebook, FaTelegram, FaReddit } from 'react-icons/fa';
  import { ReactNode } from 'react';
  import solidproof from '../solidproof_white.png';
  
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
          <Flex align="center">
            <Box marginRight="2">
              <Text fontSize="lg">Audited by</Text>
            </Box>
            <Link href="https://solidproof.io" isExternal><Image src={solidproof} alt="Solidproof Logo" /></Link>
          </Flex>
          <Link href='https://www.baldg.io' isExternal fontSize="xl">www.baldg.io</Link>
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
            <SocialButton label={'Reddit'} href={'https://www.reddit.com/r/baldgtoken'}>
              <FaReddit />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }