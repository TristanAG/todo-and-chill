import React from 'react'
import ReactDOM from 'react-dom'
import './css/normalize.css'
import './css/skeleton.css'
import './css/index.css'
import TodoApp from './components/TodoApp'
import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
