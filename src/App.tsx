import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraBaseProvider, extendBaseTheme, Box} from '@chakra-ui/react'
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

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraBaseProvider theme={theme}>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is a box
      </Box>
    </ChakraBaseProvider>
  )
}
export default App;
