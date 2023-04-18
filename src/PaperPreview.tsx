import * as React from 'react'

import { Box, Image } from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'

type PaperPreviewProps = {
  paper: string;
  layout: string;
};

function PaperPreview({paper, layout}:PaperPreviewProps) {

  const generatePreviewUrl = () => {
    
    const previewUrl = `images/${paper}/${layout}.png`;
    console.log("preview url is " + previewUrl);
    return previewUrl;
  }

  return (
    <Box w="50%" p={10} border="2px">
      <Image src={generatePreviewUrl()} alt="day per page"></Image>
    </Box>
  )
}

export default PaperPreview;
