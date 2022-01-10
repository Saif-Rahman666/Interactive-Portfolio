import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, {Html, head, Main, NextScript, Head, Link} from 'next/document'
import { render } from "react-dom";
import theme from "../libs/theme";

export default class Document extends NextDocument{
    render(){
        return(
            <Html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="logo.png"/>
            </head>
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}
