import './App.css';
import { TodoWrapper } from './components/TodoWrapper/TodoWrapper';

function App(): JSX.Element {
	return (
		<div className='App'>
			<ul className='circles'>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<TodoWrapper />
		</div>
	);
}

export default App;
