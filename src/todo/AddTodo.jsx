import React, { useState } from 'react'

const AddTodo = ({handleAdd}) => {  
  const [text, setText] = useState("");  
  return (
    <div>
      <input 
      type="text" 
      placeholder='Add Something' 
      value={text}  
      onChange={(e)=>setText(e.target.value)}  
      /> 
      <button onClick={()=>handleAdd(text)}> ADD </button>  
    </div> 
  )
}  

export default AddTodo  


