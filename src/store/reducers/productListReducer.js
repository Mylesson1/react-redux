import { FETCH_PRODUCT_LIST, FETCH_PRODUCT_LIST_SUB } from '../actionType';

const initialState = [];

const productListReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_PRODUCT_LIST:
            return action.payload;
            default: return state;
    }
};


export const productListSubReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_PRODUCT_LIST_SUB:
            return action.payload;
            default: return state;
    }
};

export default productListReducer;