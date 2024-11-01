import { useState, useEffect } from 'react';
import './SearchBar.css';
import SearchIcon from '../../assets/icon-search.svg';
import { Octokit } from 'octokit';

import PropTypes from 'prop-types';

const octokit = new Octokit({
	auth: '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',
});

const SearchBar = (props) => {
	const { handleUserInfo } = props;
	const [inputValue, setInputValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchUserData = async (userName) => {
		setIsLoading(true);
		setError(false);
		try {
			const response = await octokit.request(`GET /users/${userName}`);
			handleUserInfo(response.data);
			setError(null);
		} catch (err) {
			setError(err);
			handleUserInfo(null);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSearch = () => {
		fetchUserData(inputValue);
	};

	useEffect(() => {
		fetchUserData('octocat');
	}, []);

	return (
		<div className='search-bar-container'>
			<img
				src={SearchIcon}
				alt='Search icon'
			/>
			<input
				className='input-bar'
				type='text'
				placeholder='Search Github UserName...'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
			/>
			{error && <span>No results</span>}
			<button
				className='search-button'
				onClick={() => inputValue.length && handleSearch()}
			>
				{isLoading ? '...Loading' : 'Search'}
			</button>
		</div>
	);
};

SearchBar.propTypes = {
	handleUserInfo: PropTypes.func.isRequired,
};

export default SearchBar;
