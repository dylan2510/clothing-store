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

export const googleSignInStart = () => {
    return {
        type: 'GOOGLE_SIGN_IN_START'
    }
}

export const googleSignInSuccess = (user) => {
    return {
        type: 'GOOGLE_SIGN_IN_SUCCESS',
        payload: user
    }
}

export const googleSignInFailure = (error) => {
    return {
        type: 'GOOGLE_SIGN_IN_FAILURE',
        payload: error
    }
}

export const emailSignInStart = (emailAndPassword) => {
    return {
        type: 'EMAIL_SIGN_IN_START',
        payload: emailAndPassword
    }
}

export const emailSignInSuccess = (user) => {
    return {
        type: 'EMAIL_SIGN_IN_SUCCESS',
        payload: user
    }
}

export const emailSignInFailure = (error) => {
    return {
        type: 'EMAIL_SIGN_IN_FAILURE',
        payload: error
    }
}

export const checkUserSession = () => {
    return { 
        type: "CHECK_USER_SESSION"
    }
}

export const signOutStart = () => {
    return { 
        type: "SIGN_OUT_START"
    }
}

export const signOutSuccess = () => {
    return { 
        type: "SIGN_OUT_SUCCESS"
    }
}

export const signOutFailure = (error) => {
    return { 
        type: "SIGN_OUT_FAILURE",
        payload: error
    }
}

export const signUpStart = (userCredentials) => {
    return {
        type: "SIGN_UP_START",
        payload: userCredentials
    }
}

export const signUpSuccess = ({user, additionalData}) => {
    return {
        type: "SIGN_UP_SUCCESS",
        payload: {user, additionalData}
    }
}

export const signUpFailure = (error) => {
    return {
        type: "SIGN_UP_FAILURE",
        payload: error
    }
}