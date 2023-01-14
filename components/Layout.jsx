import React, { Children } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>

      <Box maxWidth="1280px" m="auto">
        <header> Estate</header>
        <main>{Children}</main>
        <footer>footer</footer>
      </Box>
    </>
  );
};

export default Layout;
