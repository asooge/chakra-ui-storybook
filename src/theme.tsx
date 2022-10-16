import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  fonts: {
    heading: 'Futura PT',
    body: 'Futura PT',
  },
  fontSizes: {
    heading: {
      xs: '14px',
      sm: '16px',
      md: '20px',
      lg: '24px',
      xl: '30px',
      '2xl': '36px',
      '3xl': '48px',
      '4xl': '60px',
      '5xl': '72px',
    },
    text: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
    },
    radii: {
      sm: '4px',
      md: '8px',
      lg: '12px',
    },
  },
  colors: {
    green: {
      200: '#C3F7E5',
      400: '#61ECBC',
      500: '#53E0AF',
      600: '#00D395',
    },
    gray: {
      100: '#F8F9FA',
      200: '#EBEFF2',
      300: '#E2E8F0',
      600: '#A4ADBF',
      900: '#36435C',
    },
    blue: {
      300: '#82A9F1',
      400: '#698AFE',
      500: '#4164A3',
      600: '#0C1E59',
      700: '#03144D',
      800: '#18232F',
      850: '#23303E',
      900: '#0D1521',
    },
    red: {
      200: '#FDE9E9',
      400: '#F6BABA',
      600: '#D90000',
    },
    white: '#FCFCFC',
    error: '#EC6169',
  },
  breakpoints,
})

export default theme
