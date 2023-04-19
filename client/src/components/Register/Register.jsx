import React, { useState } from 'react';
import styles from './Register.module.css';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	async function register(ev) {
		ev.preventDefault();
		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' },
		});
		if (response.status === 200) {
			alert('registration successful');
		} else {
			alert('registration failed');
		}
		setUsername('');
		setPassword('');
	}
	// const userRef = useRef();
	// const passRef = useRef();
	return (
		<section className={styles.data}>
			<h1 className={styles.title}>Register</h1>
			<form className={styles.form} onSubmit={register}>
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

export default Register;
