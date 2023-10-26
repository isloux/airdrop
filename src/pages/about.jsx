import { Flex, Container, VStack, Heading, Text, Link } from '@chakra-ui/react';
import NavBarWeb3 from '../components/navbar_web3';
import SmallWithLogoLeft from '../components/footer';

const About = () => {
    return (
        <Flex minH='100vh' flexDirection='column'>
            <NavBarWeb3 />
            <Container maxW='container.md' p={3}>
                <VStack spacing="12px" m={3}>
                    <Heading>BaldG airdrop</Heading>
                    <Text>Airdrop recipient addresses will be the ones participating to the <Link href='https://pinksale.finance'>Pinksale</Link> presale.</Text>
                    <Text>Click on the airdrop button on the Home page to send the airdrop to all participants. The airdrop can be called only once.</Text>
                </VStack>
            </Container>
            <SmallWithLogoLeft />
        </Flex>
    )
}

export default About;