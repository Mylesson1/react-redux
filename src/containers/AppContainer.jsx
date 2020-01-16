import React, { Component } from 'react';
import App from '../components/App';
import { connect } from 'react-redux';
import {
    setIsLoaded,
    setNavbarList,
    setProductList,
    setProductItem,
    setPageTitle,
    setCurrentPage,
    setCartList,
    setDeleteCartItem,
    setOpenModal,
    setPagination,
    setProductListSub
} from '../store/actions';
import Axios from 'axios';
class AppContainer extends Component {

componentDidMount = () =>{
    Axios.get('http://localhost:3400/api/navbars').then(response => this.props.setNavbarList(response.data));

    // setTimeout(() => {
    //     this.props.setIsLoaded(false);
    //     Axios.post(`http://localhost:3400/api/products`,{count:0, limit:15}).then(response => this.props.setProductList(response.data)); 
    // },1000);
    // this.props.setPageTitle(this.props.title);
    // this.props.setIsLoaded(true);
   
    // setTimeout(() => {
    //     this.props.setIsLoaded(false);
    //     Axios.post(`http://localhost:3400/api/products`,{count:0, limit:15}).then(response => this.props.setProductList(response.data)); 
    // },1000);

    
}

   render() {
        return <App {...this.props}/>

    }
}
const mapStateToProps = state => ({
    isLoaded: state.isLoaded,
    pageTitle: state.pageTitle,
    navbarList: state.navbarList,
    productList: state.productList,
    productItem: state.productItem,
    currentPage: state.currentPage,
    cartList: state.cartList,
    openModal: state.openModal,
    pagination: state.pagination,
    productListSub: state.productListSub
});
export default connect(mapStateToProps, {
    setIsLoaded,
    setNavbarList,
    setProductList,
    setProductItem,
    setPageTitle,
    setCurrentPage,
    setCartList,
    setDeleteCartItem,
    setOpenModal,
    setPagination,
    setProductListSub
})(AppContainer);