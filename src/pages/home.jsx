import { Button, Flex, VStack, Container, Box, Image, Center, Heading, List, ListItem, ListIcon } from '@chakra-ui/react';
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
    console.log(networkId);
    if (networkId !== 56) alert("Please connect to BSC mainnet!");
    else {
      const deployedAddress = "0x1b09956317e5c634629280BeA3CA611e782DC53a";
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
        alert("Airdrop cannot be sent! The possible reasons are:\n - The airdrop time has not been reached\n - The airdrop chest has not been funded\n - The airdrop has already been sent out");
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
              <ListItem><ListIcon as={MdCheckCircle} color='green.500' />An airdrop of 1,000,000,000 BALDG token will take place on the Thursday 29 February 2023 09:46:40 GMT.</ListItem>
              <ListItem><ListIcon as={MdCheckCircle} color='green.500' />The tokens will be distributed to all the addresses who participated in the fair launch presale.</ListItem>
              <ListItem><ListIcon as={MdCheckCircle} color='green.500' />The amount of tokens distributed to each wallet will be proportional to the amount of BALDG tokens held at the time of the airdrop (not at the end of the presale).</ListItem>
            </List>
          </Box>
          <Box>Airdrop date: 29th February 2024, 09:46:40</Box>
          <CountdownTimer>Time until airdrop</CountdownTimer>
          <Box>
            <Button boxShadow="lg" fontSize="xl" p={6} onClick={sendAirdrop}>
              Send airdrop
            </Button>
          </Box>
          <Box fontSize="3xl" textAlign="center">Only wallets participating to the presale will receive a token airdrop</Box>
        </VStack>
      </Container>
      <SmallWithLogoLeft />
    </Flex>
  );
}

export default Home;
