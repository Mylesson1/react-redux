import React, { Component } from 'react';

class SignUp extends Component{

    componentDidMount = () =>{
        this.props.setPageTitle(this.props.title)
      //  console.log(this.props)
    }

render(){

    return(
        <div>
            <h1>{this.props.pageTitle}</h1>
        </div>
    )
}
   
   
}
export default SignUp;