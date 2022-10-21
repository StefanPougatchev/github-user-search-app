import React, { useState } from 'react';
import styled from 'styled-components';
import IconSearch from '../assets/icon-search.svg';

const SearchBar = () => {
  const [userName, setUserName] = useState('');

  return (
    <SearchBarContainer>
      <SearchInputContainer>
        <img
          src={IconSearch}
          alt='search icon'
          width='24px'
          height='24px'
        />
        <SearchInput
          placeholder='Search GitHub username...'
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </SearchInputContainer>
      <SearchButton>Search</SearchButton>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  width: 730px;
  height: 69px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  margin-bottom: 24px;
`;

const SearchButton = styled.button`
  height: 50px;
  width: 106px;
  background: #0079ff;
  border-radius: 10px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  border: none;
  margin-right: 10px;

  :active {
    background: #60abff;
  }
`;

const SearchInputContainer = styled.div`
  display: flex;
  margin-left: 32px;
  justify-content: center;
  align-items: center;
  width: 530px;
`;

const SearchInput = styled.input`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #222731;
  margin-left: 23px;
  border: none;
  width: 100%;
`;

export default SearchBar;
