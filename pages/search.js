import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

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
      {searchFilters && <searchFilters />}
    </Box>
  );
};

export default Search;
