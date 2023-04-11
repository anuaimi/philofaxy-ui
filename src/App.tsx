import * as React from 'react'
import Header from "./Header"
import PaperSizes from "./PaperSizes"
import PaperPreview from "./PaperPreview"
import Footer from "./Footer"

import { ChakraProvider, Box, Button, Center, Radio, RadioGroup, Stack, Text} from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'

function PaperSizeOptions() {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value="1">A4/A5</Radio>
        <Radio value="2">Personal</Radio>
        <Radio value="3">Pocket</Radio>
      </Stack>
    </RadioGroup>
  )
}

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Header />
      <Text fontSize="m" m={4}>Why pay for planner inserts when you can print your own!</Text>
      <Box w="100%" p={4} border="2px" borderRadius="10" borderColor='gray.400'>
        <Text>Select the paper size your planner uses:</Text>
        <br/>
        <PaperSizeOptions/>
      </Box>
      <Box display="flex" p={5}>
        <PaperSizes/>
        <PaperPreview/>
      </Box>
      <Box m={5}>
      <Center>
        <Button colorScheme='blue' size='lg'>Download</Button>
      </Center>
      </Box>
      <Footer/>
    </ChakraProvider>
  )
}
export default App;
