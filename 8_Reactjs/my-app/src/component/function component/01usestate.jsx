import React from 'react';
import { useState } from 'react';

function Usestate() {
    const[Username,setusername]=useState('chetan bhagat');
    const[vara,setvara]=useState(0);
    const[varb,setvarb]=useState(0);

    function chngdata() {
        setvara(20);
        setvarb(30);
    }
    return (
        <>
        {Username}
        <br />
        <button onClick={Usestate=()=>{setusername('chetan patel')}}>Change me</button>
        <br />
        {vara+varb}
        <br />
        <button onClick={chngdata}>Click me to change data</button>
        </>
    );
}

export default Usestate;