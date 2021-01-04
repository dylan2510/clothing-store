export const updateCollections = (collectionsMap) => {
    return {
        type: "UPDATE_COLLECTIONS",
        payload: collectionsMap
    }
};