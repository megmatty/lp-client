import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './App';
import GameList from './components/GameList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore(); //initial state can be passed in here

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
