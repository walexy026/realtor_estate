import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttontext,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text color="gray.500" fontSize="3x1" fontWeight="bold">
        {title1} <br />
        {title2}
      </Text>
      <Text
        color="gray.700"
        fontSize="lg"
        paddingTop="3"
        paddingBottom="3"
        fontWeight="medium"
      >
        {desc1}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white"></Button>
      <Link href={linkName}>{buttontext}</Link>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <div>
      <h1>helo world jhjhgj</h1>
      <Banner purpose="RENT A HOME" title1="" title2="" />
      <Banner purpose={"For Rent"} />
    </div>
  );
}
