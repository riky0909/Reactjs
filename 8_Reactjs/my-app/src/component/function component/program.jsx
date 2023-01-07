import React from 'react';
import programapi from './program_api';
import Program_api from './program_api'
function Program(props) {
    return (
        <div>
           <div className="container">
            <div className="row">
                {programapi.forEach((ele)=>{
                    // console.log(ele);
                    // const{id,title,info}=ele
                    return (
                    <div className="col">
                    <p>{ele.id}</p>
                    <p>{ele.title}</p>
                    <p>{ele.info}</p>
                </div> 
                    )
                })}
                
            </div>
           </div>
        </div>
    );
}

export default Program;