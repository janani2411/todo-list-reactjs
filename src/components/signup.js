import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../index.css";

function SignUp(props) {

  const {signUp} = props;  
    const [ username , newUserName ] = useState("");
    const [ email , newEmailId ] = useState("");
    const [ password , newPassword ] = useState("");

  return (
    <form onSubmit={(e)=>{e.preventDefault();
      console.log(username + " " + email + " " + password );
      signUp({ username , email , password });
      newUserName("");
      newEmailId("");
      newPassword("");
    }} className="mt-5">
    <div className="form-group" >
      <label >User Name</label>
      <input type="text" className="form-control"  placeholder="Enter username" required
       name="user-name" value={username} onChange={(e)=>{newUserName(e.target.value);}}/>     
    </div>
    <div className="form-group" >
      <label >Email</label>
      <input type="email" className="form-control"  placeholder="example@mail.com" required
       name="email-id" value={email} onChange={(e)=>{newEmailId(e.target.value);}}/>     
    </div>
    <div className="form-group" >
      <label >Password</label>
      <input type="password" className="form-control"  placeholder="Enter Task" required
       name="password" value={password} onChange={(e)=>{newPassword(e.target.value);}}/>     
    </div>    
    <button type="submit" className="btn btn-success  ml-2">Sign up</button>
  </form>
  );
}

export default SignUp;
