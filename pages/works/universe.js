import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph.js'
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
                    https://universe-saif-rahman.vercel.app<ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
                </List>
            </Container>
        </Layout>
    )
}
export default Work