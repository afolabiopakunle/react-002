import React from 'react';

function Backdrop(props) {
  return (<div onClick={props.onCancel} className='backdrop' />)
}

export default Backdrop;