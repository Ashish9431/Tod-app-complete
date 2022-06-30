import React from 'react'

const TodoItem = ({id, title, handleToggle, updateDelete}) => { 
    
    return (
      <div className="single" style={{ 
        padding: "1rem",  
        border: "2px solid red", 
        borderRadius: "10px",   
        display: "flex", 
        gap: "1rem"  
      }}>  
        <div> {title} </div>
        <div> TOGGLE </div>    
        <button onClick={()=>handleToggle(id)}> TOGGLE </button>   
        <button onClick={()=>updateDelete(id)}> DELETE </button>   
      </div>
    )
}

export default TodoItem