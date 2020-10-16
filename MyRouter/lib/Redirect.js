// import React from "react";
import { Consumer } from "./context";

class Redirect extends React.Component{
    render(){
        return(
            <Consumer>
                {(state)=>{
                    state.history.push(this.props.to)
                }}
            </Consumer> 
        )
    }
}

export default Redirect;