import { SET_CURRENT_PAGE } from '../actionType';

const initialState = 1;

const currentPageReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_CURRENT_PAGE:
            return action.payload;

            default: return state;
    }
};

export default currentPageReducer;