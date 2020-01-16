import React, { Component } from 'react';
import Axios from 'axios';
import Slider from './Slider';
class Item extends Component{

    componentDidMount = () =>{
        this.props.setPageTitle(this.props.title);
        //this.props.setProductItem(this.props.title);
        
       // console.log(this.props)
       Axios.get(`http://localhost:3400/api/product-item/${window.location.pathname.substr(6,)}`).then(response => this.props.setProductItem(response.data))
    }

    showProduct = () =>{

if(this.props.productItem !== null){
    return(
    <div className="container" style={{marginTop:'100px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)', rowGap:'15px', gridGap:'15px'}}>
        <div>
        
        <Slider productItem={this.props.productItem} />
   </div>
  
   <div>
   <h1>{this.props.productItem.title}</h1>
    
    <strong>
    {this.props.productItem.price}  {this.props.productItem.currency}
    </strong>
    <p>{this.props.productItem.description}</p>
   </div>
        </div>
       
    </div>
)
}

    }

render(){
    return(
        <div>
            <h1>{`${this.props.pageTitle} - ${window.location.pathname.substr(6,)}`}</h1>

            <div>
               {this.showProduct()}
            </div>
        </div>
    )
}
   
   
}
export default Item;