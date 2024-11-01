import PropTypes from 'prop-types';
import './ProfileHeader.css';

const formatDate = (dateString) => {
	const options = { day: '2-digit', month: 'short', year: 'numeric' };
	const date = new Date(dateString);
	return `Joined ${date.toLocaleDateString('en-GB', options)}`;
};

const ProfileHeader = ({
	userName,
	profileName,
	profileUrl,
	avatarUrl,
	joinedDate,
}) => {
	return (
		<div className='profile-header-container'>
			<img
				src={avatarUrl}
				alt='profile-picture'
				className='profile-img'
			/>
			<div className='profile-header-text-container'>
				<div className='profile-header-titles'>
					<h1 className='userName'>{userName}</h1>
					<a
						className='profileName'
						href={profileUrl}
						target='_blank'
						rel='noopener noreferrer'
					>{`@${profileName}`}</a>
				</div>
				<p className='joined-date'>{formatDate(joinedDate)}</p>
			</div>
		</div>
	);
};

ProfileHeader.propTypes = {
	userName: PropTypes.string.isRequired,
	profileName: PropTypes.string.isRequired,
	profileUrl: PropTypes.string.isRequired,
	avatarUrl: PropTypes.string.isRequired,
	joinedDate: PropTypes.string.isRequired,
};

export default ProfileHeader;
