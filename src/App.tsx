import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraBaseProvider, extendBaseTheme, Box, Button, Center, Radio, RadioGroup, Stack } from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'

const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    }
}

const theme = extendBaseTheme({
  colors
})

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
    <ChakraBaseProvider theme={theme}>
      <Box w="100%" p={4}>
        This is a box
        <br/>
        select the paper size: a4/a5, personal, pocket
        - when it changes, change the list of options
        <br/>

        list of options
        <br/>
        <PaperSizeOptions/>
      </Box>
      <Center>
        <Button colorScheme='blue' size='lg'>Download</Button>
      </Center>
    </ChakraBaseProvider>
  )
}
export default App;
