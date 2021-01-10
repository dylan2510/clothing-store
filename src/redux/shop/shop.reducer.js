//import SHOP_DATA from "../../pages/shop.data";

const INITIAL_STATE = { 
    collections: null,
    isFetching: false, // tells whether app is fetching collections data
    errorMessage: undefined // for error message in event of unsucessful data fetch
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) 
    {
        // Event - begin to fetch data
        case "FETCH_COLLECTIONS_START":
            return {
                ...state,
                isFetching: true
            }
        
        // Event - data sucessfully fetched
        case "FETCH_COLLECTIONS_SUCCESS":
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        // Event - data unsucessfully fetched
        case "FETCH_COLLECTIONS_FAILURE":
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        
        /*
        case "UPDATE_COLLECTIONS":
            return {
                ...state,
                collections: action.payload
            };
        */

        default:
            return state;
    }
};

export default shopReducer;