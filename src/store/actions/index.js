import { 
    SET_IS_LOADED,
     FETCH_NAVBAR_LIST,
      FETCH_PRODUCT_LIST,
       FETCH_PRODUCT_ITEM,
        SET_PAGE_TITLE, 
        SET_CURRENT_PAGE,
         SET_CART_LIST,
          DELETE_CART_ITEM ,
          OPEN_MUDAL,
          SET_PAGINATION,
          FETCH_PRODUCT_LIST_SUB
        } from '../actionType';

export const setIsLoaded = action => ({
    type: SET_IS_LOADED,
    payload: action
});

export const setNavbarList = action => ({
    type: FETCH_NAVBAR_LIST,
    payload: action
});

export const setProductList = action => ({
    type: FETCH_PRODUCT_LIST,
    payload: action
});

export const setProductItem = action => ({
    type: FETCH_PRODUCT_ITEM,
    payload: action
});

export const setPageTitle = action => ({
    type: SET_PAGE_TITLE,
    payload: action
});

export const setCurrentPage = action => ({
    type: SET_CURRENT_PAGE,
    payload: action
});

export const setCartList = action => ({
    type: SET_CART_LIST,
    payload: action
});

export const setDeleteCartItem = action => ({
    type: DELETE_CART_ITEM,
    payload: action
});

export const setOpenModal = action => ({
    type: OPEN_MUDAL,
    payload: action
});

export const setPagination = action => ({
    type: SET_PAGINATION,
    payload: action
});

export const setProductListSub = action => ({
    type: FETCH_PRODUCT_LIST_SUB,
    payload: action
});






