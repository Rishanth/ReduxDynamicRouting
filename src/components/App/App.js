import React  from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import logo from '../../logo.svg';
import './App.css';

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
        </header>
         <Home/>
    </div>
);

export default App;
