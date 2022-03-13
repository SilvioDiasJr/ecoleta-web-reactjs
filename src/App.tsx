import React from 'react'

import { ThemeProvider } from 'styled-components'

import { RoutesApp } from '@routes'

import theme from '@global/styles/theme'
import { GlobalStyle } from '@global/styles/global'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RoutesApp />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
