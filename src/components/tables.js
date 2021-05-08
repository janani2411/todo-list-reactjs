import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Table(props) {
  return (
    <div className="">
       {
          props.getData.length>0?
          (
            props.getData.map(e=>              
                <div className="task" key={e._id}>  
                        <div className="col-sm-1">
                          {e.userId}
                        </div>
                        <div className="col-sm-1">                                  
                          {e.taskName}
                        </div>
                        <div className="col-sm-1"> 
                          {e.type}
                        </div>
                        <div className="col-sm-2"> 
                          { e.from} 
                        </div>
                        <div className="col-sm-2"> 
                          {e.to} 
                        </div>
                        <div className="col-sm-3"> 
                        { e.description}
                        </div>
                    <div> 
                    <button id="remove" className="btn btn-info" onClick={(event)=>{
                      props.sinData(e);
                    }}
                    >Update</button>
                    </div> 
                    <div> 
                    <button id="remove" className="btn btn-danger"
                    onClick={(event)=>{
                      props.del(e);
                    }}>Delete</button>
                    </div> 

                </div>          
            )
          ) : 
          (
            <div>no data</div>
          )             
       }     
      </div>
  );
}

export default Table;
