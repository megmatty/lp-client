import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
const store = configureStore(); //initial state can be passed in here

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<Provider store={store}>
  		<App />
  	</Provider>, div);
});
