import React, { useState, useEffect } from 'react';
import { Octokit } from 'octokit';
import styled from 'styled-components';

const UserProfileSection = () => {
  const octokit = new Octokit();

  const getData = async () => {
    const data = await octokit.request('GET /users/stefanPougatchev');
    // const dataJSON = data.json();
    console.log('here', data);
  };

  getData();
  return <div>UserProfileSection</div>;
};

const $UserProfileContainer = styled.div`
  width: 730px;
  height: 419px;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
`;

export default UserProfileSection;
