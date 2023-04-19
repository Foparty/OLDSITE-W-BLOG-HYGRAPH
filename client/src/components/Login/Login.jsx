import React, { useState, useContext } from 'react';
import styles from './Login.module.css';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext.jsx';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);
	const { setUserInfo } = useContext(UserContext);

	async function login(ev) {
		ev.preventDefault();
		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});
		if (response.ok) {
			response.json().then((userInfo) => {
				setUserInfo(userInfo);
				setRedirect(true);
			});
		} else {
			alert('wrong credentials');
		}
	}

	if (redirect) {
		return <Navigate to={'/'} />;
	}
	return (
		<section className={styles.data}>
			<h1 className={styles.title}>Login</h1>
			<form className={styles.form} onSubmit={login}>
				<div className={styles.formcontrol}>
					<label htmlFor='username'>username</label>
					<input
						id='username'
						type='text'
						placeholder={'usename'}
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
				<div className={styles.formcontrol}>
					<label htmlFor='password'>password</label>
					<input
						id='password'
						type='password'
						placeholder={'password'}
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<button className={styles.submit}>Send</button>
			</form>
		</section>
	);
};

export default Login;
