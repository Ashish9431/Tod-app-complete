import React, { useState } from 'react'
import AddTodo from './AddTodo'; 
import TodoList from './TodoList';


const Todo = () => {  
    const [todos , setTodos] = useState([]);    
    
    // ADDONG DATA 
    const handleAdd = (text)=>{
      setTodos([
        ...todos ,  
        {
          id: todos.length + Date.now(),  
          title: text,  
          status: false  
        }
      ]); 
    };   

    // function to make status= false : true  
    const handleToggle = (id)=>{  
      const updateDate = todos.map((item) =>  item.id === id ? {
        ...item,  
        status: !item.status  
      } : item )    
      setTodos(updateDate);   
    };  

    // delete function  
    const updateDelete = (id)=>{  
      const Delete = todos.filter((item)=> item.id !== id);   
      setTodos(Delete);     
    }   

  
  return (
    <div>
        <AddTodo handleAdd={handleAdd} />   
        <div className='data'>
        <div>   
          <h2> IN-COMPLEATED </h2>  
          <TodoList  
          data={todos.filter((item)=> !item.status)}   
          handleToggle={handleToggle}   
          updateDelete={updateDelete}   
          />  
        </div>    
        <div>
          <h2> COMPLEATED </h2>   
          <TodoList  
          data={todos.filter((item)=> item.status)}   
          handleToggle={handleToggle}   
          updateDelete={updateDelete}   
          />  
          
        </div> 
        </div>
    </div>  
  )
}

export default Todo