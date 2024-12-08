import cn from 'classnames';
import { useState } from 'react';
import styles from './Todo.module.css';
import { TodoProps } from './Todo.props';

export const Todo = ({ task, onDelite }: TodoProps): JSX.Element => {
	const [completed, setCompleted] = useState<boolean>(false);

	const completedStyle = () => {
		setCompleted(!completed);
	};

	return (
		<div className={styles['todo']}>
			<div className={styles['buttons']}>
				<button onClick={() => onDelite(task)} className={styles['button']}>
					<img src='/trash.png' alt='Иконка удаления' />
				</button>
				<button onClick={completedStyle} className={styles['button']}>
					<img src='/done.png' alt='Иконка выполено' />
				</button>
			</div>
			<div className={cn(styles['task'], { [styles['completed']]: completed })}>
				{task}
			</div>
		</div>
	);
};
