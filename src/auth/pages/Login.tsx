import styles from './Login.module.css';

const LoginPage = () => {
	return (
		<div className={styles['page']}>
			<form className={styles['form']}>
				<input type='text' name='username' id='username' placeholder='Username' />
				<input type='password' name='password' id='password' placeholder='Password' />
				<button>Login</button>
			</form>
		</div>
	);
};

export default LoginPage;
