import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../index.css";

function SignIn(props) {

  const {signIn} = props;
    const [ email , checkEmailId ] = useState("");
    const [ password , checkPassword ] = useState("");

  return (
    <form onSubmit={(e)=>{e.preventDefault();
      console.log(email  + " " + password );
      signIn({email , password  });
      checkEmailId("");
      checkPassword("");
    }} className="mt-5">
    <div className="form-group" >
      <label >Email</label>
      <input type="email" className="form-control"  placeholder="example@mail.com" required
       name="email-id" value={email} onChange={(e)=>{checkEmailId(e.target.value);}}/>     
    </div>
    <div className="form-group" >
      <label >Password</label>
      <input type="password" className="form-control"  placeholder="Enter your password" required
       name="password" value={password} onChange={(e)=>{checkPassword(e.target.value);}}/>     
    </div>    
    <button type="submit" className="btn btn-success ml-2">Sign in</button>
  </form>
  );
}

export default SignIn;
