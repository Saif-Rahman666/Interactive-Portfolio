import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout  from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-items";

import thumbWorkFlow from '../public/images/contents/pain.png'
import thumbmusic from '../public/images/contents/music.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem 
                        title="Pain's first appearence" 
                        thumbnail={thumbWorkFlow} 
                        href="https://www.youtube.com/watch?v=4RrlTHpxFS0"/>

                    <GridItem 
                        title="Gloomy days" 
                        thumbnail={thumbmusic} 
                        href="https://www.youtube.com/watch?v=7GJED8KqTB4"/>    
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)
export default Posts