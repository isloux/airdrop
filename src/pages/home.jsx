import { Button, Flex, VStack, Container, Box, Image, Center, Heading } from '@chakra-ui/react';
import NavBarWeb3 from '../components/navbar_web3';
import SmallWithLogoLeft from '../components/footer';
import CountdownTimer from '../components/countdown';
import { useState, useEffect } from 'react';
import { Contract } from 'ethers';
import contractJson from '../AirdropList.json';

const Home = () => {
  const [provider, setProvider] = useState(null);
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

  const callbackProvider = (childData) => {
    setProvider(childData.provider);
    setSigner(childData.signer);
    setNetworkId(childData.networkId);
    setAccount(childData.account);
  }

  const sendAirdrop = async () => {
    console.log(networkId);
    if (networkId != 97) alert("Please connect to BSC testnet!");
    else {
      const deployedAddress = "0x7C78ad05F65432d08C3700879C8C86Ba90c81d33";
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
    <Flex minH='100vh' flexDirection='column'>
      <NavBarWeb3 parentCallback={callbackProvider} />
      <Container maxW='container.md' p={3}>
        <VStack spacing="16px" m={3}>
          <Heading>BaldG airdrop (on testnet)</Heading>
          <Center>
            <Image boxSize="92px" src="/BaldG_192.png" alt="coin logo" />
          </Center>
          <CountdownTimer>Time until airdrop</CountdownTimer>
          <Box>
            <Button boxShadow="lg" fontSize="xl" p={6} onClick={sendAirdrop}>
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
