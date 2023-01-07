import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap5/src/css/bootstrap.min.css';
import './index.css'
// import App from './App';
// import Home from './component/home'
// import About from './component/about'
import Header from './component/01header'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    {/* <About/> */}
    <Header />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
