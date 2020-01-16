import React, { Component } from 'react';
import Axios from 'axios';
import Loading from './Loading';
import {NavLink} from 'react-router-dom';
class Sub extends Component{
    componentDidMount = () =>{
      this.props.setPageTitle(this.props.title)
      this.props.setCurrentPage(window.location.pathname.substr(5,));
      this.props.setIsLoaded(true);
   
    setTimeout(() => {
        this.props.setIsLoaded(false);
        Axios.post(`http://localhost:3400/api/products-id`,{id:window.location.pathname.substr(13,),count:0, limit:15}).then(response => this.props.setProductListSub(response.data)); 
    },1000);

    }

showProductList = () =>{
    if(this.props.productListSub.length > 0){
        return this.props.productListSub.map(item => {
        return(
            <div className="item">
                <div className="image">
                    <img src={`/images/${item.subCategory}/${item.id}/${item.image}`} alt={item.title}/>
                    <div className="box-info">
                        <button><img src={`/heart.svg`} style={{width:'20px'}} alt={`Հավանել`} /></button>
                        <button style={{display:'flex', alignItems:'center'}}><img src={`/cart.svg`} style={{width:'20px'}} alt={`Գնել`} />&nbsp; Գնել</button>
                    </div>
                </div>
                <h3><NavLink exact to={`/item/${item.id}`}>{item.title.substr(0, 20)} ...</NavLink></h3>
                        <strong>{item.price} {item.currency}</strong>
            </div>
        )
        });
    }
}

render(){
    return(
        <div className="container">
            <h1>{this.props.pageTitle}</h1>
            <div className="search-box" >
                <input type="text" style={{width:'100%'}} placeholder="search..." />
                <button style={{display:'flex', alignItems:'center', width:'20%'}}><img src={`/search.svg`} style={{width:'20px'}} alt={`Փնտրել`} />&nbsp; Փնտրել</button>
                <button style={{display:'flex', alignItems:'center', width:'20%'}}><img src={`/levels.svg`} style={{width:'20px'}} alt={`Ֆիլտրել`} />&nbsp; Ֆիլտրել</button>
            </div>
    {this.props.isLoaded ? <div className="content" style={{width:'100%', height:'700px', display:'flex', alignItems:'center',justifyContent:'center'}}><Loading /></div> : <div className="content">{this.showProductList()}</div>}
        </div>
    )
}
   
   
}

export default Sub;