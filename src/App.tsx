import { useEffect, useState } from 'react'

import Header from "./Header"
import PlannerLayouts from "./PlannerLayouts"
import PaperPreview from "./PaperPreview"
import Download from "./Download"
import Footer from "./Footer"

import { ChakraProvider, Box, Text} from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'


function App() {

  const [paperSize, setPaperSize] = useState<string>("");
  const [layout, setLayout] = useState<string>("");
  const [year, setYear] = useState<string>("");

  // set default values
  useEffect( () => {
    setPaperSize("a4-a5");
    setLayout("day_on_two_pages");
    setYear("2023");
  }, []);

  return (
    <ChakraProvider>
      <Header />
      <Box w="100%" p={5} border="2px" borderColor='gray.400'>
        <Text fontSize="m">Why pay for planner inserts when you can print your own!</Text>
      </Box>
      <Box w="100%" p={5} borderColor='gray.400'>
        <Text>Select the paper size your planner uses and then select the layout you want:</Text>
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
