const { createStore, applyMiddleware } = require('redux');
const { produce } = require('immer');
const reduxLogger = require('redux-logger');
const { createLogger } = reduxLogger;

const initialState = {
    name: 'Tharusha',
    address: {
        street: 'Galle Road',
        country: 'Sri Lanka',
        state: 'Western',
    }
}

const STREET_UPDATE = 'STREET_UPDATE';

const updateStreet = (street) => {
    return {
        type: STREET_UPDATE,
        payload: street
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATE:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // };
            return produce(state, draftState => {
                draftState.address.street = action.payload;
            });
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(createLogger()));

const unsubscribe = store.subscribe(() => {
});
store.dispatch(updateStreet('New Galle Road'));
store.dispatch(updateStreet('Old Galle Road'));
unsubscribe();
store.dispatch(updateStreet('Galle Road'));
// Output: