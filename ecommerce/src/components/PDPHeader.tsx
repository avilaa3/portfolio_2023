import {ShareIcon} from "@/icons/Share";
import {Product} from "@/pages";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {Box, Button, Container, Flex, Heading, Link, ListIcon, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import {Rating} from "@/components/Rating";




type Props = {
    products: Product;
}

export function PDPHeader({product: {category, title, rating, id}}: Props) {
    return (
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
                <ListIcon
                  w={18}
                  h={18}
                  as={ChevronRightIcon}
                  color={"gray.700"}
                  ml={"2"}
                  mr={"0"}
                />
              </ListItem>
              <ListItem textTransform={"capitalize"}>
                <Link href={`${category}`}>{category}</Link>
                <ListIcon
                  w={18}
                  h={18}
                  as={ChevronRightIcon}
                  color={"gray.700"}
                  ml={"2"}
                  mr={"0"}
                />
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
    );
  }