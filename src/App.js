import React, { useEffect, useState } from 'react';
import { Octokit } from 'octokit';
import styled from 'styled-components';
import Theme from './theme/theme';
import HeaderBar from './components/HeaderBar';
import SearchBar from './components/SearchBar';
import UserProfileSection from './components/UserProfileSection';

function App() {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const octokit = new Octokit();

  useEffect(() => {
    getUserDate('octocat');
  }, []);

  const getUserDate = async (user) => {
    setLoading(true);
    setError(null);
    try {
      const response = await octokit.request(`GET /users/${user}`);

      if (!response.status === 200) {
        throw new Error(`Error! status: ${response.status}`);
      }

      setUserData(response.data);
    } catch (err) {
      setError('No results');
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    const value = e.target.value;

    setUserName(value.toLowerCase());
  };

  const handleClick = () => {
    getUserDate(userName);
  };

  return (
    <Theme>
      <AppContainer>
        <HeaderBar />
        <SearchBar
          handleInputChange={handleInputChange}
          userName={userName}
          handleClick={handleClick}
          loading={loading}
          error={error}
        />
        <UserProfileSection userData={userData} />
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
