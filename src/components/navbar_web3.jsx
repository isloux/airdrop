import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { ChevronRightIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode, Stack, HStack } from '@chakra-ui/react';
import detectEthereumProvider from '@metamask/detect-provider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Voir https://docs.moonbeam.network/builders/integrations/wallets/metamask/

const NavBarWeb3 = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [address, setAddress] = useState("Connect wallet");

    const shortenAddress = (address) => {
        return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
    };

    const configureMoonbaseAlpha = async () => {
        const provider = await detectEthereumProvider({ mustBeMetaMask: true });
        if (provider) {
            try {
                await provider.request({ method: "eth_requestAccounts"});
                await provider.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: "0x38", // BSC chainId is 56, which is 0x38 in hex
                            chainName: "BNB Smart Chain",
                            nativeCurrency: {
                                name: 'BNB',
                                symbol: 'BNB',
                                decimals: 18
                            },
                        rpcUrls: ["https://bsc-dataseed4.bnbchain.org"],
                        blockExplorerUrls: ["https://bscscan.com"]
                        },
                    ]
                });
                setAddress(shortenAddress(provider.selectedAddress));
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
                <Button onClick={configureMoonbaseAlpha}>{address}</Button>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </HStack>
      
        </Stack>

    )

}

export default NavBarWeb3;