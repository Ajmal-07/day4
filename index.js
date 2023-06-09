import React from 'react';
import ReactDOM from 'react-dom/client';
import FruitSurvey from './comp/fruit';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Header from './comp/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    < Header/> */}
    <FruitSurvey/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
