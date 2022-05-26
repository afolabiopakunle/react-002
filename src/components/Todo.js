import React from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  function deleteHandler() {
    alert(props.title);
  }

  return (
    <div>
      <div className="card">
        <h2 className="title">{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default Todo;
