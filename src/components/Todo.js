import React, { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [isModalOpen, setModalState] = useState(false)
  function deleteHandler() {
    setModalState(true)
  }

  function cancelHandler() {
    setModalState(false)
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
      { isModalOpen && <Modal /> }
      { isModalOpen && <Backdrop onCancel={cancelHandler}/> }
    </div>
  );
}

export default Todo;
