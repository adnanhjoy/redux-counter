const { createStore, combineReducers } = require('redux');

//products constant
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

//cart constant
const GET_CART = 'GET_CART';
const ADD_CART = 'ADD_CART';

//products state
const initialProuctState = {
    products: ['Sugar', 'Salt'],
    numberOfProdcts: 2
};

//cart state
const initialCartState = {
    cart: ['Sugar'],
    numberOfCart: 1
};

//products action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}


//cart action
const getCart = () => {
    return {
        type: GET_CART
    }
}

const addCart = (cart) => {
    return {
        type: ADD_CART,
        payload: cart
    }
}

//products reducer
const productReducer = (state = initialProuctState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                numberOfProdcts: state.numberOfProdcts + 1
            }

        default:
            return state;
    }
}


//cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state
            }
        case ADD_CART:
            return {
                cart: [...state.cart, action.payload],
                numberOfCart: state.numberOfCart + 1,
            }

        default:
            return state;
    }
}

//multiple reducer
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts('Orange'));

store.dispatch(getCart());
store.dispatch(addCart('Chicken'));