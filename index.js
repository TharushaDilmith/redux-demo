const CAKE_ORDERD = 'CAKE_ORDERD';

function cakeOrderd() {
    return {
        type: CAKE_ORDERD,
        quantity: 1
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
        default:
            return state;
    }
};