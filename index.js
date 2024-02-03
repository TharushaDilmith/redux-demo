const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERD = 'CAKE_ORDERD';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

function cakeOrderd() {
    return {
        type: CAKE_ORDERD,
        quantity: 1
    };
}

function cakeRestocked(quantity = 1) {
    return {
        type: CAKE_RESTOCKED,
        quantity: quantity
    };
}

const initialState = {
    numOfCakes: 10
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERD:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.quantity
            };
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.quantity
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(cakeOrderd());
store.dispatch(cakeOrderd());
store.dispatch(cakeOrderd());
store.dispatch(cakeRestocked(5));
store.dispatch(cakeOrderd());

unsubscribe();