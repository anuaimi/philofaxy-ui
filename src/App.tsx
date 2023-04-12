import * as React from 'react'

import Header from "./Header"
import PaperSizes from "./PaperSizes"
import PlannerLayouts from "./PlannerLayouts"
import PaperPreview from "./PaperPreview"
import Download from "./Download"
import Footer from "./Footer"

import { ChakraProvider, Box, Text} from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'


function App() {

  // const [paperSize, setPaperSize] = React.useState("a4-a5")

  return (
    <ChakraProvider>
      <Header />
      <Text fontSize="m" m={4}>Why pay for planner inserts when you can print your own!</Text>
      <Box w="100%" p={4} border="2px" borderRadius="10" borderColor='gray.400'>
        <Text>Select the paper size your planner uses:</Text>
        <br/>
        <PaperSizes/>
      </Box>
      <Box display="flex" p={5}>
        <PlannerLayouts/>
        <PaperPreview/>
      </Box>
      <Download />
      <Footer/>
    </ChakraProvider>
  )
}
export default App;
