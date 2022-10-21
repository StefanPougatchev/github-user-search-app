import React from 'react';
import styled from 'styled-components';
import Theme from './theme/theme';
import HeaderBar from './components/HeaderBar';
import SearchBar from './components/SearchBar';
import UserProfileSection from './components/UserProfileSection';

function App() {
  return (
    <Theme>
      <AppContainer>
        <HeaderBar />
        <SearchBar />
        <UserProfileSection />
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
