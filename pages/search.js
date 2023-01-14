import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";

const Search = () => {
  const { searchFilters, setSearchFilters } = useState(false);
  const router = useRouter;
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.200"
        alignItems="center"
        p="2"
        fontSize="lg"
        justifyContent="center"
        fontWeight="bold"
        onClick={() => setSearchFilters(!searchFilters)}
      >
        <Text>Search Property by Filters</Text>
        <Icon paddingLeft="2" w="8" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image src={noresult} />
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;
