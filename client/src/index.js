import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import Title from './Title';
import Addtasks from './Addtasks';
import CAlert from './Alert';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Title title="TODO-APP"/>
    <Addtasks label="Add New Todo?" placeholder="Add your todos"/>
    <CAlert variant='danger' message="No todos Found!!"/>
  </React.StrictMode>
);

