import { FETCH_PRODUCT_ITEM } from '../actionType';

const initialState = null;

const productItemReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_PRODUCT_ITEM:
            return action.payload;

            default: return state;
    }
};

export default productItemReducer;