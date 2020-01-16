import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Category from './Category';
import Sub from './Sub';
import Home from './Home';
import Item from './Item';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserAuth from './user/UserAuth';
const Help = (props) => <h1>{props.title}</h1>




const Error404 = (props) => <h1>{props.message}</h1>

class App extends Component {


showCategoryRoute = () =>{
    return this.props.navbarList.map(item =>{
        if(item.subs.length > 0){
 return(
     <React.Fragment key={item.id}>
         <Route key={item.id} exact path={`/electronics`} render={() => <Category {...this.props} title={item.title} />} />
         {item.subs.map(su =>{
             return <Route key={su.id} exact path={`/electronics/${su.id}`} render={() => <Sub {...this.props} title={`${item.title} | ${su.title}`} />} />
         })}
     </React.Fragment>
 )

        }
    })
}




    render() {
        return (
            <Router>
                <Navbar navbarList={this.props.navbarList} />
                <Switch>
                    <Route exact path={`/`} render={() => <Home {...this.props} title={`Սկիզբ`} />} />
                    <Route exact path={`/item/:id`} render={() => <Item {...this.props} title={`Item`} />} />
                    <Route exact path={`/help`} render={() => <Help {...this.props} title={`Օգնություն`} />} />
                    <Route exact path={`/sign-up`} render={() => <SignUp {...this.props} title={`Գրանցվել`} />} />
                    <Route exact path={`/sign-in`} render={() => <SignIn {...this.props} title={`Մուտք գործել`} />} />
                    <Route exact path={`/user/auth`} render={() => <UserAuth {...this.props} title={`Օգնություն`} />} />
                    <Route exact path={`/electronics/page/:id`} render={() => <Category {...this.props} title={`Օգնություն`} />} />
                    {this.showCategoryRoute()}
                    <Route exact render={() => <Error404 message={`սխալ 404`} />} />
                </Switch>
            </Router>

        )
    }
}

export default App;