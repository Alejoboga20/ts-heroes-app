import styles from './Login.module.css';

const LoginPage = () => {
	return (
		<main className={styles.login}>
			<form className={styles.login__form}>
				<div className={styles.login__input}>
					<input type='text' name='username' id='username' placeholder='Username' />
					<input type='password' name='password' id='password' placeholder='Password' />
					<p>Welcome to your hero wiki</p>
				</div>
				<button className={styles.login__button}>Login</button>
			</form>
		</main>
	);
};

export default LoginPage;
