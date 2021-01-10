import {connect} from 'react-redux';

import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../category/collection.component";

const mapStateToProps = (reducer) => {
    return {
        isLoading: !selectIsCollectionsLoaded(reducer)
    };
};

const ContainerContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default ContainerContainer;