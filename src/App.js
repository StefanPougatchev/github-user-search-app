import React from 'react';
import styled from 'styled-components';
import Theme from './theme/theme';
import HeaderBar from './components/HeaderBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Theme>
      <AppContainer>
        <HeaderBar />
        <SearchBar />
      </AppContainer>
    </Theme>
  );
}

export default App;

// AppContainer styles. Centers <Header /> component
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts[0]};
  height: 100vh;
  background: #f6f8ff;
  color: ${(props) => props.theme.colors.lightMode.r}; ;
`;
