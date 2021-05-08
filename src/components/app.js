import React,{useEffect,useState} from "react";
import Form from "./forms";
import Table from "./tables";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

function App() {
  const [data,apiData] = useState("");
  const [Save,saveData] = useState("");

  const getAll=async(e)=>{
    let tasks = await axios.get("http://127.0.0.1:3200/task");
    apiData(tasks.data);
   
   
  }
   
    const handleSubmit =async (task)=>{ 
      if(task.save)
      {
        const userId = task.userId;
        console.log(userId);
        let save = await axios.post(`http://127.0.0.1:3200/task`,task);
        console.log(save);
         getAll();
      }  
      else{     
        console.log(task.save)
         let editTask = await axios.patch("http://127.0.0.1:3200/task/${taskId}",task);
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
    //  console.log(userId);
    let tasks = await axios.delete("http://127.0.0.1:3200/task/${taskId}");
    getAll(); 
 
}


  return (
    <div className="container-fluid mt-5">
      <div className="row">
          <div className="col-sm-3">
             <Form handleSubmit={handleSubmit} setForm={Save}/>
          </div>
          <div className="offset-1 col-sm-8">
              <Table getData={data} sinData={update} del={del}/>
          </div>
          
      </div>
    </div>
  );
}

export default App;
