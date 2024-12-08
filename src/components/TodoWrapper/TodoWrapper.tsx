import { useState } from 'react';
import { Todo } from '../Todo/Todo';
import styles from './TodoWrapper.module.css';

export const TodoWrapper = (): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>('');
	const [tasks, setTasks] = useState<string[]>([]);

	const addTask = (e: React.FormEvent): void => {
		e.preventDefault();
		setTasks([...tasks, inputValue]);
		setInputValue('');
	};

	return (
		<div className={styles['todo-wrapper']}>
			<div className={styles['header']}>
				Мой список задач <span>количество задач {tasks.length}</span>
			</div>
			<div className={styles['content']}>
				{tasks.length === 0 && (
					<div className={styles['empty']}>Список задач пуст...</div>
				)}
				{tasks.map((task, index) => (
					<Todo key={index} task={task} />
				))}
			</div>
			<div className={styles['footer']}>
				<form className={styles['form']}>
					<input
						className={styles['input']}
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						type='text'
						placeholder='Вы можете печатать здесь...'
					/>
					<button
						onClick={addTask}
						disabled={!inputValue}
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
