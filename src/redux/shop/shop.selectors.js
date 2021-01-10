import {createSelector} from "reselect";

const selectShop = (reducer) => {
    return reducer.shop;
};

export const selectShopCollections = createSelector (
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector (
    [selectShopCollections],
    // convert objcts to array
    // returm empty if collections is null
    (collections) => collections ? 
        Object.keys(collections).map(key => collections[key]) : []
);


export const selectCollection = (collectionUrlParam) => {
    return createSelector (
        [selectShopCollections],
        (collections) => (collections ? collections[collectionUrlParam] : null)
    );
};

export const selectIsCollectionFetching = createSelector (
    [selectShop],
    (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector (
    [selectShop],
    (shop) => !!shop.collections // return true if loaded else false
);
