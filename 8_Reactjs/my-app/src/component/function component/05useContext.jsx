import React from 'react';
import { useContext } from 'react';
const theme = {
    light:{
        fg:'aqua',
        bg:'yellow'
    },
    dark:{
        fg:'blue',
        bg:'red'
    }
}
const mycontext = React.createContext(theme.light)
function UseContext(props) {
    const mytheme = useContext(mycontext)
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <button style={{background:mytheme.bg , color:mytheme.fg}}>change the theme.</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default UseContext;