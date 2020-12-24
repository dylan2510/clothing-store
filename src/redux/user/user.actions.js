// Actions Objects are objects describling what happened
// For reducers

// for action.type = SET_CURRENT_USER
// takes in a user object
export const setCurrentUser = (user) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }
}