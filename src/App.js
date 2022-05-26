import React from "react";
import "./style.css";

import Todo from './components/Todo';

export default function App() {
  return (
    <div>
      <h1 className='title'>Todo App</h1>
      <Todo title='Learn React'/>
    </div>
  );
}
