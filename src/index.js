import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore(); //initial state can be passed in here

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();


//when you update this ReactDOM render in any way, UPDATE THE TEST