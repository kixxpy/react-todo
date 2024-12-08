import styles from './TodoWrapper.module.css';

export const TodoWrapper = () => {
	return (
		<div className={styles['todo-wrapper']}>
			<div className={styles['header']}>
				Мой список задач <span>количество задач 3</span>
			</div>
			<div className={styles['content']}>
				loremhasdhkajhsdkhsakdhsadashdakjsdkahsdksahdasdasdasdasdasdasdasdashakdhasdhahdkhaskdadajkdhashdhadhsa
			</div>
			<div className={styles['footer']}>footer</div>
		</div>
	);
};
