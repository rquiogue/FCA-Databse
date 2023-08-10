import React from 'react'
import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';

const App = () => {
  return ( 
    < ChakraProvider>
      <Header></Header>
      <Outlet/>
    </ChakraProvider>
  )
}

export default App