import React from 'react';
import './style.css';

function TodoList(props) {
    //console.log({props})
  return (
    <div>
        <ul>
            {props.todolists.map(function(i){
                return <li>{i}</li>
            })}
        </ul>
    </div>
  )
}

export default TodoList