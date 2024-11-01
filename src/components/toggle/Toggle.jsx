import './Toggle.css';
import moon from '../../assets/icon-moon.svg';
import sun from '../../assets/icon-sun.svg';
import PropTypes from 'prop-types';

const Toggle = (props) => {
	const { handleToggle, isDarkMode } = props;

	return (
		<button
			className='toggle-button'
			onClick={handleToggle}
		>
			{isDarkMode ? 'LIGHT' : 'DARK'}{' '}
			<img
				src={isDarkMode ? sun : moon}
				alt='Toggle Theme'
				width={20}
				height={20}
			/>
		</button>
	);
};
Toggle.propTypes = {
	handleToggle: PropTypes.func.isRequired,
	isDarkMode: PropTypes.bool.isRequired,
};

export default Toggle;
