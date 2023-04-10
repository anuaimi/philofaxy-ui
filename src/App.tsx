import * as React from 'react'
import PaperSizes from "./PaperSizes"
import PaperPreview from "./PaperPreview"

import { ChakraProvider, Box, Button, Center, Heading, Radio, RadioGroup, Stack, Text} from '@chakra-ui/react'
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
      <Heading as="h1">Print Planner Inserts</Heading>
      <Text>Why pay for planner inserts when you can print your own!</Text>
      <Box w="100%" p={4} border="2px" borderRadius="10" borderColor='gray.400'>
        <Text>Select the paper size your planner uses:</Text>
        <br/>
        <PaperSizeOptions/>
      </Box>
      <Box p={5}>
        <PaperSizes/>
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
    </ChakraProvider>
  )
}
export default App;
