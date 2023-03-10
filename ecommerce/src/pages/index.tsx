import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
//Components
import { Header } from "@/components/Headers";
import { TopBar } from "@/components/Topbar";

import { HomeHeroCategories } from "@/components/HomeHeroCategories";
import { Categories } from "@/models/Categories";

import { Box, Container, Flex, Text, Grid, GridItem, AspectRatio } from "@chakra-ui/react";
import { AdvantageItem } from "@/components/AdvantageItem";
import { AdvantageSection } from '../components/AdvantageSection';

//Utilities

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type Props = {
  products: Product[];
  categories: Categories[];
};

// this is executhe in the client side

export default function Home({ products, categories }: Props) {
  return (
    <>
      <Head>
        <title>E-Commerce Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <Box marginBottom="2rem">
        <Header />
      </Box>
      <main>
        <Container size="lg">
          <HomeHeroCategories categories={categories}></HomeHeroCategories>
          <AdvantageSection/>
        </Container>

        <Box margin="2rem auto" width="255px" border="solid 1px" borderColor="gray.200">
          <AspectRatio position="relative" ratio="1" maxWidth="100%">
          <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" fill="true" style={{ objectFit: "contain" }}></Image>
          </AspectRatio>
          <Text>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Text>
          <Text>$ 38.00</Text>
        </Box>



      <ol>
          {products.map(product => {
            return <li key={product.id}><strong>{product.title}</strong></li>
          })}
        </ol>

      </main>
    </>
  );
}
// This happen in the server side.
export async function getServerSideProps(contex: GetServerSidePropsContext) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());

  return {
    props: {
      products,
      categories,
    },
  };
}
