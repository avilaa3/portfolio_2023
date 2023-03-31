import { Product } from '@/pages';
import { Grid, Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import Link from 'next/link';
import { slugify } from '@/utils/sluglyfile';

type Props = {
    products: Product[]
}

export function HomeProductsGrid(props: Props) {
    return (
      <Grid
        overflowX={"scroll"}
        gridTemplateColumns={{
          base: "repeat(auto-fit, 255px)",
          md: "repeat(auto-fit, minmax(255px, 1fr))",
        }}
        gridAutoFlow={{
          base: "column",
          md: "row",
        }}
        gridAutoColumns={"255px"}
        gap={"1.85rem"}
        scrollSnapType={"x mandatory"}
      >
        {props.products.map((product, i) => {
          const slug = slugify(product.title);
          return (
            <Box
              marginLeft={{
                base: i === 0 ? "1rem" : "0",
                md: "0",
              }}
              key={product.id}
              scrollSnapAlign="center"
              border="solid 1px"
              borderColor={"gray.200"}
              padding={"1rem"}
            >
              <Link href={`/products/${slug}-${product.id}`}>
              <ProductCard {...product} />
              </Link>
            </Box>
          );
        })}
      </Grid>
    );
  }