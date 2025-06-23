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
                    SoowGood <Badge>2023</Badge>
                </Title>
                <P>A Healthcare website where you can find every solutions to your health </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://soowgood.com'>
                    SoowGood<ExternalLinkIcon mx="2px"/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>JavaScript, React, Django, flutter, Sql</span>
                </ListItem>
                </List>
                <WorkImage src='/images/works/Soowgood.png' alt="SoowGood"></WorkImage>
                

            </Container>
        </Layout>
    )
}
export default Work