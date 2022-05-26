import React from "react";
import "./style.css";

import Todo from './components/Todo';
import Modal from './components/Modal';

export default function App() {
  return (
    <div>
      <h1 className='title'>Todo App</h1>
      <Todo title='Learn React'/>
      <Modal />
    </div>
  );
}
