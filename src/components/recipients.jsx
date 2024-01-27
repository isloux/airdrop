import { Box } from '@chakra-ui/react'; 

const Recipients = (props) => {
    if(props.children>0)
    return (
        <Box>Number of participants: {Number(props.children)}</Box>
)
}

export default Recipients;
