import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Object Detection for the Visually Impaired">
      <Container>
        <Title>
          Object Detection for the Visually Impaired <Badge>2023</Badge>
        </Title>
        <P>
          A low-cost wearable assistive system that detects obstacles in a
          user&apos;s path and describes their surroundings aloud, built as an
          alternative to the traditional white cane.
        </P>
        <P>
          The detection model uses the TensorFlow Object Detection API with
          SSDLite MobileNetV2, pre-trained on COCO, running frame by frame on a
          Raspberry Pi 4 with a camera mounted in a head cap. Detected objects
          are announced through text-to-speech.
        </P>
        <P>
          A second model adds an &quot;ambiance mode&quot;: the last three
          convolutional layers are retrained by transfer learning on a weather
          dataset, so the device can describe a scene — cloudy, rainy, foggy,
          sunrise — rather than only naming the objects in it.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Publication</Meta>
            <Link href="https://www.cell.com/heliyon/home" target="_blank">
              Heliyon (Cell Press), 2023 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, TensorFlow, OpenCV, Raspberry Pi</span>
          </ListItem>
          <ListItem>
            <Meta>Role</Meta>
            <span>Co-author</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/objectdet.png"
          alt="Object Detection for the Visually Impaired"
        />
      </Container>
    </Layout>
  )
}

export default Work
