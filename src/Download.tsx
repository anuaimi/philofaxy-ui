import * as React from 'react'

import { Box, Button, Center } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'

type DownloadProps = {
  paper: string;
  layout: string;
  year: string;
};


function Download({paper, layout, year}:DownloadProps) {

  const downloadLayout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // need to get state of: pageSize, layout, year

    const pdfUrl = `layouts/${paper}/${year}/${layout}.pdf`
    // console.log("insert url is " + pdfUrl);
    window.open(pdfUrl);
  
  }
  
  return (
    <Box m={5}>
    <Center>
      <Button onClick={downloadLayout} rightIcon={<ArrowDownIcon/>} colorScheme='blue' size='lg'>Download</Button>
    </Center>
    </Box>
  )
}

export default Download;
