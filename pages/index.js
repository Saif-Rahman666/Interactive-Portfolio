import { Container,Box,Heading } from "@chakra-ui/react"
const Page = () => {
    return (<Container>
        <Box borderRadius ='lg' bg="red" p={3} mb={6} align="center">
        Hello, I'm a full-stack developer based in Bangldesh!
        </Box>
        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Saif Rahman
                </Heading>
        <p>Digital Craftsman(Artist/Developer/Deigner)</p>        
        </Box>
        </Box>
        </Container>
    )
}
export default Page