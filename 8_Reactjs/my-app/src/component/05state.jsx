import React, { Component } from 'react';

class state extends Component {
    constructor(props){
        super(props);
        // super() compalsary constructor banavo aetala mate (react ma)
        this.state={
            author:'chetan bhagat',
            book:'Three idiots'
        }
    }
    // arroy function.
    chngdata=()=>{
        this.setState({author:'chetan patel',book:'whatever'});
        console.log('btn called');
    }
    render() {
        return (
        
                <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* js code Html ma call karva mate  {ni under lakhavu pade}*/}
                            {this.state.author}
                            {/* react ma function call aarite thay {this.chngdata()} */}
                            <button onClick={this.chngdata}>clickme</button>
                            {this.state.book}
                        </div>
                    </div>
                </div>
                </>
           
        );
    }
}

export default state;