import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskItems = ()=>{
    const {taskItems, setTaskItems} = useContext(TaskContext);

    const handleCheckedItem = (index) => {
        const newTaskItems = [...taskItems];
        newTaskItems[index].done = !newTaskItems[index].done;
        setTaskItems(newTaskItems);
    }
    const handleDeleteItem = (index) => {
        const newTaskItems = taskItems.filter((value, i) => i !== index);
        setTaskItems(newTaskItems);
    }
    if(taskItems.length) {
        return (
          <ul className="list-group m-0 p-0 mt-2">
            {
                taskItems.map((t , index) => (
                 <li key={index} className={
                  `list-group-item d-flex justify-content-between ${t.done ? "list-group-item-success" : ""}`}>
                  {t.title}    
                  <span>
                    <i className={`me-3 pointer fas transition_200 text_hover_shadow ${t.done ? "fa-times text-warning" : "fa-check text-success"}`} onClick={() => handleCheckedItem(index)}></i>
                    <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow" onClick={() => handleDeleteItem(index)}></i>
                  </span>
                 </li>
                ))
            }
        </ul>      
    )
    }else {
        return <h4 className='text-center text-danger mt-4'>هیچ کاری ثبت نشده...!</h4>
    }
    
}

export default TaskItems;