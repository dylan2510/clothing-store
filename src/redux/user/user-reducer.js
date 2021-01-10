const INITIAL_STATE = {
    currentUser: null,
    error: null
}

// Rdeducer is a state that get state object and action
// if state is undefined, assign it a default value of INITIAL_STATE
const userReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) 
    {
        case "SET_CURRENT_USER":
            return {
                // leave all other state as it if, just set currentUser
                ...state,
                currentUser: action.payload
            } 

            case "GOOGLE_SIGN_IN_SUCCESS":
            case "EMAIL_SIGN_IN_SUCCESS":
                return {
                    // leave all other state as it if, just set currentUser
                    ...state,
                    currentUser: action.payload,
                    error: null
            }

            case "SIGN_OUT_SUCCESS":
                return {
                    ...state,
                    currentUser: null,
                    error: null
            }

            case "GOOGLE_SIGN_IN_FAILURE":
            case "EMAIL_SIGN_IN_FAILURE":
            case "SIGN_OUT_FAILURE":
            case "SIGN_UP_FAILURE":
                return {
                    ...state,
                    error: action.payload
            }

        // if action is not any of the above, return the current state as it is
        default: 
            return state;
    }
};

export default userReducer;