import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = {
  title: 'todo and chill'
}

const template = (
  <div className="container" style={{marginTop: '15px'}}>
    <header>
      <h5>{app.title}</h5>
    </header>
    <p>hello</p>
  </div>
)

ReactDOM.render(template, document.getElementById('root'));
registerServiceWorker();
