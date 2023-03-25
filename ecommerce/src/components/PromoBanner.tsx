import { Box } from "@chakra-ui/react";
import { CentralLabel } from "./CenterLabel";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  children: React.ReactNode;
};

export function Promobanner({ image, children }: Props) {
  return (
    <Box position={"relative"}>
      <Image src={image} alt=""></Image>
      <Box
        position={"absolute"}
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        bg={"white"}
      >
        <CentralLabel>{children}</CentralLabel>
      </Box>
    </Box>
  );
}
