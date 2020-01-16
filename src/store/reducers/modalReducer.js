import { OPEN_MUDAL } from '../actionType';


  const initialState = {
      opacity: 0,
      visibility: 'hidden',
      transition: '0.5s ease',
  };


const modalReducer = (state = initialState, action) =>{
    switch(action.type){
        case OPEN_MUDAL:
            return action.payload;

            default: return state;
    }
};

export default modalReducer;