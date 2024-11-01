import Toggle from '../toggle/Toggle';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
	return (
		<div className='header-container'>
			<h1 className='header'>devFinder</h1>
			<Toggle
				handleToggle={props.handleToggle}
				isDarkMode={props.isDarkMode}
			/>
		</div>
	);
};

Header.propTypes = {
	handleToggle: PropTypes.func.isRequired,
	isDarkMode: PropTypes.bool.isRequired,
};
export default Header;
