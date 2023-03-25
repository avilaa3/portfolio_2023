import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
//Components
import { Header } from "@/components/Headers";
import { TopBar } from "@/components/Topbar";

import { HomeHeroCategories } from "@/components/HomeHeroCategories";
import { Categories } from "@/models/Categories";

import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { AdvantageSection } from "../components/AdvantageSection";
import {
  GroupedProducts,
  groupProductsByCategory,
} from "@/utils/groupProductsByCategory";
import { HomeProductsGrid } from "@/components/HomeProductsGrid";
import banner1 from "/public/banner-new-season.jpg";
import banner2 from "/public/banner-sale.jpg";
import { CentralLabel } from "@/components/CenterLabel";

//Utilities

export type Product = {
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
  productsGroupedByCategory: GroupedProducts;
};

// this is executhe in the client side

export default function Home({
  products,
  categories,
  productsGroupedByCategory,
}: Props) {
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
        <Container
          size={{
            lg: "lg",
          }}
        >
          <HomeHeroCategories categories={categories}></HomeHeroCategories>
          <AdvantageSection />
        </Container>

        <Container
          maxW={{
            base: "100%",
            md: "1110px",
          }}
          padding="0"
        >
          {Object.entries(productsGroupedByCategory).map(
            ([category, products]) => {
              return (
                <Box key={category} marginBottom="4rem">
                  <Heading
                    as="h2"
                    size="md"
                    textTransform="uppercase"
                    margin={{
                      base: "0 0 1rem 1rem",
                      md: "0 0 1.5rem 0",
                    }}
                  >
                    {category}
                  </Heading>
                  <HomeProductsGrid products={products} />
                </Box>
              );
            }
          )}
        </Container>

        <Container
          size={{
            lg: "lg",
          }}
        >
          <SimpleGrid
            minChildWidth="320px"
            spacing={{
              base: "1rem",
              md: "2rem",
            }}
          >
            <Box position={"relative"}>
              <Image src={banner1} alt=""></Image>
              <Box
                position={"absolute"}
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
                bg={"white"}
              >
                <CentralLabel>
                  <Text fontSize="sm" color={"gray.500"}>
                    New Season
                  </Text>
                  <Text fontSize="lg" whiteSpace="nowrap">
                    LookBook Collection
                  </Text>
                </CentralLabel>
              </Box>
            </Box>

            <Box position={"relative"}>
              <Image src={banner2} alt=""></Image>
              <Box
                position={"absolute"}
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
                bg={"white"}
              >
                <CentralLabel>
                  <Text fontSize="sm" color={"gray.500"}>
                    Sale
                  </Text>
                  <Text fontSize="lg" whiteSpace="nowrap">
                    Get Up to{" "}
                    <Text as="span" color={"red"}>
                      50% off
                    </Text>
                  </Text>
                </CentralLabel>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
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

  const productsGroupedByCategory = groupProductsByCategory(products);

  return {
    props: {
      products,
      categories,
      productsGroupedByCategory,
    },
  };
}
