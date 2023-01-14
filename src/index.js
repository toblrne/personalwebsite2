import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import '@fontsource/inter/400.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App overflow="hidden"/>
  </ChakraProvider>
)