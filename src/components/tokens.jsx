import { Box } from '@chakra-ui/react'; 

const Tokens = (props) => {
    if(props.children>0)
    return (
        <Box>Number of tokens: {Number(props.children) * 1e-18}</Box>
)
}

export default Tokens;