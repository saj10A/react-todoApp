import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

const TopForm = ()=>{
    const [inputValue, setInputValue] = useState("");
    const {taskItems, setTaskItems} = useContext(TaskContext);
    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    }
    const handleAddTask =(e) => {
        e.preventDefault();
        setTaskItems([...taskItems,{id:taskItems.length + 1 , title: inputValue , done: false}]);
        setInputValue("");
    }
    return(
        <>
            <h4 className="text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
            <form onSubmit={handleAddTask}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" value={inputValue} onChange={handleInputValue}/>
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;