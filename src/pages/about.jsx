import { Flex, Container, VStack, Heading } from '@chakra-ui/react';
import NavBarWeb3 from '../components/navbar_web3';
import SmallWithLogoLeft from '../components/footer';

const About = () => {
    return (
        <Flex minH='100vh' flexDirection='column'>
            <NavBarWeb3 />
            <Container maxW='container.md' p={3}>
                <VStack spacing="12px" m={3}>
                    <Heading>BaldG airdrop</Heading>
                </VStack>
            </Container>
            <SmallWithLogoLeft />
        </Flex>
    )
}

export default About;