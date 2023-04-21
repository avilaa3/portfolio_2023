import { slugify } from "@/utils/sluglyfile";
import { Product as ProductModel } from "..";
import { AspectRatio, Button, Grid, Box, Container, Heading, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { PDPHeader } from "@/components/PDPHeader";

type Props = {
  product: ProductModel;
};

function Price({ price }: { price: number }) {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return <p>{currency}</p>;
}

export default function Product({ product }: Props) {
  const { title, price, category, description, image } = product;
  return (
    <>
      <PDPHeader product={product}></PDPHeader>
      <Container as={Grid} gridTemplateColumns={"558px 1fr"}>
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

        <Box>
          <Heading as="h3" textTransform={"uppercase"} fontSize="md" color="gray.500">Description</Heading>
          <Text>{description}</Text>
          <Divider />
          <p>
            <Price price={price} />
          </p>

          <p>{category}</p>
          <Button>Add to cart</Button>
        </Box>
      </Container>
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
