import { ADD_REVIEW, REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "./actionTypes";


export const setProducts = (products) => {
    return {
        type : SET_PRODUCTS,
        payload : products
    };
};

export const selectedProduct = (products) => {
    return {
        type : SELECTED_PRODUCT,
        payload : products
    };
};

export const removeSelectedProducts = () => {
    return {
        type : REMOVE_SELECTED_PRODUCT
    };
};

export const addReview = (products) => {
    return {
        type : ADD_REVIEW,
        payload : products
    };
};
