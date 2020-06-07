import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'; 
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import personReducer from './store/reducer/reducer';
const rootReduccer = combineReducers({
    res: personReducer
});
const store = createStore(rootReduccer);

ReactDOM.render(<Provider store={ store }> <App/> </Provider>, document.getElementById('root'));
registerServiceWorker();