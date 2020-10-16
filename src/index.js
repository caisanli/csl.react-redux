import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './lib/redux';
import { Provider } from './lib/react-redux-16';
import reducer from './reducer';
import './index.css';
import App from './App';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
  document.getElementById('root')
);
