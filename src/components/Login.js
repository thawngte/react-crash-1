import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {

	const navigate = useNavigate();

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	function onChange(event) {
		setUsername(event.target.value);
	}

	function submitForm(e) {
		e.preventDefault();
		// console.log('submit:', 'form is submitted');
		const data = {
			username: username,
			password: password
		};

		localStorage.setItem('form-data', JSON.stringify(data));
		navigate('/profile');
	}

	// console.log('username', username);
	// console.log('password', password);

	return (
		<div>
			<form onSubmit={submitForm} >
				<label for='username'>Username:</label>
				<br />
				<input type='text' id='username' name='username' onChange={(e) => onChange(e)} required />
				<br />
				<label for='pwd'>Password:</label>
				<br />
				<input type='password' id='pwd' name='pwd' onChange={(e) => setPassword(e.target.value)} required />
				<br/>
				<button>
					<div type="submit">Submit</div>
				</button>
			</form>
		</div>
	);
};

export default Login;
