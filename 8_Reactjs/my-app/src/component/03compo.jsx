import React, { Component } from 'react';
import Reausablecompo from './04Reausablecompo';
// import Reusablecompo from './04Reausablecompo'

class compo extends Component {
    render() {
        return (
           <>
           <div className="container">
            <div className="row">
                <div className="col-4">
                    <Reausablecompo imgsrc='\img\apple.jpg' title='Apple' oldprice='30000' newprice='20000'/>
                </div>

                <div className="col-4">
                <Reausablecompo imgsrc='\img\mi.jpg' title='Mi' oldprice='20000' newprice='10000'/>
                </div>

                <div className="col-4">
                <Reausablecompo imgsrc='\img\oneplus.jpg' title='oneplus' oldprice='90000' newprice='60000'/>
                </div>
            </div>
           </div>
           </>
        );
    }
}

export default compo;