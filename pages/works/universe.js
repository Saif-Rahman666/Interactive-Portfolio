import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () =>{
    return (
        <Layout title="Universe">
            <Container>
                <Title>
                    Universe <Badge>2021</Badge>
                </Title>
                <P>An animated portfolio using THREE js </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://universe-saif-rahman.vercel.app'>
                    Universe<ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>JavaScript, THREE js, HTML, CSS</span>
                </ListItem>
                </List>
                <WorkImage src="/images/works/universe1.png" alt="Universe"></WorkImage>
                <WorkImage src="/images/works/universe2.png" alt="Universe"></WorkImage>

            </Container>
        </Layout>
    )
}
export default Work