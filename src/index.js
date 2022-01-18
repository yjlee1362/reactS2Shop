import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';



let 기본state = [{ id: 0, name: 'shoes', quan: 2 },
{ id: 1, name: 'shoes1', quan: 4 },
{ id: 2, name: 'shoes2', quan: 5 }];

function reducer(state = 기본state, 액션) {
  if (액션.type === '수량증가') {
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if (액션.type === '수량감소' && state[0].quan > 0) {
    let copy = [...state];
    copy[0].quan--;
    return copy
  }
  else {
    return state
  }
}


let store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
