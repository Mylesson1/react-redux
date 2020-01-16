import { SET_IS_LOADED } from '../actionType';


  const initialState = true;


const isLoadedReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_IS_LOADED:
            return action.payload;

            default: return state;
    }
};

export default isLoadedReducer;