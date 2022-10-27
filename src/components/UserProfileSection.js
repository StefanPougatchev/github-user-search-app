import React from 'react';
import styled from 'styled-components';

const UserProfileSection = (props) => {
  const { userData } = props;
  const imgUrl = userData.avatar_url;
  const date = new Date(userData.created_at);
  const formattedDate = date.toDateString().split(' ').slice(1).join(' ');

  console.log(date.getMonth());
  return (
    <UserProfileContainer>
      <UserProfielImgContainer>
        <UserProfielImg
          src={imgUrl}
          alt='profile picture'
        />
      </UserProfielImgContainer>
      <UserProfileInfoContainer>
        <UserProfileHeading>
          <UserTitle>{userData.name}</UserTitle>
          <HeadingDate>{`Joined ${formattedDate}`}</HeadingDate>
        </UserProfileHeading>
        <AnchorLink href={userData.html_url}>{`@${userData.login}`}</AnchorLink>
      </UserProfileInfoContainer>
    </UserProfileContainer>
  );
};
const HeadingDate = styled.p`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: right;
  margin: 0px;
  color: #697c9a;
`;
const UserTitle = styled.h1`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  /* identical to box height */

  color: #2b3442;
  margin: 0px;
`;

const AnchorLink = styled.a`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #0079ff;
`;
const UserProfileHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const UserProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 48px 48px 48px 37px;
  width: 480px;
  border: 1px solid black;
`;

const UserProfielImg = styled.img`
  width: 117px;
  height: 117px;
  border-radius: 50%;
`;

const UserProfielImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 117px;
  height: 117px;
  margin-top: 48px;
  margin-left: 48px;
`;

const UserProfileContainer = styled.div`
  width: 730px;
  height: 419px;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default UserProfileSection;
