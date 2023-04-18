import * as React from 'react'

import { Box, Image } from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'

type PaperPreviewProps = {
  paper: string;
  layout: string;
};

function PaperPreview({paper, layout}:PaperPreviewProps) {
  return (
    <Box w="50%" p={10} border="2px">
      <Image src="images/a4-a5/Day_per_page.png" alt="day per page"></Image>
    </Box>
  )
}

export default PaperPreview;
