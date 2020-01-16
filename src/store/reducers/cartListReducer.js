import { SET_CART_LIST, DELETE_CART_ITEM } from '../actionType';

const initialState = [];

const cartListReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_CART_LIST:
            return action.payload;

            case DELETE_CART_ITEM:
            return action.payload;

            default: return state;
    }
};

export default cartListReducer;