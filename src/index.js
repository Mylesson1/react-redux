import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import store from './store'
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.render(

   <Provider store={store}>
      <BrowserRouter>
         <AppContainer />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);
