import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () =>{
    return (
        <Layout title="Home Made">
            <Container>
                <Title>
                    Home Made <Badge>2022</Badge>
                </Title>
                <P>A real estate website where you can buy or rent your dream houses </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://home-made-saif-rahman.vercel.app'>
                    Home Made<ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>JavaScript, React, ChakraUi</span>
                </ListItem>
                </List>
                <WorkImage src='/images/works/homemade.png' alt="Home Made"></WorkImage>
                

            </Container>
        </Layout>
    )
}
export default Work