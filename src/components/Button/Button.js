import styles from './Button.module.css';

const Button = ({ children, onClick, bg, color }) => {
	return (
		<>
			<button
				className={styles.button}
				style={{ background: bg, color: color }}
				onClick={onClick}
			>
				{children}
			</button>
		</>
	);
};
export default Button;
