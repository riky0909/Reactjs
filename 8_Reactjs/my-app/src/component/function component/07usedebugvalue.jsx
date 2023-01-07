import React from 'react';
import { useDebugValue } from 'react';

function Usedebugvalue(props) {
    useDebugValue(props)
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <input type="text" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Usedebugvalue;