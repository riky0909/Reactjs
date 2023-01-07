import React, { Component } from 'react';

class mariage extends Component {
    constructor(props){
        super(props);
        this.state={
           ganeshstphana:"",
           matali:"",
           vargado:"",
           jan:""
        }
    }
    ganesh=()=>{
      this.setState({ganeshstphana:'bhramavastra'})
    }
    gado=()=>{
        this.setState({matali:'gothi'})
      }
      godo=()=>{
        this.setState({vargado:'safo'})
      }
      band=()=>{
        this.setState({jan:'servani'})
      }

    render() {
        return (
           <>
         <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>{this.state.ganeshstphana}</h1><span><button onClick={this.ganesh}>ganesh</button></span>
                    <h2>{this.state.matali}</h2><span><button onClick={this.gado}>matali</button></span>
                    <h3>{this.state.vargado}</h3><span><button onClick={this.godo}>vargado</button></span>
                    <h4>{this.state.jan}</h4><span><button onClick={this.band}>jan</button></span>
                    
                    
                </div>
            </div>
         </div>
           </>
        );
    }
}

export default mariage;