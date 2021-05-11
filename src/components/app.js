import React,{useEffect,useState} from "react";
import { BrowserRouter as Router , Route , Link , NavLink , Switch } from "react-router-dom";
import Form from "./forms";
import Table from "./tables";
import SignIn from "./signin";
import SignUp from "./signup";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import apiUrl from "./api";

function App() {
  const [data,apiData] = useState("");
  const [save,saveData] = useState("");

  const getAll=async(e)=>{
    let tasks = await apiUrl.get(`/task`);
    apiData(tasks.data);
   
   
  }
   
    const handleSubmit =async (task)=>{ 
      if(task.save)
      {
        const userId = task.userId;
        let save = await apiUrl.post(`/task`,task);
        console.log(save);
         getAll();
      }  
      else{     
        console.log(task._id)
         let editTask = await apiUrl.patch(`/task/${task._id}`,task);
         getAll();
      }
    }    
    

useEffect(()=>{
  
  getAll()
},[])


const update=(data)=>{
 saveData(data);
}

const del=async(data)=>{
     const taskId =data._id;
     console.log(taskId);
    //  console.log(userId);
    let tasks = await apiUrl.delete(`/task/${taskId}`);
    getAll(); 
 
}
const Signin = async (auth)=>{
  let existingUser = await apiUrl.post(`/userAuth/signin`,auth);
  console.log(existingUser.data);
}
const Signup = async (auth)=>{
  let newUser = await apiUrl.post(`/userAuth/signup`,auth);
  console.log(newUser.data);
}

  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-sm bg-info mb-3">
      <ul className="navbar nav">
          <li className="nav-item">
          <Link className="navbar-brand text-warning font-weight-bold" to="/">ToDo List</Link>
          </li>
      </ul>
        <ul className="navbar nav mr-auto">
          <li className="nav-item">
          <Link className="nav-link active text-dark" to="/addTask">Add Task</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-dark" to="/allTask">All Task</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/signin">
        <div className="container">
          <SignIn signIn={Signin} />
          </div>
        </Route>
        <Route exact path="/signup">
        <div className="container">
          <SignUp signUp={Signup} />
          </div>
        </Route>
        <Route exact path="/addTask">
          <div className="container">
        <Form handleSubmit={handleSubmit} setForm={save}/>
          </div>
        </Route>
        <Route exact path="/allTask">
          <div className="container">
        <Table getData={data} sinData={update} del={del}/>
          </div>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
