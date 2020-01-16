import React, { Component } from 'react';

class Home extends Component{

    componentDidMount = () =>{
        this.props.setPageTitle(this.props.title)
  
        this.props.setIsLoaded(true);
        this.props.setCurrentPage(window.location.pathname.substr(10));
        
        setTimeout(() => {
            this.props.setIsLoaded(false);
            this.props.setProductList([])
        },1000);
    }

render(){

    return(
        <div>
            <h1>{this.props.pageTitle}</h1>
        </div>
    )
}
   
   
}
export default Home;