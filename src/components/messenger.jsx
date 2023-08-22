import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { LeftPanel } from "./left-panel";
import { RightPanel } from "./right-panel";


const Messenger = () => {
  return (
    <>
      <Box bg="#009788" h="15vh"></Box>
      <Flex h="94vh" m="8" mt="-32" overflow={"auto"}>
        <LeftPanel />
        <RightPanel />
      </Flex>
    </>
  );
};

export default Messenger;
