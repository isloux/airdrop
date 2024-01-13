import { Button, Flex, VStack, Container, Box, Image, Center, Heading, List, ListItem, ListIcon, Link } from '@chakra-ui/react';
import { MdCheckCircle } from "react-icons/md";
import { useColorMode } from "@chakra-ui/react";
import NavBarWeb3 from '../components/navbar_web3';
import SmallWithLogoLeft from '../components/footer';
import CountdownTimer from '../components/countdown';
import { useState, useEffect } from 'react';
import { Contract } from 'ethers';
import contractJson from '../AirdropList.json';
import darkBackground from '../2.png';
import lightBackground from '../1.png';

const Home = () => {
  const [signer, setSigner] = useState(null);
  const [networkId, setNetworkId] = useState(0);
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
  });

  const { colorMode } = useColorMode();
  const backgroundImage =
    colorMode === "light"
      ? lightBackground // Replace with your light mode image URL
      : darkBackground;  // Replace with your dark mode image URL

  const callbackProvider = (childData) => {
    setSigner(childData.signer);
    setNetworkId(childData.networkId);
    setAccount(childData.account);
  }

  const sendAirdrop = async () => {
    console.log(networkId, typeof networkId);
    if (networkId.toString() === "0") alert("Please connect your wallet to use the app!");
    else if (networkId.toString() !== "56") alert("Please connect to BSC mainnet!");
    else {
      const deployedAddress = "0xB54874D9DdC4EF23e41D9677172De59583Fb251f";
      const contract = new Contract(deployedAddress, contractJson.abi, signer);
      try {
        const estimatedGas = await contract.sendAirdrop.estimateGas();
        const tx = await contract.sendAirdrop({
          from: account,
          gas: estimatedGas
        });
        console.log(tx);
      }
      catch {
        alert("Airdrop cannot be sent! The possible reasons are:\n - The airdrop time has not been reached\n - The airdrop treasury has not been funded\n - The airdrop has already been sent out");
      }
    }
  }

  return (
    <Flex height='100vh' flexDirection='column' bgSize='cover' bgImage={backgroundImage} bgPosition='center' bgRepeat='no-repeat' width="100%">
      <NavBarWeb3 parentCallback={callbackProvider} />
      <Container maxW='container.md' p={3}>
        <VStack spacing="16px" m={3}>
          <Heading>BaldG airdrop</Heading>
          <Center>
            <Image boxSize="92px" src="/BaldG_192.png" alt="coin logo" />
          </Center>
          <Box textAlign='justify' fontSize="lg" bgColor={colorMode === "light"?"base.200":"base.400"} p={4} borderRadius={8} opacity="85%">
            <List spacing={3}>
              <ListItem><ListIcon as={MdCheckCircle} color='green.500' />An airdrop of 975,000,000 BALDG token will be distributed to all the addresses who participated in the fair launch presale.</ListItem>
              <ListItem><ListIcon as={MdCheckCircle} color='green.500' />The amount of tokens distributed to each wallet will be proportional to the amount of BALDG tokens held at the time of the airdrop (not at the end of the presale).</ListItem>
              <ListItem><ListIcon as={MdCheckCircle} color='green.500' />Someone actually needs to click on the Send airdrop button to send out the tokens to all the participants</ListItem>
            </List>
          </Box>
          <Box>Airdrop date: 29th February 2024, 09:46:40</Box>
          <Link href='https://bscscan.com/address/0x1b09956317e5c634629280bea3ca611e782dc53a#code'>Airdrop smart contract on BSC</Link>
          <CountdownTimer>Time until airdrop</CountdownTimer>
          <Box>
            <Button boxShadow="lg" fontSize="xl" p={6} onClick={sendAirdrop}>
              Send airdrop
            </Button>
          </Box>
          <Box fontSize="3xl" textAlign="center">Only wallets participating in the presale will receive a token airdrop</Box>
        </VStack>
      </Container>
      <SmallWithLogoLeft />
    </Flex>
  );
}

export default Home;
