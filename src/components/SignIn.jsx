import React, { Component } from 'react';

class SignIn extends Component{

    componentDidMount = () =>{
        this.props.setPageTitle(this.props.title)
      document.title = this.props.pageTitle;
    }

render(){

    return(
        <div>
            <h1>{this.props.pageTitle}</h1>
            <input type="text" />
        </div>
    )
}
   
   
}
export default SignIn;