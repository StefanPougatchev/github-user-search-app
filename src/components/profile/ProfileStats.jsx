import PropTypes from 'prop-types';
import './ProfileStats.css';

const ProfileStats = (props) => {
	const { repos, followers, following } = props;
	return (
		<div className='profile-stats-container'>
			<div className='profile-stat'>
				<p className='stat-title'>Repos</p>
				<div className='stat-number'>{repos}</div>
			</div>
			<div className='profile-stat'>
				<p className='stat-title'>Followers</p>
				<div className='stat-number'>{followers}</div>
			</div>
			<div className='profile-stat'>
				<p className='stat-title'>Following</p>
				<div className='stat-number'>{following}</div>
			</div>
		</div>
	);
};

ProfileStats.propTypes = {
	repos: PropTypes.number,
	followers: PropTypes.number,
	following: PropTypes.number,
};

export default ProfileStats;
