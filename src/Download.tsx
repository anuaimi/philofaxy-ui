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
    const msg = "paperSize: " + paper + " layout: " + layout + " year: " + year;
    alert(msg);
    // window.open("https://philofaxy.com/inserts/__2020%20revamp/1.1%20day%20per%20page/2023%201.1.1.pdf")
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
