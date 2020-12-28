import {createSelector} from "reselect";

const selectUser = (reducer) => {
    return reducer.user;
}

export const selecCurrentUser = createSelector (
    [selectUser],
    (user) => user.currentUser
)

