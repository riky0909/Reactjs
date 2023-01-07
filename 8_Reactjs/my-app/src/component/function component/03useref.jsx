import React from 'react';
import { useRef } from 'react';
function Useref(props) {
    const inp = useRef(null);
    console.log("useref called");

    const chngdata=()=>{
        console.log("function called");
        inp.current.focus(); 
        console.log(inp.current.value);
        if (inp.current.value=="") {
          alert("please enter the data within field");
        } 
        
        
    }
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    {/* <input type="text" name="" id="" className="current focus" /> */}
                    <input type="text" className='form-control' ref={inp}/>
                    <span id='one'></span>
                    <button className='btn btn-primary mt-2' onClick={chngdata}>Click Me</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Useref;