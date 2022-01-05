import React,{useState}from 'react';

import './Task.css';

// import Button from '@material-ui/core/Button';
import CheckBox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';



const Task = (props) => {
    const  [tick, SetTick] = useState(false);
    const tickHandler = () => {
        SetTick(!tick)
    }
    return (
        <>

        <div className='task'>
            <span>
                <CheckBox  className='Checkbox' onChange={tickHandler}/>   
            </span>
        
            <div className='text' style={{color : tick? "red" : "black"}} > 
            
            <b>{props.data}</b>
            
             </div>


        </div>


            
        </>
    )
}

export default Task;
