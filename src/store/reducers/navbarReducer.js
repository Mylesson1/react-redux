import { FETCH_NAVBAR_LIST } from '../actionType';

const initialState = [];

const navbarReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_NAVBAR_LIST:
            return [...state, ...action.payload];

            default: return state;
    }
};

export default navbarReducer;