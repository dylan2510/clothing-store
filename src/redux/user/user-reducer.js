const INITIAL_STATE = {
    currentUser: null
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

        // if action is not any of the above, return the current state as it is
        default: 
            return state;
    }
};

export default userReducer;