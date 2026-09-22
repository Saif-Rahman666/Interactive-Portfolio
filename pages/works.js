import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'
import thumbUniverse from '../public/images/works/portfolioimage.png'
import thumbWalknote from '../public/images/works/objectdet.png'
import thumbHome from '../public/images/works/homemade.png'
import thumbSoowgood from '../public/images/works/Soowgood.png'

const Works = () => {
    return(
        <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>

            <Section>
                    <WorkGridItem id="soowgood" title="SoowGood" thumbnail={thumbSoowgood}>
                        All in One Healthcare Website 
                    </WorkGridItem>
                </Section>
            <Section>
                    <WorkGridItem id="homemade" title="Home Made" thumbnail={thumbHome}>
                        A real estate website where you can buy and rent houses 
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="universe" title="Universe" thumbnail={thumbUniverse}>
                        An animated interactive portfolio 
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="object-detection" title="Object Detection for the Visually Impaired" thumbnail={thumbWalknote}>
                        A low-cost wearable that detects obstacles and narrates surroundings, built on TensorFlow and SSDLite MobileNetV2 and deployed on a Raspberry Pi. Published in Heliyon (Cell Press).
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )

}
export default Works 