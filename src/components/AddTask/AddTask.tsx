import React, { useState } from 'react';

interface AddTaskProps{
    onAddTask: (taskName: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) =>{
    const [taskName, setTaskName] = useState('');
    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault(); //prevent the page to reload
        onAddTask(taskName); 
        setTaskName(''); //clean after add the task
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
}
export default AddTask;