import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bc";
import FiKeys from "react-icons/fi";

const NavBar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold"></Box>
  </Flex>
);

export default NavBar;
