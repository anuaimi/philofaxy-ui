import * as React from 'react'

import { Box, Heading } from '@chakra-ui/react'


function Header() {
  return (
    <Box pt={20} pb={12} bgColor="gray.200">
      <Heading as="h1" textAlign="center">Print Planner Inserts</Heading>

    </Box>
  )
}

export default Header;
