import { SET_PAGINATION } from '../actionType';


  const initialState = {
    pageItemCount: 0,
    totalCount: 0,
    count: 0,
    limit: 15,
    currentPage: 1
  };


const paginationReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_PAGINATION:
            return action.payload;

            default: return state;
    }
};

export default paginationReducer;