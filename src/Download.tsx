import * as React from 'react'

import { Box, Button, Center } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'

function downloadLayout() {
  // need to get state of: pageSize, layout, year
  alert("hello!");
}

function Download() {

  return (
    <Box m={5}>
    <Center>
      <Button onClick={downloadLayout} rightIcon={<ArrowDownIcon/>} colorScheme='blue' size='lg'>Download</Button>
    </Center>
    </Box>

  )
}

export default Download;
