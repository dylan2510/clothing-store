import { takeLatest, put, all, call } from "redux-saga/effects";
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.util";
import {googleSignInSuccess,
    googleSignInFailure,
    emailSignInSuccess,
    emailSignInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure} from "./user.actions";


export function* signOut() {
    try {
        yield auth.signOut();
        yield put(
            signOutSuccess()
        )
    }
    catch(error) {
        yield put(signOutFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(
            googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    }
    catch(error) {
        yield put(googleSignInFailure(error));
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(
            emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    }
    catch(error) {
        yield put(emailSignInFailure(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        // also apply to email
        yield put(
            googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    }
    catch (error) {
        // also applies to email sign in
        yield put(googleSignInFailure(error));
    }
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData:{displayName}}));
    }
    catch(error){
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(
            emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    }
    catch(error){
        // also applies to email sign in
        yield put(emailSignInFailure(error));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest("EMAIL_SIGN_IN_START",signInWithEmail);
}

export function* onGoogleSignInStart() {
    yield takeLatest("GOOGLE_SIGN_IN_START",signInWithGoogle);
}

export function* onCheckUserSession() {
    yield takeLatest("CHECK_USER_SESSION", isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest("SIGN_OUT_START",signOut) 
}

export function* onSignUpStart() {
    yield takeLatest("SIGN_UP_START", signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest("SIGN_UP_SUCCESS", signInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}