import React, { Component } from 'react';

class Reausablecompo extends Component {
    render() {
        return (
           <>
           {/* <h1>head</h1> */}
                <div className="card">
                        <div className="card-img">
                            <img src={this.props.imgsrc} alt="" />
                        </div>
                        <div className="card-body">
                        <div className="card-title text-center"><h5>{this.props.title}</h5></div>
                        <div className="card-text">
                            <p>oldprice:$<del>{this.props.oldprice}</del></p>
                            <p>newprice:$ {this.props.newprice}</p>
                        </div>
                        <center><button className='btn btn-primary border-rounded'>Add To Cart</button></center>
                    </div>
                </div>
           </>  
        );
    }
}

export default Reausablecompo;