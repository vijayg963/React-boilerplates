import React from 'react';
import ReactDOM from 'react-dom';
import { username } from './main';
import '../style/style.scss';

console.log(username);
// console.log(await new Promise((res) => res('Hello Babel top level await')));

function App() {
  return <h1>hello world form App component {username}</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
