import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<section className={styles.data}>
			<h1 className={styles.title}>Login</h1>
			<form className={styles.form}>
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
						type='text'
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
