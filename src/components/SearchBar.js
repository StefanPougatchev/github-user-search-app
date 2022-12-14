import React from 'react';
import styled from 'styled-components';
import IconSearch from '../assets/icon-search.svg';

const SearchBar = (props) => {
  const { userName, handleInputChange, handleEvent, loading, error } = props;

  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === 'Enter') {
      handleEvent();
    }
  };
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
          onChange={(e) => handleInputChange(e)}
          value={userName}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </SearchInputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <LoadingMessage>Loading..</LoadingMessage>}
      <SearchButton onClick={() => handleEvent()}>Search</SearchButton>
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
  margin-left: 24px;
  border: none;
  width: 100%;
  padding: 0px;
`;

const ErrorMessage = styled.p`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #f74646;
  margin-right: 24px;
  white-space: nowrap;
`;

const LoadingMessage = styled.p`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #0079ff;
  margin-right: 24px;
  white-space: nowrap;
`;

export default SearchBar;
