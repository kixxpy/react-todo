import { useEffect, useState } from 'react';
import { Todo } from '../Todo/Todo';
import styles from './TodoWrapper.module.css';

export const TodoWrapper = (): JSX.Element => {
	const [task, setTask] = useState<string>('');
	const [tasks, setTasks] = useState<string[]>([]);

	useEffect(() => {
		const savedTodos =
			JSON.parse(localStorage.getItem('todos') as string) || [];
		setTasks(savedTodos);
	}, []);

	const addTask = (task: string) => {
		const newTodos = [...tasks, task];
		setTasks(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	const deleteTask = (task: string) => {
		const newTodos = tasks.filter(todo => todo !== task);
		setTasks(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
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
					<Todo key={index} task={task} onDelite={task => deleteTask(task)} />
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
						onClick={e => {
							e.preventDefault();
							addTask(task);
							setTask('');
						}}
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
