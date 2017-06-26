import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import configureStore from './store/configureStore';
const store = configureStore(); 
//Have to add redux files and Provider to test components this way now

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<Provider store={store}>
  		<Router>
				<App />
			</Router>
  	</Provider>, div);
});
