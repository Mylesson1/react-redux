import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import Loading from './Loading';
class Category extends Component {

    componentDidMount = () => {
        this.props.setPageTitle(this.props.title);
        this.props.setIsLoaded(true);
        Axios.post(`http://localhost:3400/api/products-count`).then(response => this.props.setPagination({
            pageItemCount: Math.ceil(response.data / this.props.pagination.limit),
            totalCount: response.data,
            count: this.props.pagination.count,
            limit: this.props.pagination.limit,
            currentPage: Number(window.location.pathname.substr(18))
        })); this.props.setProductList([])
        this.props.setCurrentPage(window.location.pathname.substr(18));
        setTimeout(() => {
            this.props.setIsLoaded(false);
            Axios.get(`http://localhost:3400/api/products/page/${this.props.pagination.currentPage}/limit/${this.props.pagination.limit}`)
            .then(response => this.props.setProductList(response.data));
        }, 300);
    }

    addToCart = (cartItem) => {
        this.props.setOpenModal({
            opacity: 1,
            visibility: 'visible',
            transition: '0.5s ease',
        });
        const existingCartItem = this.props.cartList.filter(item => item.id === cartItem.id);
        if (existingCartItem.length > 0) {
            const withhoutExistionCartItem = this.props.cartList.filter(item => item.id !== cartItem.id);
            const updateCartUnicItem = {
                ...existingCartItem[0],
                count: existingCartItem[0].count + cartItem.count,
            }
            this.props.setCartList([...withhoutExistionCartItem, updateCartUnicItem])
        } else {
            this.props.setCartList([...this.props.cartList, cartItem]);
        }
    }

    removeCartItem = (item) => {
        let newItems = this.props.cartList.filter(r => r !== item);
        this.props.setDeleteCartItem(newItems);
    }

    showProductList = () => {
        if (this.props.productList.length > 0) {
            return this.props.productList.map(item => {
                return (
                    <div key={item.id} className="item">
                        <div className="image">
                            <img src={`/images/${item.subCategory}/${item.id}/${item.image}`} alt={item.title} />
                            <div className="box-info">
                                <button><img src={`/heart.svg`} style={{ width: '20px' }} alt={`Հավանել`} /></button>
                                <button onClick={() => this.addToCart({ ...item, count: 1 })} style={{ display: 'flex', alignItems: 'center' }}><img src={`/cart.svg`} style={{ width: '20px' }} alt={`Գնել`} />&nbsp; Գնել</button>
                            </div>
                        </div>
                        <h3><NavLink exact to={`/item/${item.id}`}>{item.title.substr(0, 20)} ...</NavLink></h3>
                        <strong>{item.price} {item.currency}</strong>
                    </div>
                )
            });
        }
    }

    showCartList = () => {
        return this.props.cartList.map(item => {
            return (
                <div key={item.id} className="cart-item">
                    <div className="cart-image">
                        <img src={`/images/${item.subCategory}/${item.image}`} alt={item.title} />
                    </div>
                    <div className="cart-info">
                        <h3>{item.title.substr(0, 15)} ...</h3>
                        <strong>{item.price} {item.currency}</strong>
                        <p>count {item.count}</p>
                    </div>
                    <button
                        onClick={() => this.removeCartItem(item)}
                        style={{ position: 'absolute', right: '0px', top: '30px' }}
                    >
                        <img src="/bin.svg" style={{ width: '20px' }} alt="bin" />
                    </button>
                </div>
            )
        })
    }

    currentPageChange = (e) => {
        this.props.setPagination({
            pageItemCount: this.props.pagination.pageItemCount,
            totalCount: this.props.pagination.totalCount,
            count: this.props.pagination.count,
            limit: this.props.pagination.limit,
            currentPage: e
        })
        this.props.setCurrentPage(window.location.pathname.substr(18));
        this.props.setIsLoaded(true);
        this.props.setProductList([]);
        setTimeout(() => {
            Axios.get(`http://localhost:3400/api/products/page/${this.props.pagination.currentPage}/limit/${this.props.pagination.limit}`).then(response => this.props.setProductList(response.data));
            this.props.setIsLoaded(false);
        }, 300);
    }

    showPagiantionButtonLeft = () => {
        return <NavLink
            to={`/electronics/page/${this.props.pagination.currentPage - 1}`}
            style={{ padding: '10px', background: '#444', color: '#fff' }}
            onClick={() => this.paginationLeft()}
        >PREV</NavLink>
    }

