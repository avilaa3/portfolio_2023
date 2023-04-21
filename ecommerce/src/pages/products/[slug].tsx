import { slugify } from "@/utils/sluglyfile";
import { Product as ProductModel } from "..";
import {
  AspectRatio,
  Button,
  Box,
  Container,
  Flex,
  Link,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Rating } from "@/components/Rating";
import { ShareIcon } from "@/icons/Share";

type Props = {
  product: ProductModel;
};

export default function Product({
  product: { id, title, price, image, rating, category, description },
}: Props) {
  return (
    <>
      <Box bg="gray.100" paddingY="2rem" paddingX="1rem">
        <Container>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex
              fontSize={"sm"}
              as={UnorderedList}
              gap={"2"}
              listStyleType={"none"}
              m={"0"}
            >
              <ListItem textTransform={"capitalize"}>
                <Link href="/">Home</Link>
                <ListIcon w={18} h={18} as={ChevronRightIcon} color={"gray.700"} ml={'2'} mr={'0'}/>
              </ListItem>
              <ListItem textTransform={"capitalize"}>
                <Link href={`${category}`}>{category}</Link>
                <ListIcon w={18} h={18} as={ChevronRightIcon} color={"gray.700"} ml={'2'} mr={'0'} />
              </ListItem>
              <ListItem textTransform={"capitalize"}>{title}</ListItem>
            </Flex>

            <Button
              color={"gray"}
              variant={"ghost"}
              leftIcon={<ShareIcon w={18} h={18} />}
            >
              Share
            </Button>
          </Flex>
          <Heading textAlign={"center"} as="h1" fontSize={"2xl"} my={"1.5rem"}>
            {title}
          </Heading>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex gap={"1rem"} alignItems={"baseline"}>
              <Rating rate={rating.rate} />
              <Text>{rating.count} reviews</Text>
            </Flex>

            <Flex gap={"1rem"} fontSize={"sm"}>
              <p>
                SKU: <b>{id}</b>
              </p>
              <p>
                Availability: <b>In Stock</b>
              </p>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <p>{price}</p>

      <p>{category}</p>
      <p>{description}</p>
      <Button>Add to cart</Button>
      <AspectRatio
        position="relative"
        ratio={1}
        maxWidth="100%"
        marginBottom={"1rem"}
      >
        <Image
          src={image}
          alt=""
          fill={true}
          style={{
            objectFit: "contain",
          }}
        ></Image>
      </AspectRatio>
    </>
  );
}

export async function getStaticPaths() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  const slugs: string[] = products.map((product: ProductModel) => {
    return `${slugify(product.title)}-${product.id}`;
  });

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: { params: { slug: string } }) {
  "fjallraven-foldsack-no-1-backpack-fits-15-laptops-1";

  const id = context.params.slug.split("-").pop();
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  return {
    // Passed to the page component as props
    props: {
      product,
    },
  };
}
