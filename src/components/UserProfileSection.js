import React from 'react';
import styled from 'styled-components';

import LocationLogo from '../assets/icon-location.svg';
import TwitterLogo from '../assets/icon-twitter.svg';
import WebsiteLogo from '../assets/icon-website.svg';
import CompanyLogo from '../assets/icon-company.svg';

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
        {userData.bio ? (
          <ProfileBio>{userData.bio}</ProfileBio>
        ) : (
          <ProfileBio>This profile has no bio</ProfileBio>
        )}
        <UserStatsConatiner>
          <UserStatColumnRepos>
            <UserStatTitle>Repos</UserStatTitle>
            <UserStateNumber>{userData.public_repos}</UserStateNumber>
          </UserStatColumnRepos>
          <UserStatColumnFollowers>
            <UserStatTitle>Followers</UserStatTitle>
            <UserStateNumber>{userData.followers}</UserStateNumber>
          </UserStatColumnFollowers>
          <UserStatColumnFollowing>
            <UserStatTitle>Following</UserStatTitle>
            <UserStateNumber>{userData.following}</UserStateNumber>
          </UserStatColumnFollowing>
        </UserStatsConatiner>
        <LinksContainer>
          <LinkColumn>
            <LinkDiv>
              <img
                src={LocationLogo}
                alt='location logo'
              />
              {userData.location ? (
                <LinkAnchor>{userData.location}</LinkAnchor>
              ) : (
                <LinkAnchor>Not Available</LinkAnchor>
              )}
            </LinkDiv>
            <LinkDiv>
              <img
                src={WebsiteLogo}
                alt='blog logo'
                width='14px'
              />
              {userData.blog ? (
                <LinkAnchor href={userData.blog}>User Website</LinkAnchor>
              ) : (
                <LinkAnchor>Not Available</LinkAnchor>
              )}
            </LinkDiv>
          </LinkColumn>
          <LinkColumn>
            <LinkDiv>
              <img
                src={TwitterLogo}
                alt='twitter logo'
              />
              {userData.twitter_username ? (
                <LinkAnchor
                  href={`twitter.com/${userData.twitter_username}`}
                >{`@${userData.twitter_username}`}</LinkAnchor>
              ) : (
                <LinkAnchor>Not Available</LinkAnchor>
              )}
            </LinkDiv>

            <LinkDiv>
              <img
                src={CompanyLogo}
                alt='company logo'
              />
              {userData.company ? (
                <LinkAnchor>{userData.company}</LinkAnchor>
              ) : (
                <LinkAnchor>Not Available</LinkAnchor>
              )}
            </LinkDiv>
          </LinkColumn>
        </LinksContainer>
      </UserProfileInfoContainer>
    </UserProfileContainer>
  );
};

const LinksContainer = styled.div`
  width: 48px;
  /* margin-bottom: 48px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  gap: 20px;
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
`;

const LinkAnchor = styled.a`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  white-space: nowrap;
  color: #4b6a9b;
  margin-left: 16px;
  text-decoration: none;
`;

const UserStateNumber = styled.p`
  padding: 0px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  /* identical to box height */

  text-transform: uppercase;

  color: #2b3442;
  margin: 0px;
`;
const UserStatTitle = styled.p`
  padding: 0px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;

  color: #4b6a9b;
  margin: 0px;
`;

const UserStatColumnRepos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 99px 17px 32px;
`;

const UserStatColumnFollowing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  margin-bottom: 17px;
  margin-right: 83px;
`;

const UserStatColumnFollowers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  margin-bottom: 17px;
  margin-right: 82px;
`;

const UserStatsConatiner = styled.div`
  display: flex;
  width: 480px;
  height: 85px;
  background: #f6f8ff;
  border-radius: 10px;
  margin-bottom: 39px;
`;

const ProfileBio = styled.p`
  width: 100%;
  padding: 0px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: #4b6a9b;

  mix-blend-mode: normal;

  margin: 20px 0px 32px;
`;
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
