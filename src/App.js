import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/profile' element={<Profile />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
