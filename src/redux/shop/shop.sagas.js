import {takeEvery,call,put, all} from "redux-saga/effects";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.util";
import {fetchCollectionsSuccess,fetchCollectionsFailure} from "../shop/shop.actions";

export function* fetchCollectionsAsync() {

    yield console.log('I am fired');

    try
    {
        const collectionRef = firestore.collection('collections');
        const snapshop = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshop);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch (error)
    {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    // Action = FETCH_COLLECTIONS_START
    yield takeEvery(
        "FETCH_COLLECTIONS_START",
        fetchCollectionsAsync
        );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}