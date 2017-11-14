// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import Photira from './components/Photira';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const appRoot = document.querySelector('.app');
ReactDOM.render(<Photira />, appRoot);