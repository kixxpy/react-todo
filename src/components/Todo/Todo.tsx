import styles from './Todo.module.css';
import { TodoProps } from './Todo.props';

export const Todo = ({ task, onDelite }: TodoProps): JSX.Element => {
	return (
		<div className={styles['todo']}>
			<div className={styles['buttons']}>
				<button onClick={() => onDelite(task)} className={styles['button']}>
					<img src='/trash.png' alt='Иконка удаления' />
				</button>
			</div>
			<div className={styles['task']}>{task}</div>
		</div>
	);
};
