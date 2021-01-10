import {connect} from 'react-redux';

import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "../collections-overview/collections-overview.components";

const mapStateToProps = (reducer) => {
    return {
        isLoading: selectIsCollectionFetching(reducer)
    };
};

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;