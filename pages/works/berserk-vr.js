import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Berserk VR">
      <Container>
        <Title>
          Berserk VR <Badge>2026</Badge>
        </Title>
        <P>
          A virtual reality experience built in Unity with OpenXR, exploring how
          far physical feedback can carry an interaction when the visuals are
          deliberately sparse. Objects respond to how they are handled rather
          than to menus and buttons.
        </P>
        <P>
          A grabbable sword tracks its own velocity and fires a swing sound and
          controller haptics once it crosses a threshold, with a separate impact
          response on collision. A helmet can be picked up and physically worn,
          swapping the player&apos;s vision and soundtrack while it is on. A
          cursed object reacts to the trigger with audio and lighting changes.
          Hand tracking runs through Unity&apos;s XR Hands package, so the scene
          works with bare hands as well as controllers.
        </P>
        <P>
          The part I find most interesting is that the headset is not isolated.
          A WebSocket client and a threaded TCP listener let the running scene
          talk to hardware outside it &mdash; driving LED intensity on a physical
          device and accepting input over the network, with player state such as
          falls and resets synchronised across the bridge.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Unity, OpenXR, Universal Render Pipeline</span>
          </ListItem>
          <ListItem>
            <Meta>XR</Meta>
            <span>
              XR Interaction Toolkit, XR Hands, AR Foundation, controller haptics
            </span>
          </ListItem>
          <ListItem>
            <Meta>Bridge</Meta>
            <span>WebSocket client and TCP socket listener to external hardware</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/Saif-Rahman666/Berserk_VR"
              target="_blank"
            >
              Berserk_VR <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/berserk.png" alt="Berserk VR" />
      </Container>
    </Layout>
  )
}

export default Work
