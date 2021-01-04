import React from 'react';
import {connect} from 'react-redux';
//import {selectShopCollections} from '../redux/shop/shop.selectors';
import CollectionsOverview from "../components/collections-overview/collections-overview.components";
import CollectionPage from "./category/collection.component";

import { Route} from 'react-router-dom';

import {firestore, convertCollectionsSnapshotToMap} from "../firebase/firebase.util";
import {updateCollections} from "../redux/shop/shop.actions";

import WithSpinner from "../components/with-spinner/with-spinner.component";

// match is a property of router
// match.path is the current path
// :categoryId is a parameter
// let say if we call /shops/hats, collectionId = hats

/*
const ShopPage = ({match}) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}  />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}  />
        </div>
    );
}
*/

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    

    state = {
        loading: true
    };    

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        // retrieve snapshot of the collection
        // Using observable base pattern
        /*
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshop => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
        */

        // using promise base pattern
        // get() use api to fetch data associated with collectionRef
        // then() is the callback, after get() is called
        collectionRef.get().then(snapshop => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });

        // using the API way
        // clothing-store-db-f2049 = projectId in firebase
        // not recommended cos the data we want is very nested
        /*
        fetch("https://firestore.googleapis.com/v1/projects/clothing-store-db-f2049/databases/(default)/documents/collections")
        .then(response => response.json())
        .then(collections => console.log(collections));
        */
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} 
                render={props => (
                    <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                  )} 
                />
                <Route exact path={`${match.path}/:collectionId`}
                    render={props => (
                        <CollectionPageWithSpinner isLoading={loading} {...props} />
                    )}
                />
            </div>
        );

         /*
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview}  />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}  />
            </div>
        );
        */
        
    }
}

/*
const mapStateToProps = (reducer) => {
    return {
        collections: selectShopCollections(reducer) //reducer.shop.collections
    };
  }
*/
  const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: (collections) => dispatch(updateCollections(collections))
    };
  }

export default connect(null,mapDispatchToProps)(ShopPage);