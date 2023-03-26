import React, { useState } from 'react'
import TodoList from './TodoList'
import './style.css'

function AddTodo() {
    const [todolist,setTodoList]=useState([])
    const [mytask,setMyTask]=useState("")

    function handleSubmit(event){
        event.preventDefault()
        if(mytask !==""){
            setTodoList([...todolist,mytask])
            setMyTask("") 
        }
        
    }

    function cleardata(){
        if (document.getElementById("blank").value !=""){
            setTodoList([mytask])
        }
        
         //console.log(mytask)
        document.getElementById("blank").innerHTML=""
    }

  return (
    <div className="Todo">
             <h1>TODO List</h1>
        <div className='form-box'>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={function(i){
                    setMyTask(i.target.value)
                }} value={mytask}/>
                <button type="submit">Submit</button>
                <button onClick={cleardata} className="delete">Delete</button>  
            {/* <button onClick={clearlist}>Clear List</button> */}
            {/*  */}
            </form>
        </div>
        
        {/* <button onClick={clearIt}>Clear</button> */}
        {/* <TodoList todolists={todolist}/> */}
        <ul>
            {
                    todolist.map(function(todo,index){
                        // return <li>{todo} </li>
                        return(
                            <div id="blank">
                            <li>{todo} </li>
                            {/* <button onClick={cleardata(index)}>Clear</button> */}
                        </div>
                        )
    
                    })
            }
        </ul>
        
    </div>

  )
}

export default AddTodo