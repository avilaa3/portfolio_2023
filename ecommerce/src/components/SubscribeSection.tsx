import { Container, Flex, Grid, Heading, FormControl, Input, Button, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import WomanStanding from "/public/woman-standing.png";
import MenWalking from "/public/men-walking.png";

export function SubscribeSection() {
    return (
      <Container
        background={"linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%); "}
        m={{
          base: "14.75rem 0 0 ",
          md: "2rem auto",
        }}
        p={{
          base: "1.5rem",
          md: "3.55rem",
        }}
        maxW={"100%"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          w={{
            base: "128px",
            md: "311px",
          }}
          h={{
            base: "242px",
            md: "545px",
          }}
          left={{
            base: "1.5rem",
            md: "50%",
          }}
          top={{
            base: `calc(-242px + 1.5rem)`,
            md: "initial",
          }}
          bottom={{
            md: "0",
          }}
          transform={{
            md: "translateX(-530px)",
          }}
        >
          <Image
            src={WomanStanding}
            alt=""
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          position={"absolute"}
          w={{
            base: "99px",
            md: "219px",
          }}
          h={{
            base: "236px",
            md: "524px",
          }}
          top={{
            base: `calc(-236px + 1.5rem)`,
            md: "initial",
          }}
          bottom={{
            md: "0",
          }}
          right={{
            base: "2rem",
            md: "50%",
          }}
          transform={{
            md: "translateX(470px)",
          }}
        >
          <Image
            src={MenWalking}
            alt=""
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
  
        <Flex
          height={{
            md: "28.75rem",
          }}
          m={"auto"}
          maxW={"33rem"}
          as="article"
          bgColor={"white"}
          p={"2rem"}
        >
          <Grid maxW={"22rem"} textAlign={"center"} m="auto" gap={"2rem"}>
            <header>
              <Heading size={"sm"} textTransform={"uppercase"} color={"gray"}>
                Special Offer
              </Heading>
              <Heading size={"xl"} textTransform={"uppercase"}>
                Subscribe and{" "}
                <Text as="span" color={"red"}>
                  get 10% off
                </Text>
              </Heading>
            </header>
            <Grid as="form" action="" gap={"1.5rem"}>
              <FormControl>
                <Input
                  height={"4rem"}
                  textAlign={"inherit"}
                  borderRadius={"0"}
                  type="email"
                  placeholder={"Enter your e-mail"}
                  backgroundColor={"gray.100"}
                />
              </FormControl>
              <Button
                bgColor={"black"}
                height={"4rem"}
                width={"100%"}
                textTransform={"uppercase"}
                size={"lg"}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Flex>
      </Container>
    );
  }