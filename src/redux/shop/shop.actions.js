import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.util";

export const updateCollections = (collectionsMap) => {
    return {
        type: "UPDATE_COLLECTIONS",
        payload: collectionsMap
    }
};

/* The below actions is used for REDUX THUNK */

export const fetchCollectionsStart = () => {
    return {
        type: "FETCH_COLLECTIONS_START"
    }
};

export const fetchCollectionsSuccess = (collectionsMap) => {
    return {
        type: "FETCH_COLLECTIONS_SUCCESS",
        payload: collectionsMap
    }
};

export const fetchCollectionsFailure = (errorMessage) => {
    return {
        type: "FETCH_COLLECTIONS_FAILURE",
        payload: errorMessage
    }
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        // call the function fetchCollectionsStart
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshop => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
            // call the function fetchCollectionsSuccess
            dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => {
            // call the function fetchCollectionsFailure
            dispatch(fetchCollectionsFailure(error.message));
        });
    }
};