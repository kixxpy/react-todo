import styles from './TodoWrapper.module.css';

export const TodoWrapper = () => {
	return (
		<div className={styles['todo-wrapper']}>
			<div className={styles['header']}>header</div>
			<div className={styles['content']}>
				loremhasdhkajhsdkhsakdhsadashdakjsdkahsdksahdasdasdasdasdasdasdasdashakdhasdhahdkhaskdadajkdhashdhadhsa
			</div>
			<div className={styles['footer']}>footer</div>
		</div>
	);
};
