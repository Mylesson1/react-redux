import { combineReducers, createStore } from "redux";
import navbarReducer from "./reducers/navbarReducer";
import isLoadedReducer from "./reducers/isLoadedReducer";
import productListReducer,{productListSubReducer} from "./reducers/productListReducer";
import productItemReducer from "./reducers/productItemReducer";
import pageTitleReducer from "./reducers/pageTitleReducer";
import currentPageReducer from "./reducers/currentPageReducer";
import cartListReducer from "./reducers/cartListReducer";
import modalReducer from "./reducers/modalReducer";
import paginationReducer from "./reducers/paginationReducer";


const rootReducer = combineReducers({
    isLoaded: isLoadedReducer,
    pageTitle: pageTitleReducer,
    navbarList: navbarReducer,
    productList: productListReducer,
    productItem: productItemReducer,
    currentPage: currentPageReducer,
    cartList: cartListReducer,
    openModal: modalReducer,
    pagination: paginationReducer,
    productListSub: productListSubReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
