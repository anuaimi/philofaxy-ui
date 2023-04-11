import * as React from 'react'

import { Box, Link, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

// import chakraTheme from '@chakra-ui/theme'

function Footer() {
  return (
    <Box mt={20} mb={12}>
      <Text fontSize="xs" mt={8} ml={20} mr={20} textAlign="center">
        The original source for the planner inserts is from {' '}
        <Link href="https://philofaxy.blogspot.com" isExternal>Philofaxy<ExternalLinkIcon mx="2px" /></Link>
      </Text>
      <Text fontSize="xs" mt={4} ml={20} mr={20} textAlign="center">
        If you are interested in customizing the inserts, the Philofaxy site has template files that can be used to 
        generate customized inserts.
      </Text>
    </Box>
  )
}

export default Footer;
