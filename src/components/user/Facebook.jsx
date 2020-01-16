import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
//  import { Facebook } from './Facebook';
import axios from 'axios';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Css from './Phone.module.css';
firebase.initializeApp({
    apiKey:'AIzaSyA7gGcirLRXIPi5_fwarDf0P0XRl-GKzvI',
  //  authDomain:'https://mybids-d67c1.firebaseapp.com/__/auth/handler'
   authDomain:'mybids-d67c1.firebaseapp.com'

})
export class Contact extends Component {
    state = {
        isSingeIn: false,
        units:1,
    }
    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
           firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          //  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
          //  firebase.auth.EmailAuthProvider.PROVIDER_ID,
           // firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
componentDidMount = () =>{
    // https://console.firebase.google.com/project/mybids-d67c1/authentication/users
   // https://console.firebase.google.com/project/mybids-d67c1/authentication/providers?pli=1
  // React Firebase Authentication with Google Facebook Twitter Github Emai
 // https://firebase.google.com/docs/hosting/
    firebase.auth().onAuthStateChanged(user =>{


 //localStorage.setItem('user', JSON.stringify(user))

       

    this.setState({isSingeIn: !!user })
    
//     if(localStorage.getItem('user') === null){
//     localStorage.setItem('user', JSON.stringify(user))  
// }
     console.log(this.state.isSingeIn);
     if(this.state.isSingeIn){
        localStorage.setItem('user', JSON.stringify(user))
     }else{
        localStorage.removeItem('user')
        localStorage.removeItem('firebaseui::rememberedAccounts')
      
     }
    })

  
   
}
// insert product start
changeName = (event) =>{
this.setState({
        name: event.target.value
})
}
openImage = (event) =>{
    this.setState({
            image: event.target.files[0].name

    })

    }
writePrice = (event) =>{
        this.setState({
            price: event.target.value
    })
    }
writePrice = (event) =>{
        this.setState({
            price: event.target.value
    })
    }
openCurrency = (event) =>{
        this.setState({
            currency: event.target.value
    })
    }
insertProduct = () =>{
        axios.post('http://localhost:1700/insert/product',{
            body: {
                name: this.state.name,
                image: this.state.image,
                price: this.state.price,
                currency: this.state.currency,
                units: this.state.units
            }
        })
        .then(json =>{
           console.log(json); 
        })
    }
// insert product end
dursGal = () =>{
    firebase.auth().signOut()
    // localStorage.removeItem('user');
    // localStorage.removeItem('firebaseui::rememberedAccounts');
    // localStorage.removeItem('totalCount');
    
}

    render() {
        return (
            <div>

{this.state.isSingeIn ? (
   
    <div style={{padding:'30px', width:'1000px', margin:'0px auto', display:'flex'}}>  
       <div style={{width:'300px', background:'#fff', boxShadow:'0px 1px 3px #0000001f', padding:'30px'}}>
       <div style={{ width:'50px', height:'50px', overflow:'hidden',display:'flex',justifyContent:'center',borderRadius:'100%'}}>
           
           <div>
                <img  style={{height:'100%'}} src={firebase.auth().currentUser.photoURL} alt={firebase.auth().currentUser.displayName} />
           </div>
          
           </div> <br />
        
        <h3 style={{fontSize:'14px',}}> {firebase.auth().currentUser.displayName}</h3>
        <span style={{fontSize:'12px',}}>{firebase.auth().currentUser.email}</span>
 <br />
 <br />
 <br />
 <ul className={Css.nav}>
<li><NavLink exact to="/auth/view-navbar" >կատեգորիաները</NavLink></li>
<li><NavLink exact to="/auth/view-navbar" >Ավելացնել հայտարարություն</NavLink></li>
<li><NavLink exact to="/auth/view-bids" >Ձեր հայտարարությունները</NavLink></li>
<li><NavLink exact to="/auth/view-navbar" >Ընտրվածները</NavLink></li>

        </ul>
 <br />
    
        <h3 style={{color:'#000', cursor:'pointer'}} onClick={this.dursGal}>Դուրս գալ</h3>
       </div>
       <div style={{width:'100%'}}>
           <h3 style={{marginLeft:'15px', color:'#444', font:'15px arial'}} >Բարի գալուստ ձեր հաշիվ հարգելի {firebase.auth().currentUser.displayName}</h3>
       

<div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',padding:'15px',columnGap:'15px'}}>
<input type="text" onChange={this.changeName} placeholder="Անվանումը..." />
       <input type="file"  onChange={this.openImage}/>
       <input type="number" placeholder="Գինը..." onChange={this.writePrice}/>
       <select style={{background:'#fff', border:'1px solid #d8d8d8'}} onChange={this.openCurrency}>
            <option value="AMD">AMD</option>
           <option value="USD">USD</option>
           <option value="RUB">RUB</option>
       </select>
      <div onClick={this.insertProduct} style={{color:'#fff',padding:'11px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'3px', background:'#000'}}>Ավելացնել</div> 
</div>

       </div>
    </div>
) : (


<div>
    
<div style={{height:'700px', justifyContent:'center', width:'100%', display:'flex', alignItems:'center'}}>
    <div>
    <h3 style={{textAlign:'center'}}>Մուտք գործեք</h3><br />
    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
    </div>
</div>
)}



            </div>
        );
    }
}
export default Contact;