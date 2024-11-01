import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/search-bar/SearchBar';
import ProfileBody from './components/profile/ProfileBody';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	const handleUserInfo = (data) => {
		setUserInfo(data);
	};

	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div
			className='App'
			data-theme={darkMode ? 'dark' : ''}
		>
			<div className='main-container'>
				<Header
					handleToggle={toggleTheme}
					isDarkMode={darkMode}
				/>
				<SearchBar handleUserInfo={handleUserInfo} />
				{userInfo && <ProfileBody userInfo={userInfo} />}
			</div>
		</div>
	);
}

export default App;
