import { Button,Container,Box,Heading, Image, useColorModeValue, Link } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
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
            <Paragraph>Saif is a developer and is passionate about music and Art{' '}
                <NextLink href="/works/inkdrop">
                    <Link>Inkdrop</Link>
                    </NextLink>
                    .
            </Paragraph>
            <Box align="center"  my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                        My portfolio
                        </Button>
                </NextLink>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>1996</BioYear>
                Born  in Dinajpur, Bangladesh.
            </BioSection>
            <BioSection>
                <BioYear>2013</BioYear>
                Completed the Secondary School certificate program from Dinajpur Zilla School 
            </BioSection>
            <BioSection>
                <BioYear>2015</BioYear>
                Completed the Higher Secondary School certificate program from Dinajpur Government College
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Completed the bachelor's degree in Computer Science and Engineering from North South University 
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I 🫀
            </Heading>
            <Paragraph>
                Art, {' '}
                <Link href="https://www.youtube.com/watch?v=7GJED8KqTB4">
                Music, {' '}
                </Link>
                <Link href="https://www.youtube.com/watch?v=WlkQb70x5rs">
                Playing Guitar, {' '}
                </Link>
                Networking, Web devlopment, Cybersecurity, Learning
            </Paragraph>
        </Section>
        </Container>
    )
}
export default Page