import { Action } from '@remix-run/router';
import React, { useReducer } from 'react';
const initialize = {count:0};
function reduce(state,action)
{
   switch (action.type) {
    case 'increment':
        return {count:state.count+1}

    case 'decrement':
        return {count:state.count-1}
   
    default:
        throw new Error();
   }
}
function Usereducer(props) {
    const[state,dispatch]=useReducer(reduce,initialize)
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
                   
                    <br />
                    {state.count}
                    <br />
                    <button onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>
                </div>
            </div>
        </div>
    );
}

export default Usereducer;