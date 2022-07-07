import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './Containers/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
     <React.StrictMode>
    <App/>
    </React.StrictMode>
  </div>
);


reportWebVitals();
