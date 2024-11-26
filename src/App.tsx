import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';

interface Task{
  id: number;
  name: string;
}

function App(){
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) =>{
    setTasks([...tasks, { id: tasks.length + 1, name: taskName}]);
  };

  return(
    <div className="app-container">
      <h1>Task list</h1>
      <AddTask onAddTask={addTask}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}
export default App
