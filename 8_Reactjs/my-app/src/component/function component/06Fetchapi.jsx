import React from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Fetchapi(props) {

    const[data,setdata] = useState({})
    const[loader,setloader] = useState("pending...")

    useLayoutEffect(()=>{
           setTimeout(() => {
            console.log('uselayouteffect called');
            setloader('will ne print')
           }, 2000);
    })
    useEffect(()=>{
        console.log("useeffect called");
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then((response)=>{
                console.log(response);
                setdata(response)
            }).catch((error)=>{
                console.log(error);
            })
        }, 2000);
    })
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    {loader}
                </div>
            </div>
        </div>
        </>
    );
}

export default Fetchapi;