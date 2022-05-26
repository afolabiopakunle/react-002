import React from 'react';

function Todo(props) {

  function deleteHandler() {
    alert(props.title)
  }

  return (
    <div className='card'>
      <h2 className='title'>{props.title}</h2>
      <div className='actions'>
        {/* <button className='btn btn--alt'>Clear</button> */}
        <button className='btn' onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  )
}

export default Todo;