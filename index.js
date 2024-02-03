const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERD = 'CAKE_ORDERD';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERD = 'ICECREAM_ORDERD';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function cakeOrderd(quantity = 1) {
    return {
        type: CAKE_ORDERD,
        payload: quantity
    };
}

function cakeRestocked(quantity = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: quantity
    };
}

function iceCreamOrderd(quantity = 1) {
    return {
        type: ICECREAM_ORDERD,
        payload: quantity
    };
}

function iceCreamRestocked(quantity = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: quantity
    };
}

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERD:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            };
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            };
        case ICECREAM_ORDERD:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.payload
            };
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(cakeOrderd(1));
store.dispatch(cakeOrderd(2));
store.dispatch(cakeOrderd(3));
store.dispatch(cakeRestocked(5));
store.dispatch(cakeOrderd(1));
store.dispatch(iceCreamOrderd(1));
store.dispatch(iceCreamOrderd(2));
store.dispatch(iceCreamOrderd(3));
store.dispatch(iceCreamRestocked(5));
store.dispatch(iceCreamOrderd(1));

unsubscribe();