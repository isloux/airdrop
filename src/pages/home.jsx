import { Button, Flex, VStack, Container, Box, Image, Center, Heading } from '@chakra-ui/react';
import NavBarWeb3 from '../components/navbar_web3';
import SmallWithLogoLeft from '../components/footer';
import CountdownTimer from '../components/countdown';

const Home = () => {
  return (
    <Flex minH='100vh' flexDirection='column'>
        <NavBarWeb3 />
        <Container maxW='container.md' p={3}>
          <VStack spacing="12px" m={3}>
            <Heading>BaldG airdrop</Heading>
            <Center>
              <Image src="/BaldG_192.png" alt="coin logo" />
            </Center>          
            <CountdownTimer>Time until airdrop</CountdownTimer>
            <Box>
              <Button  fontSize="xl" p={6}>
                  Send airdrop
              </Button>
            </Box>
            <Box color="red" fontSize="3xl" textAlign="center">Only wallets participating to the presale will receive a token airdrop</Box>
          </VStack>
        </Container>
        <SmallWithLogoLeft />
    </Flex>
  );
}

export default Home;
