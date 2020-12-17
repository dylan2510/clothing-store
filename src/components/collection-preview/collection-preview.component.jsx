import React from 'react';
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component"


const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    // only want to display 4 items as preview
                    items
                    .filter((item, index) => index < 4 )
                    // resulting item is destructured into all of its properties
                    .map(({id, ...otherItemProps}) => {
                        return(
                            // pass all props of items to component as per their name
                            <CollectionItem key={id} {...otherItemProps} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPreview;