// You can store all of your styles here to be used within the theme object and pass them as props to your CSS declarations

/* 
  Example:
    const ExampleDiv = styled.div`
      colors: ${props => props.theme.colors.white};   
    `
*/
import React from 'react';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    lightMode: {
      royalBlue: '#0079FF',
      grey: '#697C9A',
      blueGrey: '#4B6A9B',
      blackBlue: '#2B3442',
      lightGrey: '#F6F8FF',
      white: '#FEFEFE',
    },
    darkMode: {
      royalBlue: '#0079FF',
      white: 'FFFFFF',
      black: '#141D2F',
      darkBlue: '#1E2A47',
    },
  },
  fonts: ['Space Mono', 'sans-serif', 'Roboto'],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
