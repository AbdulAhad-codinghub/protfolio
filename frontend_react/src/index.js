import react from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import './index.css';

//older react syntax :
// ReactDOM.render(<App/>, document.getElementById('root')); 

//New version react thatswhy use this syntax
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);