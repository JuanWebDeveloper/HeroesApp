import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import './styles/default.css';

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
