import styles from './Todo.module.css';
import { TodoProps } from './Todo.props';

export const Todo = ({ task }: TodoProps): JSX.Element => {
	return (
		<div className={styles['todo']}>
			<div className={styles['buttons']}>
				<button className={styles['button']}>
					<img src='/trash.png' alt='Иконка удаления' />
				</button>
				<button className={styles['button']}>
					<img src='/done.png' alt='Иконка выполено' />
				</button>
			</div>
			<div className={styles['task']}>{task}</div>
		</div>
	);
};
