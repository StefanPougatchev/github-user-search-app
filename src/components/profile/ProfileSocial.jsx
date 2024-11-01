import PropTypes from 'prop-types';
import './ProfileSocial.css';
import Company from '../../assets/icon-company.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Website from '../../assets/icon-website.svg';
import Location from '../../assets/icon-location.svg';

const ProfileSocial = ({ location, company, blog, twitter }) => {
	return (
		<div className='profile-social-container'>
			<div className='profile-social-column'>
				<div className='profile-social'>
					<img
						className='social-img'
						src={Location}
						alt='location-icon'
					/>
					<p className='social-title'>
						{location ? location : 'Not Available'}
					</p>
				</div>
				<div className='profile-social'>
					<img
						className='social-img'
						src={Website}
						alt='blog-icon'
					/>
					<p className='social-title'>{blog ? blog : 'Not Available'}</p>
				</div>
			</div>
			<div className='profile-social-column'>
				<div className='profile-social'>
					<img
						className='social-img'
						src={Twitter}
						alt='location-icon'
					/>
					<p className='social-title'>{twitter ? twitter : 'Not Available'}</p>
				</div>
				<div className='profile-social'>
					<img
						className='social-img'
						src={Company}
						alt='blog-icon'
					/>
					<p className='social-title'>{company ? company : 'Not Available'}</p>
				</div>
			</div>
		</div>
	);
};

ProfileSocial.propTypes = {
	location: PropTypes.string,
	company: PropTypes.string,
	blog: PropTypes.string,
	twitter: PropTypes.string,
};

export default ProfileSocial;
