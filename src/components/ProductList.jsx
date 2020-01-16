import React, { Component } from 'react';

class ProductList extends Component{

    showProductList = () =>{
        if(this.props.productList.length > 0){
            return this.props.productList.map(item => {
            return(
                <div className="item">
                    
                    <div className="image">
                        <img src={item.image} alt={item.title}/>
                    </div>
    
                    <h3>{item.title.substr(0,20)} ...</h3>
                </div>
            )
            });
        }
    }

render(){

    return(
        <div className="container">
          
            <h1>{this.props.pageTitle}</h1>
            <div className="content">
                 {this.showProductList()}
            </div>
           
        </div>
    )
}
   
   
}
export default ProductList;