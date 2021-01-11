import React, {useEffect} from 'react';
import "./collection.styles.scss";
import {connect} from 'react-redux';
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";


const CollectionPage = ({collection, history}) => {

    return (
        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map(item => {
                        return (
                            <CollectionItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = (reducer, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(reducer)
    };
  }

export default connect(mapStateToProps)(CollectionPage);