import PropTypes from 'prop-types';
import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';
import ProfileStats from './ProfileStats';
import ProfileSocial from './ProfileSocial';
import './ProfileBody.css';

const ProfileBody = ({ userInfo }) => {
	if (!userInfo) return null;

	const {
		name: userName,
		login: profileName,
		html_url: profileUrl,
		avatar_url: avatarUrl,
		created_at: joinedDate,
		bio: profileBio,
		public_repos: repos,
		following,
		followers,
		location,
		company,
		blog,
		twitter_username,
	} = userInfo;

	console.log(userInfo);

	return (
		<div className='profile-body-container'>
			<ProfileHeader
				userName={userName}
				profileName={profileName}
				profileUrl={profileUrl}
				avatarUrl={avatarUrl}
				joinedDate={joinedDate}
			/>
			<div className='profile-main-content-container'>
				{profileBio && <ProfileBio bio={profileBio} />}
				<ProfileStats
					repos={repos}
					followers={followers}
					following={following}
				/>
				<ProfileSocial
					location={location}
					company={company}
					twitter={twitter_username}
					blog={blog}
				/>
			</div>
		</div>
	);
};

ProfileBody.propTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string,
		login: PropTypes.string,
		html_url: PropTypes.string,
		avatar_url: PropTypes.string,
		created_at: PropTypes.string,
		bio: PropTypes.string,
		public_repos: PropTypes.number,
		following: PropTypes.number,
		followers: PropTypes.number,
		location: PropTypes.string,
		blog: PropTypes.string,
		twitter_username: PropTypes.string,
		company: PropTypes.string,
	}).isRequired,
};

export default ProfileBody;
