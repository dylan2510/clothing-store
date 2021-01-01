import {createSelector} from "reselect";

const selectDirectory = (reducer) => {
    return reducer.directory;
}

export const selectDirectorySections = createSelector (
    [selectDirectory],
    (directory) => directory.sections
);