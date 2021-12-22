import Head  from "next/head";
import { Router } from "next/router";
import { Children } from "react";
import Navbar from '../navbar.js'
import { Box , Container} from "@chakra-ui/react";
const Main =({children,router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initail-scale=1"/>
                <title>Saif Rahman - Homepage</title>
            </Head>
            <Navbar path={router.asPath}/>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}
export default Main