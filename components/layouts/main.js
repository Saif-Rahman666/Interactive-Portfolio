import Head  from "next/head";
import Navbar from '../navbar.js'
import { Box , Container} from "@chakra-ui/react";
import VoxelDog from "../voxel-dog.js";
import NoSsr from "../no-ssr.js";
import Footer from '../footer'

const Main =({children,router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initail-scale=1"/>
                <title>Saif Rahman - Homepage</title>
                <link rel="icon" type="image/svg+xml" href="logo.png"/>
            </Head>
            <Navbar path={router.asPath}/>
            <Container maxW="container.md" pt={14}>
               <NoSsr>
                <VoxelDog/>
                </NoSsr>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}
export default Main