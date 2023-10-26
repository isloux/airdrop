// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config = {
  fonts: {
    heading: '"Bebas Neue", "Inter"',
    body: '"Bebas Neue", "Inter"',
  },
  textStyles: {
    question: {
      fontFamily: '"Inter"',
      fontWeight: 'bold',
      fontSize: '14pt'
    },
    answer: {
      fontFamily: '"Inter"',
      fontSize: '12pt',
      textAlign: 'justify'
    }
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    base: {
      100: "#FFFFFF",
      200: "#F7FAFC",
      300: "#1A202C",
      400: "#171923"
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("base.100", "base.300")(props)
      }
    })
  }
}

// 3. extend the theme
const theme = extendTheme( config );

export default theme;