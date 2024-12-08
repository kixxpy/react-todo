import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='App'>
			<App />
		</div>
	</StrictMode>
);
