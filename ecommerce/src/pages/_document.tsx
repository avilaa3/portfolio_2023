import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from "@/components/Headers";
import { TopBar } from "@/components/Topbar";
import { Box } from '@chakra-ui/react';


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
