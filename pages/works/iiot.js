import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Industrial IoT Predictive Maintenance">
      <Container>
        <Title>
          Industrial IoT Predictive Maintenance <Badge>2026</Badge>
        </Title>
        <P>
          An end-to-end predictive maintenance system for industrial machinery:
          sensor streams are read at the edge, scored by a machine learning model
          on the device itself, and surfaced to an operator on their phone before
          a machine fails.
        </P>
        <P>
          The models are trained on NASA&apos;s C-MAPSS turbofan degradation
          dataset. An autoencoder learns a health index from normal operating
          behaviour, and an LSTM consumes 30-step sequences of that index
          alongside the most informative sensor channels to predict Remaining
          Useful Life &mdash; how many cycles a machine has left before it needs
          servicing.
        </P>
        <P>
          The trained models are converted to TensorFlow Lite and run on a
          Raspberry Pi, so inference happens next to the machine rather than in
          the cloud. That keeps latency low and means the system keeps working
          when the network does not. Readings and predictions move over MQTT,
          the standard messaging protocol on a factory floor, and a FastAPI
          service exposes predictions to the Flutter client.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Python, TensorFlow/Keras, TensorFlow Lite, scikit-learn, FastAPI,
              MQTT, Raspberry Pi, Flutter
            </span>
          </ListItem>
          <ListItem>
            <Meta>ML</Meta>
            <span>LSTM for RUL prediction, autoencoder for health indexing</span>
          </ListItem>
          <ListItem>
            <Meta>Data</Meta>
            <span>NASA C-MAPSS turbofan engine degradation dataset</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Saif-Rahman666/IIoT-ML" target="_blank">
              IIoT-ML <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/Saif-Rahman666/iiot_raspberry"
              target="_blank"
            >
              iiot_raspberry <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/Saif-Rahman666/iiot_predictive_maintenance"
              target="_blank"
            >
              iiot_predictive_maintenance <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/iiot.png"
          alt="Industrial IoT predictive maintenance architecture"
        />
      </Container>
    </Layout>
  )
}

export default Work
