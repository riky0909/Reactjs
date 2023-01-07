import React from 'react';
import { useCallback } from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function Useeffect() {
    const[username,setusername]=useState('react');
    const[data,setdata]=useState('local')
    
    useEffect(()=>{
        console.log("useeffect called");
    },[data])

    useLayoutEffect(()=>{
        console.log("uselayout effect");
    },[data])
    function chngdata()
    {
        console.log("function called");
        setdata('global');
    }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    {username}
                    <br />
                    <button onClick={()=>{setusername('reactjs')}}>Click me</button>
                    <br />
                    {data}
                    <br />
                    <button onClick={chngdata}>click 2 me</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Useeffect;