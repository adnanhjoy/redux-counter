const { createStore } = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialCount = {
    count: 0,
}

const incrementCount = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
};

const decrementCount = () => {
    return {
        type: DECREMENT,
    }
};

const resetCount = () => {
    return {
        type: RESET,
    }
};

const countReducer = (state = initialCount, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }

        default:
            state;
    }
}


const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount(5));
store.dispatch(incrementCount(5));
store.dispatch(incrementCount(5));
store.dispatch(decrementCount());
store.dispatch(resetCount());