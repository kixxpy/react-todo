import { useState } from 'react';
import { Todo } from '../Todo/Todo';
import styles from './TodoWrapper.module.css';

export const TodoWrapper = (): JSX.Element => {
	const [task, setTask] = useState<string>('');
	const [tasks, setTasks] = useState<string[]>([]);

	const addTask = (e: React.FormEvent): void => {
		e.preventDefault();
		setTasks([...tasks, task]);
		setTask('');
	};

	const deliteTask = (task: string) => {
		setTasks(tasks.filter(item => item !== task));
	};

	return (
		<div className={styles['todo-wrapper']}>
			<div className={styles['header']}>
				Мой список задач <span>количество задач {tasks.length}</span>
			</div>
			<div className={styles['content']}>
				{tasks.length === 0 && (
					<div>
						<div className={styles['empty']}>Список пуст...</div>
						<div className={styles['arrow']}>
							<img src='/row.png' alt='Рисунок стрелки' />
						</div>
					</div>
				)}
				{tasks.map((task, index) => (
					<Todo key={index} task={task} onDelite={task => deliteTask(task)} />
				))}
			</div>
			<div className={styles['footer']}>
				<form className={styles['form']}>
					<input
						className={styles['input']}
						value={task}
						onChange={e => setTask(e.target.value)}
						type='text'
						placeholder='Вы можете печатать здесь...'
					/>
					<button
						onClick={addTask}
						disabled={!task}
						className={styles['button']}
						type='submit'
					>
						Добавить
					</button>
				</form>
			</div>
		</div>
	);
};
