import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { ChevronRightIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode, Stack, HStack } from '@chakra-ui/react';
import detectEthereumProvider from '@metamask/detect-provider';
import { Link } from 'react-router-dom';

// Voir https://docs.moonbeam.network/builders/integrations/wallets/metamask/

const NavBarWeb3 = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    const configureMoonbaseAlpha = async () => {
        const provider = await detectEthereumProvider({ mustBeMetaMask: true });
        if (provider) {
            try {
                await provider.request({ method: "eth_requestAccounts"});
                await provider.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: "0x507", // Moonbase Alpha's chainId is 1287, which is 0x507 in hex
                            chainName: "Moonbase Alpha",
                            nativeCurrency: {
                                name: 'DEV',
                                symbol: 'DEV',
                                decimals: 18
                            },
                        rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
                        blockExplorerUrls: ["https://moonbase.moonscan.io/"]
                        },
                    ]
                });
            } catch(e) {
                console.error(e);
            }  
        } else {
            alert("Please install MetaMask");
        }
    }

    return(
        <Stack isInline align='baseline' justify='space-between' m={3}>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/about'>About</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <HStack>
                <Button onClick={configureMoonbaseAlpha}>Connect Wallet</Button>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </HStack>
      
        </Stack>

    )

}

export default NavBarWeb3;