import React from 'react';
import {connect} from 'react-redux';
import {selectShopCollections} from '../redux/shop/shop.selectors';
import CollectionsOverview from "../components/collections-overview/collections-overview.components";
import CollectionPage from "./category/collection.component";

import { Route } from 'react-router-dom';

// match is a property of router
// match.path is the current path
// :categoryId is a parameter
// let say if we call /shops/hats, collectionId = hats
const ShopPage = ({match}) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}  />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}  />
        </div>
    );
}

const mapStateToProps = (reducer) => {
    return {
        collections: selectShopCollections(reducer) //reducer.shop.collections
    };
  }

export default connect(mapStateToProps)(ShopPage);