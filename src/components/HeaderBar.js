/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import styled from 'styled-components';
import moonLogo from '../assets/icon-moon.svg';

const HeaderBar = () => {
  return (
    <$HeaderBar>
      <$HeaderTitle>devfinder</$HeaderTitle>
      <$ThemePicker>
        <p style={{ margin: '0px' }}>Dark</p>
        <img
          src={moonLogo}
          alt='theme logo'
        />
      </$ThemePicker>
    </$HeaderBar>
  );
};

const $HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 730px;
  margin-bottom: 36px;
`;

const $HeaderTitle = styled.h1`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  color: #222731;
  margin: 0px;
`;

const $ThemePicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  color: #697c9a;
  width: 78px;
`;

export default HeaderBar;
