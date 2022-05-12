import React, {Component} from "react";
import "./Hello.css"
import "tachyons"

class Hello extends Component{
    render(){
        return(
            <div className="f1 tc">
                <h1>Hello world</h1>
                <p>Welcome to my first react Component</p>
                <p>{this.props.greetings}</p>
            </div>
        )
    }
}

export default Hello;