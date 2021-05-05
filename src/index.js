// import react as react
// Hooks = useState and useEffect
// useState (for using state in functional components),
// useEffect (for using lifecycle events in functional 
// components without using class)
import react , {useState , useEffect} from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';

// Insert new task
const AddTask = ({addTask}) => {
  const [value , updateValue] = useState(""); // useState has initially empty values


const handleSubmit = e => {
  e.preventDefault();
  if(value !== "")
  {
    addTask(value);
    updateValue("");
  }
}
// e.target.value trigger each typing on input field
// value={value} typed value assign to value
return(
  <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      value={value} 
      placeholder="Enter your task here" 
      onChange={e => updateValue(e.target.value)}
      />
      <button type="submit"><i class="material-icons">add</i></button>
  </form>
);
}
// create arrow function of todolist
const TodoList = () => {
  const addTask = text => updateTask([...tasks,{text}]);
  // passing two params to useState 
  // tasks = initiate default value(state value)
  // updateTask = update new value to same state as per user action
  // updateTask is a function (future use to update new value)
  const [tasks , updateTask] = useState([
    // key value pair
    // assigned the below valuse to tasks
    {
      text : "stand up call",
      description : "Discussed about last day work done",
      isCompleted : false,
    },
    {
      text : "react js",
      description : "Learned about react js conceppts",
      isCompleted : false,
    },
    {
      text : "Break",
      description : "Lunch",
      isCompleted : false,
    }
  ]);

  // index get from onClick of toggletask()
  const toggleTask = (index) => {
    // ... means it takes all values in existing array and also new values
    const newTask = [...tasks] 
    if(newTask[index].isCompleted)
    {
      newTask[index].isCompleted = false;
    }
    else
    {
      newTask[index].isCompleted = true;
    }
    updateTask(newTask); // it updates the toggleTask status to task in useState
  }
  
  // removeTask function to delete task
  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index,1); // splice used to delete the task from specific index value
    updateTask(newTask);
  }
// return the above values to Browser
return(
  // create a new array to pass the values from tasks (key,value pair) using map function with index value
  // task is an array where the values from tasks is stored
  <div className="list-of-task-todo">
    {tasks.map((task , index) => (
      <div className="task-status">
        <span onClick={() => toggleTask(index)} className={task.isCompleted? "task-name completed-task" : "task-name" }>
          {task.text}&nbsp;&nbsp;--
          {task.description}
        </span>
        <button onClick={() => removeTask(index)}><i class="material-icons">delete</i></button>
      </div>
    ))}
    <AddTask addTask={addTask} />
  </div>
  );
}

ReactDOM.render(<TodoList /> , document.getElementById('root'));