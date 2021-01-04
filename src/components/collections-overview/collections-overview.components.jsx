import React from 'react';
import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";

import {connect} from "react-redux";
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => {
    //console.log(collections);
    return(
        <div className="collections-overview">
            {
                collections.map(c => {
                    return (
                        <CollectionPreview key={c.id} title={c.title} items={c.items} />
                    )
                })
            }
        </div>
    );
};

const mapStateToProps = (reducer) => {
    return {
        collections: selectCollectionsForPreview(reducer) //reducer.shop.collections
    };
  }

export default connect(mapStateToProps)(CollectionsOverview);