import React,{useState} from 'react';
import './Todo.css';
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import Task from './Task.js'



const Todo = () => {

    const  [newTask, setNewTask] = useState('');
    const  [taskArray, setTaskArray] = useState([])

    const addTask = () => {

        setTaskArray(
            (prevTask) => {
                return [...prevTask, newTask]
            }
        );

        setNewTask('');
    };

    const clearAll = () => {
        setTaskArray([])
    };
    return (
        <>
         <div className="card">
             <br />

             {/* HEADER */}

             <h1>To Do App</h1>
             <br />

              {/* INPUT */}
              
             <div className="input-and-button">

                 <input type="text" placeholder='Add a Task'  value = {newTask} onChange={(event) => {setNewTask(event.target.value)}}/>

             <Button className='add' onClick={addTask}>
               <AddIcon/>
             </Button>

             </div>

             {/* TASKLIST */}

              <div className='TaskList'>
                   
               {
                   taskArray.map((task) => {
                     return   <Task data = {task}/>
                   })
               }
              </div>

              <div className="clear-all">
                  <Button onClick={clearAll}>
                    Clear
                  </Button>
              </div>
             

             
         </div>
            
        </>
    )
}

export default Todo;
