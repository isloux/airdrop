import { Flex, Container, VStack, Heading, Box, Link } from '@chakra-ui/react';
import NavBarWeb3 from '../components/navbar_web3';
import SmallWithLogoLeft from '../components/footer';
import background from '../20231026_151606_0000.png'

const About = () => {
    return (
        <Flex minH='100vh' flexDirection='column' bgImage={background}>
            <NavBarWeb3 />
            <Container maxW='container.md' p={3}>
                <VStack spacing="12px" m={3}>
                    <Heading>BaldG airdrop FAQ</Heading>
                    <VStack alignItems='left'>
                        <Box textStyle='question'>Who will receive the airdrop?</Box>
                        <Box textStyle='answer'>Airdrop recipient addresses will be the ones participating to the <Link href='https://pinksale.finance'>Pinksale</Link> presale.</Box>
                        <Box textStyle='question'>When will the airdrop be sent out?</Box>
                        <Box textStyle='answer'>The airdrop will be sent out any time after the airdrop time is past.</Box>
                        <Box textStyle='question'>What should I do if I have participated to the presale?</Box>
                        <Box textStyle='answer'>Do nothing and wait for the airdrop reception, or click on the airdrop button on the Home page to send the airdrop to all participants. The airdrop can be called only once.</Box>
                        <Box textStyle='question'>What should I do if I have not participated to the presale?</Box>
                        <Box textStyle='answer'>Do nothing, or click on the airdrop button on the Home page to send the airdrop, but you will not receive anything.</Box>
                </VStack>
                </VStack>
            </Container>

            <SmallWithLogoLeft />
        </Flex>
    )
}

export default About;