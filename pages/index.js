import { Container,Box,Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section"

const Page = () => {
    return (<Container>
        <Box 
            borderRadius ='lg' 
            bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} 
            p={3} mb={6} 
            align="center">
        Hello, I'm a full-stack developer based in Bangldesh!
        </Box>
        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Saif Rahman
                </Heading>
        <p>Digital Craftsman(Artist/Developer/Deigner)</p>        
        </Box>
        <Box 
            flexShrink={0} 
            mt={{base: 4,md: 0}} 
            ml={{md: 6}} 
            align="center">
            <Image 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="100px" 
                display="inline-block" 
                borderRadius="full" 
                src="/images/saif.jpg" 
                alt="Profile Image"/>
        </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">Work</Heading>
            <p>Paragraph</p>
        </Section>
        </Container>
    )
}
export default Page