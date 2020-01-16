import { SET_PAGE_TITLE } from '../actionType';

const initialState = null;

const pageTitleReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_PAGE_TITLE:
            return action.payload;

            default: return state;
    }
};

export default pageTitleReducer;