import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Fonts from './components/fonts';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme(
      {
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
        }
      }
    )}>
      <Fonts />
      <App />    
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
