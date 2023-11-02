import React from 'react';
import ReactDOM from 'react-dom/client';

//- node_modules에 설치한 요소들은 바로 이름을 사용하여 접근 가능
import 'bootstrap/dist/css/bootstrap.min.css';
//이곳에 bootwatch css파일을 불러오는 구문을 작성
import 'bootswatch/dist/vapor/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
