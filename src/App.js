import './App.css'
import { createTheme, ThemeProvider, CssBaseline, Box } from '@mui/material'

import React from 'react'
import Main from './components/Main'

const font = "'Rubik', sans-serif"
const fontTheme = createTheme({
  typography: {
    fontFamily: font,
  },
})

export default function App() {
  return (
    <ThemeProvider theme={fontTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{
        display: { xs: 'block', sm: 'none' },
        height: '100vh',
        p: '64px', pb: '128px'
      }}>
        <Main />
      </Box>
    </ThemeProvider>
  )
}