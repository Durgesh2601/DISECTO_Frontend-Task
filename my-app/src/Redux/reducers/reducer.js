import { ADD_REVIEW, REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "../actionTypes";


const init = {
    products : []
}

export const productsReducer = (state = init, {type, payload}) => {
    switch(type) {
        case SET_PRODUCTS : 
        return {...state, products : payload};
        default :
        return state;
    };   
};

const init1 = {
    product : [],
    reviews : []
}
export const selectedProductReducer = (state=init1, {type, payload}) => {
    switch(type) {
        case SELECTED_PRODUCT : 
        return {...state, ...payload};
        case ADD_REVIEW : 
        return {...state, reviews : {...state.reviews, payload}};
        case REMOVE_SELECTED_PRODUCT : 
        return {}
        default : 
        return state;
    }
}