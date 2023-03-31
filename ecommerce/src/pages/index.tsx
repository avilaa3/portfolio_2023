import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";

//Components
import { Header } from "@/components/Headers";
import { TopBar } from "@/components/Topbar";
import { HomeHeroCategories } from "@/components/HomeHeroCategories";
import { AdvantageSection } from "../components/AdvantageSection";
import { HomeProductsGrid } from "@/components/HomeProductsGrid";
import { Promobanner } from "@/components/PromoBanner";

//Models

import { Categories } from "@/models/Categories";

//CHakra UI
import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Grid,
  Flex,
} from "@chakra-ui/react";

//Images
import banner1 from "/public/banner-new-season.jpg";
import banner2 from "/public/banner-sale.jpg";
import blogPic1 from "/public/blog-pic-01.jpg";
import blogPic2 from "/public/blog-pic-02.jpg";
import blogPic3 from "/public/blog-pic-03.jpg";

//Utilities
import {
  GroupedProducts,
  groupProductsByCategory,
} from "@/utils/groupProductsByCategory";
import { SubscribeSection } from "@/components/SubscribeSection";
import { BlogPostCard } from "../components/BlogPostCard";

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
  categories: Categories[];
  productsGroupedByCategory: GroupedProducts;
};

// this is executhe in the client side

export default function Home({
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
        <Container>
          <HomeHeroCategories categories={categories}></HomeHeroCategories>
          <AdvantageSection />
        </Container>

        <Container padding="0">
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

        <Container>
          <SimpleGrid
            minChildWidth="320px"
            spacing={{
              base: "1rem",
              md: "2rem",
            }}
          >
            <Promobanner image={banner1}>
              <Text fontSize="sm" color={"gray.500"}>
                New Season
              </Text>
              <Text fontSize="lg" whiteSpace="nowrap">
                LookBook Collection
              </Text>
            </Promobanner>

            <Promobanner image={banner2}>
              <Text fontSize="sm" color={"gray.500"}>
                Sale
              </Text>
              <Text fontSize="lg" whiteSpace="nowrap">
                get up to{" "}
                <Text as="span" color={"red"}>
                  50% off
                </Text>
              </Text>
            </Promobanner>
          </SimpleGrid>
        </Container>
        <Container
          p={"0"}
          maxW="100%"
          m={{
            base: "14.75rem 0 4rem",
            md: "2rem auto 6rem",
          }}
        >
          <SubscribeSection />
        </Container>
        <Container>
          <Heading
            as="h2"
            fontSize="2x1"
            textTransform="uppercase"
            mb={{
              base: "2rem",
              md: "3rem",
            }}
            textAlign="center"
          >
            Lates From Blogpost
          </Heading>
          <SimpleGrid
            minChildWidth="300px"
            spacing={{
              base: "2.5rem",
              md: "1.5rem",
            }}
          >
            <BlogPostCard
              image={blogPic1}
              title="The Easiest Way to Break"
              summary="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
            />
            <BlogPostCard
              image={blogPic2}
              title="Wedding Season"
              summary="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
            />
            <BlogPostCard
              image={blogPic3}
              title="Recent Favorites On Repeat"
              summary="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
            />
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
      categories,
      productsGroupedByCategory,
    },
  };
}
