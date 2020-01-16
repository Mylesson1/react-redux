import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Navbar extends Component {



    showNavbar = () => {
        if (this.props.navbarList.length > 0) {
            return this.props.navbarList.map(item => {
                if (item.subs.length > 0) {
                    return(
                        <li key={item.id}><NavLink  activeStyle={{color:'orange'}} exact to={`/electronics`}>{item.title}</NavLink>
                            <ul>
                                {item.subs.map(sub => {
                                    return <li key={sub.id}><NavLink activeStyle={{color:'orange'}} exact to={`/electronics/${sub.id}`}>{sub.title}</NavLink></li>
                                })}
                            </ul>
                        </li>
                    )
                }


            });
        }
    }

    render() {

        return (
            <nav className="navbar">
                <ul>
                <li><NavLink activeStyle={{color:'orange'}} exact to={`/`}>Սկիզբ</NavLink></li>
                {this.showNavbar()}
                <li><NavLink activeStyle={{color:'orange'}} exact to={`/sign-in`}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src="/sign-in.svg" style={{width:'20px'}} alt="Մուտք" />&nbsp; Մուտք
                    </div>
                    </NavLink></li>
                <li><NavLink activeStyle={{color:'orange'}} exact to={`/sign-up`}>
                    <div style={{display:'flex', alignItems:'center'}}>
                    <img src="/user.svg" style={{width:'20px'}} alt="Գրանցվել" />&nbsp; Գրանցվել
                    </div>
                    </NavLink></li>

                   <li> <NavLink activeStyle={{color:'orange'}} exact to={`/user/auth`}>user</NavLink></li>
                    
            </ul>
            </nav>
        )
    }
}

export default Navbar;