    showPagiantionButton = () => {
        let ddd = [];
        if (this.props.pagination.pageItemCount > 0) {
            for (let i = 1; i <= this.props.pagination.pageItemCount; i++) {
                ddd.push(i);
            }
            if (ddd) {
                return ddd.map(item => {
                    return <NavLink
                        to={`/electronics/page/${item}`}
                        style={{ padding: '10px', background: item === Number(this.props.pagination.currentPage) ? '#000' : '#444', color: '#fff' }}
                        key={item}
                        onClick={() => this.currentPageChange(item)}
                    >{item}</NavLink>
                })
            }
        }
    }

    paginationLeft = () => {
        this.props.setIsLoaded(true);
        this.props.setPagination({
            pageItemCount: this.props.pagination.pageItemCount,
            totalCount: this.props.pagination.totalCount,
            count: this.props.pagination.count,
            limit: this.props.pagination.limit,
            currentPage: this.props.pagination.currentPage - 1
        })
        this.props.setCurrentPage(this.props.pagination.currentPage);
        setTimeout(() => {
            Axios.get(`http://localhost:3400/api/products/page/${this.props.pagination.currentPage}/limit/${this.props.pagination.limit}`)
                .then(response => this.props.setProductList(response.data));
            this.props.setIsLoaded(false);
        }, 300);
    }

    paginationRight = () => {
        this.props.setIsLoaded(true);
        this.props.setPagination({
            pageItemCount: this.props.pagination.pageItemCount,
            totalCount: this.props.pagination.totalCount,
            count: this.props.pagination.count,
            limit: this.props.pagination.limit,
            currentPage: this.props.pagination.currentPage + 1
        })
        this.props.setCurrentPage(this.props.pagination.currentPage);
        setTimeout(() => {
            Axios.get(`http://localhost:3400/api/products/page/${this.props.pagination.currentPage}/limit/${this.props.pagination.limit}`)
                .then(response => this.props.setProductList(response.data));
            this.props.setIsLoaded(false);
        }, 300);
    }

    showPagiantionButtonRight = () => {
        return <NavLink
            to={`/electronics/page/${this.props.pagination.currentPage + 1}`}
            style={{ padding: '10px', background: '#444', color: '#fff' }}
            onClick={() => this.paginationRight()}
        >NEXT</NavLink>
    }

    render() {
        return (
            <div className="container">
                <div style={this.props.openModal} className="cart-modal">
                    <div style={{ display: 'flex', width: '300px', top: '0', borderBottom: '1px solid #ccc', position: 'fixed', background: '#fff', zIndex: '2', alignItems: 'center' }}> <button onClick={() => this.props.setOpenModal({
                        opacity: 0,
                        visibility: 'hidden',
                        transition: '0.5s ease',
                    })}>
                        <img src="/left.svg" style={{ width: '30px' }} alt="Թաքցնել" /> &nbsp;
      </button>Ձեր զամբյուղ</div>
                    <br /><br /><br />
                    {this.showCartList()}
                </div>
                <h1>{this.props.pageTitle} category</h1>
                <div className="search-box" >
                    <input type="text" style={{ width: '100%' }} placeholder="search..." />
                    <button style={{ display: 'flex', alignItems: 'center', width: '20%' }}><img src={`/search.svg`} style={{ width: '20px' }} alt={`Փնտրել`} />&nbsp; Փնտրել</button>
                    <button style={{ display: 'flex', alignItems: 'center', width: '20%' }}><img src={`/levels.svg`} style={{ width: '20px' }} alt={`Ֆիլտրել`} />&nbsp; Ֆիլտրել</button>
                </div>


                {this.props.isLoaded ?
                    <div className="content"
                        style={{ width: '100%', height: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Loading />
                    </div>
                    :
                    <div className="content">
                        {this.showProductList()}
                    </div>
                }
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', height: '100px', alignItems: 'center' }}>
                    {this.props.pagination.currentPage >= this.props.pagination.pageItemCount ? (
                        this.showPagiantionButtonLeft()
                    ) : null}
                    {this.showPagiantionButton()}


                    {this.props.pagination.currentPage <= this.props.pagination.pageItemCount - 1 ? (
                        this.showPagiantionButtonRight()
                    ) : null}
                </div>
            </div>
        )
    }


}
export default Category;