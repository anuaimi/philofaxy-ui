import { useEffect, useState } from 'react'

import Header from "./Header"
import PlannerLayouts from "./PlannerLayouts"
import PaperPreview from "./PaperPreview"
import Download from "./Download"
import Footer from "./Footer"

import { ChakraProvider, Box, Text} from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'


function App() {

  const [paperSize, setPaperSize] = useState<string>("a4-a5");
  const [layout, setLayout] = useState<string>("Day_per_page_original");
  const [year, setYear] = useState<string>("");

  // set default values
  useEffect( () => {
    setPaperSize("a4-a5");
    setLayout("Day_per_page_original");
    setYear("2023");
  }, []);

  return (
    <ChakraProvider>
      <Header />
      <Box w="100%" p={5} borderColor='gray.400'>
        <Text fontSize="m">Why pay for planner inserts when you can print your own! Here you will find a variety of layouts for three different paper sizes.</Text>
      </Box>
      <Box w="100%" p={5} borderColor='gray.400'>
        <Text>Step 1:  Select the paper size your planner uses</Text>
        <Text>Step 2:  Find the layout you want</Text>
        <Text>Step 3:  Click the download button</Text>
      </Box>
      <Box display="flex" p={5}>
        <PlannerLayouts paper={paperSize} setPaperSize={setPaperSize} layout={layout} setLayout={setLayout}/>
        <PaperPreview paper={paperSize} layout={layout}/>
      </Box>
      <Download paper={paperSize} layout={layout} year={year}/>
      <Footer/>
    </ChakraProvider>
  )
}
export default App;
