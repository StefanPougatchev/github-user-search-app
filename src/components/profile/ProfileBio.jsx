import PropTypes from 'prop-types';
import './ProfileBio.css';

const ProfileBio = (props) => {
	const { bio } = props;
	return <div className='profile-bio'>{bio}</div>;
};

ProfileBio.propTypes = {
	bio: PropTypes.string.isRequired,
};

export default ProfileBio;
