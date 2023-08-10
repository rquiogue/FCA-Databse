import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return ( 
    < ChakraProvider>
      <HomeScreen />
    </ChakraProvider>
  )
}

export default App