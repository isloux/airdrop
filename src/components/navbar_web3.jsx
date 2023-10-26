import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { ChevronRightIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode, Stack, HStack } from '@chakra-ui/react';
import { BrowserProvider } from 'ethers';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// Voir https://docs.moonbeam.network/builders/integrations/wallets/metamask/

const NavBarWeb3 = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const buttonText = useRef("CONNECT WALLET");

    const shortenAddress = (address) => {
        return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
    };

    const connectWallet = async () => {
        if ((window.ethereum) && (buttonText.current.length < 20)) {
            const provider = new BrowserProvider(window.ethereum);
            try {
                // Request account access if needed
                provider.send("eth_requestAccounts", []).then(() => {
                    provider.getSigner().then((signer) => {
                        signer.getAddress().then(
                            (account) => {
                                buttonText.current = shortenAddress(account);
                                provider.getNetwork().then((networkId) => {
                                    props.parentCallback({ provider: provider, signer: signer, networkId: networkId.chainId, account: account });
                                });
                            }
                        );
                    });
                });
            } catch (error) {
                console.log(error);
            }
        }
    }

    return(
        <Stack isInline align='baseline' justify='space-between' m={3}>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/faq'>FAQ</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <HStack>
                <Button onClick={connectWallet}>{buttonText.current}</Button>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </HStack>
      
        </Stack>

    )

}

export default NavBarWeb3;