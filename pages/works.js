import {Container, Heading ,SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'
import thumbUniverse from '../public/images/works/portfolioimage.png'
import thumbWalknote from '../public/images/works/objectdet.png'

const Works = () => {
    return(
        <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid column={[1,1,2]} gap={6}>

                <Section>
                    <WorkGridItem id="universe" title="Universe" thumbnail={thumbUniverse}>
                        An animated interactive portfolio 
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Object_det" title="Object Detection for visually imparied people" thumbnail={thumbWalknote}>
                    We recognize distinct objects and precisely get their information through object de-
                    tection, such as their size, shape, and location. This paper developed

                    a low-cost assistive system of obstacle detection and the surround-
                    ing environment depiction to help blind people using deep learning

                    techniques. We worked using TensorFlow object detection API and
                    SSDLite MobileNetV2 to create the proposed object detection model.
                    The pre-trained SSDLite MobileNetV2 model is trained on the COCO
                    dataset, with almost 328,000 images of 90 different objects.
                    Next, we have used the Google text-to-speech module, PyAudio, playsound,
                    and speech recognition to generate the audio feedback of the detected

                    objects. A Raspberry Pi camera captures real-time video where real-
                    time object detection is done frame by frame with Raspberry Pi 4.

                    The proposed device is integrated into a head cap, which will help vi-
                    sually impaired people to detect obstacles in their path, as it is more

                    efficient than a traditional white cane.
                    Apart from this detection
                    model, we trained a secondary computer vision model and named it

                    the “ambiance mode.” In this mode, the last three convolutional lay-
                    ers of SSDLite MobileNetV2 are trained through transfer learning on

                    a weather dataset. The dataset consists of around 500 images from

                    four classes: cloudy, rainy, foggy, and sunrise. In this mode, the pro-
                    posed system will narrate the surrounding scene elaborately, almost

                    like a human describing a landscape or a beautiful sunset to a visu-
                    ally impaired person. The object detection and ambiance description

                    mode’s performances are tested and evaluated in a desktop computer
                    and Raspberry Pi embedded system.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )

}
export default Works 