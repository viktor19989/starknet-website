"use client";
import { Box, Flex } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import React from "react";

type OrderedBlockProps = {
  children: React.ReactNode;
};

export const OrderedBlock = ({ children }: OrderedBlockProps) => {
  return <Box>{children}</Box>;
};

type OrderedBlockItemProps = {
  children: React.ReactNode;
  title: string;
};

export const OrderedBlockItem = ({
  children,
  title,
}: OrderedBlockItemProps) => {
  return (
    <Flex direction="column" mb="32px">
      <Heading as="h2" variant="h3" color="heading-navy-fg">
        {title}
      </Heading>
      <Box>{children}</Box>
    </Flex>
  );
};