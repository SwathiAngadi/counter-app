import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Counter from './Counter.tsx';

function App() {
  return (
    <Fragment>
        <h1>Project without CRA!</h1>
        <Counter />
    </Fragment>
 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);