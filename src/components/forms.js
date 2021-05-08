import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../index.css";

function Form(props) {

  const {handleSubmit} = props;  
    const [ userId , userDetail ] = useState("");
    const [ save , isSave ] = useState(true);
    const [ taskName , newTask ] = useState("");
    const [ from , fromDate ] = useState("");
    const [ to , toDate ] = useState("");
    const [ type , newType ] = useState("");
    const [ description , newDescription ] = useState("");
    
    useEffect(()=>{
       if(props.setForm.userId != null)
       {
         userDetail(props.setForm.userId);
         newTask(props.setForm.taskName);
         fromDate(props.setForm.from);
         toDate(props.setForm.to);
         newType(props.setForm.type);
         newDescription(props.setForm.description);
         isSave(false);
        }

    },[props.setForm])

  return (
    <form onSubmit={(e)=>{e.preventDefault();
    if(save)
    {
      console.log(userId + " " + taskName + " " + from+ " " +to+" "+type+" "+description+" "+save);
      // from = (from.getFullYear())+'-' + (from.getMonth()+1) + '-'+(from.getDate());
      handleSubmit({ userId , taskName , from , to , type , description , save });
      userDetail("");
      newType("");
      newTask("");
      fromDate("");
      toDate("");
      newDescription("");
    }
    else{
      handleSubmit({ taskName , from , to , type , description , userId , save });
     
    }
    }}>
    <div className="form-group" >
      <label >user Id</label>
      <input type="text" className="form-control"  placeholder="Enter Task" required
       name="task-name" value={userId} onChange={(e)=>{userDetail(e.target.value);}}/>     
    </div>
    <div className="form-group" >
      <label >Task Name</label>
      <input type="text" className="form-control"  placeholder="Enter Task" required
       name="task-name" value={taskName} onChange={(e)=>{newTask(e.target.value);}}/>     
    </div>
    <div className="form-group" >
      <label >From</label>
      <input type="date" className="form-control" required
       name="from-date" value={from} onChange={(e)=>fromDate(e.target.value)}
      />     
    </div>
    <div className="form-group" >
      <label >To</label>
      <input type="date" className="form-control" required
       name="to-date" value={to} onChange={(e)=>toDate(e.target.value)}
      />     
    </div>
    <div className="form-group">
    <label >Task Type</label>
    <input type="text" className="form-control"  placeholder="Enter Task type" required
       name="task-type" value={type} onChange={(e)=>{newType(e.target.value);}}/>
    </div>
    <div className="form-group">
      <label >Description</label>
      <input type="text" className="form-control"  placeholder="Description about task" required value={description} onChange={(e)=>newDescription(e.target.value)}/>
    </div>
    
    <button type="submit" className="btn btn-success">{(save)?"Save":"Update"}</button>
  </form>
  );
}

export default Form;
